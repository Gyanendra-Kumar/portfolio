import React from "react";
import { about } from "../../utils/data";
import { CustomButton } from "../../utils/CustomStyles";
import Contact from "./Contact";
import { Download } from "@mui/icons-material";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div>
      <section className="flex flex-col max-lg:items-center p-4  lg:justify-center lg:h-[80vh]  ">
        <div className="w-[200px] h-[200px] hover:translate-y-[-10px] transition-all">
          <img
            src={about.img}
            className="w-full h-full object-cover rounded-full border-[5px] border-white shadow-3xl"
          />
        </div>

        <div className="pt-8 max-lg:text-center">
          <h1 className="text-5xl font-semibold max-md:text-3xl max-lg:text-4xl mb-4">
            Hi, I'm <span className="text-primary">{about.name}</span>{" "}
            <span className="text-[#3c3e41]">Software Engineer.</span>
          </h1>

          <p className="text-lg max-sm:text-sm text-dark-gray max-md:p-4 font-normal tracking-wide pt-6">
            {about.description}
          </p>
        </div>

        <div className="flex gap-8 pt-8 max-xl:flex-col max-lg:justify-center  max-sm:pt-2 max-md:w-3/4 max-lg:w-2/4 max-sm:gap-6 ">
          <CustomButton
            variant="contained"
            startIcon={<Download />}
            sx={{
              // wordSpacing: "5px",
              fontWeight: "600",
              boxShadow: "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff",
              textTransform: "capitalize",
              fontSize: "15px",
            }}
          >
            <Link
              to="https://drive.google.com/file/d/1YaJYMF8tQM_iBd02TdeHPKx1NfVGmZYd/view"
              target="_blank"
            >
              Download Resume
            </Link>
          </CustomButton>
          <Contact />
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
