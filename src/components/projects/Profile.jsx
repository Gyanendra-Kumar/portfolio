import React from "react";
import Card from "../card/Card";
import { profile } from "../../utils/data";
import { PiArrowFatLinesRightLight } from "react-icons/pi";

const Profile = () => {
  return (
    <>
      <Card>
        <h1 className="font-medium mb-4 text-3xl text-dark-gray font-Poppins uppercase tracking-[1.25px] max-md:text-xl">
          Profile
        </h1>
        <div className="border-b border-[#5a5d61] mb-6" />

        {profile.map((item, index) => {
          return (
            <div key={item.id} className="flex gap-2">
              <span>
                <PiArrowFatLinesRightLight />
              </span>
              <span
                className={`${
                  index === 2 || index === 5
                    ? "font-semibold leading-5"
                    : "mb-2 tracking-wider leading-5 max-md:text-sm text-md text-dark-gray"
                }`}
              >
                {item.desc}
              </span>
            </div>
          );
        })}
      </Card>
    </>
  );
};

export default Profile;
