import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const projectsDetail = [
    {
      name: "The Garland Realty",
      bgImage:
        "https://images.unsplash.com/photo-1617713964959-d9a36bbc7b52?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVhbCUyMGVzdGF0ZSUyMGFwcCUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D",
      projectLink: "/project/thegarlandrealty",
    },
    {
      name: "Posxena",
      bgImage:
        "https://images.unsplash.com/photo-1566830791071-da20cbdb2f35?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJlYWwlMjBlc3RhdGUlMjBhcHAlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
      projectLink: "/project/posxena",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-y-[.9px] border-black">
      {projectsDetail.map((project, i) => (
        <ProjectCard
          key={i}
          projectName={project.name}
          bgImage={project.bgImage}
          link={project.projectLink}
        />
      ))}
    </div>
  );
};

const ProjectCard = ({ projectName, link, bgImage }) => {
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
      className="sm:border-x-[0.9px] border-b-[.9px] border-black cursor-pointer px-5 py-10 pt-64 md:p-10 md:pt-64"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      onClick={() => navigate(link)}
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
          onClick={() => navigate(link)}
          className="text-xl md:text-2xl font-grotesk font-[500] mb-4 mt-2 capitalize"
        >
          {projectName}
        </h3>
      </motion.div>
    </div>
  );
};

export default Projects;
