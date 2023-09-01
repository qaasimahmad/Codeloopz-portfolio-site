import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GiInfinity } from "react-icons/gi";
import { NavbarMenu } from "../components";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const menu = [
    { name: "home", link: "/" },
    { name: "Our Mission", link: "/get-in-touch" },
    { name: "Contact us", link: "/contact" },
  ];

  const [isNavMenuOpened, setIsNavMenuOpened] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between py-12 px-5 md:px-9 lg:px-12">
        <div className="flex items-center gap-28">
          <span className="logo group flex items-center font-grotesk text-lg text-white hover:text-gray-200 transition-all duration-300 cursor-pointer">
            Codel
            <GiInfinity className="text-3xl animate-spin antialiased group-hover:animate-none" />
            pz
          </span>
          <ul className="hidden lg:flex items-center gap-9 font-[400]">
            {menu.map((m, i) => (
              <li
                key={m.name + i}
                onClick={() => navigate(m.link)}
                className={`uppercase text-[12px] relative cursor-pointer tracking-[1px] text-gray-100 font-nunito font-[500] ${
                  m.link === location.pathname && "active text-white"
                }`}
              >
                {m.name}
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setIsNavMenuOpened(!isNavMenuOpened)}
          className={`w-10 h-3.5 block lg:hidden cursor-pointer z-[150] ${
            isNavMenuOpened
              ? "opened fixed top-14 right-5 md:top-14 md:right-9"
              : "relative"
          }`}
        >
          <span className="bar bar1"></span>
          <span className="bar bar-space"></span>
          <span className="bar bar2"></span>
        </div>

        <button
          onClick={() => navigate("/get-in-touch")}
          className="bg-white hidden lg:block text-base font-grotesk font-[500] py-2 px-4 rounded hover:bg-gray-200 transition-all duration-300"
        >
          Get in touch
        </button>
      </nav>
      <AnimatePresence>
        {isNavMenuOpened && (
          <NavbarMenu setIsNavMenuOpened={setIsNavMenuOpened} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
