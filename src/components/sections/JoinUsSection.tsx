import { motion } from 'framer-motion';
import { SectionTitle } from '../ui';

export const JoinUsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto text-center px-4">
        <SectionTitle className="text-orange-400">
          Join Us in Prayer
        </SectionTitle>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center items-center flex-col md:flex-row gap-4"
        >
          <div className="text-5xl font-bold text-orange-600">1000+</div>
          <p className="text-xl text-orange-400">
            Devotees have found peace and spiritual connection
          </p>
        </motion.div>
      </div>
    </section>
  );
};
