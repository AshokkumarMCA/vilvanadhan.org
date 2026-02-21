import { SectionTitle, Card } from '../ui';
import { SERVICES } from '../../constants/content';

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <SectionTitle>Temple Services & Puja Offerings</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <Card key={service.id} delay={index * 0.2}>
              <div className="text-center">
                <div
                  className="w-32 h-32 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center"
                  role="img"
                  aria-label="Service icon"
                >
                  <span className="text-5xl text-orange-500">ॐ</span>
                </div>
                <h3 className="text-xl font-medium mb-2 text-orange-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
