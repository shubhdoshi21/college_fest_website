import React from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import TypeWriterEffect from "react-typewriter-effect";

const Home = () => {
  const opts = {
    height: "312",
    width: "512",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center text-white ">
        <p className=" text-9xl md:text-8xl sm:text-6xl xs:text-5xl pt-[25vh] px-3">
          <TypeWriterEffect
            textStyle={{ fontFamily: "Red Hat Display" }}
            startDelay={100}
            cursorColor="black"
            text="PARAMARSH" //𝖕𝖆𝖗𝖆𝖒𝖆𝖗𝖘𝖍
            typeSpeed={150}
            eraseSpeed={100}
          />
        </p>
        <p className="text-6xl md:text-5xl sm:text-4xl xs:text-2xl px-2">
          <TypeWriterEffect
            textStyle={{ fontFamily: "Red Hat Display" }}
            startDelay={500}
            cursorColor="black"
            text="!DEAS !NF!N!TE" //𝔦𝔡𝔢𝔞𝔰 𝔦𝔫𝔣𝔦𝔫𝔦𝔱𝔢
            typeSpeed={75}
            eraseSpeed={100}
          />
        </p>
      </div>
      <div className="flex flex-col items-center text-white">
        <p className="text-5xl md:text-4xl pt-[70vh] text-center">
          The Joueurs Odyssey
        </p>
        <p className="text-base px-[10vw] md:px-[5vw] pt-[10vh] text-justify xs:text-sm">
          Experience the marvellous celebration of the jubilance within the
          facsimile world of Gaming. Get Ready to wander in a world far from the
          tiresome and frenzied one, where a fusion of nostalgic guests are here
          to welcome you, such as The robust Barbarian from Clash of Clans,
          Bright & Cheerful Super Mario, Indomitable Kratos, habitual daredevil
          hedgehog Sonic and many more who will rejuvenate all your joyous
          memories from Adolescence. You will glide into the world of beatitude,
          with the characters we used to adore while gaming a lot, amidst the
          theme of 2022 “The Joueurs Odyssey”.
        </p>
      </div>
      <div className="flex items-center flex-col py-[5vh]">
        <button className="text-center text-white border border-x-white border-y-slate-400 p-2 hover:text-black hover:bg-white">
          <Link to="/about">Know More</Link>
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="flex p-5 overflow-auto">
          <YouTube videoId="2cgf2MuilPQ" opts={opts} className="" />
        </div>
        <div className="flex p-5 overflow-auto">
          <YouTube videoId="GD0kufiqhM0" opts={opts} className="" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
