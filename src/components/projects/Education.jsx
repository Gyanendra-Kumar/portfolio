import React from "react";
import Card from "../card/Card";
import { educations } from "../../utils/data";
import { PiArrowFatLinesRightLight } from "react-icons/pi";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";

const Education = () => {
  return (
    <>
      <Card>
        <h1 className="font-medium mb-4 text-3xl text-dark-gray font-Poppins uppercase tracking-[1.25px] max-md:text-xl">
          Education:
        </h1>
        <div className="border-b border-[#5a5d61] mb-6" />

        {educations.map((education, index) => {
          return (
            <Timeline key={education.id}>
              <TimelineItem style={{ display: "flex" }}>
                <TimelineOppositeContent style={{ flex: 1 }}>
                  {education.duration}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div>
                    <span className="font-semibold text-sm md:text-[16px]">
                      Degree:{" "}
                    </span>
                    <span className="text-dark-gray text-sm ">
                      {education.degree}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-sm md:text-[16px]">
                      University:{" "}
                    </span>
                    <span className="text-dark-gray text-sm">
                      {education.university}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-sm md:text-[16px]">
                      Course:{" "}
                    </span>
                    <span className="text-dark-gray text-sm">
                      {education.course}
                    </span>
                  </div>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          );
        })}
      </Card>
    </>
  );
};

export default Education;
