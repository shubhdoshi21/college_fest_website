import React from "react";
import { sanidhya } from "../assets/shubh/data";

const Sanidhya = () => {
  return (
    <div className="py-[10vh] md:pb-[5vh] md:pt-0 text-purple-300">
      <section className="wrapper1">
        <div className="top tracking-normal px-2 ">SANIDHYA</div>

        <div className="bottom tracking-normal px-2" aria-hidden="true">
          SANIDHYA
        </div>
      </section>
      <div className="flex flex-wrap items-center justify-center gap-5 px-5">
        {sanidhya.map((dat, key) => (
          <div className="hover:scale-105 transition duration-300 para flex-col w-96">
            <img src={dat.img} alt={dat.title} className="p-1 border-b border-b-purple-600 w-full" />
            <p className="text-xl text-center p-1 font-semibold borderzz">{dat.title}</p>
            <p className="text-justify p-2 xs:text-sm h-56 sm:h-auto overflow-scroll">{dat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sanidhya;
