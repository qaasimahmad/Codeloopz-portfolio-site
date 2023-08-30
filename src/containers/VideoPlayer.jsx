import React from "react";
import { FaPlay } from "react-icons/fa";

const VideoPlayer = () => {
  const bgStyles = {
    // backgroundImage: `url(https://lyndon.qodeinteractive.com/wp-content/uploads/2021/12/h1-paralax-img-2.jpg)`,
    backgroundImage: `url(https://images.unsplash.com/photo-1589287707312-213624549c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80)`,
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
        <div className="text-white flex items-center gap-4 cursor-pointer text-base font-grotesk font-[500] py-2 px-4 rounded hover:bg-white hover:text-black transition-all duration-500">
          Play video
          <FaPlay />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
