import React from "react";

import { Link } from "react-router-dom";
import YouTube from "react-youtube";
// import i1 from "../components/1.jpg";

const Home = (handleClick1) => {
  const categories = [
    { title: "Home", route: "/" },
    { title: "About Us", route: "/about" },
    { title: "Events", route: "/event" },
    { title: "Transcedence", route: "/tranc" },
    { title: "Startupedia", route: "/startup" },
    { title: "Smokal", route: "/smokal" },
    { title: "Extravaganza", route: "/extravag" },
    { title: "E-stuff", route: "/estuff" },
    { title: "Cognizance", route: "/cogni" },
    { title: "Sanidhya", route: "/sanidhya" },
    { title: "Pronite", route: "/pronite" },
    { title: "Our Team", route: "/team" },
    { title: "Contact", route: "/contact" },
  ];
  const opts = {
    height: "312",
    width: "512",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className="w-full h-full">
      {/* <img
        src={i1}
        alt="bg"
        className="w-screen h-screen bg-cover bg-no-repeat fixed -z-10"
      /> */}


        <div className="flex flex-col items-center text-white ">
          <p className=" text-9xl md:text-8xl sm:text-6xl xs:text-5xl pt-[25vh] px-3  font-bold">
            PARAMARSH
          </p>
          <p className="text-6xl md:text-5xl sm:text-4xl xs:text-2xl px-2 font-semibold">
            IDEAS INFINITE
          </p>
        </div>
        <div className="flex flex-col items-center text-white">
          <p className="text-5xl md:text-4xl pt-[70vh] text-center">
            Lorem, ipsum dolor.
          </p>
          <p className="text-base px-[10vw] md:px-[5vw] pt-[10vh] text-justify xs:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quis
            minus consequuntur commodi cumque explicabo amet! Sunt quam hic
            maiores mollitia, beatae itaque sed aperiam, eius doloremque
            asperiores quibusdam animi numquam id suscipit sint magnam ea
            facilis a. Ad, voluptatibus!
          </p>
        </div>
        <div className="flex items-center flex-col py-[5vh]">
          <button className="text-center text-white border border-x-white border-y-slate-400 p-2 hover:text-black hover:bg-white">
            <Link to="/about" onClick={handleClick1}>
              ABOUT US
            </Link>
          </button>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="flex p-5 overflow-auto">
            <YouTube videoId="2cgf2MuilPQ" opts={opts} className=""/>
          </div>
          <div className="flex p-5 overflow-auto">
            <YouTube videoId="GD0kufiqhM0" opts={opts} className=""/>
          </div>
        </div>

        <div className="flex justify-center flex-wrap p-10">
          {categories.map((category, key) => (
            <div
              key={key}
              className="cursor-pointer rounded-full p-2 hover:text-black hover:bg-white text-white "
            >
              <Link to={category.route} onClick={handleClick1}>
                {category.title}
              </Link>
            </div>
          ))}
        </div>
      </div>

  );
};

export default Home;
