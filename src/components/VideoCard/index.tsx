import { useEffect, useState } from 'react';

import { VideoEntry } from '@/types';

enum VideoSources {
  Youtube = 'Youtube',
  Vimeo = 'Vimeo',
}

type VideoCardProps = {
  video: VideoEntry;
};

const VideoCard = ({ video }: VideoCardProps) => {
  const [base, setBase] = useState('');

  const getVideoURL =
    video.site === VideoSources.Youtube
      ? `https://www.youtube.com/embed/${video.key}`
      : `https://vimeo.com/${video.key}`;

  return (
    <div className="aspect-video overflow-hidden rounded-lg">
      <iframe
        src={getVideoURL}
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
