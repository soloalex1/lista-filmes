import { Skeleton } from '../ui/skeleton';

const AboutSkeleton = () => {
  return (
    <section>
      <Skeleton className="h-6 sm:h-7 md:h-8 w-[12ch]" />
      <div className="mt-6 space-y-4">
        <Skeleton className="w-full h-5" />
        <Skeleton className="w-full h-5" />
        <Skeleton className="w-full h-5" />
        <Skeleton className="w-full h-5" />
      </div>
    </section>
  );
};

export default AboutSkeleton;
