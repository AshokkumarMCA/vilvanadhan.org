import { motion } from 'framer-motion';
import { useState } from 'react';
import { SectionTitle, Input, TextArea, Button } from '../ui';
import { useForm } from '../../hooks';
import { TEMPLE_INFO } from '../../constants/content';
import type { ContactFormData } from '../../types';

export const ContactSection = () => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(
    'idle'
  );

  const validate = (values: ContactFormData) => {
    const errors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!values.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!values.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = 'Please enter a valid email';
    }

    if (!values.message.trim()) {
      errors.message = 'Message is required';
    } else if (values.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    return errors;
  };

  const handleFormSubmit = async (values: ContactFormData) => {
    try {
      // TODO: Replace with actual API call
      // For now, we'll simulate a successful submission
      console.log('Form submitted:', values);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: handleFormSubmit,
    validate,
  });

  return (
    <section id="contact" className="py-24 bg-orange-400 text-white">
      <div className="container mx-auto px-4">
        <SectionTitle>Contact Us</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-4">Temple Information</h3>
            <address className="not-italic space-y-4">
              <p className="flex items-start">
                <span className="mr-3 text-xl" role="img" aria-label="Location">
                  📍
                </span>
                <span>
                  {TEMPLE_INFO.address}
                  <br />
                  {TEMPLE_INFO.addressEnglish}
                </span>
              </p>
              <p className="flex items-center">
                <span className="mr-3 text-xl" role="img" aria-label="Phone">
                  ☎️
                </span>
                <a
                  href={`tel:${TEMPLE_INFO.phone}`}
                  className="hover:text-orange-100 transition-colors"
                >
                  {TEMPLE_INFO.phone}
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-3 text-xl" role="img" aria-label="Email">
                  ✉️
                </span>
                <a
                  href={`mailto:${TEMPLE_INFO.email}`}
                  className="hover:text-orange-100 transition-colors break-all"
                >
                  {TEMPLE_INFO.email}
                </a>
              </p>
              <div>
                <h4 className="font-medium mb-2">Opening Hours:</h4>
                <p>Weekdays: {TEMPLE_INFO.openingHours.weekdays}</p>
                <p>Weekends: {TEMPLE_INFO.openingHours.weekends}</p>
              </div>
            </address>

            {/* Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6"
            >
              <h4 className="font-medium mb-3 text-xl">Find Us on Map</h4>
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg border-4 border-white">
                <iframe
                  src="https://www.google.com/maps?q=12.442529007652418,79.62360360315454&output=embed&z=16"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sri Vilvanadha Ishwarar Temple Location"
                  aria-label="Google Maps showing temple location"
                />
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=12.442529007652418,79.62360360315454"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-3 px-4 py-2 bg-white text-orange-600 rounded-lg hover:bg-orange-50 transition-colors font-medium shadow"
              >
                <span className="mr-2">📍</span>
                Get Directions
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-4">Send a Message</h3>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-gray-300 rounded-lg p-6"
              noValidate
            >
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={values.name}
                onChange={handleChange}
                error={errors.name}
                required
                aria-required="true"
              />

              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={values.email}
                onChange={handleChange}
                error={errors.email}
                required
                aria-required="true"
              />

              <TextArea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={values.message}
                onChange={handleChange}
                error={errors.message}
                required
                aria-required="true"
              />

              {submitStatus === 'success' && (
                <div
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded"
                  role="alert"
                >
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === 'error' && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"
                  role="alert"
                >
                  Sorry, there was an error sending your message. Please try
                  again.
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
