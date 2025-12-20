import { motion } from 'framer-motion';
import { Button } from '../ui';

export const HeroSection = () => {
  const handleDonate = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-32 relative overflow-hidden"
      role="banner"
    >
      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 text-9xl text-orange-500 opacity-20">
          ॐ
        </div>
        <div className="absolute bottom-20 right-10 text-9xl text-orange-500 opacity-20">
          ॐ
        </div>
      </motion.div>

      <div className="text-center px-4 max-w-5xl mx-auto relative z-10">
        {/* Om Symbol */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: 'spring' }}
          className="mb-8"
        >
          <div className="inline-block p-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-2xl">
            <span className="text-7xl md:text-8xl text-white drop-shadow-lg">
              ॐ
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent drop-shadow-lg font-bold">
            PRAYER IS THE KEY TO HEAVEN
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-orange-800 mb-4 font-serif italic"
        >
          "आस्तिक्यं धर्मस्य मूलम्"
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-white drop-shadow-lg mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
        >
          Welcome to the sacred revival of an ancient shrine. Join us in rebuilding
          this historic temple and restoring its divine glory for generations to come.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button
            onClick={handleDonate}
            size="lg"
            className="shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <span className="flex items-center">
              <span className="mr-2">🙏</span>
              Support Temple Building
            </span>
          </Button>
          <Button
            onClick={handleServices}
            variant="outline"
            size="lg"
            className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Explore Our Services
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5, duration: 0.5 },
            y: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' },
          }}
          className="mt-16"
        >
          <div className="flex flex-col items-center text-orange-600">
            <span className="text-sm mb-2">Scroll to explore</span>
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
