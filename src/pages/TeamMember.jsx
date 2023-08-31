import React from "react";
import { Footer, MiniNavbar } from "../containers";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import boogie from "../assets/Sherifdeen.JPG"

const TeamMember = () => {
  return (
    <>
      <MiniNavbar />
      <section className="flex flex-col md:flex-row border-b-[1px] border-black">
        <div className="basis-[46%] px-5 sm:px-20 md:pl-0 md:pr-0 lg:pl-20 lg:pr-0 xl:pl-40 xl:pr-0">
          <img
            className="h-full border-b-[1px] md:border-b-0  border-x-[1px] border-black"
            src={boogie}
            alt=""
          />
        </div>
        <div className="basis-[54%] px-5 sm:px-20 py-20 md:p-10 lg:p-12 xl:p-14">
          <h2 className="font-grotesk font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-10 md:leading-[1.3] xl:leading-[1.3] py-2 mb-8 max-w-3xl uppercase">
            HI I'M Sherifdeen, Developer IN Lagos. I like to craft solid and
            scalable frontend products with great user experiences. CONTACT ME!
          </h2>
          <div className="flex flex-col gap-2 mt-24">
            <p>Let's work together!</p>
            <Link>lyndon@qodeinteractive.com</Link>
            <div className="flex gap-4 text-base text-black mt-2">
              <BsFacebook className="hover:scale-110 transition-all duration-300" />
              <FaInstagram className="hover:scale-110 transition-all duration-300" />
              <FaEarthAfrica className="hover:scale-110 transition-all duration-300" />
              <BsTwitter className="hover:scale-110 transition-all duration-300" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TeamMember;
