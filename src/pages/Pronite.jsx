import React from "react";
import images from "../assets/shubh/images";
import { pronite } from "../assets/shubh/data";

const Pronite = () => {
  return (
    <div className="w-full h-full text-purple-300 py-[10vh]  md:pb-[5vh] md:pt-0">
      <section className="wrapper1">
        <div className="top tracking-normal px-2 ">PRONITE</div>

        <div className="bottom tracking-normal px-2" aria-hidden="true">
          PRONITE
        </div>
      </section>
      <p className="text-lg px-3 py-5 text-center font-semibold">
        The jubilation of experiencing your fandom artists live is unbeatable.
        Paramarsh has never failed to make the audience amazed.
      </p>

      <div className="flex flex-row sm:flex-col self-center items-center para rounded-lg mx-5 glow">
        <img
          src={images.procurrent}
          alt=""
          className="w-1/3 sm:w-1/2 m-2 ring-1 ring-fuchsia-700 rounded-xl"
        />
        <div className="flex flex-col mx-5">
          <p className="font-extrabold tracking-wider abttex text-center">Ravator</p>
          <p className="text-justify my-4 sm:text-sm">
            It's time to dance to the rhythm and immerse yourself in the
            captivating beats. Paramarsh is thrilled to introduce Our Artist -
            RAVATOR, a sensation both in the country and on the internet. He's
            known for his funky Electronic Dance Music. What's even more
            delightful is that this incredible Pronite event is completely free
            for everyone. So, prepare to move to the music, because this
            mesmerizing concert is bound to leave you awestruck.
          </p>
          <p className="text-left sm:text-sm">
            Date: 2nd October
          </p>
          <p className="text-left sm:text-sm">Time: 6:00 PM Onwards</p>
          <p className="text-left sm:text-sm mb-2">
            Venue: Faculty Of Technology & Engineering, The Maharaja Sayajirao
            University of Baroda.
          </p>
        </div>
      </div>

      <p className="text-4xl sm:text-2xl p-10 text-center font-semibold">
        PAST PRONITES :
      </p>
      <div className="flex justify-center w-screen items-center flex-col px-20 space-y-5 md:px-14 sm:px-5">
        {pronite.map((dat, key) => (
          <div className="flex flex-col w-full items-center para rounded-lg mx-5">
            <img
              src={dat.img}
              alt={dat.title}
              className="w-[40%] xs:w-[50%] p-1 border-b border-b-purple-600"
            />
            <p className="font-extrabold tracking-wider abttex text-center">{dat.title}</p>
            <p className="text-justify m-5 sm:text-sm">{dat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pronite;
