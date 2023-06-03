import React from "react";

import { Link } from "react-router-dom";
const Team = () => {
  return (
    <div className=" text-white">
      <div className="flex flex-wrap items-center justify-center px-[4vw] ">
        <div className=" text-9xl md:text-8xl sm:text-6xl xs:text-5xl pt-[25vh] px-[2vw] w-[100vw] pb-[5vh] text-center font-bold">
          OUR TEAM
        </div>
        <div className="border border-white w-48 h-72 m-5"><div className="border border-blue-500 w-48 h-12 mt-48"><div className="border border-red-500 w-48 h-12 mt-12"></div></div></div>
        <div className="border border-white w-48 h-72 m-5"><div className="border border-blue-500 w-48 h-12 mt-48"><div className="border border-red-500 w-48 h-12 mt-12"></div></div></div>
        <div className="border border-white w-48 h-72 m-5"><div className="border border-blue-500 w-48 h-12 mt-48"><div className="border border-red-500 w-48 h-12 mt-12"></div></div></div>
        <div className="border border-white w-48 h-72 m-5"><div className="border border-blue-500 w-48 h-12 mt-48"><div className="border border-red-500 w-48 h-12 mt-12"></div></div></div>
        <div className="border border-white w-48 h-72 m-5"><div className="border border-blue-500 w-48 h-12 mt-48"><div className="border border-red-500 w-48 h-12 mt-12"></div></div></div>
        <div className="border border-white w-48 h-72 m-5"><div className="border border-blue-500 w-48 h-12 mt-48"><div className="border border-red-500 w-48 h-12 mt-12"></div></div></div>
 
        
 
        
      </div>
      <div className="flex items-center justify-center py-[5vh]">
        <button className="text-center text-white border border-x-white border-y-slate-400 p-2 hover:text-black hover:bg-white">
          <Link to="/web">WEB TEAM</Link>
        </button>
      </div>
    </div>
  );
};

export default Team;
