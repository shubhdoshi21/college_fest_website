import React, { useState } from 'react'
import { CgMenuLeftAlt } from "react-icons/cg";

import Sidebar from "../components/Sidebar";
import { Link } from 'react-router-dom';
const Team = () => {
  const showHandler = () =>{
    setshowSidebar(!showSidebar)
  }
  const [showSidebar, setshowSidebar] = useState(false);
  return (
    <div className="bg-black text-white">
      {!showSidebar ? (
        <div className="fixed top-10 left-10 cursor-pointer">
          <CgMenuLeftAlt color="white" size="35px" onClick={showHandler}/>
        </div>
      ) : (
        <Sidebar handleClick={showHandler}/>
      )}
    <div className="flex flex-wrap items-center justify-center px-[4vw] space-x-[3vw] space-y-[10px]">
    <div className=" text-9xl md:text-8xl sm:text-6xl xs:text-5xl pt-[25vh] px-3 w-[100vw] pb-[5vh] text-center">
      OUR TEAM
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
      <div className='border border-white w-[20vw] h-[50vh]'></div>
      <div className='border border-white w-[20vw] h-[50vh]'></div>
      <div className='border border-white w-[20vw] h-[50vh]'></div>
      <div className='border border-white w-[20vw] h-[50vh]'></div>
      <div className='border border-white w-[20vw] h-[50vh]'></div>
      <div className='border border-white w-[20vw] h-[50vh]'></div>
      <div className='border border-white w-[20vw] h-[50vh]'></div>
      <div className='border border-white w-[20vw] h-[50vh]'></div>
      </div>
      <div className="flex items-center flex-col py-[5vh]">
        <button className="text-center text-white border border-x-white border-y-slate-400 p-2 hover:text-black hover:bg-white">
        <Link to="/web">WEB TEAM</Link>
          
        </button>
      </div>
    </div>
  )
}

export default Team