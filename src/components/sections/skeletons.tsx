import {
  SkeletonCard,
  SkeletonDeityCard,
  SkeletonEventCard,
  SkeletonBlogCard,
  SkeletonTestimonial,
  SkeletonImage,
  SkeletonText,
  SkeletonBase,
} from '../ui/Skeleton';

export const GallerySkeleton = () => (
  <section className="py-24 bg-gradient-to-b from-amber-50 to-orange-50">
    <div className="container mx-auto px-4">
      <SkeletonBase className="h-12 w-96 mx-auto mb-12" />
      <div className="max-w-6xl mx-auto">
        <SkeletonImage className="h-[600px] rounded-2xl" />
        <div className="flex justify-center gap-2 mt-6">
          {[1, 2, 3, 4].map((i) => (
            <SkeletonBase key={i} className="w-3 h-3 rounded-full" />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const DeitiesSkeleton = () => (
  <section className="py-24 bg-amber-100">
    <div className="container mx-auto px-4">
      <SkeletonBase className="h-12 w-64 mx-auto mb-12" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <SkeletonDeityCard key={i} />
        ))}
      </div>
    </div>
  </section>
);

export const EventsSkeleton = () => (
  <section className="py-24 bg-orange-200">
    <div className="container mx-auto px-4">
      <SkeletonBase className="h-12 w-80 mx-auto mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[1, 2].map((i) => (
          <SkeletonEventCard key={i} />
        ))}
      </div>
    </div>
  </section>
);

export const BlogSkeleton = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <SkeletonBase className="h-12 w-80 mx-auto mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2].map((i) => (
          <SkeletonBlogCard key={i} />
        ))}
      </div>
    </div>
  </section>
);

export const TestimonialsSkeleton = () => (
  <section className="py-24 bg-gradient-to-b from-orange-100 to-amber-100">
    <div className="container mx-auto px-4">
      <SkeletonBase className="h-12 w-80 mx-auto mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[1, 2].map((i) => (
          <SkeletonTestimonial key={i} />
        ))}
      </div>
    </div>
  </section>
);

export const ServicesSkeleton = () => (
  <section className="py-24 bg-orange-100">
    <div className="container mx-auto px-4">
      <SkeletonBase className="h-12 w-64 mx-auto mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  </section>
);

export const ContactSkeleton = () => (
  <section className="py-24 bg-orange-400">
    <div className="container mx-auto px-4">
      <SkeletonBase className="h-12 w-64 mx-auto mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <SkeletonBase className="h-8 w-48" />
          <SkeletonText lines={5} />
          <SkeletonImage className="h-80" />
        </div>
        <div className="space-y-6 bg-gray-300 rounded-lg p-6">
          <SkeletonBase className="h-8 w-48" />
          <SkeletonBase className="h-12 w-full" />
          <SkeletonBase className="h-12 w-full" />
          <SkeletonBase className="h-32 w-full" />
          <SkeletonBase className="h-12 w-full" />
        </div>
      </div>
    </div>
  </section>
);

export const FAQSkeleton = () => (
  <section className="py-24 bg-gradient-to-b from-orange-50 to-amber-50">
    <div className="container mx-auto px-4">
      <SkeletonBase className="h-12 w-96 mx-auto mb-12" />
      <div className="max-w-3xl mx-auto space-y-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-6">
            <SkeletonBase className="h-6 w-3/4 mb-4" />
            <SkeletonText lines={2} />
          </div>
        ))}
      </div>
    </div>
  </section>
);
