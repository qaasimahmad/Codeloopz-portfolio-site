import React from "react";

const About = () => {
  return (
    <div className="w-full container mx-auto px-5 md:px-0 lg:px-8 py-28 flex flex-col lg:flex-row">
      <div className="flex-1 pr-0 md:pr-12 mb-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[500] font-grotesk mb-5">
          About
        </h3>
        <p className="text-sm md:text-base font-[500] leading-7 md:leading-8 lg:leading-9">
          Welcome to CodeLoopz – where innovation meets scalability in the world
          of technology. We're not just a tech company; we're your partners in
          harnessing the power of cutting-edge solutions for your business. Our
          mission is simple yet ambitious: to provide highly innovative and
          scalable solutions that propel our customers into the future.
        </p>
      </div>
      <div className="flex-1 flex flex-col md:flex-row gap-8 md:gap-20">
        <div>
          <h4 className="text-lg md:text-xl lg:text-2xl font-[500] font-grotesk mb-5 capitalize">
            Brand identity
          </h4>
          <ul className="flex flex-col gap-3 text-sm md:text-base font-[500] capitalize">
            <li>– cloud migration</li>
            <li>– software and cloud architecture</li>
            <li>– software development</li>
            <li>– Creative design</li>
            <li>– comprehensive IT advisory</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg md:text-xl lg:text-2xl font-[500] font-grotesk mb-5 capitalize">
            Our Mission
          </h4>
          <ul className="flex flex-col gap-3 text-sm md:text-base font-[500]">
            <li>– Innovate. Scale. Succeed.</li>
            <li>– Crafting Excellence</li>
            <li>– Designing the Future, Today</li>
            <li>– Guiding Through Technology</li>
            <li>– Pioneering Tech Boundaries</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
