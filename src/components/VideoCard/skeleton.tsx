import { Skeleton } from '@/components/ui/skeleton';

const VideoCardSkeleton = () => {
  return (
    <Skeleton className="w-full h-full aspect-video overflow-hidden rounded-lg" />
  );
};

export default VideoCardSkeleton;
