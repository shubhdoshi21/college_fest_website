import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Estuffmain = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const allData = location.state.estuffData;
  const key = location.state.key;
  const [pageKey, setPageKey] = useState(key);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  AOS.init({
    duration: 500, // Animation duration in milliseconds
    offset: 100, // Offset (in pixels) from the original trigger point
    easing: "ease-in-out", // Easing function for the animation
    // once:true
  });
  useEffect(() => {
    setData(allData[pageKey]);
  }, [allData]);

  const handleNext = () => {
    if (pageKey === allData.length - 1) {
      setData(allData[0]);
      setPageKey(0);
    } else {
      setData(allData[pageKey + 1]);
      setPageKey(pageKey + 1);
    }
  };
  const handlePrev = () => {
    if (pageKey === 0) {
      setData(allData[allData.length - 1]);
      setPageKey(allData.length - 1);
    } else {
      setData(allData[pageKey - 1]);
      setPageKey(pageKey - 1);
    }
  };
  return (
    <div
      className="w-full h-full text-purple-300 text-center px-[10vw] py-[5vh] sm:p-0"
      onLoad={handleScrollToTop}
    >
      <div className="overflow-hidden">
        <div className="relative border-b-2 border-purple-500">
          <img
            src={data?.img}
            alt={data?.title}
            className="w-full h-full"
            data-aos="fade-down"
          />
          <p className="absolute bottom-0 w-full h-48 bg-gradient-to-b from-black/0 to-black"></p>
          <p
            className="absolute bottom-14 xs:bottom-11 left-0 text-4xl md:text-3xl sm:text-2xl xs:text-xl px-[3vw] font-bold "
            data-aos=""
          >
            {data?.title}
          </p>

          <p
            className="absolute bottom-5 left-0 text-2xl md:text-xl sm:text-base px-[3vw] font-semibold"
            data-aos=""
          >
            Participation : {data?.participation}
          </p>
          {data.title !== "Battle-dore" && (
          <button
            className="absolute bottom-5 right-5 text-center py-5 px-8 cursor-pointer btn sm:py-2 sm:px-5 xs:px-2"
            data-aos="fade-left"
          >
            Register
          </button>)}
        </div>

        <div className="bg-black/30">
          <div
            className="text-2xl md:text-xl sm:text-lg p-5 pt-10 mb-5 bg-black/30 backdrop-blur-sm font-semi shadow-md shadow-purple-300 rounded-2xl"
            data-aos="fade-right"
          >
            {data?.quote}
            <div
              className=" text-lg sm:text-sm text-justify pt-5"
              data-aos="fade-left"
            >
              {data?.desc}
            </div>
          </div>
          <div
            className="mt-5 text-center bg-black/30 backdrop-blur-sm shadow-md shadow-purple-300 rounded-2xl p-5"
            data-aos="fade-right"
          >
            <p> Total Fees : ₹{data?.fees} /-</p>
          </div>
          <div
            className=" text-left mt-5 bg-black/30 backdrop-blur-sm shadow-md shadow-purple-300 rounded-2xl p-5"
            data-aos="fade-left"
          >
            <p> Rules :</p>
            <ol className="list-none p-5">
              <li>{data?.r1}</li>
              <li>{data?.r2}</li>
              <li>{data?.r3}</li>
              <li>{data?.r4}</li>
              <li>{data?.r5}</li>
              <li>{data?.r6}</li>
              <li>{data?.r7}</li>
            </ol>
          </div>
          <div
            className="text-left mt-5 bg-black/30 backdrop-blur-sm shadow-md shadow-purple-300 rounded-2xl p-5"
            data-aos="fade-left"
          >
            <p>For Queries,</p>
            <p>Contact :-</p>
            <p>Divyadeepsinh Gohil : +91 9081578050</p>
          </div>
        </div>
        {data.title === "Battle-dore" && (
        <div className="flex items-center sm:flex-col pt-5 justify-center space-x-[5vw] sm:space-x-0 sm:space-y-[5vh]">
          <button className="text-center p-2 w-64 btn" data-aos="zoom-in">
            REGISTER HERE FOR SINGLES
          </button>
          <button className="text-center p-2 w-64 btn" data-aos="zoom-in">
            REGISTER HERE FOR DOUBLES
          </button>
        </div>
      )}
        <div className="flex items-center flex-wrap pt-5 justify-center space-x-[10vw] sm:space-x-2 sm:spce-y-5">
        
          {data?.title !== "22nd-yard" && (
            <button
              className="text-center p-2 w-24 btn"
              onClick={handlePrev}
              data-aos="zoom-in"
            >
              PREVIOUS
            </button>
          )}
          {data?.title !== "Wall-E-Ball" && (
            <button
              className="text-center p-2 w-24 btn"
              onClick={handleNext}
              data-aos="zoom-in"
            >
              NEXT
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Estuffmain;
