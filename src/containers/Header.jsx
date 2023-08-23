import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { LiaFacebookF } from "react-icons/lia";
import img from "../assets/app.svg";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="w-full relative container mx-auto px-5 md:px-0 lg:px-8 pt-28 lg:pt-36 pb-44">
      <motion.h1
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1 }}
        className="text-white text-2xl md:text-[2.5rem] lg:text-5xl font-grotesk font-[700] md:leading-[1.3] uppercase lg:leading-[1.4] tracking-[1.5px] max-w-2xl"
      >
        Build stunning interactive solutions{" "}
        <span className="text-zinc-400">with our team</span>.
      </motion.h1>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1, delay: 1 }}
        className="flex flex-col gap-3 mt-8 w-fit"
      >
        <p className="tracking-[0.9px] text-gray-200 text-base font-[500]">
          Wanna work together?
        </p>
        <button className="bg-white text-base font-grotesk font-[500] py-2 px-4 rounded hover:bg-gray-200 transition-all duration-300">
          Get started
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", duration: 2, delay: 2 }}
        className="hidden lg:block absolute right-0 bottom-16"
      >
        <p className="tracking-[0.9px] text-gray-200 text-base font-[500] mb-4">
          Connect with us
        </p>
        <div className="flex gap-5 text-lg text-zinc-400">
          <LiaFacebookF className="hover:scale-110 hover:text-white transition-all duration-300" />
          <BsTwitter className="hover:scale-110 hover:text-white transition-all duration-300" />
          <FaInstagram className="hover:scale-110 hover:text-white transition-all duration-300" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", duration: 2, delay: 2 }}
        className="relative lg:absolute w-[350px] right-0 top-[100px]"
      >
        <img src={img} alt="" />
      </motion.div>
    </div>
  );
};

export default Header;
