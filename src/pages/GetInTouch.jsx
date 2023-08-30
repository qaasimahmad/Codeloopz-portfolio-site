import React from "react";
import { ContactForm, Footer, MiniNavbar } from "../containers";
import { bgStyles } from "../assets/constants";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";

const GetInTouch = () => {
  return (
    <>
      <MiniNavbar />
      <section className="flex flex-col lg:flex-row border-b-[1px] border-black">
        <div className="lg:basis-[55%] lg:border-r-[1px] border-black py-12 lg:py-20 px-5 md:px-10 lg:pl-20 xl:pl-40 lg:pr-5">
          <h2 className="font-grotesk font-semibold text-3xl md:text-4xl xl:text-5xl py-2 max-w-3xl uppercase">
            WANNA JOIN US? FEEL FREE TO ANY TIME
          </h2>
        </div>
        <div style={bgStyles} className="lg:basis-[45%] h-56 lg:h-auto"></div>
      </section>
      <ContactForm />
      <section className="flex flex-col md:flex-row border-y-[1px] border-black">
        <div
          className="hidden lg:block basis-1/3 border-r-[.9px] border-black"
          style={bgStyles}
        ></div>
        <div className="basis-1/2 lg:basis-1/3 md:border-r-[.9px] border-black text-center py-16">
          <h3 className="text-lg lg:text-xl font-[500] font-grotesk mb-3 capitalize">
            Doriany Jackson
          </h3>
          <div className="flex flex-col gap-2">
            <p className="">Team Lead</p>
            <p>
              <a className="">lyndon1@qodeinteractive.com</a>
            </p>
            <div className="flex gap-4 text-base text-black mt-2 mx-auto">
              <BsFacebook className="hover:scale-110 transition-all duration-300" />
              <FaInstagram className="hover:scale-110 transition-all duration-300" />
              <FaEarthAfrica className="hover:scale-110 transition-all duration-300" />
              <BsTwitter className="hover:scale-110 transition-all duration-300" />
            </div>
          </div>
        </div>
        <div className="basis-1/2 lg:basis-1/3 md:border-l-[.9px] border-black text-center py-16">
          <h3 className="text-lg lg:text-xl font-[500] font-grotesk mb-3 capitalize">
            Working hours
          </h3>
          <div className="flex flex-col gap-2">
            <p className="">Open:</p>
            <p className="">Mon-Fri 9-5 / Sat 12-4</p>
            <p className="">Closed: Sun and Public Holidays</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default GetInTouch;
