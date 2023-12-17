import React from "react";
import { Link } from "react-router-dom";
import images from "../assets/shubh/images";
const Tranc = () => {
  return (
    <div className="py-[10vh] md:pb-[5vh] md:pt-0">
      <section className="wrapper1">
        <div className="top tracking-normal px-2 md:text-[70px] sm:text-[50px] xs:text-[30px]">
          TRANCEDENCE
        </div>

        <div
          className="bottom tracking-normal px-2 md:text-[70px] sm:text-[50px] xs:text-[30px]"
          aria-hidden="true"
        >
          TRANCEDENCE
        </div>
      </section>
      <div className="eventB-container text-center mt-20 md:mt-14 justify-evenly">
        <div
          className="eventB-card rounded-xl cursor-pointer w-[500px]"
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          <Link to="/workshop">
            <img
              src={images.tranc2}
              alt="Work Shops"
              className="eventB-img z-40"
            />
          </Link>
        </div>

        <div
          className="eventB-card rounded-xl cursor-pointer w-[500px]"
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          <Link to="/guestlec">
            <img
              src={images.tranc1}
              alt="Guest Lectures"
              className="eventB-img z-40 "
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tranc;
