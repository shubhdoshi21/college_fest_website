import React from "react";

import i1 from "../components/arena.jpg";
import i2 from "../components/radio.png";
const Cogni = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex flex-col items-center px-10">
        <p className=" text-9xl md:text-8xl sm:text-6xl xs:text-5xl pt-[25vh] px-3 font-bold">
          Cognizance
        </p>
        <p className="text-base px-8 pt-[10vh] text-justify">
          Industrial visits are an integral part of the college curriculum for
          professional degrees and it's main objective is to offer an insight
          into the working of a factory or industrial unit. While a lot of
          theoretical knowledge is available in books, students get an
          opportunity to experience them only when they visit these units and
          delve deeper into the reality. Paramarsh under it's segment-
          Cognizance, raises this initiative to give a vision to the budding
          engineers and lead their goals with acuity.
        </p>
        <p className="text-5xl md:text-4xl pt-[10vh] text-center font-semibold">
          BENEFITS OF INDUSTRIAL VISITS:
        </p>
        <ul className="list-disc mt-[10vh]">
          <li>Offers practical training.</li>
          <li>Opportunity to interact with big businesses.</li>
          <li>
            Chance to explore different aspects of manufacturing, processing and
            production.
          </li>
          <li>Brings face-to-face with industrial realities.</li>
          <li>Illusions about a workplace are considerably solved.</li>
          <li>Develops interpersonal skills.</li>
          <li>Regular visits help to identify different areas of work.</li>
        </ul>
      </div>
      <div className="flex flex-col items-center px-10">
        <p className="text-5xl md:text-4xl pt-[10vh] text-center">
          COMPANIES AFFILIATED WITH US:
        </p>
        <p className="text-3xl md:text-2xl pt-[5vh] text-center">
          TECHNICAL COMPANIES
        </p>
        <div></div>
        <p className="text-3xl md:text-2xl pt-[5vh] text-center">
          OUT OF THE BOX SECTORS
        </p>
        <ul className="list-disc mt-[5vh]">
          <li>3D printing</li>
          <li>Animation</li>
          <li>Radio Station</li>
          <li>Renewable Energy Sector</li>
          <li>Sewage treatment plant</li>
          <li>Dairy</li>
        </ul>
        <p className="text-3xl md:text-2xl pt-[5vh] text-center">
          Terms and Conditions:
        </p>
        <ul className="list-disc mt-[5vh]">
          <li>
            Follow the visiting rules and regulations applicable on the
            premises.
          </li>
          <li>Engage with guides and ask questions.</li>
          <li>Partake in group activities.</li>
          <li>Be respectful toward classmates & fellow travellers.</li>
          <li>The minimum strength for each visit is 10 students.</li>
          <li>
            Technical companies are limited to specified departments only.
          </li>
        </ul>
        <p className="text-3xl md:text-2xl py-[5vh] text-center">
          FOR QUERIES, CONTACT:
        </p>
        <p className=" text-center p-1">Divyadeepsinh Gohil : +91 9081578050</p>
        <p className=" text-center p-1">Email Id : paramarsh22.fte@gmail.com</p>
      </div>
      <div className="flex flex-wrap items-center">
        <div className="text-3xl md:text-2xl pt-[5vh] text-center w-[100vw]">
          PAST VISITS:
        </div>
        <div className="w-[50vw] p-10">
          <img src={i1} alt="" />
          <p className=" text-center p-1">Arena Animation</p>
        </div>
        <div className="w-[50vw] p-10">
          <img src={i2} alt="" />
          <p className=" text-center p-1">Radio Mirchi</p>
        </div>
      </div>
    </div>
  );
};

export default Cogni;
