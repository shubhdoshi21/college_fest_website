import Home from "./pages/Home";
import { Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Event from "./pages/Event";
import Team from "./pages/Team";
import Cogni from "./pages/Cogni";
import Estuff from "./pages/Estuff";
import Extravag from "./pages/Extravag";
import Pronite from "./pages/Pronite";
import Sanidhya from "./pages/Sanidhya";
import Smokal from "./pages/Smokal";
import Startup from "./pages/Startup";
import Tranc from "./pages/Tranc";
import Web from "./pages/Web";
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import { RxPinTop } from "react-icons/rx";
import Eventsmain from "./pages/Eventsmain";
import Smokalmain from "./pages/Smokalmain";
import Guestlec from "./pages/Guestlec";
import Workshop from "./pages/Workshop";
import Estuffmain from "./pages/Estuffmain";
import Navbar from "./components/Navbar";
import Sponsors from "./pages/Sponsors";
import { RxCross2 } from "react-icons/rx";
import bg from "../src/assets/shubh/images/bg.mp4";
import images from "./assets/shubh/images";

function App() {
  const [showSidebar, setshowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Num, setNum] = useState("");
  const [Msg, setMsg] = useState("");
  const nameHandle = (e) => {
    setName(e.target.value);
  };
  const numHandle = (e) => {
    setNum(e.target.value);
  };
  const msgHandle = (e) => {
    setMsg(e.target.value);
  };
  const mailHandle = (e) => {
    setEmail(e.target.value);
  };
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const breakpoint = 990;
  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  const showHandler = () => {
    setshowSidebar(!showSidebar);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const topPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (topPosition > 0) {
        setshowScrollToTop(true);
      } else {
        setshowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [showScrollToTop, setshowScrollToTop] = useState(false);

  return (
    <div className="ab bg-black/40">
      <video
        src={bg}
        alt="bg"
        className="w-full h-full object-cover -z-10 bg-cover bg-no-repeat fixed"
        autoPlay
        muted
        loop
      />
      {width > breakpoint ? (
        <Navbar setShowModal={setShowModal} showModal={showModal} />
      ) : (
        [
          !showSidebar ? (
            <div className="fixed top-10 sm:top-5 sm:left-5 left-10 cursor-pointer z-50 ">
              <img
                src={images.menu}
                alt=""
                className="w-[35px] animate-spin"
                onClick={showHandler}
              />
            </div>
          ) : (
            <Sidebar
              handleClick={showHandler}
              setShowModal={setShowModal}
              showModal={showModal}
            />
          ),
        ]
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/event"
          element={<Event handleScrollToTop={handleScrollToTop} />}
        />
        <Route path="/team" element={<Team />} />
        <Route path="/cogni" element={<Cogni />} />
        <Route path="/estuff" element={<Estuff />} />
        <Route path="/extravag" element={<Extravag />} />
        <Route path="/pronite" element={<Pronite />} />
        <Route path="/sanidhya" element={<Sanidhya />} />
        <Route path="/smokal" element={<Smokal />} />
        <Route path="/startup" element={<Startup />} />
        <Route path="/tranc" element={<Tranc />} />
        <Route path="/web" element={<Web />} />
        <Route path="/guestlec" element={<Guestlec />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/sponsor" element={<Sponsors />} />
        <Route path="/event/:id" element={<Eventsmain />} />
        <Route path="/smokal/:id" element={<Smokalmain />} />
        <Route path="/estuff/:id" element={<Estuffmain />} />
        {/* <Route path="/letter" element={<Letter />} /> */}
      </Routes>
      {showScrollToTop && (
        <div className="fixed bottom-3 right-3 p-3  hover:-translate-y-[1vh] transition duration-300 z-20 bg-purple-500/70 rounded-full ring-2 ring-fuchsia-800">
          <RxPinTop
            color=""
            size="20px"
            onClick={handleScrollToTop}
            className=""
          />
        </div>
      )}
      {showModal ? (
        <>
          <div
            className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-white"
            data-aos="zoom-in"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black/60 outline-none focus:outline-none  backdrop-blur-md">
                <div className="flex items-center justify-between p-5 border-b border-solid border-purple-700 rounded-t ">
                  <h3 className="text-3xl font-semibold text-purple-200">
                    Write to us
                  </h3>
                  <button
                    className="bg-transparent border-0 items-center justify-center"
                    onClick={() => setShowModal(false)}
                  >
                    <RxCross2
                      size={25}
                      className="self-center hover:scale-125 transition duration-100"
                    />
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-black/60 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-sm font-bold my-1 text-purple-200">
                      Name
                    </label>
                    <input
                      className=" outline-none shadow appearance-none border rounded w-full py-3 px-5 text-black"
                      type="text"
                      onChange={nameHandle}
                    />
                    <label className="block text-sm font-bold my-1 text-purple-200">
                      E-mail
                    </label>
                    <input
                      className="outline-none shadow appearance-none border rounded w-full py-3 px-5 text-black"
                      type="text"
                      onChange={mailHandle}
                    />
                    <label className="block text-sm font-bold my-1 text-purple-200">
                      Contact Number
                    </label>
                    <input
                      className="outline-none shadow appearance-none border rounded w-full py-3 px-5 text-black"
                      type="text"
                      onChange={numHandle}
                    />
                    <label className="block text-sm font-bold my-1 text-purple-200">
                      Message
                    </label>
                    <input
                      className="outline-none shadow appearance-none border rounded w-full py-3 px-5 text-black"
                      type="text"
                      onChange={msgHandle}
                    />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-purple-700 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-purple-500 hover:bg-purple-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
                <div className="w-full text-purple-200 flex items-center justify-center px-6 pb-6 hover:text-purple-400 font-semibold">
                  <Link
                    to="/contact"
                    onClick={() => {
                      setShowModal(false);
                      setshowSidebar(false);
                    }}
                  >
                    Click here to know more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      <Footer />
    </div>
  );
}

export default App;

// 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
