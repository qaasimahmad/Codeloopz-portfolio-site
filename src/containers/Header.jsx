import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { LiaFacebookF } from "react-icons/lia";
import { HiOutlineForward } from "react-icons/hi2";

const Header = () => {
  return (
    <div className="w-full container mx-auto px-5 md:px-0 lg:px-8 py-36">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-grotesk font-[500] uppercase leading-[1.3] max-w-3xl">
        "We reshape the digital landscape through innovative design and
        projects."
        <HiOutlineForward className="" />
      </h1>
      <div className="flex flex-col gap-6 mt-8 w-fit">
        <p className="tracking-[1px] text-base font-[500]">
          Let's work together!
        </p>
        <div className="flex gap-5 text-lg text-white">
          <LiaFacebookF className="hover:scale-110 transition-all duration-300" />
          <BsTwitter className="hover:scale-110 transition-all duration-300" />
          <FaInstagram className="hover:scale-110 transition-all duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Header;
