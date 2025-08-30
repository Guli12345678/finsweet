import React from "react";
import png from "../../assets/Illustration.png";

const Hero = () => {
  return (
    <div className="w-full h-[660px] bg-[#1C1E53]">
      <div className="container">
        <div className="flex py-[126px]">
          <div className="w-1/2 text-white">
            <h1 className="text-[54px] font-semibold">
              Building stellar websites for early startups
            </h1>
            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <div className="gap-10 mt-12">
              <button className="bg-[#FCD980] border py-4 px-12 rounded-full text-black">
                View our work
              </button>
              <button className="ml-10">View Pricing</button>
            </div>
          </div>
          <div className="w-1/2">
            <img className="w-full" src={png} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
