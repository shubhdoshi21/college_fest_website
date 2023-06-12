import React from "react";
import images from "../assets/shubh/images";
import { pronite } from "../assets/shubh/data";

const Pronite = () => {
  return (
    <div className=" text-white">
      <div className="flex flex-wrap items-center justify-center">
        <div className=" text-9xl md:text-8xl sm:text-6xl xs:text-5xl pt-[25vh] px-3 w-[100vw] text-center font-bold">
          PRONITE
          <p className="text-lg px-[3vw] pt-[10vh] pb-[5vh] text-center font-semibold">
            The jubilation of experiencing your fandom artists live is
            unbeatable. Paramarsh has never failed to make the audience amazed.
          </p>
        </div>
        <div className="w-[80vw] sm:w-[90vw] text-justify">
          <img src={images.pro} alt="" className="w-full" />
          <p className="text-2xl sm:text-xl text-center pt-5 font-semibold">
            Madhur Sharma
          </p>
          <p className="py-5">
            Madhur Sharma is an Indian Playback singer and live performer from
            Bhopal based in Mumbai. He is well known for number of popular
            songs, including " KAALI KAALI ZULFON KE" . He has emerged as the
            most popular online sensation of 2022. He has garnered more than 500
            million views and 71.1M streams across all media. His first original
            song "Yaari" was released in 2019 under "Times Music" and was a
            great hit. This song was released on the occasion of friendship day
            and have already crossed 2+ million views. Witness the immersive and
            soulful voice that will pierce your heart through the melodies
            songs.
          </p>
          <p>Register Now before the tickets run out!!</p>
          <p>Venue: Faculty of Technology and Engineering, MSU</p>
          <p>Date: 8Th January FREE ENTRY FOR ALL</p>
          <p>REGISTRATION IS MANDATORY Limited Entries only</p>
        </div>
      </div>
      <div className="flex items-center flex-col py-[5vh]">
        <button className="text-center text-white border border-x-white border-y-slate-400 p-2 hover:text-black hover:bg-white">
          REGISTER HERE
        </button>
      </div>
      <p className="text-4xl sm:text-2xl p-10 text-center font-semibold">
        PAST PRONITES :
      </p>
      <div className="flex flex-wrap items-center justify-center">
        {pronite.map((dat, key) => (
          <div className="sm:w-[90vw] w-[80vw] text-justify">
            <img src={dat.img} alt={dat.title} className="w-full" />
            <p className="text-2xl sm:text-xl  text-center pt-5 font-semibold">
              {dat.title}
            </p>
            <p className="pb-[5vh] pt-[2vh]">{dat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pronite;
