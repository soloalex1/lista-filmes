import { useEffect, useState } from 'react';

import { VideoEntry } from '@/types';

type VideoCardProps = {
  video: VideoEntry;
};

const VideoCard = ({ video }: VideoCardProps) => {
  const [url, setURL] = useState('');

  useEffect(() => {
    if (video.site === 'YouTube') {
      setURL(`https://www.youtube.com/embed/${video.key}`);
    }

    if (video.site === 'Vimeo') {
      setURL(`https://vimeo.com/${video.key}`);
    }
  }, [video]);

  return (
    <div className="aspect-video overflow-hidden rounded-lg">
      <iframe
        src={url}
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
