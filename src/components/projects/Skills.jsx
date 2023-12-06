import React from "react";
import Card from "../card/Card";
import { skills } from "../../utils/data";

const Skills = () => {
  return (
    <Card>
      <h1 className="font-medium mb-4 text-2xl text-dark-gray font-Poppins uppercase tracking-[1.25px] max-md:text-xl">
        Skills
      </h1>
      <div className="border-b border-[#5a5d61] mb-6" />

      <div className="flex gap-6 flex-wrap">
        {skills.map((item) => {
          return (
            <div
              className="cursor-pointer hover:scale-[1.15] transition-all"
              key={item.id}
            >
              <div className="w-[80px] h-[80px] p-[13px] shadow-3xl rounded-[4px] bg-gradient-to-r from-[#e4e6ec] to-[#F4F4F2] hover:from-pink-500 hover:to-yellow-500 relative">
                <img src={item.image} className="w-full h-full object-cover" />
              </div>

              <p className="text-center text-[12px] mt-4 font-semibold font-Poppins text-dark-gray">
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default Skills;
