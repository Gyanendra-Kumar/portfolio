import React from "react";
import { Profile, Projects } from "./components";

const App = () => {
  return (
    <div className="max-md:pt-[40px] pt-[100px] bg-white h-[100vh] font-Poppins">
      <div className="flex max-lg:flex-col gap-4 items-center md:px-8 relative">
        <div className="flex-1">
          <div className="z-[100px] lg:fixed top-[100px] lg:w-[30%]">
            <Profile />
          </div>
        </div>
        <div className="flex-1 ">
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default App;
