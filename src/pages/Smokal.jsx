import React from 'react'
import smok from "../assets/shubh/data/index";
import { useNavigate } from 'react-router-dom';


const Smokal = () => {
  const navigate = useNavigate();
  const navigateHandler = (dat) => {
    navigate(`/smokal/${dat.title}`, { state: { smokalData: dat } });
  };
  return (
    <div className="bg-black text-white">
      
      <div className="flex flex-wrap items-center justify-center text-white">
        <div className=" text-9xl md:text-8xl sm:text-6xl xs:text-5xl pt-[25vh] px-3 w-[100vw] text-center">
          SMOKAL
        </div>
        <div className="flex flex-wrap w-[80vw] items-center justify-center">

        {smok.map((dat, key) => (
          <img src={dat.img} alt={dat.title} onClick={() => navigateHandler(dat)} className="p-10 w-[40vw] sm:w-[80vw] flex flex-wrap"/>
          ))}</div>
        </div>
    </div>
  )
}

export default Smokal