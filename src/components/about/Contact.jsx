import React, { useState } from "react";
import { CustomButton } from "../../utils/CustomStyles";
import {
  Dialog,
  Slide,
  DialogTitle,
  DialogContent,
  Button,
} from "@mui/material";
import { LinkedIn, Call } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Contact = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CustomButton
        variant="contained"
        onClick={handleClickOpen}
        sx={{
          fontWeight: "600",
          fontSize: "15x",
          boxShadow: "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff",
          textTransform: "capitalize",
        }}
        startIcon={<Call />}
      >
        Contact Me
      </CustomButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="contact me"
      >
        <DialogTitle
          sx={{
            borderBottom: "1px solid #3c3e41",
            fontWeight: "600",
          }}
        >
          <p className="text-3xl max-md:text-xl">Contact Me</p>
        </DialogTitle>
        <DialogContent>
          <div className="flex flex-col gap-8 my-6 md:px-20 ">
            <div>
              <span className="font-semibold">Mobile Number: </span>
              +91-9611359759
            </div>
            <div>
              <span className="font-semibold">Email: </span>
              kgyanendra1998@gmail.com
            </div>
            <Button
              startIcon={<LinkedIn />}
              size="large"
              variant="contained"
              style={{
                letterSpacing: "1.15px",
                wordSpacing: "4px",
                textTransform: "capitalize",
                fontWeight: "500",
                fontSize: "18px",
              }}
            >
              <Link
                to="https://www.linkedin.com/in/gyanendra-kumar-22975b18b"
                target="_blank"
              >
                LinkedIn Link
              </Link>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Contact;
