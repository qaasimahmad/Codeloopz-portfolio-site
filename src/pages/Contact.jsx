import React from "react";
import { Footer, MiniNavbar } from "../containers";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { bgStyles } from "../assets/constants";

const Contact = () => {

  return (
    <>
      <MiniNavbar />
      <section className="lg:flex border-b-[1px] border-black">
        <div className="lg:basis-[55%] lg:border-r-[1px] border-black py-16 lg:py-24 px-5 md:px-10 lg:pl-20 xl:pl-40 lg:pr-5">
          <h2 className="font-grotesk font-semibold text-3xl md:text-5xl xl:text-6xl py-2 mb-8 max-w-3xl uppercase">
            COME AND WORK WITH US HERE
          </h2>
          <div className="flex flex-col md:flex-row mb-8 gap-8 md:gap-0">
            <div className="flex-1">
              <h3 className="text-lg lg:text-xl font-[500] font-grotesk mb-3 capitalize">
                Direct contact
              </h3>
              <div className="flex flex-col gap-2 max-w-[230px]">
                <p className="">8 Homecroft Rd, SE26 5QG, United Kingdom</p>
                <p className="">669 45 49 574</p>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg lg:text-xl font-[500] font-grotesk mb-3 capitalize">
                Working hours
              </h3>
              <div className="flex flex-col gap-2 max-w-[230px]">
                <p className="">Open:</p>
                <p className="">Mon-Fri 9-5 / Sat 12-4</p>
                <p className="">Closed: Sun and Public Holidays</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-0">
            <div className="flex-1">
              <h3 className="text-lg lg:text-xl font-[500] font-grotesk mb-3 capitalize">
                Doriany Jackson
              </h3>
              <div className="flex flex-col gap-2 max-w-[230px]">
                <p className="">Team Lead</p>
                <p className="">lyndon1@qodeinteractive.com</p>
                <div className="flex gap-4 text-base text-black mt-2">
                  <BsFacebook className="hover:scale-110 transition-all duration-300" />
                  <FaInstagram className="hover:scale-110 transition-all duration-300" />
                  <FaEarthAfrica className="hover:scale-110 transition-all duration-300" />
                  <BsTwitter className="hover:scale-110 transition-all duration-300" />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg lg:text-xl font-[500] font-grotesk mb-3 capitalize">
                Sherifdeen Ishola
              </h3>
              <div className="flex flex-col gap-2 max-w-[230px]">
                <p className="">Team Member</p>
                <p className="">lyndon1@qodeinteractive.com</p>
                <div className="flex gap-4 text-base text-black mt-2">
                  <BsFacebook className="hover:scale-110 transition-all duration-300" />
                  <FaInstagram className="hover:scale-110 transition-all duration-300" />
                  <FaEarthAfrica className="hover:scale-110 transition-all duration-300" />
                  <BsTwitter className="hover:scale-110 transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={bgStyles} className="basis-[45%] hidden lg:block"></div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
