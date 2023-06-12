import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
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
import { CgMenuLeftAlt } from "react-icons/cg";
import { RxPinTop } from "react-icons/rx";
import Eventsmain from "./pages/Eventsmain";
import Smokalmain from "./pages/Smokalmain";
import Guestlec from "./pages/Guestlec";
import Workshop from "./pages/Workshop";
import Estuffmain from "./pages/Estuffmain";
import images from "./assets/shubh/images";
import Navbar from "./components/Navbar";
import Sponsors from "./pages/Sponsors";

function App() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 700;
  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  const showHandler = () => {
    setshowSidebar(!showSidebar);
  };
  const [showSidebar, setshowSidebar] = useState(false);

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
    <div
      className="ab bg-black/40"
      onLoad={handleScrollToTop}
    >
      <img
        src={images.bg}
        alt="bg"
        className="w-screen h-screen bg-cover bg-no-repeat fixed -z-10"
      />

      {width > breakpoint ? (
        <Navbar />
      ) : (
        [
          !showSidebar ? (
            <div className="fixed top-10 left-10 cursor-pointer z-50 ">
              <CgMenuLeftAlt color="white" size="35px" onClick={showHandler} />
            </div>
          ) : (
            <Sidebar handleClick={showHandler} />
          ),
        ]
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />
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
      </Routes>
      {showScrollToTop && (
        <div className="fixed bottom-3 right-3 p-3  hover:-translate-y-[1vh] transition duration-300 z-20 bg-black rounded-full">
          <RxPinTop
            color="white"
            size="20px"
            onClick={handleScrollToTop}
            className="shadow-md"
          />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;

// 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
