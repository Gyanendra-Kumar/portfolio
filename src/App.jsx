import React from "react";
import { AboutMe, Projects } from "./components";
import { motion } from "framer-motion";
import { aboutVariant, projectVariant } from "./utils/variant";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <div className="max-md:pt-[40px] pt-[100px] bg-white h-[100vh] font-Poppins">
        <div className="flex max-lg:flex-col gap-4 items-center md:px-8 relative">
          <div className="flex-1">
            <motion.div
              className="z-[100px] lg:fixed top-[100px] lg:w-[30%]"
              variants={aboutVariant}
              initial="hidden"
              animate="visible"
            >
              <AboutMe />
            </motion.div>
          </div>
          <motion.div
            className="flex-1 mb-6"
            variants={projectVariant}
            initial="hidden"
            animate="visible"
          >
            <Projects />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default App;
