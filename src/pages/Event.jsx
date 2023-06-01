import React from "react";
import data from "../assets/shubh/data/index";
import { Link, useNavigate } from "react-router-dom";
import i1 from "../assets/shubh/images/2.jpg";
import i2 from "../assets/shubh/images/faneticz.jpg";
const Event = () => {
  const navigate = useNavigate();
  const navigateHandler = (dat) => {
    navigate(`/event/${dat.title}`, { state: { eventsData: dat } });
  };
  return (
    <div className="w-full h-full">

      <img
        src={i1}
        alt="bg"
        className="w-screen h-screen bg-cover bg-no-repeat fixed -z-10"
      />
     
      <div className="flex flex-wrap items-center justify-center text-white mx-[10vw] bg-black/30">
        <div className=" text-9xl md:text-8xl sm:text-6xl xs:text-5xl pt-[25vh] pb-[10vh] px-3 w-[100vw] text-center ">
          EVENTS
        </div>
        <div className="flex flex-wrap w-[80vw]">

        {data.map((dat, key) => (
          <img src={dat.img} alt={dat.title} onClick={() => navigateHandler(dat)} className="p-10 w-[40vw] sm:w-[80vw] flex flex-wrap"/>
          ))}
            <Link to="/event/Faneticz"><img src={i2} alt="Faneticz" className="p-10 w-[40vw] sm:w-[80vw] flex flex-wrap"/></Link>
          </div>
      </div>
    </div>
  );
};

export default Event;
