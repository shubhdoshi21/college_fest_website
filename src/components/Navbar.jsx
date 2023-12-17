import React, { useState } from "react";
import images from "../assets/shubh/images";
import { Link, useLocation } from "react-router-dom";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { motion } from "framer-motion";

const Navbar = ({ setShowModal, showModal }) => {
  const [showNavbar, setshowNavbar] = useState(false);
  const location = useLocation();
  const showHandler1 = () => {
    setshowNavbar(!showNavbar);
  };

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
    { title: "Our Team", route: "/team", route1: "/web" },
  ];

  const segments = [
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
  ];

  return (
    <div className="w-full bg-black/60 flex text-purple-200 px-[2vw] fixed h-[10vh] items-center z-50 justify-end space-x-[1vw] backdrop-blur-md">
      <div className="flex flex-grow items-center">
        <Link to="/">
          <img
            src={images.logo}
            alt="Paramarsh"
            className="w-[4vw] rounded-full mx-[2vw] hover:scale-110 transition duration-200 ring-2 ring-purple-950"
          />
        </Link>
      </div>
      <div className="flex h-full">
        {categories.map((category, key) => (
          <div
            key={key}
            className="cursor-pointer text-lg text-purple-200 hover:text-purple-400 self-center w-24 text-center h-full items-center justify-center flex hover:border-b-2 border-b-purple-700"
          >
            <Link
              to={category.route}
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
                  ? "text-purple-500 borderzz"
                  : ""
              }
            >
              {category.title}
            </Link>
          </div>
        ))}
      </div>
      <motion.div
        className="cursor-pointer text-lg w-32 text-purple-200 flex flex-row h-[10vh] hover:text-purple-400 "
        onMouseEnter={() => setshowNavbar(true)}
        onMouseLeave={() => setshowNavbar(false)}
        onClick={showHandler1}
      >
        <div
          className={`self-center w-24 text-center items-center justify-center flex ${
            location.pathname === segments[0].route ||
            location.pathname === segments[1].route ||
            location.pathname === segments[2].route ||
            location.pathname === segments[3].route ||
            location.pathname === segments[4].route ||
            location.pathname === segments[5].route ||
            location.pathname === segments[6].route ||
            location.pathname === segments[7].route ||
            location.pathname === segments[0].route1 ||
            location.pathname === segments[2].route1 ||
            location.pathname === segments[4].route1 ||
            location.pathname === segments[0].route2 ||
            location.pathname === segments[2].route2 ||
            location.pathname === segments[4].route2 ||
            location.pathname === segments[2].route3 ||
            location.pathname === segments[4].route3 ||
            location.pathname === segments[2].route4 ||
            location.pathname === segments[2].route5
              ? "text-purple-500 borderzz px-3"
              : ""
          }`}
        >
          Segments
        </div>
        {!showNavbar ? (
          <BsChevronDown
            size={15}
            className="self-center m-1 hover:scale-125 transition duration-100"
          />
        ) : (
          <>
            <BsChevronUp
              size={15}
              className="self-center m-1 hover:scale-125 transition duration-100"
            />
            <motion.div
              className="absolute mt-[10vh] w-auto h-auto flex flex-col text-center  backdrop-blur-md"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.2 }}
              exit={{ opacity: 0, scaleY: 0 }}
              onMouseEnter={() => setshowNavbar(true)}
              onMouseLeave={() => setshowNavbar(false)}
            >
              {segments.map((category, key) => (
                <Link to={category.route}>
                  <motion.div
                    key={key}
                    className={`cursor-pointer px-[2vw] py-[1vh] hover:text-purple-400 text-purple-200 bg-black/60 h-full items-center justify-center flex hover:border-b-2 border-b-purple-700 ${
                      location.pathname === category.route ||
                      location.pathname === category.route1 ||
                      location.pathname === category.route2 ||
                      location.pathname === category.route3 ||
                      location.pathname === category.route4 ||
                      location.pathname === category.route5
                        ? "text-purple-500 borderzz"
                        : ""
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1, delay: 0.08 * key }}
                    exit={{ opacity: 0 }}
                  >
                    {category.title}
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </motion.div>
      <div className="cursor-pointer text-lg w-20 text-purple-200 hover:text-purple-400 self-center text-center h-full items-center justify-center flex hover:border-b-2 border-b-purple-700">
        <Link
          to="/sponsor"
          className={
            location.pathname === "/sponsor" ? "text-purple-500 borderzz" : ""
          }
        >
          Sponsors
        </Link>
      </div>
      <div className="flex hover:border-b-2 border-b-purple-700 h-full">
        <div
          className={`cursor-pointer text-lg w-20  hover:text-purple-400 self-center text-center items-center justify-center flex ${
            showModal || location.pathname === "/contact"
              ? "text-purple-500 borderzz px-3"
              : "text-purple-200 "
          }`}
          onClick={() => setShowModal(true)}
        >
          Contact
        </div>
      </div>
    </div>
  );
};

export default Navbar;
