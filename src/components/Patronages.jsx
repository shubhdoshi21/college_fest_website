import React from "react";
import images from "../assets/shubh/images";

const patrons = [
  {
    title: "Prime Minister of India",
    image: images.patro1,
  },
  {
    title: "Current Chief Minister of Gujarat",
    image: images.patro2,
  },
  {
    title: "Home Minister of India",
    image: images.patro4,
  },
  {
    title: "Former Chief Minister of Gujarat",
    image: images.patro5,
  },
  {
    title: "UNESCO",
    image: images.patro3,
  },
];

const Patronages = () => {
  return (
    <div className="flex flex-wrap items-center justify-center w-screen">
      {patrons.map((patron, index) => (
        <div key={index} className="flex w-1/2 h-full items-center justify-center">
          <div className="items-center justify-center">
            <p className="text-purple-200 text-center md:text-base sm:text-sm font-semibold text-lg  w-full">
              Message from
            </p>
            <p className="text-purple-200 text-center md:text-base sm:text-sm font-semibold text-lg w-full">
              {patron.title}
            </p>
            <img
              src={patron.image}
              alt=""
              className="w-[30vw] mx-[3vw] mb-5 md:w-[35vw] sm:w-[40vw] self-center"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Patronages;
