import { Skeleton } from '@/components/ui/skeleton';

const CastSkeleton = () => (
  <>
    <Skeleton className="h-6 sm:h-7 md:h-8 w-[15ch]" />
    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array(9)
        .fill(0)
        .map(() => (
          <div className="flex items-center gap-4">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="flex gap-4 flex-col">
              <Skeleton className="h-3 sm:h-4 md:h-5 w-[18ch]" />
              <Skeleton className="h-2 sm:h-3 md:h-4 w-[12ch]" />
            </div>
          </div>
        ))}
    </div>
  </>
);

export default CastSkeleton;
