import React from "react";
import { RxCross1 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ handleClick, setShowModal, showModal }) => {
  const location = useLocation();
  const categories = [
    { title: "Home", route: "/" },
    { title: "About Us", route: "/about" },
    {
      title: "Events",
      route: "/event",
      route1: "/event/Eloquence",
      route2: "/event/Bizaurus",
      route3: "/event/The-Fading-Trail",
      route4: "/event/Inquisitive",
      route5: "/event/The-False-Perception",
      route6: "/event/Rangmanch",
      route7: "/event/Faneticz",
      route8: "/event/Adrenaline-Rush",
    },
    {
      title: "Transcedence",
      route: "/tranc",
      route1: "/guestlec",
      route2: "/workshop",
    },
    { title: "Startupedia", route: "/startup" },
    {
      title: "Smokal",
      route: "/smokal",
      route1: "/smokal/Broadway-Beats",
      route2: "/smokal/Comicality",
      route3: "/smokal/Enchantz",
      route4: "/smokal/Caesura",
      route5: "/smokal/Smoking%20Ace's",
    },
    { title: "Extravaganza", route: "/extravag" },
    {
      title: "E-stuff",
      route: "/estuff",
      route1: "/estuff/22nd-yard",
      route2: "/estuff/Battle-dore",
      route3: "/estuff/Wall-E-Ball",
    },
    { title: "Cognizance", route: "/cogni" },
    { title: "Sanidhya", route: "/sanidhya" },
    { title: "Pronite", route: "/pronite" },
    { title: "Sponsors", route: "/sponsor" },
    { title: "Our Team", route: "/team", route1: "/web" },
  ];

  return (
    <div
      className={`text-purple-200 fixed h-screen bg-black/75 w-[25vw] md:w-[35vw] sm:w-[60vw] xs:w-[100vw] overflow-scroll z-50 ease-in-out duration-300 backdrop-blur-md`}
    >
      <div className=" absolute top-10 left-10 cursor-pointer">
        <RxCross1 color="white" size="30px" onClick={handleClick} />
      </div>
      <div className="pl-20 pt-20 space-y-3">
        {categories.map((category, key) => (
          <p
            key={key}
            className="cursor-pointer text-lg hover:scale-110 transition duration-200 hover:text-purple-300 "
          >
            <Link
              to={category.route}
              onClick={handleClick}
              className={
                location.pathname === category.route ||
                location.pathname === category.route1 ||
                location.pathname === category.route2 ||
                location.pathname === category.route3 ||
                location.pathname === category.route4 ||
                location.pathname === category.route5 ||
                location.pathname === category.route6 ||
                location.pathname === category.route7 ||
                location.pathname === category.route8
                  ? "text-purple-500"
                  : ""
              }
            >
              {category.title}
            </Link>
          </p>
        ))}
      </div>
      <div className="pl-20 py-3">
        <p
          className={`cursor-pointer text-lg hover:scale-110 transition duration-200 hover:text-purple-300 ${
            showModal ? "text-purple-500" : "text-purple-200"
          }`}
          onClick={() => setShowModal(true)}
        >
          Contact
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
