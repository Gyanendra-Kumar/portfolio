import React from "react";
import Profile from "./Profile";
import Project from "./project/Project";
import Skills from "./Skills";
import Certification from "./Certification";
import Education from "./Education";

const Projects = () => {
  return (
    <div>
      {/* profile */}
      <Profile />

      {/* projects */}
      <Project />

      {/* Skills */}
      <Skills />

      {/* Education */}
      <Education />

      {/* Certifications & Achievements */}
      <Certification />
    </div>
  );
};

export default Projects;
