import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GiInfinity } from "react-icons/gi";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const menu = [
    { name: "home", link: "/" },
    { name: "About", link: "/about" },
    { name: "services", link: "/services" },
    { name: "Gallery", link: "/gallery" },
    { name: "blog", link: "/blog" },
  ];

  return (
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
              className={`uppercase text-[12px] relative cursor-pointer tracking-[1px] text-gray-100 font-nunito font-[500] ${
                m.link === location.pathname && "active text-white"
              }`}
            >
              {m.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-12 sm:w-14 h-3.5 relative block lg:hidden cursor-pointer">
        <span className="before:absolute before:top-0 before:bg-white before:w-full before:h-[2px] before:rounded-lg after:absolute after:bottom-0 after:bg-white after:w-[80%] after:right-0 after:h-[2px] after:rounded-lg"></span>
      </div>
      <button
        onClick={() => navigate("/get-in-touch")}
        className="bg-white hidden lg:block text-base font-grotesk font-[500] py-2 px-4 rounded hover:bg-gray-200 transition-all duration-300"
      >
        Get in touch
      </button>
    </nav>
  );
};

export default Navbar;
