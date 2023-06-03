import React from "react";
import { stuff } from "../assets/shubh/data";
import { useNavigate } from "react-router-dom";

const Estuff = () => {
  const navigate = useNavigate();
  const navigateHandler = (dat, stuff, key) => {
    navigate(`/estuff/${dat.title}`, { state: { estuffData: stuff, key } });
  };
  return (
    <div className="w-full h-full">
      {/* <img
        src={i1}
        alt="bg"
        className="w-screen h-screen bg-cover bg-no-repeat fixed -z-10"
      /> */}

      <div className="flex flex-wrap items-center justify-center text-white">
        <div className=" text-9xl md:text-8xl sm:text-6xl xs:text-5xl pt-[25vh] pb-[10vh] px-3 w-[100vw] text-center font-bold">
          E-STUFF
        </div>
        <div className="flex flex-wrap w-[100vw] items-center justify-center">
          {stuff.map((dat, key) => (
            <img
              src={dat.img}
              alt={dat.title}
              onClick={() => navigateHandler(dat, stuff, key)}
              className="p-10 w-[40vw] sm:w-[100vw] flex lg:w-[50vw] hover:scale-110 transition duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Estuff;
