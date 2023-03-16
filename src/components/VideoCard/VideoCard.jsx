import React, { useEffect, useState } from "react";

const VideoCard = ({ video = {} }) => {
  const [base, setBase] = useState("");

  useEffect(() => {
    if (video.site === "YouTube") {
      setBase("https://www.youtube.com/embed/");
    } else if (video.site === "Vimeo") {
      setBase("https://vimeo.com/");
    }
  }, [video]);

  return (
    <div className="w-full h-auto bg-opacity-40 bg-black rounded-lg p-2 flex items-center">
      <iframe
        className="w-full h-auto my-auto"
        title={video.name}
        src={`${base}${video.key}`}
        frameborder="0"
        allowfullscreen
      />
    </div>
  );
};

export default VideoCard;
