import React from "react";
import { workshop } from "../assets/shubh/data";
const Workshop = () => {
  return (
    <div className="py-[10vh] md:pb-[5vh] md:pt-0 text-purple-300">
      <section className="wrapper1">
        <div className="top tracking-normal px-2 md:text-[70px] sm:text-[45px] xs:text-[30px]">WORK-SHOPS'23</div>

        <div className="bottom tracking-normal px-2 md:text-[70px] sm:text-[45px] xs:text-[30px]" aria-hidden="true">
          WORK-SHOPS'23
        </div>
      </section>
      <div className="flex flex-wrap items-center justify-center gap-5 px-5">
        {workshop.map((dat, key) => (
          <div className="hover:scale-105 transition duration-300 para flex-col w-96">
            <img
              src={dat.img}
              alt={dat.title}
              className="p-1 border-b border-b-purple-600 w-full h-64"
            />
            <p className="text-xl text-center p-1 font-semibold borderzz">
              {dat.title}
            </p>
            <p className="text-justify p-2 xs:text-sm h-80 sm:h-auto overflow-scroll">
              {dat.desc}
            </p>
            <p className="text-lg xs:text-base p-2">Topics Included :</p>
            <ul className="list-disc px-4 pb-4">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
        ))}
      </div>
      <div className="flex items-center flex-wrap justify-center py-5 w-[100vw]">
        <button className="text-center p-2 btn">REGISTER HERE</button>
      </div>
      <div className="px-10 md:px-5 text-left">
        <p>For Queries,</p>
        <p>Contact :-</p>
        <p>Divyadeepsinh Gohil : (+91) 9081578050</p>
      </div>
    </div>
  );
};

export default Workshop;
