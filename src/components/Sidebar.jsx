import React from "react";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Sidebar = ({ handleClick, handleClick1 }) => {
  
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

  return (
    <div className="text-white fixed h-screen bg-black/75 w-[25vw] md:w-[35vw] sm:w-[60vw] xs:w-[100vw] text-lg overflow-scroll">
      <div className=" absolute top-10 left-10 cursor-pointer">
        <RxCross1 color="white" size="30px" onClick={handleClick} />
      </div>
      <div className="pl-20 pt-20 space-y-3">
        {categories.map((category, key) => (
          <p
            key={key}
            className="cursor-pointer hover:text-xl hover:text-slate-500 "
          >
            <Link to={category.route} onClick={(handleClick, handleClick1)}>
              {category.title}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
