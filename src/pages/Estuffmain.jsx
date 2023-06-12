import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Estuffmain = () => {
  const location = useLocation();

  const [data, setData] = useState([]);
  const allData = location.state.estuffData;
  const key = location.state.key;
  const [pageKey, setPageKey] = useState(key);

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
    <div className="w-full h-full text-white text-center">
      <div className="flex items-center justify-center">
        <img
          src={data.img}
          alt={data.title}
          className="w-[90vw] px-[3vw] pt-[10vh]"
        />
      </div>

      <div className="text-4xl md:text-3xl sm:text-2xl xs:text-xl px-[10vw] py-[5vh] font-bold">
        {data.title}
      </div>
      <div className="text-2xl md:text-xl sm:text-lg px-[10vw] md:px-[5vw] font-semibold">
        {data.quote}
      </div>
      <div className=" text-lg sm:text-sm text-justify px-[10vw] md:px-[5vw]">
        {data.desc}
      </div>
      <div className="px-[10vw] md:px-[5vw] text-left pt-[5vh]">
        <p> Total Fees : ₹{data.fees} /-</p>
        <p> Participation : {data.participation}</p>
      </div>
      <div className="px-[10vw] md:px-[5vw] text-left pt-[5vh]">
        <p> Rules :</p>
        <ol className="list-decimal p-5">
          <li>{data.r1}</li>
          <li>{data.r2}</li>
          <li>{data.r3}</li>
          <li>{data.r4}</li>
        </ol>
      </div>
      <div className="px-[10vw] md:px-[5vw] text-left pt-[5vh]">
        <p>For Queries,</p>
        <p>Contact :-</p>
        <p>Varshil Kotecha : +91 9428839058</p>
      </div>

      {data.title === "Battle-dore" && (
        <div className="flex items-center sm:flex-col p-[2vh] justify-center space-x-[5vw] sm:space-x-0 sm:space-y-[5vh]">
          <button className="text-center text-white border border-x-white border-y-slate-400 p-2  hover:bg-black/80">
            REGISTER HERE FOR SINGLES
          </button>
          <button className="text-center text-white border border-x-white border-y-slate-400 p-2  hover:bg-black/80">
            REGISTER HERE FOR DOUBLES
          </button>
        </div>
      )}
      {data.title !== "Battle-dore" && (
        <div className="flex items-center flex-wrap p-[2vh] justify-center space-x-[5vw]">
          <button className="text-center text-white border border-x-white border-y-slate-400 p-2  hover:bg-black/80">
            REGISTER HERE
          </button>
        </div>
      )}
      <div className="flex items-center flex-wrap p-[2vh] justify-center space-x-[5vw]">
        {data?.title !== "22nd-yard" && (
          <button
            className="text-center text-white border border-x-white border-y-slate-400 p-2  hover:bg-black/80 "
            onClick={handlePrev}
          >
            PREVIOUS
          </button>
        )}
        {data?.title !== "Wall-E-Ball" && (
          <button
            className="text-center text-white border border-x-white border-y-slate-400 p-2  hover:bg-black/80 px-8"
            onClick={handleNext}
          >
            NEXT
          </button>
        )}
      </div>
    </div>
  );
};

export default Estuffmain;
