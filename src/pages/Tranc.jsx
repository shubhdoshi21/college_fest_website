import React from "react";

import i1 from "../components/gl jpg.jpg";
import i2 from "../components/workshop jpg.jpg";
import { Link } from "react-router-dom";

const Tranc = () => {

  return (

     
      <div className="flex flex-wrap items-center justify-center bg-black text-white">
        <div className="text-7xl md:text-6xl sm:text-4xl xs:text-3xl pt-[25vh] px-3 w-[100vw] text-center pb-[10vh] overflow-hidden">
          TRANSCENDENCE
        </div>
        <div className="w-[50vw] px-[10vw] flex sm:w-[100vw]">
          <Link to="/guestlec" ><img src={i1} alt="Guest Lectures" /></Link>
        </div>
        <div className="w-[50vw] px-[10vw] flex sm:w-[100vw] py-[10vh]">
          <Link to="/workshop"><img src={i2} alt="Work Shops" /></Link>
        </div>
      </div>

  );
};

export default Tranc;
