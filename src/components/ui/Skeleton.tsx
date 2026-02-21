export const SkeletonBase = ({ className = '' }: { className?: string }) => (
  <div
    className={`animate-pulse bg-gray-300 rounded ${className}`}
    role="status"
    aria-label="Loading..."
  />
);

export const SkeletonText = ({
  lines = 3,
  className = '',
}: {
  lines?: number;
  className?: string;
}) => (
  <div className={`space-y-3 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <SkeletonBase
        key={i}
        className={`h-4 ${i === lines - 1 ? 'w-3/4' : 'w-full'}`}
      />
    ))}
  </div>
);

export const SkeletonImage = ({ className = '' }: { className?: string }) => (
  <SkeletonBase className={`w-full h-64 ${className}`} />
);

export const SkeletonButton = ({ className = '' }: { className?: string }) => (
  <SkeletonBase className={`h-12 w-32 ${className}`} />
);

export const SkeletonCard = ({ className = '' }: { className?: string }) => (
  <div className={`rounded-lg overflow-hidden bg-white shadow-lg ${className}`}>
    <SkeletonImage className="h-48 rounded-none" />
    <div className="p-6 space-y-4">
      <SkeletonBase className="h-6 w-3/4" />
      <SkeletonText lines={3} />
      <SkeletonButton />
    </div>
  </div>
);

export const SkeletonDeityCard = ({ className = '' }: { className?: string }) => (
  <div className={`text-center ${className}`}>
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <SkeletonImage className="h-64 rounded-none" />
      <div className="p-6 space-y-3">
        <SkeletonBase className="h-6 w-2/3 mx-auto" />
        <SkeletonBase className="h-4 w-full" />
      </div>
    </div>
  </div>
);

export const SkeletonEventCard = ({ className = '' }: { className?: string }) => (
  <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
    <div className="flex items-start space-x-4">
      <SkeletonBase className="w-16 h-16 rounded-lg flex-shrink-0" />
      <div className="flex-1 space-y-3">
        <SkeletonBase className="h-6 w-3/4" />
        <SkeletonBase className="h-4 w-1/2" />
        <SkeletonText lines={2} />
      </div>
    </div>
  </div>
);

export const SkeletonBlogCard = ({ className = '' }: { className?: string }) => (
  <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
    <SkeletonImage className="h-48 rounded-none" />
    <div className="p-6 space-y-3">
      <SkeletonBase className="h-6 w-full" />
      <SkeletonBase className="h-4 w-1/3" />
      <SkeletonText lines={2} />
      <SkeletonButton className="w-full" />
    </div>
  </div>
);

export const SkeletonTestimonial = ({ className = '' }: { className?: string }) => (
  <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
    <div className="flex items-center space-x-4 mb-4">
      <SkeletonBase className="w-16 h-16 rounded-full flex-shrink-0" />
      <SkeletonBase className="h-6 w-1/3" />
    </div>
    <SkeletonText lines={3} />
  </div>
);
