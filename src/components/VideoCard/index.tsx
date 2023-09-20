import { useEffect, useState } from "react";
import { VideoEntry } from "types";

type VideoCardProps = {
  video: Partial<VideoEntry>;
};

const VideoCard = ({ video = {} }: VideoCardProps) => {
  const [base, setBase] = useState("");

  useEffect(() => {
    if (video.site === "YouTube") {
      setBase("https://www.youtube.com/embed/");
      return;
    }

    if (video.site === "Vimeo") {
      setBase("https://vimeo.com/");
      return;
    }
  }, [video]);

  return (
    <div className="w-full h-auto bg-opacity-40 bg-black rounded-lg p-2 flex items-center">
      <iframe
        className="w-full h-auto my-auto"
        title={video.name}
        src={`${base}${video.key}`}
        allowFullScreen
      />
    </div>
  );
};

export default VideoCard;
