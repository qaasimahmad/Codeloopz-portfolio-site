import React from "react";
import { Footer, MiniNavbar, WhatWeDo } from "../containers";
import garland from "../assets/garland-main.png";
import pos from "../assets/pos-main.png";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";

const Project = ({ images, header, texts }) => {
  return (
    <>
      <MiniNavbar />
      <section className="w-full container mx-auto px-5 md:px-0 lg:px-8 py-20">
        <div className="project_images flex flex-col gap-10 mb-10 md:mb-16 xl:mb-20">
          {images.map((image) => (
            <img src={image} />
          ))}
        </div>
        <div className="">
          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[1px] font-grotesk font-[600] mb-4 uppercase">
            {header}
          </h3>
          <div className="flex flex-col lg:flex-row">
            <div className="basis-4/5 lg:pr-10 xl:pr-20 mb-14 lg:mb-0">
              {texts.map((text) => (
                <p className="text-sm md:text-base font-[500] leading-7 md:leading-8 lg:leading-9 mb-3">
                  {text}
                </p>
              ))}
            </div>
            <div className="basis-1/5">
              <p className="text-sm md:text-base font-[500] leading-7 md:leading-8 lg:leading-9">
                Tech Solutions
              </p>
              <p className="text-sm md:text-base font-[500] leading-7 md:leading-8 lg:leading-9">
                Nov. 17, 2021
              </p>
              <p className="text-sm md:text-base font-[500] leading-7 md:leading-8 lg:leading-9">
                Let’s work together!
              </p>
              <div className="flex gap-4 text-base text-black mt-4">
                <BsFacebook className="hover:scale-110 transition-all duration-300" />
                <FaInstagram className="hover:scale-110 transition-all duration-300" />
                <FaEarthAfrica className="hover:scale-110 transition-all duration-300" />
                <BsTwitter className="hover:scale-110 transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhatWeDo />
      <Footer />
    </>
  );
};

export default Project;
