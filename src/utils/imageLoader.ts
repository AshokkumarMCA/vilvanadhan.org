/**
 * Dynamic Image Loader for Gallery
 * Automatically loads all images from the gallery folder
 */

export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

/**
 * Get all gallery images from the public/images/gallery folder
 * This uses Vite's import.meta.glob feature to dynamically import images
 */
export const getGalleryImages = (): GalleryImage[] => {
  // Import all images from the gallery folder
  const imageModules = import.meta.glob('/public/images/gallery/*.{jpg,jpeg,png,webp}', {
    eager: true,
    query: '?url',
    import: 'default',
  });

  const images: GalleryImage[] = [];

  Object.entries(imageModules).forEach(([path, module]) => {
    // Extract filename from path
    const filename = path.split('/').pop()?.replace(/\.[^/.]+$/, '') || '';

    // Convert filename to readable title
    // Example: "temple-construction-2024.jpg" -> "Temple Construction 2024"
    const title = filename
      .split(/[-_]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    // Get the image URL
    const imageSrc = typeof module === 'string' ? module : '/images/gallery/placeholder.jpg';

    images.push({
      src: imageSrc,
      alt: title,
      title: title,
    });
  });

  return images;
};

/**
 * Alternative method: Manually specify image list
 * Use this if automatic loading doesn't work
 */
export const getStaticGalleryImages = (): GalleryImage[] => {
  const imageNames = [
    'construction-foundation.jpg',
    'temple-gopuram.jpg',
    'sanctum-building.jpg',
    'bhoomi-puja-ceremony.jpg',
    'old-temple-historic.jpg',
    'progress-photo.jpg',
  ];

  return imageNames.map((filename) => {
    const name = filename.replace(/\.[^/.]+$/, '');
    const title = name
      .split(/[-_]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return {
      src: `/images/gallery/${filename}`,
      alt: title,
      title: title,
    };
  });
};

/**
 * Get images with fallback
 * Tries automatic loading first, falls back to static list
 */
export const loadGalleryImages = (): GalleryImage[] => {
  try {
    const images = getGalleryImages();
    return images.length > 0 ? images : getPlaceholderImages();
  } catch (error) {
    console.warn('Could not load gallery images automatically, using placeholders');
    return getPlaceholderImages();
  }
};

/**
 * Get placeholder images for demo purposes
 * These will be replaced when real images are added
 */
export const getPlaceholderImages = (): GalleryImage[] => {
  return [
    {
      src: '/images/background.png',
      alt: 'Temple Construction Progress',
      title: 'Temple Construction Progress',
    },
    {
      src: '/images/Shiva.png',
      alt: 'Lord Shiva - Main Deity',
      title: 'Lord Shiva - Main Deity',
    },
    {
      src: '/images/Parvati.png',
      alt: 'Goddess Parvati',
      title: 'Goddess Parvati',
    },
    {
      src: '/images/Ganesha.png',
      alt: 'Lord Ganesha',
      title: 'Lord Ganesha',
    },
    {
      src: '/images/Kartikeya.png',
      alt: 'Lord Kartikeya',
      title: 'Lord Kartikeya',
    },
  ];
};
