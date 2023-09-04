import React from "react";

const Hamburger = ({ color, isNavMenuOpened, setIsNavMenuOpened }) => {
  return (
    <div
      onClick={() => setIsNavMenuOpened(!isNavMenuOpened)}
      className={`w-10 h-3.5 block lg:hidden cursor-pointer z-[150] ${
        isNavMenuOpened
          ? "opened fixed top-[3.19rem] right-5 sm:right-10 md:top-14"
          : "relative"
      }`}
    >
      <span
        className={`bar bar1 ${
          isNavMenuOpened
            ? "bg-[#5c8374]"
            : color && !isNavMenuOpened
            ? color
            : "bg-[#FFF]"
        }`}
      ></span>
      <span className="bar bar-space"></span>
      <span
        className={`bar bar2 ${
          isNavMenuOpened
            ? "bg-[#5c8374]"
            : color && !isNavMenuOpened
            ? color
            : "bg-[#FFF]"
        }`}
      ></span>
    </div>
  );
};

export default Hamburger;
