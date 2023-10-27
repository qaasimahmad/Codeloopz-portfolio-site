import React from "react";
import { Footer, MiniNavbar } from "../containers";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";

const TeamMember = ({
  img,
  heading,
  link,
  facebook,
  instagram,
  portfolioLink,
  twitter,
}) => {
  return (
    <>
      <MiniNavbar />
      <section className="flex flex-col md:flex-row border-b-[1px] border-black">
        <div className="basis-[46%] px-5 sm:px-20 md:pl-0 md:pr-0 lg:pl-20 lg:pr-0 xl:pl-40 xl:pr-0">
          <img
            className="h-full border-b-[1px] md:border-b-0  border-x-[1px] border-black"
            src={img}
            alt=""
          />
        </div>
        <div className="basis-[54%] px-5 sm:px-20 py-20 md:p-10 lg:p-12 xl:p-14">
          <h2 className="font-grotesk font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-10 md:leading-[1.3] xl:leading-[1.3] py-2 mb-8 max-w-3xl uppercase">
            {heading}
          </h2>
          <div className="flex flex-col gap-2 mt-24">
            <p>Let's work together!</p>
            <a href={`mailto:${link}`}>{link}</a>
            <div className="flex gap-4 text-base text-black mt-2">
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
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TeamMember;
