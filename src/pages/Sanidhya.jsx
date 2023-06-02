import React from "react";

import i1 from "../components/sap.jpg";
import i2 from "../components/little.jpeg";
import i3 from "../components/speaking.jpeg";

const Sanidhya = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex flex-wrap items-center justify-center text-white">
        <div className=" text-9xl md:text-8xl sm:text-6xl xs:text-5xl pt-[25vh] px-3 w-[100vw] text-center font-bold">
          SANIDHYA
        </div>
        <div className="w-[30vw] h-[80vh] p-10 md:w-[50vw] sm:w-[100vw]">
          <img src={i1} alt="" className="" />
          <p className="text-xl text-center p-1 font-semibold">
            Saplings Distribution
          </p>
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
        <div className="w-[30vw] h-[80vh] p-10 md:w-[50vw] sm:w-[100vw]">
          <img src={i2} alt="" />
          <p className="text-xl text-center p-1 font-semibold">Little Steps</p>
          <p className="text-justify p-1">
            A small step towards the upliftment counts. We at Paramarsh, believe
            the same. This year we conducted a donation drive , providing
            underprivileged kids with educational kits and boosting up their
            confidence with our little step towards development.
          </p>
        </div>
        <div className="w-[30vw] h-[80vh] p-10 md:w-[50vw] sm:w-[100vw]">
          <img src={i3} alt="" />
          <p className="text-xl text-center p-1 font-semibold">
            Speaking Street
          </p>
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
