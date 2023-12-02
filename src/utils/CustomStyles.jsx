import { Button, styled } from "@mui/material";

export const CustomButton = styled(Button)({
  color: "#ff014f",
  backgroundColor: "#ffffff",

  "&:hover": {
    backgroundColor: "red",
    transform: "translateY(-5px)",
    transition: ".3s ease-in-out",
    color: "#ffffff",
  },
});
