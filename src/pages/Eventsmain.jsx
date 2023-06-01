import React from "react";
import { useLocation } from "react-router-dom";
import i1 from "../assets/shubh/images/5.jpg";

const Eventsmain = () => {
  const location = useLocation();
  const data = location.state.eventsData;
  return (
    <div className="w-full h-full text-white text-center">
      <img
        src={i1}
        alt="bg"
        className="w-screen h-screen bg-cover bg-no-repeat fixed -z-10"
      />
      <div className="flex items-center justify-center">
        <img src={data.img} alt={data.title} className="w-[90vw] px-[5vw]" />
      </div>

      <div className="text-4xl md:text-3xl sm:text-2xl xs:text-xl pt-[10vh] font-bold">
        {data.title}
      </div>
      <div className="text-2xl md:text-xl sm:text-lg p-[5vh] font-semibold">
        {data.quote}
      </div>
      <div className=" text-lg sm:text-sm text-justify px-[10vh]">
        {data.desc}
      </div>
      <div className="px-[10vh] text-left pt-[5vh]">
        <p> Total Fees : ₹{data.fees} /-</p>
        <p> Participation : {data.participation}</p>
      </div>
      <div className="px-[10vh] text-left pt-[5vh]">
        <p> Rules :</p>
        <ol className="list-decimal p-5">
          <li>{data.r1}</li>
          <li>{data.r2}</li>
          <li>{data.r3}</li>
          <li>{data.r4}</li>
          <li>{data.r5}</li>
          <li>{data.r6}</li>
          <li>{data.r7}</li>
        </ol>
        <p>Judging Criteria :</p>
        <ul className="list-disc p-5">
          <li>{data.j1}</li>
          <li>{data.j2}</li>
          <li>{data.j3}</li>
          <li>{data.j4}</li>
        </ul>
      </div>
      <div className="px-[10vh] text-left pt-[5vh]">
        <p>For Queries,</p>
        <p>Contact :-</p>
        <p>Varshil Kotecha : +91 9428839058</p>
      </div>
      <div className="flex items-center flex-wrap p-[5vh] justify-center space-x-[10vw]">
        <button className="text-center text-white border border-x-white border-y-slate-400 p-2  hover:bg-black/80">
          PREVIOUS
        </button>
        <button className="text-center text-white border border-x-white border-y-slate-400 p-2  hover:bg-black/80">
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Eventsmain;
