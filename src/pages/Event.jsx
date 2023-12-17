import events from "../assets/shubh/data/index";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Event = () => {
  useEffect(() => {
    Aos.init({
      offset: 10,
    });
  });
  const navigate = useNavigate();
  const navigateHandler = (dat, data, key) => {
    navigate(`/event/${dat.title}`, { state: { eventsData: data, key } }); //key:key == key
  };
  return (
    <div className="py-[10vh] md:pb-[5vh] md:pt-0">
      <section className="wrapper1">
        <div className="top tracking-normal px-2 ">EVENTS</div>

        <div className="bottom tracking-normal px-2" aria-hidden="true">
          EVENTS
        </div>
      </section>

      <div className="eventB-container text-center mt-20 md:mt-14 justify-evenly ">
        {events.map((dat, key) => (
          <div
            className="eventB-card rounded-xl cursor-pointer w-[500px] "
            data-aos="fade-in"
            data-aos-duration="1500"
            key={key}
          >
            <img
              src={dat.img}
              alt={dat.title}
              onClick={() => navigateHandler(dat, events, key)}
              className="eventB-img z-40 "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
