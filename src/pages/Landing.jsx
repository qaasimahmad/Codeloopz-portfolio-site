import React from "react";
import {
  About,
  Blog,
  Footer,
  Header,
  Mission,
  Navbar,
  Projects,
  Team,
  Testimonial,
  VideoPlayer,
  WhatWeDo,
} from "../containers";

const Landing = () => {
  return (
    <>
      <div className="header_gradient">
        <Navbar />
        <Header />
      </div>
      <Projects />
      <About />
      <VideoPlayer />
      <Mission />
      <WhatWeDo />
      <Testimonial />
      <Team />
      <Blog />
      <Footer />
    </>
  );
};

export default Landing;
