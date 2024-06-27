import { Skeleton } from '../ui/skeleton';

const DirectionSkeleton = () => (
  <>
    <Skeleton className="h-6 sm:h-7 md:h-8 w-[15ch]" />
    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array(3)
        .fill(0)
        .map(() => (
          <div className="flex items-center gap-4">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-5 sm:h-6 md:h-7 w-[18ch]" />
          </div>
        ))}
    </div>
  </>
);

export default DirectionSkeleton;
