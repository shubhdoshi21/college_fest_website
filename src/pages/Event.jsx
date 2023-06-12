import React from "react";
import events from "../assets/shubh/data/index";
import { useNavigate } from "react-router-dom";

const Event = () => {
  const navigate = useNavigate();
  const navigateHandler = (dat, data, key) => {
    navigate(`/event/${dat.title}`, { state: { eventsData: data, key } }); //key:key == key
  };
  return (
    <div className="w-full h-full">
      <div className="flex flex-wrap items-center justify-center text-white bg-black/30">
        <div className=" text-9xl md:text-8xl sm:text-6xl xs:text-5xl pt-[25vh] pb-[10vh] px-3 w-[100vw] text-center font-bold">
          EVENTS
        </div>
        <div className="flex flex-wrap w-[100vw] items-center justify-center">
          {events.map((dat, key) => (
            <img
              src={dat.img}
              alt={dat.title}
              onClick={() => navigateHandler(dat, events, key)}
              className="px-[3vw] py-[3vh] w-[40vw] sm:w-[100vw] flex lg:w-[50vw] hover:scale-110 transition duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
