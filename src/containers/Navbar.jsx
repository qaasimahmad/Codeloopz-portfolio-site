import React from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
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
        <span className="logo">Codeloopz</span>
        <ul className="hidden lg:flex items-center gap-9 font-[400]">
          {menu.map((m, i) => (
            <li
              key={m.name + i}
              className={`uppercase text-[12px] relative cursor-pointer tracking-[1px] ${
                m.link === location.pathname && "active"
              }`}
            >
              {m.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-14 h-4 relative cursor-pointer">
        <span className="before:absolute before:top-0 before:bg-black before:w-full before:h-[2px] before:rounded-lg after:absolute after:bottom-0 after:bg-black after:w-[80%] after:right-0 after:h-[2px] after:rounded-lg"></span>
      </div>
    </nav>
  );
};

export default Navbar;
