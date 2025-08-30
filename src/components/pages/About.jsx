import React from "react";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import about from "../../assets/about.png";
const About = () => {
  return (
    <div>
      <div className="container">
        <div className="flex gap-47 mt-30 mb-30">
          <div className="w-1/3 ">
            <h2 className="font-[Poppins] text-[18px]">About us</h2>
            <h2 className="text-4xl font-semibold">
              Our designs solve problems
            </h2>
            <p className="text-shadow-gray-950 mt-[31px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <div className="flex gap-5 mt-7">
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>
          <div className="w-1/2">
            <img className="w-full" src={about} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
