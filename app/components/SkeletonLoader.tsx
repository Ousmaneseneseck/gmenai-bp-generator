// app/components/SkeletonLoader.tsx
'use client';

interface SkeletonLoaderProps {
  type?: 'card' | 'list' | 'chart' | 'text';
  count?: number;
}

export default function SkeletonLoader({ type = 'card', count = 1 }: SkeletonLoaderProps) {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <div className="skeleton w-12 h-12 rounded-lg mb-4"></div>
            <div className="skeleton w-3/4 h-6 rounded mb-2"></div>
            <div className="skeleton w-full h-4 rounded mb-1"></div>
            <div className="skeleton w-2/3 h-4 rounded"></div>
          </div>
        );
      case 'list':
        return (
          <div className="border-b border-gray-200 dark:border-gray-700 py-4">
            <div className="skeleton w-3/4 h-5 rounded mb-2"></div>
            <div className="skeleton w-full h-4 rounded"></div>
          </div>
        );
      case 'chart':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
            <div className="skeleton w-40 h-6 rounded mb-4"></div>
            <div className="skeleton w-full h-64 rounded"></div>
          </div>
        );
      case 'text':
        return (
          <div className="space-y-2">
            <div className="skeleton w-full h-4 rounded"></div>
            <div className="skeleton w-5/6 h-4 rounded"></div>
            <div className="skeleton w-4/6 h-4 rounded"></div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i}>{renderSkeleton()}</div>
      ))}
    </>
  );
}
