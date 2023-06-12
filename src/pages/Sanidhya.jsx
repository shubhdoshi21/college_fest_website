import React from "react";
import { sanidhya } from "../assets/shubh/data";

const Sanidhya = () => {
  return (
    <div className=" text-white">
      <div className="flex flex-wrap items-center justify-center text-white">
        <div className=" text-9xl md:text-8xl sm:text-6xl xs:text-5xl pt-[25vh] px-3 w-[100vw] text-center font-bold">
          SANIDHYA
        </div>
        {sanidhya.map((dat, key) => (
          <div className="w-[33vw] h-[575px] px-[2vw] py-[3vh] md:w-[50vw] sm:w-[100vw] sm:h-auto">
            <img src={dat.img} alt={dat.title} className="" />
            <p className="text-xl text-center p-1 font-semibold">{dat.title}</p>
            <p className="text-justify p-1">{dat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sanidhya;
