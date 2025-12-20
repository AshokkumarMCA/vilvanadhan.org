import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Modal } from './ui/Modal';
import { Button } from './ui';

export const DonationModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal on every visit after a short delay for better UX
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000); // 2 second delay

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDonate = () => {
    // Scroll to contact section where donation info will be
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    handleClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} showCloseButton={true}>
      <div className="p-6 sm:p-8">
        {/* Temple Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: 'spring' }}
          className="flex justify-center mb-4"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-4xl text-white" role="img" aria-label="Temple">
              🕉️
            </span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl sm:text-3xl font-serif font-bold text-center text-orange-900 mb-2"
        >
          Sri Vilvanadha Ishwarar Temple
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="text-center text-orange-700 font-tamil mb-4"
        >
          ஸ்ரீ வில்வநாதீஸ்வரர் திருக்கோவில்
        </motion.p>

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-4"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 border border-green-400 text-green-800 text-sm font-semibold">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Reconstruction in Progress
          </span>
        </motion.div>

        {/* Concise Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-center space-y-3 text-gray-700 mb-6"
        >
          <p className="text-base leading-relaxed">
            🙏 <strong>Namaste Devotees!</strong>
          </p>

          <p className="text-base leading-relaxed">
            We are rebuilding this <strong>ancient sacred temple</strong> from the ground up after years of abandonment. Your support will help restore its divine glory for future generations.
          </p>

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 p-3 rounded-lg">
            <p className="text-sm font-medium text-orange-900">
              💝 Every contribution brings us closer to completing this sacred mission
            </p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <Button
            onClick={handleDonate}
            className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg"
          >
            <span className="flex items-center justify-center">
              <span className="mr-2">🙏</span>
              Support Temple
            </span>
          </Button>

          <Button
            onClick={handleClose}
            variant="outline"
            className="flex-1"
          >
            Explore Website
          </Button>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-gray-500 mt-4"
        >
          <span className="text-orange-600">॥ ॐ नमः शिवाय ॥</span>
        </motion.p>
      </div>
    </Modal>
  );
};
