import React from "react";
import { motion, useAnimation } from "framer-motion";
import garlandMain from "../assets/garland-main.png";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const projectsDetail = [
    {
      name: "The Garland Realty",
      bgImage:
        "https://lyndon.qodeinteractive.com/wp-content/uploads/2021/11/Main-home-portfolio-list-img-04.jpg",
    },
    {
      name: "POS.com",
      bgImage:
        "https://lyndon.qodeinteractive.com/wp-content/uploads/2021/11/Main-home-portfolio-list-img-03.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-y-[.9px] border-black">
      {projectsDetail.map((project, i) => (
        <ProductCard
          key={i}
          projectName={project.name}
          bgImage={project.bgImage}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ projectName, link, bgImage }) => {
  const bgStyles = {
    backgroundImage: `url(${bgImage})`,
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "inline-block",
    verticalAlign: "top",
    maxWidth: "100%",
  };

  const navigate = useNavigate();

  const screenWidth = window.innerWidth;
  const smallScreen = screenWidth < 640;
  const titleControls = useAnimation();

  const handleHoverStart = () => {
    titleControls.start({
      y: 0,
      opacity: 1,
    });
  };

  const handleHoverEnd = () => {
    titleControls.start({
      y: 40,
      opacity: 0,
    });
  };

  return (
    <div
      style={bgStyles}
      className="sm:border-x-[0.9px] border-b-[.9px] border-black cursor-pointer p-10 pt-64"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      onClick={() => navigate("/project")}
    >
      <motion.div
        initial={
          smallScreen
            ? {
                y: 0,
                opacity: 1,
              }
            : { y: 40, opacity: 0 }
        }
        animate={
          smallScreen
            ? {
                y: 0,
                opacity: 1,
              }
            : titleControls
        }
        transition={{ type: "tween", duration: 0.3 }}
        className="w-fit"
      >
        <small className="text-sm md:text-[15px] font-[500]">
          Tech Solution
        </small>
        <h3
          onClick={() => navigate("/project")}
          className="text-xl md:text-2xl font-grotesk font-[500] mb-4 mt-2 capitalize"
        >
          {projectName}
        </h3>
      </motion.div>
    </div>
  );
};

export default Projects;
