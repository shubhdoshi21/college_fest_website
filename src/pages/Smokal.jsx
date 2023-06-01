import React from 'react'

import i1 from "../components/BROADWAY BEATS jpg.jpg";
import i2 from "../components/COMICALITY JPG.jpg";
import i3 from "../components/ENCHANTZ JPG.jpg";
import i4 from "../components/HINDI POETRY JPG.jpg";
import i5 from "../components/SMOKIN ACE'S JPG.jpg";

const Smokal = () => {
  
  return (
    <div className="bg-black text-white">
      
      <div className="flex flex-wrap items-center justify-center text-white">
        <div className=" text-9xl md:text-8xl sm:text-6xl xs:text-5xl pt-[25vh] px-3 w-[100vw] text-center">
          SMOKAL
        </div>
        <div className="w-[50vw] p-10"><img src={i1} alt="" /></div>
        <div className="w-[50vw] p-10"><img src={i2} alt="" /></div>
        <div className="w-[50vw] p-10"><img src={i3} alt="" /></div>
        <div className="w-[50vw] p-10"><img src={i4} alt="" /></div>
        <div className="w-[50vw] p-10"><img src={i5} alt="" /></div>
        </div>
    </div>
  )
}

export default Smokal