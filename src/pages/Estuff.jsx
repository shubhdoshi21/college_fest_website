import React from 'react'
import stuff from "../assets/shubh/data/index";
import { useNavigate } from 'react-router-dom';

const Estuff = () => {
  const navigate = useNavigate();
  const navigateHandler = (dat) => {
    navigate(`/estuff/${dat.title}`, { state: { estuffData: dat } });
  };
  return (
    <div className="w-full h-full bg-black">

      {/* <img
        src={i1}
        alt="bg"
        className="w-screen h-screen bg-cover bg-no-repeat fixed -z-10"
      /> */}
     
      <div className="flex flex-wrap items-center justify-center text-white mx-[10vw]">
        <div className=" text-9xl md:text-8xl sm:text-6xl xs:text-5xl pt-[25vh] pb-[10vh] px-3 w-[100vw] text-center ">
          E-STUFF
        </div>
        <div className="flex flex-wrap w-[80vw] items-center justify-center">

        {stuff.map((dat, key) => (
          <img src={dat.img} alt={dat.title} onClick={() => navigateHandler(dat)} className="p-10 w-[40vw] sm:w-[80vw] flex flex-wrap"/>
          ))}
          </div>
      </div>
    </div>
  )
}

export default Estuff