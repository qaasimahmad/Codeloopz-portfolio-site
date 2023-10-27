import React from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TeamMemberCard = ({
  img,
  name,
  role,
  link,
  facebook,
  instagram,
  portfolioLink,
  twitter,
}) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.08 }}
      transition={{ type: "tween", duration: 1 }}
      className="mb-8 lg:mb-0"
    >
      <div onClick={() => navigate(link)} className="h-auto cursor-pointer">
        <img className="w-full h-full" src={img} alt="" />
      </div>
      <div className="mt-5">
        <p className="mb-1 text-base">{role}</p>
        <h6
          onClick={() => navigate(link)}
          className="mb-4 text-xl font-[500] font-grotesk cursor-pointer"
        >
          {name}
        </h6>
        <div className="flex gap-4 text-base text-black">
          {facebook && (
            <a target="_blank" href={facebook}>
              <BsFacebook className="hover:scale-110 transition-all duration-300 cursor-pointer" />
            </a>
          )}
          {instagram && (
            <a target="_blank" href={instagram}>
              <FaInstagram className="hover:scale-110 transition-all duration-300 cursor-pointer" />
            </a>
          )}
          {portfolioLink && (
            <a target="_blank" href={portfolioLink}>
              <FaEarthAfrica className="hover:scale-110 transition-all duration-300 cursor-pointer" />
            </a>
          )}
          {twitter && (
            <a target="_blank" href={twitter}>
              <BsTwitter className="hover:scale-110 transition-all duration-300 cursor-pointer" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
