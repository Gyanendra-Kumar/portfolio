import React from "react";
import Profile from "./Profile";
import Project from "./project/Project";
import Skills from "./Skills";

const Projects = () => {
  return (
    <div>
      {/* profile */}
      <Profile />

      {/* projects */}
      <Project />

      {/* Skills */}
      <Skills />
    </div>
  );
};

export default Projects;
