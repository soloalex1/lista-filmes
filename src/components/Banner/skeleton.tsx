import { Skeleton } from '../ui/skeleton';

const BannerSkeleton = () => (
  <div className="col-full relative h-[75dvh] w-full overflow-hidden">
    <div className="absolute flex flex-col gap-4 inset-x-0 bottom-0 px-4 md:px-6 py-8 md:py-12">
      <Skeleton className="h-14 w-[60ch]" />
      <Skeleton className="h-2 sm:h-3 md:h-4 w-[20ch]" />
      <Skeleton className="h-2 sm:h-3 md:h-4 w-[35ch]" />
    </div>
  </div>
);

export default BannerSkeleton;
