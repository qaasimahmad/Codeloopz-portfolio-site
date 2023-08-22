import React from "react";

const About = () => {
  return (
    <div className="w-full container mx-auto px-5 md:px-0 lg:px-8 py-28 flex flex-col lg:flex-row">
      <div className="flex-1 pr-0 md:pr-12 mb-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[500] font-grotesk mb-5">
          About
        </h3>
        <p className="text-sm md:text-base font-[500] leading-7 md:leading-8 lg:leading-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium
          aenean pharetra magna ac. Sociis natoque penatibus et magnis dis
          parturient montes nascetur ridiculus. Morbi leo urna molestie at
          elementum eu facilisis. Feugiat sed lectus vestibulum mattis
          ullamcorper velit sed ullamcorper morbi quis.
        </p>
      </div>
      <div className="flex-1 flex flex-col md:flex-row gap-8 md:gap-20">
        <div>
          <h4 className="text-lg md:text-xl lg:text-2xl font-[500] font-grotesk mb-5">
            Brand identity
          </h4>
          <ul className="flex flex-col gap-3 text-sm md:text-base font-[500]">
            <li>– Logo development</li>
            <li>– Brand strategy</li>
            <li>– Corporate identities</li>
            <li>– Modern illustrations</li>
            <li>– Typography</li>
            <li>– Brand guidelines</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg md:text-xl lg:text-2xl font-[500] font-grotesk mb-5">
            Digital design
          </h4>
          <ul className="flex flex-col gap-3 text-sm md:text-base font-[500]">
            <li>– UX</li>
            <li>– Strategy</li>
            <li>– UI design</li>
            <li>– Web development</li>
            <li>– Interactive prototypes</li>
            <li>– eComerce solutions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
