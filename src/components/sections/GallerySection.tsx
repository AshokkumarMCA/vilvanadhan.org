import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionTitle } from '../ui';
import { loadGalleryImages } from '../../utils/imageLoader';

export const GallerySection = () => {
  const [images, setImages] = useState(loadGalleryImages());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Reload images on mount (in case new images were added)
  useEffect(() => {
    const loadedImages = loadGalleryImages();
    setImages(loadedImages);
    // Start from middle of tripled array for seamless infinite scroll
    if (loadedImages.length > 0) {
      setCurrentIndex(loadedImages.length);
    }
  }, []);

  // Create tripled array for seamless infinite scrolling
  // [img1, img2, img3] becomes [img1, img2, img3, img1, img2, img3, img1, img2, img3]
  const infiniteImages = images.length > 0 ? [...images, ...images, ...images] : [];

  // Auto-scroll functionality - continuous forward
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Handle seamless loop reset
  useEffect(() => {
    if (images.length === 0) return;

    // When we reach the end of the second set, jump back to start of second set
    if (currentIndex >= images.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(images.length); // Jump to middle set without animation
        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 700); // Wait for slide animation to complete
    }

    // When we go before the first set, jump to end of second set
    if (currentIndex < images.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(images.length + currentIndex);
        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 700);
    }
  }, [currentIndex, images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(images.length + index); // Jump to middle set + offset
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  // Get actual display index for dots/thumbnails (0 to images.length-1)
  const displayIndex = currentIndex % images.length;

  if (images.length === 0) {
    return null; // Don't show section if no images
  }

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-amber-50 to-orange-50"
    >
      <div className="container mx-auto px-4">
        <SectionTitle className="text-orange-900">
          Temple Photo Gallery
        </SectionTitle>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-700 mb-12 max-w-2xl mx-auto"
        >
          Witness the revival of our ancient temple through photos documenting
          the reconstruction journey, historic moments, and sacred ceremonies.
        </motion.p>

        {/* Gallery Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Main Image Container */}
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-orange-100 to-amber-100">
            {/* Images with slide animation - using tripled array for seamless infinite scroll */}
            <div
              className={`flex h-full ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {infiniteImages.map((image, index) => (
                <div
                  key={index}
                  className="min-w-full h-full flex items-center justify-center bg-gray-900"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Image Caption Overlay */}
            <motion.div
              key={displayIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"
            >
              <h3 className="text-white text-xl md:text-2xl font-serif font-bold">
                {images[displayIndex].title}
              </h3>
              <p className="text-orange-200 text-sm mt-1">
                Image {displayIndex + 1} of {images.length}
              </p>
            </motion.div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-orange-600 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  aria-label="Previous image"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-orange-600 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  aria-label="Next image"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Dots Navigation */}
          {images.length > 1 && (
            <div className="flex justify-center items-center gap-2 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    index === displayIndex
                      ? 'w-12 h-3 bg-orange-600'
                      : 'w-3 h-3 bg-orange-300 hover:bg-orange-400'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                  aria-current={index === displayIndex ? 'true' : 'false'}
                />
              ))}
            </div>
          )}

          {/* Thumbnail Grid (Optional - for larger screens) */}
          {images.length > 1 && (
            <div className="hidden md:grid grid-cols-5 gap-4 mt-8">
              {images.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    index === displayIndex
                      ? 'ring-4 ring-orange-500 shadow-lg'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {index === displayIndex && (
                    <div className="absolute inset-0 bg-orange-500/20" />
                  )}
                </motion.button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-md">
            <span className="text-orange-600 mr-2">📸</span>
            <p className="text-gray-700 text-sm">
              Documenting every step of our sacred reconstruction
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
