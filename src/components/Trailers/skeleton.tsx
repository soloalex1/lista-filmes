import VideoCardSkeleton from '@/components/VideoCard/skeleton';

import { Skeleton } from '@/components/ui/skeleton';

const TrailersSkeleton = () => {
  return (
    <div>
      <Skeleton id="trailer-label" className="h-6 sm:h-7 md:h-8 w-[15ch]" />
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <VideoCardSkeleton key={index} />
          ))}
      </div>
    </div>
  );
};
export default TrailersSkeleton;
