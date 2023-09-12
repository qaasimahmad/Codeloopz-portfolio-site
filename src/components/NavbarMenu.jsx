import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const NavbarMenu = () => {
  const screenWidth = window.innerWidth;
  const smallScreen = screenWidth < 640;
  const location = useLocation();

  const menu = [
    { name: "Home", link: "/" },
    { name: "Our Mission", link: "/get-in-touch" },
    { name: "Get in touch", link: "/get-in-touch" },
    { name: "Contact us", link: "/contact" },
  ];

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
      className={`fixed ${
        location.pathname === "/" && "lg:hidden"
      } right-0 top-0 sm:right-3 sm:top-6 bg-white w-full sm:w-[350px] h-screen sm:h-auto p-14 sm:p-10 md:p-12 pt-40 sm:pt-16 z-[100] shadow-sm shadow-black`}
    >
      <div className="flex flex-col gap-4 mb-20 sm:mb-8">
        {menu.map((m, i) => (
          <Link
            key={i}
            to={m.link}
            className="text-lg sm:text-base font-[400] relative cursor-pointer tracking-[1px] w-fit hover:transform hover:-translate-x-2 transition-all duration-300 capitalize"
          >
            {m.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="text-[#5c8374] text-base leading-10 tracking-[0.25em] font-[400] font-grotesk">
          SAY HELLO
        </h4>
        <Link
          className="text-lg sm:text-base font-[400] relative cursor-pointer tracking-[1px] w-fit hover:transform hover:-translate-x-2 transition-all duration-300"
          to="mailto:isholasherifdeen@gmail.com"
        >
          lyndon@qodeinteractive.com
        </Link>
        <Link
          className="text-lg sm:text-base font-[400] relative cursor-pointer tracking-[1px] w-fit hover:transform hover:-translate-x-2 transition-all duration-300"
          to="mailto:isholasherifdeen@gmail.com"
        >
          t.me/codeloopz
        </Link>
        <div className="text-lg sm:text-[15px] text-[#183d3d] dark:text-[#9A9A9A] font-outfit flex gap-10 mt-20 sm:mt-8">
          <a
            className="hover:transform hover:-translate-y-0.5 transition-all duration-300"
            href="https://twitter.com/boogiedml"
            target="_blank"
          >
            TW
          </a>
          <a
            className="hover:transform hover:-translate-y-0.5 transition-all duration-300"
            href="https://github.com/boogiedml"
            target="_blank"
          >
            GH
          </a>
          <a
            className="hover:transform hover:-translate-y-0.5 transition-all duration-300"
            href=""
            target="_blank"
          >
            LN
          </a>
          <a
            className="hover:transform hover:-translate-y-0.5 transition-all duration-300"
            href="https://www.instagram.com/boogiedml/"
            target="_blank"
          >
            IG
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default NavbarMenu;
