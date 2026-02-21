import { motion } from 'framer-motion';
import { SectionTitle } from '../ui';
import { DEITIES } from '../../constants/content';

export const DeitiesSection = () => {
  return (
    <section id="deities" className="py-24 bg-amber-100 text-orange-300">
      <div className="container mx-auto px-4">
        <SectionTitle className="text-orange-600">Main Deities at Vilvanadha Ishwarar Temple</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {DEITIES.map((deity, index) => (
            <motion.div
              key={deity.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="aspect-square bg-amber-100 rounded-lg mb-3 flex justify-center items-center overflow-hidden">
                  <img
                    src={deity.image}
                    alt={`${deity.name} - ${deity.description || 'Deity'}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-medium text-orange-900">
                  {deity.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
