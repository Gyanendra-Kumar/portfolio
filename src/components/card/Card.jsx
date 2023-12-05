import React from "react";
import { Paper } from "@mui/material";

const Card = ({ children }) => {
  return (
    <Paper
      className="p-10 max-sm:p-4 max-sm:w-[90vw] mb-8"
      sx={{ boxShadow: "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff" }}
    >
      {children}
    </Paper>
  );
};

export default Card;
