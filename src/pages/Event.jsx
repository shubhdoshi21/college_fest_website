import React, { useState } from 'react'
import { CgMenuLeftAlt } from "react-icons/cg";
import i1 from "../components/ELOQUENCE.jpg";
import i2 from "../components/bizaurus.jpeg";
import i3 from "../components/tft.jpg";
import i4 from "../components/inquiz.jpg";
import i5 from "../components/tfp.jpg";
import i6 from "../components/rangmanch.jpg";
import i7 from "../components/faneticz.jpg";
import i8 from "../components/AR.jpg";
import Sidebar from "../components/Sidebar";
const Event = () => {
  const showHandler = () =>{
    setshowSidebar(!showSidebar)
  }
  const [showSidebar, setshowSidebar] = useState(false);
  return (
    <div className="bg-black text-white">{!showSidebar ? (
      <div className="fixed top-10 left-10 cursor-pointer">
        <CgMenuLeftAlt color="white" size="35px" onClick={showHandler}/>
      </div>
    ) : (
      <Sidebar handleClick={showHandler}/>
    )}
    <div className="flex flex-wrap items-center justify-center text-white">
        <div className=" text-9xl md:text-8xl sm:text-6xl xs:text-5xl pt-[25vh] pb-[10vh] px-3 w-[100vw] text-center">
          EVENTS
        </div>
        <div className="w-[50vw] p-[10vh]"><img src={i1} alt="" /></div>
        <div className="w-[50vw] p-[10vh]"><img src={i2} alt="" /></div>
        <div className="w-[50vw] p-[10vh]"><img src={i3} alt="" /></div>
        <div className="w-[50vw] p-[10vh]"><img src={i4} alt="" /></div>
        <div className="w-[50vw] p-[10vh]"><img src={i5} alt="" /></div>
        <div className="w-[50vw] p-[10vh]"><img src={i6} alt="" /></div>
        <div className="w-[50vw] p-[10vh]"><img src={i7} alt="" /></div>
        <div className="w-[50vw] p-[10vh]"><img src={i8} alt="" /></div>
        </div>
    </div>
    
  )
}

export default Event