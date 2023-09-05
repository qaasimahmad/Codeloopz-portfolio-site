import React, { useState } from "react";
import { GiInfinity } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { Hamburger, NavbarMenu } from "../components";
import { AnimatePresence } from "framer-motion";

const MiniNavbar = () => {
  const navigate = useNavigate();
  const [isNavMenuOpened, setIsNavMenuOpened] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between py-12 px-5 md:px-9 lg:px-12 border-b-[1px] border-black">
        <span
          onClick={() => navigate("/")}
          className="logo group flex items-center relative z-[150] font-grotesk text-lg text-black hover:text-gray-700 transition-all duration-300 cursor-pointer"
        >
          Codel
          <GiInfinity className="text-3xl animate-spin antialiased group-hover:animate-none" />
          pz
        </span>
        <Hamburger
          color="bg-black"
          isNavMenuOpened={isNavMenuOpened}
          setIsNavMenuOpened={setIsNavMenuOpened}
        />
      </nav>
      <AnimatePresence>{isNavMenuOpened && <NavbarMenu />}</AnimatePresence>
    </>
  );
};

export default MiniNavbar;
