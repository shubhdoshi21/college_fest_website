import { useState, useEffect } from "react";
import { testimonials } from "../assets/shubh/data/index";
import { FaQuoteLeft } from "react-icons/fa";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    } else {
      setCurrentIndex(testimonials.length - 1);
    }
  };

  const moveNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next") {
      return currentIndex >= testimonials.length - 1;
    }

    return false;
  };

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        moveNext();
      }, 3000); // Change slide every 3 seconds
    }

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, isHovered]);

  return (
    <div
      className="py-[1vh] px-[3vw] text-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* <h2 className="text-4xl font-semibold mb-[2vh] text-center">
        Testimonials
      </h2> */}
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top-0 left-0 w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-black/50 w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-black/50 w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div className="w-full h-auto p-10 flex bg-black/30 rounded-xl backdrop-blur-sm relative gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0">
          {testimonials.map((resource, index) => (
            <div
              className={`w-full p-5 md:p-0 relative snap-start ${index === currentIndex ? "" : "hidden"}`}
              key={index}
            >
              <div className="flex flex-row md:flex-col-reverse items-center justify-center" data-aos="">
                <div className="w-3/4 md:w-full mx-auto shadow-md text-justify">
                  <FaQuoteLeft color="white" size="15px" />
                  <p className="sm:text-sm" data-aos="fade-right">
                    {resource.para}
                  </p>
                </div>
                <div className="flex flex-col space-y-2 items-center justify-center float-right p-5 relative snap-start" data-aos="fade-left">
                  <img
                    src={resource.img}
                    alt=""
                    className="w-60 rounded-2xl border-4 border-purple-400"
                  />
                  <p className="font-bold text-center" data-aos="">
                    {resource.name}
                  </p>
                  <p className="font-bold text-center" data-aos="">
                    {resource.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
