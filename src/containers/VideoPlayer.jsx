import React from "react";
import { FaPlay } from "react-icons/fa";

const VideoPlayer = () => {
  const bgStyles = {
    backgroundImage: `url(https://lyndon.qodeinteractive.com/wp-content/uploads/2021/12/h1-paralax-img-2.jpg)`,
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    backgroundAttachment: "fixed",
  };
  return (
    <div style={bgStyles}>
      <div className="w-full container mx-auto px-5 md:px-0 lg:px-8 py-60 flex items-center justify-center">
        <div className="text-white text-sm md:text-base font-[600] flex items-center gap-4 px-4 py-3 cursor-pointer hover:bg-white hover:text-black transition-all duration-500">
          Play video
          <FaPlay />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
