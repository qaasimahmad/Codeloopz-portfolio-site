import React from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TeamMemberCard = ({ img, name, role, link }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.08 }}
      transition={{ type: "tween", duration: 1 }}
      className="mb-8 lg:mb-0"
      onClick={() => navigate(link)}
    >
      <div className="h-auto">
        <img className="w-full h-full" src={img} alt="" />
      </div>
      <div className="mt-5">
        <p className="mb-1 text-base">{role}</p>
        <h6 className="mb-4 text-xl font-[500] font-grotesk">{name}</h6>
        <div className="flex gap-4 text-base text-black">
          <BsFacebook className="hover:scale-110 transition-all duration-300" />
          <FaInstagram className="hover:scale-110 transition-all duration-300" />
          <FaEarthAfrica className="hover:scale-110 transition-all duration-300" />
          <BsTwitter className="hover:scale-110 transition-all duration-300" />
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
