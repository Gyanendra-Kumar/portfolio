import React from "react";
import { companyProject } from "../../../utils/data";
import { Paper } from "@mui/material";
import { PiArrowFatLinesRightLight } from "react-icons/pi";

const CompanyProjects = () => {
  return (
    <div>
      {companyProject.map((item, index) => {
        // console.log(item);
        const { description } = item;
        return (
          <Paper
            elevation={2}
            key={index}
            sx={{ boxShadow: "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff" }}
          >
            <div className="flex flex-col gap-2 mb-4 py-4 max-sm:px-2 px-6 max-sm:text-sm hover:bg-gradient-to-br hover:from-[#e2e8ec] hover:to-[#ffffff] hover:rounded-md cursor-pointer hover:scale-[1.02] transition-all">
              <h1>
                <span className="font-semibold font-Poppins mr-1">
                  Company:
                </span>
                {item.company}
              </h1>
              <p>
                <span className="font-semibold font-Poppins mr-1">Role: </span>
                <span className="text-dark-gray">{item.role}</span>
              </p>
              <p className="leading-5">
                <span className="font-semibold font-Poppins mr-1">
                  Technologies:{" "}
                </span>
                <span className="text-dark-gray ">{item.Technologies}</span>
              </p>
              <p>
                <span className="font-semibold font-Poppins mr-1">
                  Duration:
                </span>
                <span className="text-dark-gray">{item.duration}</span>
              </p>
              <p>
                <span className="font-semibold font-Poppins mr-1">
                  Location:
                </span>
                <span className="text-dark-gray">{item.location}</span>
              </p>
              <div className="tracking-wider leading-5 max-md:text-sm text-md ">
                <span className="font-semibold font-Poppins text-black ">
                  Description:{" "}
                </span>
                <span className="text-dark-gray">
                  {description.map((desc, index) => {
                    // console.log(desc);
                    return (
                      <p key={index} className="flex gap-1">
                        <span>
                          <PiArrowFatLinesRightLight />
                        </span>
                        <span>{desc}</span>
                      </p>
                    );
                  })}
                </span>
              </div>
            </div>
          </Paper>
        );
      })}
    </div>
  );
};

export default CompanyProjects;
