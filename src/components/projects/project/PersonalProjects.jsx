import React from "react";
import { personalProject } from "../../../utils/data";
import { Paper, Button } from "@mui/material";
import { PiArrowFatLinesRightLight } from "react-icons/pi";
import { GitHub } from "@mui/icons-material";
import { Link } from "react-router-dom";

const PersonalProjects = () => {
  return (
    <div>
      {personalProject.map((item, index) => {
        console.log(item);
        const { description } = item;
        return (
          <Paper
            elevation={2}
            key={index}
            sx={{ boxShadow: "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff" }}
          >
            <div className="flex flex-col gap-2 mb-4 py-4 max-sm:px-2 px-6 max-sm:text-sm hover:bg-gradient-to-br hover:from-[#e2e8ec] hover:to-[#ffffff]">
              <h1>
                <span className="font-semibold font-Poppins mr-1">
                  Project Name:
                </span>
                {item.projectName}
              </h1>
              <p>
                <span className="font-semibold font-Poppins mr-1">Role: </span>
                <span className="text-dark-gray">{item.role}</span>
              </p>
              <p className="leading-5">
                <span className="font-semibold font-Poppins mr-1">
                  Technologies:
                </span>
                <span className="text-dark-gray ">{item.Technologies}</span>
              </p>

              <div className="tracking-wider leading-5 max-md:text-sm text-md ">
                <span className="font-semibold font-Poppins text-black ">
                  Description:{" "}
                </span>
                <span className="text-dark-gray">
                  {description.map((desc, index) => {
                    console.log(desc);
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

                <div className="flex justify-evenly py-4 ">
                  {item.github && (
                    <Link to={item.github} target="_blank">
                      <Button
                        startIcon={<GitHub />}
                        sx={{
                          backgroundColor: "#424242",
                          color: "#ecf0f3",
                          "&:hover": {
                            backgroundColor: "#212121",
                          },
                        }}
                      >
                        GitHub
                      </Button>
                    </Link>
                  )}
                  {item.demo && (
                    <Link to={item.demo} target="_blank">
                      <Button variant="contained">Live Demo</Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </Paper>
        );
      })}
    </div>
  );
};

export default PersonalProjects;
