import React from "react";
import { GrTechnology } from "react-icons/gr";

const WhatWeDo = () => {
  const whatWeDo = [
    {
      what: "Creative Design Solutions",
      link: "",
      bgImg:
        "https://images.unsplash.com/photo-1475965894430-b05c9d13568a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJsYWNrJTIwYW5kJTIwd2hpdGUlMjB0ZWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      what: "Innovate. Scale. Succeed.",
      link: "",
      bgImg:
        "https://images.unsplash.com/photo-1604934573408-5ad8bdd6dfaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGJsYWNrJTIwYW5kJTIwd2hpdGUlMjBhcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      what: "Pioneering Technological Boundaries",
      link: "",
      bgImg:
        "https://images.unsplash.com/photo-1559507628-40a52a5e7081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwYW5kJTIwd2hpdGUlMjBhcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      what: "Guiding Businesses Through Technology",
      link: "",
      bgImg:
        "https://images.unsplash.com/photo-1550895030-823330fc2551?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGJsYWNrJTIwYW5kJTIwd2hpdGUlMjBhcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-y-[.9px] border-black">
      {whatWeDo.map((w, i) => (
        <WhatWeDoCard key={i} what={w.what} bgImg={w.bgImg} />
      ))}
    </div>
  );
};

const WhatWeDoCard = ({ what, link, bgImg }) => {
  const bgStyles = {
    backgroundImage: `url(${bgImg})`,
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div
      style={bgStyles}
      className="what_we_do sm:border-x-[0.9px] border-b-[.9px] border-black p-10 pt-56 relative flex items-end after:bg-white after:w-full after:h-full after:absolute after:top-0 after:left-0 cursor-default"
    >
      <div className="relative z-10">
        <small className="text-sm md:text-[15px] font-[500]">Advisory, Tech Solutions</small>
        <h3 className="text-xl md:text-2xl font-grotesk font-[500] mb-4 mt-2 capitalize">
          {what}
        </h3>
        <GrTechnology color="#5c8374" className="text-4xl" />
      </div>
    </div>
  );
};

export default WhatWeDo;
