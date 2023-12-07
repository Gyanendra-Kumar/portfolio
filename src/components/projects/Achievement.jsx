import React, { useState } from "react";
import { achievement } from "../../utils/data";
import { Dialog, Slide, DialogTitle, DialogContent } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Achievement = () => {
  const [openDialogs, setOpenDialogs] = useState(
    Array(achievement.length).fill(false)
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
    <div className="">
      <h1 className="font-medium mb-4 text-2xl text-dark-gray font-Poppins uppercase tracking-[1.25px] max-md:text-xl">
        Achievements
      </h1>
      <div className="border-b border-[#5a5d61] mb-6" />

      <div className="flex gap-6 flex-wrap">
        {achievement.map((item, index) => {
          return (
            <div key={item.id} className="w-[25%] h-[100%]">
              <div
                className="cursor-pointer transition-all flex flex-col justify-center items-center"
                onClick={() => handleClickOpen(index)}
              >
                <div className="w-[80px] h-[80px] p-[13px]  shadow-3xl rounded-[4px] bg-gradient-to-r from-[#e4e6ec] to-[#F4F4F2] hover:from-pink-500 hover:to-yellow-500 ">
                  <img
                    src={item.image}
                    className="w-full h-full object-contain"
                    alt={item.name}
                  />
                </div>

                <p className="text-center text-[12px] mt-4 font-semibold font-Poppins text-dark-gray ">
                  {item.name}
                </p>
              </div>

              <Dialog
                open={openDialogs[index]}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => handleClose(index)}
                aria-describedby="achievement"
              >
                <DialogTitle
                  sx={{
                    borderBottom: "1px solid #3c3e41",
                    fontWeight: "600",
                  }}
                >
                  <p className="text-3xl max-md:text-xl">{item.name}</p>
                </DialogTitle>
                <DialogContent style={{ marginTop: "10px" }}>
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
    </div>
  );
};

export default Achievement;
