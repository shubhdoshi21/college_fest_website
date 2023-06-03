import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Smokalmain = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const allData = location.state.smokalData;
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
      {/* <img
        src={i1}
        alt="bg"
        className="w-screen h-screen bg-cover bg-no-repeat fixed -z-10"
      /> */}
      <div className="flex items-center justify-center">
        <img
          src={data.img}
          alt={data.title}
          className="w-[90vw] px-[5vw] pt-[10vh]"
        />
      </div>

      <div className="text-4xl md:text-3xl sm:text-2xl xs:text-xl px-[10vw] py-[5vh] font-bold">
        {data.title}
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
        </ol>
      </div>
      <div className="px-[10vw] md:px-[5vw] text-left pt-[5vh]">
        <p>For Queries,</p>
        <p>Contact :-</p>
        <p>Divyadeepsinh Gohil : +91 9081578050</p>
      </div>
      <div className="flex items-center flex-wrap justify-center py-[2vh]">
        <button className="text-center text-white border border-x-white border-y-slate-400 p-2  hover:bg-black/80">
          REGISTER HERE
        </button>
      </div>
      <div className="flex items-center flex-wrap p-[2vh] justify-center space-x-[10vw]">
        {data?.title !== "Broadway-Beats" && (
          <button
            className="text-center text-white border border-x-white border-y-slate-400 p-2  hover:bg-black/80"
            onClick={handlePrev}
          >
            PREVIOUS
          </button>
        )}
        {data?.title !== "Smoking Ace's" && (
          <button
            className="text-center text-white border border-x-white border-y-slate-400 p-2  hover:bg-black/80"
            onClick={handleNext}
          >
            NEXT
          </button>
        )}
      </div>
    </div>
  );
};

export default Smokalmain;
