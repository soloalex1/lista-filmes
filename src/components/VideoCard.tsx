import { useEffect, useState } from 'react';
import { VideoEntry } from '@/types';

type VideoCardProps = {
  video: Partial<VideoEntry>;
};

const VideoCard = ({ video = {} }: VideoCardProps) => {
  const [base, setBase] = useState('');

  useEffect(() => {
    if (video.site === 'YouTube') {
      setBase('https://www.youtube.com/embed/');
      return;
    }

    if (video.site === 'Vimeo') {
      setBase('https://vimeo.com/');
      return;
    }
  }, [video]);

  return (
    <div className="aspect-video overflow-hidden rounded-lg">
      <iframe
        src={`${base}${video.key}`}
        title={video.name}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className="h-full w-full"
      />
    </div>
  );
};

export default VideoCard;
