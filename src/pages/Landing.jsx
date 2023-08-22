import React from "react";
import {
  About,
  Blog,
  Footer,
  Header,
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
      <WhatWeDo />
      <Testimonial />
      <Team />
      <Blog />
      <Footer />
    </>
  );
};

export default Landing;
