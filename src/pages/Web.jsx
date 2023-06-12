import React from "react";
import images from "../assets/shubh/images";
const Web = () => {
  return (
    <div className="text-white">
      <div className="flex flex-wrap items-center justify-center px-[4vw]">
        <div className=" text-9xl md:text-8xl sm:text-6xl xs:text-5xl pt-[25vh] px-[2vh] w-[100vw] pb-[5vh] text-center font-bold">
          WEB TEAM
        </div>
        <div className="m-5 relative">
          <div className="group h-[250px] w-[300px] hexagon">
            <img
              className="h-full w-full hexagon animate-fade-out"
              src={images.e1}
              alt="img"
            />
            <div className="hover-overlay hidden group-hover:flex justify-center items-center absolute inset-0 bg-black animate-fade-in"></div>
            <div className="hover-overlay-content hidden group-hover:flex justify-center items-center absolute inset-0">
              <p className="border-t text-xs pt-6 mb-12 mx-12">
                In the end, we only regret the chances we didn't take.
              </p>
            </div>
          </div>
          <div className="text-center mt-2">
            <p className="text-2xl font-semibold">Bhushan Deshmukh</p>
            <p>Coordinator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web;
