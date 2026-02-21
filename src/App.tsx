import { Suspense, lazy } from 'react';
import './App.css';
import { ErrorBoundary } from './components/ErrorBoundary';
import { DonationModal } from './components/DonationModal';
import { Header, Footer } from './components/layout';

// Import components that don't need lazy loading
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  JoinUsSection,
  ContactSection,
} from './components/sections';

// Lazy load heavy components with skeleton loading
const DeitiesSection = lazy(() => import('./components/sections/DeitiesSection').then(m => ({ default: m.DeitiesSection })));
const EventsSection = lazy(() => import('./components/sections/EventsSection').then(m => ({ default: m.EventsSection })));
const GallerySection = lazy(() => import('./components/sections/GallerySection').then(m => ({ default: m.GallerySection })));
const TestimonialsSection = lazy(() => import('./components/sections/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const BlogSection = lazy(() => import('./components/sections/BlogSection').then(m => ({ default: m.BlogSection })));
const FAQSection = lazy(() => import('./components/sections/FAQSection').then(m => ({ default: m.FAQSection })));

// Import skeleton components
import {
  GallerySkeleton,
  DeitiesSkeleton,
  EventsSkeleton,
  BlogSkeleton,
  TestimonialsSkeleton,
  FAQSkeleton,
} from './components/sections/skeletons';

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

          {/* Traditional Temple Order: Deities First */}
          <Suspense fallback={<DeitiesSkeleton />}>
            <DeitiesSection />
          </Suspense>

          <ServicesSection />

          <Suspense fallback={<EventsSkeleton />}>
            <EventsSection />
          </Suspense>

          <AboutSection />

          <Suspense fallback={<GallerySkeleton />}>
            <GallerySection />
          </Suspense>

          <JoinUsSection />

          <Suspense fallback={<TestimonialsSkeleton />}>
            <TestimonialsSection />
          </Suspense>

          <Suspense fallback={<BlogSkeleton />}>
            <BlogSection />
          </Suspense>

          <Suspense fallback={<FAQSkeleton />}>
            <FAQSection />
          </Suspense>

          <ContactSection />
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
