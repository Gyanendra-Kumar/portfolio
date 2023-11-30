import React from "react";
import { profile } from "../../utils/data";

const Profile = () => {
  return (
    <div>
      <section className="flex flex-col max-lg:items-center p-4  lg:justify-center lg:h-[80vh]  ">
        <div className="w-[200px] h-[200px] ">
          <img
            src={profile.img}
            className="w-full h-full object-cover rounded-full border-[5px] border-white shadow-3xl"
          />
        </div>

        <div className="pt-8 max-lg:text-center">
          <h1 className="text-5xl font-semibold max-md:text-3xl max-lg:text-4xl mb-4">
            Hi, I'm <span className="text-primary">Gyanendra Kumar</span>{" "}
            <span className="text-[#3c3e41]">Software Engineer.</span>
          </h1>

          <p className="text-lg max-sm:text-sm text-dark-gray max-md:p-4 font-normal tracking-wide pt-6">
            {profile.description}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Profile;
