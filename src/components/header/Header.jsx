import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import Hero from "../hero/Hero";

const Header = () => {
  return (
    <header className="bg-[#1C1E53]">
      <div className="container">
        <nav className="text-[#FFFFFF] flex items-center h-[92px] justify-between">
          <div>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <ul className="flex gap-10">
            <li>
              <Link className="text-[#BBBBCB] hover:text-white" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-[#BBBBCB] hover:text-white" to="/about">
                About us
              </Link>
            </li>
            <li>
              <Link className="text-[#BBBBCB] hover:text-white" to="/pricing">
                Pricing
              </Link>
            </li>
            <li>
              <Link className="text-[#BBBBCB] hover:text-white" to="/work">
                Work
              </Link>
            </li>
            <li>
              <Link className="text-[#BBBBCB] hover:text-white" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="text-[#BBBBCB] hover:text-white border py-4 px-12 rounded-full"
                to="/contact"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
