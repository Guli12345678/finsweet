import React from "react";
import pointer from "../../assets/Pointer.png";
const Pricing = () => {
  return (
    <div>
      <div className="container">
        <div className="max-w-[562px] flex-col justify-self-center text-center mt-[128px]">
          <h1 className="text-[48px] font-semibold">Our Pricing Plans</h1>
          <p>
            When you’re ready to go beyond prototyping in Figma, Webflow is
            ready to help you bring your designs to life — without coding them.
          </p>
        </div>
        <div className="mt-30 mb-30 flex gap-[32px] justify-center">
          <div className="bg-[#F4F6FC] w-full h-[745px] rounded-[12px] px-10">
            <div className="flex gap-3">
              <strong className="text-[38px] mt-15">$299</strong>
              <h3 className="mt-20 text-[#2405F2]">Per Design</h3>
            </div>

            <h4>Landing Page </h4>
            <p className="w-[281px]">
              When you’re ready to go beyond prototyping in Figma,
            </p>

            <div className="mt-[138px] ml-10">
              <div className="flex gap-3">
                <img src={pointer} alt="" />
                <h2>All limited links</h2>
              </div>
              <div className="flex gap-3">
                <img src={pointer} alt="" />
                <h2>All limited links</h2>
              </div>
              <div className="flex gap-3">
                <img src={pointer} alt="" />
                <h2>All limited links</h2>
              </div>
              <div className="flex gap-3">
                <img src={pointer} alt="" />
                <h2>All limited links</h2>
              </div>
              <div className="flex gap-3">
                <img src={pointer} alt="" />
                <h2>All limited links</h2>
              </div>
            </div>
            <button className="bg-[#282938] text-white border py-4 px-12 rounded-full flex mt-40 justify-self-center">
              Get Started
            </button>
          </div>
          <div className="bg-[#1C1E53] w-full h-[745px] text-white rounded-[12px] px-10">
            <div className="flex gap-3">
              <strong className="text-[38px] mt-15">$299</strong>
              <h3 className="mt-20 text-[#2405F2]">Per Design</h3>
            </div>

            <h4>Landing Page </h4>
            <p className="w-[281px]">
              When you’re ready to go beyond prototyping in Figma,
            </p>

            <div className="mt-[138px] ml-10">
              <div className="flex gap-3">
                <img src={pointer} alt="" />
                <h2>All limited links</h2>
              </div>
              <div className="flex gap-3">
                <img src={pointer} alt="" />
                <h2>All limited links</h2>
              </div>
              <div className="flex gap-3">
                <img src={pointer} alt="" />
                <h2>All limited links</h2>
              </div>
              <div className="flex gap-3">
                <img src={pointer} alt="" />
                <h2>All limited links</h2>
              </div>
              <div className="flex gap-3">
                <img src={pointer} alt="" />
                <h2>All limited links</h2>
              </div>
            </div>
            <button className="bg-[#FCD980] text-black border py-4 px-12 rounded-full flex mt-40 justify-self-center">
              Get Started
            </button>
          </div>
          <div className="bg-[#F4F6FC] w-full h-[745px] rounded-[12px] px-10">
            <div className="flex gap-3">
              <strong className="text-[38px] mt-15">$299</strong>
              <h3 className="mt-20 text-[#2405F2]">Per Design</h3>
            </div>

            <h4>Landing Page </h4>
            <p className="w-[281px]">
              When you’re ready to go beyond prototyping in Figma,
            </p>

            <div className="mt-[138px] ml-10">
              <div className="flex gap-3">
                <img src={pointer} alt="" />
                <h2>All limited links</h2>
              </div>
              <div className="flex gap-3">
                <img src={pointer} alt="" />
                <h2>All limited links</h2>
              </div>
              <div className="flex gap-3">
                <img src={pointer} alt="" />
                <h2>All limited links</h2>
              </div>
              <div className="flex gap-3">
                <img src={pointer} alt="" />
                <h2>All limited links</h2>
              </div>
              <div className="flex gap-3">
                <img src={pointer} alt="" />
                <h2>All limited links</h2>
              </div>
            </div>
            <button className="bg-[#282938] text-white border py-4 px-12 rounded-full flex mt-40 justify-self-center">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
