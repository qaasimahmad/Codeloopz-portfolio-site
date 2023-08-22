import React from "react";
import { Link } from "react-router-dom";
import { LiaFacebookF } from "react-icons/lia";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <div className="w-full container mx-auto px-5 md:px-0 lg:px-8 my-24">
        <h3 className="font-grotesk font-semibold text-2xl md:text-3xl lg:text-4xl py-2 my-8 max-w-2xl">
          GIVE YOUR CREATIVITY A NEW SHAPE & FORM WITH LYNDON THEME
        </h3>
        <div className="footer_links grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4">
          <div className="flex flex-col gap-3">
            <p>Contact us on socials</p>
            <div className="flex gap-5 text-lg">
              <LiaFacebookF className="hover:scale-110 transition-all duration-300" />
              <BsTwitter className="hover:scale-110 transition-all duration-300" />
              <FaInstagram className="hover:scale-110 transition-all duration-300" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Link>Services</Link>
            <Link>About</Link>
            <Link>Gallery</Link>
          </div>
          <div className="flex flex-col gap-3">
            <p>Neal St, London WC2H 9PR United Kingdom</p>
            <p>00 (035) 244 583 265</p>
          </div>
          <div className="flex flex-col gap-3">
            <p>Let's work together!</p>
            <Link>lyndon@qodeinteractive.com</Link>
          </div>
        </div>
      </div>
      <hr className="border-b-0 border-t-[1px] border-black" />
      <div className="w-full container m-auto px-5 md:px-0 lg:px-8 py-3">
        <p className="text-[13px] font-[400]">
          © 2023 <Link to="/">Codeloopz</Link>, All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
