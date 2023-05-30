import React, { useState } from "react";

import { CgMenuLeftAlt } from "react-icons/cg";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import i1 from "../components/1.jpg"

const Home = () => {
  const showHandler = () => {
    setshowSidebar(!showSidebar);
  };
  const [showSidebar, setshowSidebar] = useState(false);
  const categories = [
    { title: "Home", route:"/" },
    { title: "About Us", route:"/about" },
    { title: "Events", route:"/event" },
    { title: "Transcedence", route:"/tranc" },
    { title: "Startupedia", route:"/startup" },
    { title: "Smokal", route:"/smokal" },
    { title: "Extravaganza", route:"/extravag" },
    { title: "E-stuff", route:"/estuff" },
    { title: "Cognizance", route:"/cogni" },
    { title: "Sanidhya", route:"/sanidhya" },
    { title: "Pronite", route:"/pronite" },
    { title: "Our Team", route:"/team" },
    { title: "Contact", route:"/contact" },
  ];
  return (
    <div className="w-full h-full  ">
      <img src={i1} alt="bg" className="w-screen h-screen bg-cover bg-no-repeat fixed -z-10"/>
      {!showSidebar ? (
        <div className="fixed top-10 left-10 cursor-pointer">
          <CgMenuLeftAlt color="white" size="35px" onClick={showHandler} />
        </div>
      ) : (
        <Sidebar handleClick={showHandler} />
      )}
      <div className="flex flex-col items-center text-white">
        <p className=" text-9xl md:text-8xl sm:text-6xl xs:text-5xl pt-[25vh] px-3 ">
          PARAMARSH
        </p>
        <p className="text-6xl md:text-5xl sm:text-4xl xs:text-2xl px-2">
          IDEAS INFINITE
        </p>
      </div>
      <div className="flex flex-col items-center text-white">
        <p className="text-5xl md:text-4xl pt-[60vh] text-center">
          Lorem, ipsum dolor.
        </p>
        <p className="text-base px-8 pt-[10vh] text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quis
          minus consequuntur commodi cumque explicabo amet! Sunt quam hic
          maiores mollitia, beatae itaque sed aperiam, eius doloremque
          asperiores quibusdam animi numquam id suscipit sint magnam ea facilis
          a. Ad, voluptatibus!
        </p>
      </div>
      <div className="flex items-center flex-col py-[5vh]">
        <button className="text-center text-white border border-x-white border-y-slate-400 p-2 hover:text-black hover:bg-white">
        <Link to="/about">ABOUT US</Link>
        </button>
      </div>
      <div className="flex flex-wrap justify-center lg:space-x-5 lgm:space-x-0 p-10">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2cgf2MuilPQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/GD0kufiqhM0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="flex justify-center flex-wrap p-10">
        {categories.map((category, key) => (
          <div
            key={key}
            className="cursor-pointer rounded-full p-2 hover:text-black hover:bg-white text-white "
          >
            <Link to={category.route}>{category.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
