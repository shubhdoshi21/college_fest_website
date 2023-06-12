import React from "react";
import { Link } from "react-router-dom";
import images from "../assets/shubh/images";
const Tranc = () => {
  return (
    <div className="flex flex-wrap items-center justify-center text-white">
      <div className="text-7xl md:text-6xl sm:text-4xl xs:text-3xl pt-[25vh] px-3 w-[100vw] text-center pb-[10vh] overflow-hidden font-bold">
        TRANSCENDENCE
      </div>
      <div className="w-[50vw] px-[5vw] flex md:w-[100vw] hover:scale-110 transition duration-300">
        <Link to="/guestlec">
          <img src={images.tranc1} alt="Guest Lectures" />
        </Link>
      </div>
      <div className="w-[50vw] px-[5vw] flex md:w-[100vw] py-[10vh] hover:scale-110 transition duration-300">
        <Link to="/workshop">
          <img src={images.tranc2} alt="Work Shops" />
        </Link>
      </div>
    </div>
  );
};

export default Tranc;
