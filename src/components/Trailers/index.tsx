import VideoCard from '../VideoCard';

import { VideoEntry } from '@/types';

type TrailersType = {
  videos: VideoEntry[];
};

const Trailers = ({ videos }: TrailersType) => (
  <section aria-labelledby="trailer-label">
    <h2
      id="trailer-label"
      className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl"
    >
      Trailers
    </h2>
    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  </section>
);

export default Trailers;
