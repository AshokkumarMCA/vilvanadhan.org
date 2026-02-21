import { motion } from 'framer-motion';
import { SectionTitle } from '../ui';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <SectionTitle className="text-orange-900">
          About Our Temple
        </SectionTitle>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-orange-900 mb-4 flex items-center">
              <span className="mr-3 text-3xl">🕉️</span>
              A Sacred Heritage
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Sri Vilvanadha Ishwarar Temple (வில்வநாதீஸ்வரர் கோவில்) stands as a testament
                to centuries of devotion in Kilvillivalam village, near Vandavasi in
                Thiruvannamalai District, Tamil Nadu. This ancient Shiva temple has been
                a spiritual beacon for generations of devotees.
              </p>
              <p>
                Currently undergoing careful reconstruction, we are working to restore
                this historic temple to its former glory while preserving its sacred
                traditions. The temple is dedicated to Lord Vilvanadha Ishwarar, a
                manifestation of Lord Shiva.
              </p>
            </div>
          </motion.div>

          {/* What We Offer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-orange-900 mb-4 flex items-center">
              <span className="mr-3 text-3xl">🙏</span>
              Worship & Services
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-orange-800">Daily Worship</h4>
                <p className="text-gray-700">
                  Traditional puja ceremonies conducted by experienced priests following
                  ancient Agamic traditions.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-orange-800">Special Occasions</h4>
                <p className="text-gray-700">
                  Pradosha Pooja (Trayodashi), Pournami (Full Moon) worship, and
                  festival celebrations throughout the year.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-orange-800">Community Events</h4>
                <p className="text-gray-700">
                  Regular spiritual discourses, bhajans, and community gatherings
                  that bring devotees together.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-orange-800">Sacred Ceremonies</h4>
                <p className="text-gray-700">
                  Special abhishekam, archana, and other traditional rituals
                  performed for devotees' spiritual well-being.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Temple Significance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-lg shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-orange-900 mb-4 flex items-center">
              <span className="mr-3 text-3xl">✨</span>
              Spiritual Significance
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The temple is dedicated to Lord Vilvanadha Ishwarar, representing Lord Shiva
                in his eternal cosmic dance. The presiding deity is accompanied by Goddess
                Parvati, Lord Ganesha, and Lord Murugan (Kartikeya), forming the divine
                family that blesses all devotees.
              </p>
              <p>
                Located in Kilvillivalam village (also known as Kizhvillivalam) near Vandavasi
                in Thiruvannamalai District, this temple has served as a spiritual center for
                the surrounding communities for generations, hosting important festivals like
                Pradosha Pooja and Pournami celebrations.
              </p>
              <p className="text-orange-800 font-medium italic">
                "We welcome all devotees to join us in prayer and experience the divine
                blessings of Lord Shiva."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
