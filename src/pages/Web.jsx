import React, { useState } from 'react'
import { CgMenuLeftAlt } from "react-icons/cg";
import Sidebar from "../components/Sidebar";

const Web = () => {
  const showHandler = () => {
    setshowSidebar(!showSidebar);
  };
  const [showSidebar, setshowSidebar] = useState(false);
  return (
    <div className="w-full h-full bg-black font-serif">
    {!showSidebar ? (
      <div className="fixed top-10 left-10 cursor-pointer">
        <CgMenuLeftAlt color="white" size="35px" onClick={showHandler} />
      </div>
    ) : (
      <Sidebar handleClick={showHandler} />
    )}
   <div className="flex flex-wrap items-center justify-center px-[4vw] space-x-[3vw] space-y-[10px]">
    <div className=" text-9xl md:text-8xl sm:text-6xl xs:text-5xl pt-[25vh] px-3 w-[100vw] pb-[5vh] text-center text-white">
      WEB TEAM
      </div>
      <div className='border border-white w-[20vw] h-[50vh]'></div>
      <div className='border border-white w-[20vw] h-[50vh]'></div>
      <div className='border border-white w-[20vw] h-[50vh]'></div>
      <div className='border border-white w-[20vw] h-[50vh]'></div>
      <div className='border border-white w-[20vw] h-[50vh]'></div>
      <div className='border border-white w-[20vw] h-[50vh]'></div>
      <div className='border border-white w-[20vw] h-[50vh]'></div>
      <div className='border border-white w-[20vw] h-[50vh]'></div>
      <div className='border border-white w-[20vw] h-[50vh]'></div>
      <div className='border border-white w-[20vw] h-[50vh]'></div>
      <div className='border border-white w-[20vw] h-[50vh]'></div>
      <div className='border border-white w-[20vw] h-[50vh]'></div>
      <div className='border border-white w-[20vw] h-[50vh]'></div>
      <div className='border border-white w-[20vw] h-[50vh]'></div>
      <div className='border border-white w-[20vw] h-[50vh]'></div>
     
     
      </div>

      </div>
  )
}

export default Web