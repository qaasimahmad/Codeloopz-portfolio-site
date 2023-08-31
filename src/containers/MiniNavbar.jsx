import React from "react";
import { GiInfinity } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const MiniNavbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between py-12 px-5 md:px-9 lg:px-12 border-b-[1px] border-black">
      <span
        onClick={() => navigate("/")}
        className="logo group flex items-center font-grotesk text-lg text-black hover:text-gray-700 transition-all duration-300 cursor-pointer"
      >
        Codel
        <GiInfinity className="text-3xl animate-spin antialiased group-hover:animate-none" />
        pz
      </span>
      <div
        // onClick={() => setIsNavMenuOpened(!isNavMenuOpened)}
        className="miniNav w-10 h-3.5 cursor-pointer z-[150] relative"
      >
        <span className="bar bar1"></span>
        <span className="bar bar-space"></span>
        <span className="bar bar2"></span>
      </div>
    </nav>
  );
};

export default MiniNavbar;
