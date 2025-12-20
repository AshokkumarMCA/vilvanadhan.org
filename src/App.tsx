import './App.css';
import { ErrorBoundary } from './components/ErrorBoundary';
import { DonationModal } from './components/DonationModal';
import { Header, Footer } from './components/layout';
import {
  HeroSection,
  ServicesSection,
  DeitiesSection,
  EventsSection,
  GallerySection,
  JoinUsSection,
  TestimonialsSection,
  BlogSection,
  ContactSection,
} from './components/sections';

function App() {
  return (
    <ErrorBoundary>
      <div
        className="bg-amber-200 text-orange-900 dark:bg-white dark:text-white min-h-screen"
        style={{ backgroundImage: "url('/images/background.png')" }}
      >
        {/* Donation Modal - Shows on first visit */}
        <DonationModal />

        <Header />

        <main
          className="pt-32"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.10), rgba(255, 255, 255, 0.10)), url('/images/background.png')`,
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
          }}
        >
          <HeroSection />
          <ServicesSection />
          <DeitiesSection />
          <EventsSection />
          <GallerySection />
          <JoinUsSection />
          <TestimonialsSection />
          <BlogSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
