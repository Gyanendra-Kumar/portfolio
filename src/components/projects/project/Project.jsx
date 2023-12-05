import React, { useState } from "react";
import { Tab, Box } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { nanoid } from "nanoid";
import CompanyProjects from "./CompanyProjects";
import PersonalProjects from "./PersonalProjects";
import Card from "../../card/Card";
import { IoBusinessSharp } from "react-icons/io5";
import { BsPersonBoundingBox } from "react-icons/bs";

const tabItems = [
  {
    id: nanoid(),
    icon: <IoBusinessSharp className="text-xl max-sm:text-[10px]" />,
    tabName: "Company Projects",
    value: "company",
  },
  {
    id: nanoid(),
    icon: <BsPersonBoundingBox className="text-xl max-sm:text-[10px]" />,
    tabName: "Personal Projects",
    value: "personal",
  },
];

const tabPanelItems = [
  {
    id: nanoid(),
    projectName: <CompanyProjects />,
    value: "company",
  },
  {
    id: nanoid(),
    projectName: <PersonalProjects />,
    value: "personal",
  },
];

const Project = () => {
  const [value, setValue] = useState("company");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="project tab">
            {tabItems.map((item) => {
              return (
                <Tab
                  label={item.tabName}
                  value={item.value}
                  icon={item.icon}
                  iconPosition="start"
                  key={item.id}
                  sx={{
                    color: "#3c3e41", // Set the text color
                    "&.Mui-selected": {
                      color: "#ff014f", // Set the text color for the selected tab
                    },
                    "& .MuiTabIndicator-root": {
                      backgroundColor: "#ff014f", // Set the indicator color
                    },
                    // Add any additional styles here
                    fontWeight: 600,
                  }}
                />
              );
            })}
          </TabList>
        </Box>

        {tabPanelItems.map((panelItem) => {
          return (
            <TabPanel
              value={panelItem.value}
              key={panelItem.id}
              style={{
                padding: "15px 0",
              }}
            >
              {panelItem.projectName}
            </TabPanel>
          );
        })}
      </TabContext>
    </Card>
  );
};

export default Project;
