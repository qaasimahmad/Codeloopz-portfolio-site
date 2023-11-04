import React from "react";
import img from "../assets/header-image.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full relative flex flex-col lg:flex-row gap-8 lg:gap-0 items-center container mx-auto px-5 md:px-0 lg:px-8 py-10 md:py-20 lg:py-8">
      <div className="basis-1/2">
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.5 }}
          className="text-white text-2xl md:text-[2.5rem] lg:text-[2.8rem] font-grotesk font-[700] md:leading-[1.3] uppercase lg:leading-[1.4] tracking-[1.5px] lg:max-w-2xl"
        >
          Build scalable and interactive solutions{" "}
          <span className="text-zinc-400">with our team</span>.
        </motion.h1>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.5, delay: 0.5 }}
          className="flex flex-col gap-3 mt-8 w-fit"
        >
          <p className="tracking-[0.9px] text-gray-200 text-base font-[500]">
            Wanna work together?
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-base font-grotesk font-[500] py-2 px-4 rounded hover:bg-gray-200 transition-all duration-300"
          >
            Get started
          </button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, rotate: 90 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ type: "tween", duration: 1, delay: 0.5 }}
        className="basis-1/2"
      >
        <img src={img} alt="" />
      </motion.div>
    </div>
  );
};

export default Header;
