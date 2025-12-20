import { Card, SectionTitle } from '../ui';
import { TESTIMONIALS } from '../../constants/content';

export const TestimonialsSection = () => {
  return (
    <section className="py-12 bg-orange-50 text-blue-600">
      <div className="container mx-auto px-4">
        <SectionTitle>Testimonials</SectionTitle>
        <div className="max-w-3xl mx-auto space-y-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card key={testimonial.id} delay={index * 0.2}>
              <div className="flex items-center space-x-4">
                <div
                  className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center shrink-0"
                  role="img"
                  aria-label={`${testimonial.name}'s avatar`}
                >
                  <span className="text-2xl text-orange-700 font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <blockquote className="italic text-gray-600">
                    "{testimonial.text}"
                  </blockquote>
                  <p className="mt-2 font-medium text-orange-800">
                    - {testimonial.name}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
