import React from "react";
import Profile from "./Profile";
import Project from "./project/Project";
import Skills from "./Skills";
import Certification from "./Certification";

const Projects = () => {
  return (
    <div>
      {/* profile */}
      <Profile />

      {/* projects */}
      <Project />

      {/* Skills */}
      <Skills />

      {/* Certifications & Achievements */}
      <Certification />
    </div>
  );
};

export default Projects;
