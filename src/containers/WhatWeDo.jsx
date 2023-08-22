import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const WhatWeDo = () => {
  const whatWeDo = [
    { what: "Creative Design & Digital Solutions", link: "" },
    { what: "Simple Illustrations Draw Ideas", link: "" },
    { what: "Photography Ideas & Samples", link: "" },
    { what: "Logo & Font Designs", link: "" },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-y-[.9px] border-black">
      {whatWeDo.map((w, i) => (
        <WhatWeDoCard key={i} what={w.what} />
      ))}
    </div>
  );
};

const WhatWeDoCard = ({ what, link }) => {
  const bgStyles = {
    backgroundImage: `url( https://lyndon.qodeinteractive.com/wp-content/uploads/2021/11/Main-home-portfolio-list-2-img-01.jpg)`,
    width: "100%", 
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div
      style={bgStyles}
      className="what_we_do border-x-[0.9px] border-b-[.9px] border-black p-10 pt-56 relative flex items-end after:bg-white after:w-full after:h-full after:absolute after:top-0 after:left-0 cursor-default"
    >
      <div className="relative z-10">
        <small className="text-sm md:text-base">Illustration, Visual</small>
        <h3 className="text-xl md:text-2xl font-grotesk font-[500] mb-4 mt-2 capitalize">
          {what}
        </h3>
        <GoArrowUpRight fontWeight={10} className="text-5xl" />
      </div>
    </div>
  );
};

export default WhatWeDo;
