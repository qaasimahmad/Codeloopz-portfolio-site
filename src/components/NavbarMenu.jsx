import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NavbarMenu = ({ menu }) => {
  const navigate = useNavigate();
  const screenWidth = window.innerWidth;
  const smallScreen = screenWidth < 640;

  return (
    <motion.div
      initial={
        smallScreen
          ? { opacity: 0 }
          : {
              scaleX: 0,
              scaleY: 0,
              transformOrigin: "top right",
              opacity: 0,
            }
      }
      animate={
        smallScreen ? { opacity: 1 } : { scaleX: 1, scaleY: 1, opacity: 1 }
      }
      exit={smallScreen ? { opacity: 0 } : { scaleX: 0, scaleY: 0, opacity: 0 }}
      transition={{ type: "tween", duration: 0.3 }}
      className="fixed lg:hidden right-0 top-0 sm:right-3 sm:top-6 bg-white w-full sm:w-[350px] h-screen sm:h-auto py-14 px-10 z-[100] shadow-sm shadow-black"
    >
      <ol className="flex flex-col font-[400]">
        {menu.map((m, i) => (
          <li
            key={m.name + i}
            onClick={() => navigate(m.link)}
            className={`uppercase text-[12px] p-4 relative cursor-pointer tracking-[1px] text-black font-nunito font-[500] ${
              m.link === location.pathname && "active"
            }`}
          >
            {m.name}
          </li>
        ))}
      </ol>
    </motion.div>
  );
};

export default NavbarMenu;
