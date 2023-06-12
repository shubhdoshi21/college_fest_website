import React from "react";
import { workshop } from "../assets/shubh/data";
const Workshop = () => {
  return (
    <div className="w-full h-full items-center justify-center text-white flex flex-wrap ">
      <div className="text-5xl md:text-4xl sm:text-3xl flex justify-center text-center font-bold text-white py-[10vh] px-[5vw] w-full">
        WORK-SHOPS OF PARAMARSH'23
      </div>
      {workshop.map((dat, key) => (
        <div className="w-[33vw] h-[900px] md:w-[50vw] sm:w-[100vw] sm:h-auto  px-[2vw] py-[3vh]">
          <img src={dat.img} alt={dat.title} className="w-full h-64" />
          <p className="text-xl text-center py-[2vh] px-[1vw] font-semibold">
            {dat.title}
          </p>
          <p className="text-justify">{dat.desc}</p>
          <p className="text-xl text-left py-[2vh] font-semibold">
            Topics Included :
          </p>
          <ul className="list-disc px-[4vw]">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      ))}
      <div className="flex items-center flex-wrap justify-center py-[5vh] w-[100vw]">
        <button className="text-center text-white border border-x-white border-y-slate-400 p-2  hover:bg-black/80">
          REGISTER HERE
        </button>
      </div>
      <div className="px-[10vw] md:px-[5vw] text-left pb-[5vh]">
        <p>For Queries,</p>
        <p>Contact :-</p>
        <p>Divyadeepsinh Gohil : +91 9081578050</p>
      </div>
    </div>
  );
};

export default Workshop;
