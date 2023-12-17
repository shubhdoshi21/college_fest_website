import React, { useEffect } from "react";
import { smok } from "../assets/shubh/data";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Smokal = () => {
  useEffect(() => {
    Aos.init({
      offset: 10,
    });
  });
  const navigate = useNavigate();
  const navigateHandler = (dat, smok, key) => {
    navigate(`/smokal/${dat.title}`, { state: { smokalData: smok, key } });
  };
  return (
    <div className="py-[10vh] md:pb-[5vh] md:pt-0">
      <section className="wrapper1">
        <div className="top tracking-normal px-2 ">SMOKAL</div>

        <div className="bottom tracking-normal px-2" aria-hidden="true">
          SMOKAL
        </div>
      </section>

      <div className="eventB-container text-center mt-[20vh] md:mt-14 justify-evenly ">
        {smok.map((dat, key) => (
          <div
            className="eventB-card rounded-xl cursor-pointer w-[500px] "
            data-aos="fade-in"
            data-aos-duration="1500"
            key={key}
          >
            <img
              src={dat.img}
              alt={dat.title}
              onClick={() => navigateHandler(dat, smok, key)}
              className="eventB-img z-40 "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Smokal;
