import React from "react";
import { smok } from "../assets/shubh/data";
import { useNavigate } from "react-router-dom";

const Smokal = () => {
  const navigate = useNavigate();
  const navigateHandler = (dat, smok, key) => {
    navigate(`/smokal/${dat.title}`, { state: { smokalData: smok, key } });
  };
  return (
    <div className=" text-white">
      <div className="flex flex-wrap items-center justify-center text-white">
        <div className=" text-9xl md:text-8xl sm:text-6xl xs:text-5xl pt-[25vh] px-3 w-[100vw] text-center font-bold">
          SMOKAL
        </div>
        <div className="flex flex-wrap w-[100vw] items-center justify-center">
          {smok.map((dat, key) => (
            <img
              src={dat.img}
              alt={dat.title}
              onClick={() => navigateHandler(dat, smok, key)}
              className="px-[3vw] py-[3vh] w-[40vw] sm:w-[100vw] flex lg:w-[50vw] hover:scale-110 transition duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Smokal;
