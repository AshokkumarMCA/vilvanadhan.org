import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../ui';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'How do I find the temple on Google Maps?',
    answer: 'You can search for "Vilvanadha Ishwarar Temple Kilvillivalam" or "கீழ்வில்லிவலம் சிவன் கோவில்" on Google Maps. The village name may also appear as Kizhvillivalam in some maps - both refer to the same location near Vandavasi.',
  },
  {
    question: 'What are the temple timings?',
    answer: 'The temple is open on weekdays from 6:00 AM to 12:00 PM and 4:00 PM to 9:00 PM. On weekends, we are open from 5:00 AM to 9:00 PM continuously.',
  },
  {
    question: 'How can I reach Kilvillivalam temple?',
    answer: 'The temple is located in Kilvillivalam Village, Vandavasi, Thiruvannamalai District. It is accessible via Kilvillivalam to Thunayambattu Road. You can use Google Maps for precise directions.',
  },
  {
    question: 'What is Pradosha Pooja?',
    answer: 'Pradosha Pooja is a special worship ceremony performed on Trayodashi (13th lunar day). It is considered highly auspicious for Lord Shiva worship. The temple conducts special rituals during this time.',
  },
  {
    question: 'Can I contribute to the temple reconstruction?',
    answer: 'Yes! We welcome donations for the temple reconstruction project. You can contact us through the contact form or call us at +91 75581 10667 to contribute to this sacred mission.',
  },
  {
    question: 'Are there any special ceremonies conducted at the temple?',
    answer: 'Yes, we conduct Daily Puja Services, Special Abhishekam for Lord Shiva, Pradosha Pooja, Pournami (Full Moon) worship, and other traditional ceremonies. Check our Events section for upcoming ceremonies.',
  },
  {
    question: 'Is photography allowed inside the temple?',
    answer: 'Photography is allowed in designated areas of the temple. Please be respectful during worship ceremonies and follow the instructions of temple authorities.',
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <SectionTitle className="text-orange-900">
          Frequently Asked Questions
        </SectionTitle>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-700 mb-12 max-w-2xl mx-auto"
        >
          Find answers to common questions about our temple, services, and visiting hours.
        </motion.p>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-orange-50 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-medium text-orange-900 pr-4">
                  {faq.question}
                </h3>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 text-orange-600 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-700">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
};
