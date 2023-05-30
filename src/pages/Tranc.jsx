import React, { useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import i1 from "../components/gl jpg.jpg";
import i2 from "../components/workshop jpg.jpg";
import Sidebar from "../components/Sidebar";
const Tranc = () => {
  const showHandler = () => {
    setshowSidebar(!showSidebar);
  };
  const [showSidebar, setshowSidebar] = useState(false);
  return (
    <div className="bg-black text-white">
      {!showSidebar ? (
        <div className="fixed top-10 left-10 cursor-pointer">
          <CgMenuLeftAlt color="white" size="35px" onClick={showHandler} />
        </div>
      ) : (
        <Sidebar handleClick={showHandler} />
      )}
      <div className="flex flex-wrap items-center justify-center">
        <div className=" text-9xl md:text-8xl sm:text-6xl xs:text-5xl pt-[25vh] px-3 w-[100vw] text-center pb-[5vh]">
          TRANSCENDENCE
        </div>
        <div className="w-[50vw] px-[10vw]">
          <img src={i1} alt="" />
        </div>
        <div className="w-[50vw] px-[10vw]">
          <img src={i2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Tranc;
