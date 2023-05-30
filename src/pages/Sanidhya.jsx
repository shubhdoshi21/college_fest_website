import React, { useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import i1 from "../components/sap.jpg";
import i2 from "../components/little.jpeg";
import i3 from "../components/speaking.jpeg";
import Sidebar from "../components/Sidebar";
const Sanidhya = () => {
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
      <div className="flex flex-wrap items-center justify-center text-white">
        <div className=" text-9xl md:text-8xl sm:text-6xl xs:text-5xl pt-[25vh] px-3 w-[100vw] text-center">
          SANIDHYA
        </div>
        <div className="w-[30vw] h-[80vh] p-10">
          <img src={i1} alt="" />
          <p className="text-xl text-center p-1">Saplings Distribution</p>
          <p className="text-justify p-1">
            Conservation is a crucial issue to confront the challenges mpther
            earth is facing such as climate change, urbanization, pollution,
            deforestation, and damage to the affluent flora and fauna. Assessing
            the opportunity, On World Nature Conservation Day Paramarsh
            scheduled an awareness-raising Drive at kamatibaug. In this drive,
            we educated pedestrians & common crowd about the threat of
            extinction to flora & fauna species and also distributed 100+
            saplings.
          </p>
        </div>
        <div className="w-[30vw] h-[80vh] p-10">
          <img src={i2} alt="" />
          <p className="text-xl text-center p-1">Little Steps</p>
          <p className="text-justify p-1">
            A small step towards the upliftment counts. We at Paramarsh, believe
            the same. This year we conducted a donation drive , providing
            underprivileged kids with educational kits and boosting up their
            confidence with our little step towards development.
          </p>
        </div>
        <div className="w-[30vw] h-[80vh] p-10">
          <img src={i3} alt="" />
          <p className="text-xl text-center p-1">Speaking Street</p>
          <p className="text-justify p-1">
            Youth is the treasure of a nation. What would happen if that only is
            misguided by the culpability of the society. To spread awareness
            regarding the same, Paramarsh'17 conducted street plays all over the
            city.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sanidhya;
