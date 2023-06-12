import React from "react";
import { extravag } from "../assets/shubh/data";

const Extravag = () => {
  return (
    <div className=" text-white">
      <div className="flex flex-wrap items-center justify-center text-white">
        <div className=" text-7xl md:text-6xl sm:text-4xl xs:text-3xl pt-[25vh] px-3 w-[100vw] text-center pb-[10vh]">
          EXTRAVAGANZA
        </div>
        {extravag.map((dat, key) => (
          <div className="w-[30vw] h-[70vh] px-[2vw] md:px-[5vw] md:w-[50vw] sm:w-[100vw] sm:h-auto sm:py-[3vh]">
            <img src={dat.img} alt={dat.title} />
            <p className="text-xl text-center p-1 font-semibold">{dat.title}</p>
            <p className="text-justify p-1 xs:text-sm">{dat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Extravag;
