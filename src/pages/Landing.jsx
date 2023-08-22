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
      <WhatWeDo />
      <Testimonial />
      <Team />
      <Blog />
      <Footer />
    </>
  );
};

export default Landing;
