import React from "react";
import i from "../components/mylswami.png";
const Guestlec = () => {
  return (
    <div className="w-full h-full bg-black px-[10vw]">
      <div className="text-5xl md:text-4xl sm:text-3xl flex justify-center text-center font-bold text-white py-[5vh] px-[5vw]">
        GUEST LECTURE OF PARAMARSH'23
      </div>

      <div className="flex  justify-center flex-col">
        <img src={i} alt="bg" className="w-[80vw] self-center" />
        <p className="text-center font-semibold text-white text-4xl md:text-3xl sm:text-2xl py-[5vh]">
          Dr Mylswamy Anudurai
        </p>
      </div>

      <div className=" text-xl md:text-lg sm:text-base xs:text-sm text-white px-[5vw] space-y-[2vh]">
        <p className="text-justify">
          Mylswamy Annadurai popularly known as " The Moon Man Of India" is a
          prominent Indian scientist and an esteemed figure in the Indian Space
          Program. His enchantment has helped India achieve augmenting
          milestones in space and satellite technology. Paramarsh'22 fervently
          presents Dr Mylswamy Annadurai for a session on "India's space
          expedition to the Moon, Mars and beyond", His meticulous knowledge and
          boundless experience will help ignite young minds to be more adept.
          Paramarsh applauds valuable presence of an ingenious personality who
          has such an immense contribution to the Indian Space Satellite
          Program.
        </p>

        <ul className="list-disc px-[3vw]">
          <li>
            {" "}
            He is Vice President of Tamil Nadu State Council for Science and
            Technology.
          </li>
          <li>
            {" "}
            He is Chairman and Board of Governor of the National Research and
            Design Forum.
          </li>
          <li> He was the Director of the ISRO Satellite Space Center.</li>
          <li>He was the Director of the ISRO Satellite Space Center.</li>
          <li>
            He was the Project Director of Chandrayan-1, Chandrayan-2 and
            Program Director of Mangalyaan.
          </li>
          <li>
            The intriguing movie " Mission Mangal" 's character played by Akshay
            Kumar was inspired by him.
          </li>
          <li>
            He was the mission director of the Indian National Satellite System
            and Geosynchronous Satellite Program.
          </li>
          <li> He was listed among the 100 Global thinkers of 2014.</li>
        </ul>
        <div className="flex items-center flex-wrap justify-center py-[5vh]">
          <button className="text-center text-white border border-x-white border-y-slate-400 p-2  hover:bg-black/80">
            REGISTER HERE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Guestlec;
