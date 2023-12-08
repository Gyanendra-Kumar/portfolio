import React, { useState } from "react";
import Card from "../card/Card";
import { certification } from "../../utils/data";
import { Dialog, Slide, DialogTitle, DialogContent } from "@mui/material";
import Achievement from "./Achievement";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Certification = () => {
  const [openDialogs, setOpenDialogs] = useState(
    Array(certification.length).fill(false)
  );

  const handleClickOpen = (index) => {
    const newOpenDialogs = [...openDialogs];
    newOpenDialogs[index] = true;
    setOpenDialogs(newOpenDialogs);
  };

  const handleClose = (index) => {
    const newOpenDialogs = [...openDialogs];
    newOpenDialogs[index] = false;
    setOpenDialogs(newOpenDialogs);
  };

  return (
    <Card>
      <h1 className="font-medium mb-4 text-2xl text-dark-gray font-Poppins uppercase tracking-[1.25px] max-md:text-xl">
        Certifications
      </h1>
      <div className="border-b border-[#5a5d61] mb-6" />

      <div className="flex gap-6 flex-wrap">
        {certification.map((item, index) => {
          return (
            <div key={item.id}>
              <div
                className="cursor-pointer hover:scale-[1.15] transition-all flex flex-col justify-center items-center"
                onClick={() => handleClickOpen(index)}
              >
                <div className="w-[80px] h-[80px] p-[10px] shadow-3xl rounded-[4px] bg-gradient-to-r from-[#e4e6ec] to-[#F4F4F2] hover:from-pink-500 hover:to-yellow-500 relative">
                  <img
                    src={item.image}
                    className="w-full h-full object-contain"
                    alt={item.name}
                  />
                </div>

                <p className="text-center text-[12px] mt-4 font-semibold font-Poppins text-dark-gray w-[50%]">
                  {item.name}
                </p>
              </div>

              <Dialog
                open={openDialogs[index]}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => handleClose(index)}
                aria-describedby="Certificate"
              >
                <DialogTitle
                  sx={{
                    borderBottom: "1px solid #3c3e41",
                    fontWeight: "600",
                  }}
                >
                  <p className="text-3xl max-md:text-xl">{item.name}</p>
                </DialogTitle>

                <DialogContent
                  style={{
                    marginTop: "10px",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </DialogContent>
              </Dialog>
            </div>
          );
        })}
      </div>

      <div className="mt-8">
        <Achievement />
      </div>
    </Card>
  );
};

export default Certification;
