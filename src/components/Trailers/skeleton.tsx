import VideoCardSkeleton from '@/components/VideoCard/skeleton';

import { Skeleton } from '@/components/ui/skeleton';

const TrailersSkeleton = () => {
  return (
    <div>
      <Skeleton
        id="trailer-label"
        className="text-2xl sm:text-3xl md:text-4xl"
      />
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <VideoCardSkeleton key={index} />
          ))}
      </div>
    </div>
  );
};
export default TrailersSkeleton;
