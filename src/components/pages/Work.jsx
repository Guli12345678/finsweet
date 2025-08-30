import React from "react";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";

const Work = () => {
  return (
    <div className="bg-[#F4F6FC] w-full h-[416px] mb-30 ">
      <div className="container">
        <div className="w-[733px] flex-row justify-self-center text-center pt-30">
          <p>What we created</p>
          <h3 className="text-[48px] font-semibold">Our Work Portfolio</h3>
          <p className="mt-[30px]">
            We help teams create great digital products by providing them with
            tools and technology to make the design-to-code process universally
            accessible.
          </p>
          <div className="flex gap-5 mt-7 justify-center">
            <img className="bg-black" src={facebook} alt="" />
            <img className="bg-black" src={twitter} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
