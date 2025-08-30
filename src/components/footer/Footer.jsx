import React from "react";
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex w-full h-[389px]  bg-[#1C1E53] ">
        <div className="container">
          <div className="flex mt-30">
            <div className=" w-1/2">
              <img src={logo} alt="" />
              <p className="text-[#F4F6FC] mt-[24px]">
                We are always open to discuss your project and improve your
                online presence.
              </p>
              <div className="max-w-[357px] w-auto gap-[30px] bg-[#FCD980] flex justify-center mt-24">
                <div className>
                  <h4>Email me at</h4>
                  <h6>contact@website.com</h6>
                </div>
                <div>
                  <h4>Call us</h4>
                  <h6>0927 6277 28525</h6>
                </div>
              </div>
            </div>
            <div className="w-1/2 text-white">
              <h1 className="text-[48px]">Lets Talk!</h1>
              <p className="text-[#F4F6FC] mt-3.5">
                We are always open to discuss your project, improve your online
                presence and help with your UX/UI design challenges.
              </p>
              <div className="flex gap-5 mt-7">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
