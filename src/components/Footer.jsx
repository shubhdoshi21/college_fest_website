import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";
import images from "../assets/shubh/images";
// import Carousel from "../components/Carousel";

const Footer = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1000;
  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <>
      {width < breakpoint ? (
        <div className="flex flex-wrap py-[1vh] overflow-scroll filter invert items-center justify-center bg-white/60">
          <div className="hover:-translate-y-[1vh] hover:-translate-x-[1vh] transition duration-300 hover:scale-125 p-2">
            <Link
              to="http://www.facebook.com/Paramarsh.ideasinfinite/"
              target="_blank"
            >
              <IoLogoFacebook size={25} />
            </Link>
          </div>
          <div className="hover:-translate-y-[1vh] hover:-translate-x-[1vh] transition duration-300 p-2 hover:scale-125">
            <Link
              to="http://instagram.com/msu_paramarsh?igshid=MzRlODBiNWFlZA=="
              target="_blank"
            >
              <IoLogoInstagram size={25} />
            </Link>
          </div>

          <div className="hover:-translate-y-[1vh] hover:-translate-x-[1vh] transition duration-300 p-2 hover:scale-125">
            <Link
              to="https://in.linkedin.com/company/paramarsh-ideas-infinite"
              target="_blank"
            >
              <IoLogoLinkedin size={25} />
            </Link>
          </div>
          <div className="hover:-translate-y-[1vh] hover:-translate-x-[1vh] transition duration-300 p-2 hover:scale-125">
            <Link to="https://twitter.com/msu_paramarsh" target="_blank">
              <IoLogoTwitter size={25} />
            </Link>
          </div>
          <div className="hover:-translate-y-[1vh] hover:-translate-x-[1vh] transition duration-300 p-2 hover:scale-125">
            <Link to="https://www.youtube.com/@msu_paramarsh" target="_blank">
              <IoLogoYoutube size={25} />
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col fixed bottom-0 left-0 p-3 overflow-scroll filter invert z-20">
          <div className="hover:-translate-y-[1vh] hover:translate-x-[1vh] transition duration-300 hover:scale-125 p-2">
            <Link
              to="http://www.facebook.com/Paramarsh.ideasinfinite/"
              target="_blank"
            >
              <IoLogoFacebook size={25} />
            </Link>
          </div>
          <div className="hover:-translate-y-[1vh] hover:translate-x-[1vh] transition duration-300 p-2 hover:scale-125">
            <Link
              to="http://instagram.com/msu_paramarsh?igshid=MzRlODBiNWFlZA=="
              target="_blank"
            >
              <IoLogoInstagram size={25} />
            </Link>
          </div>

          <div className="hover:-translate-y-[1vh] hover:translate-x-[1vh] transition duration-300 p-2 hover:scale-125">
            <Link
              to="https://in.linkedin.com/company/paramarsh-ideas-infinite"
              target="_blank"
            >
              <IoLogoLinkedin size={25} />
            </Link>
          </div>
          <div className="hover:-translate-y-[1vh] hover:translate-x-[1vh] transition duration-300 p-2 hover:scale-125">
            <Link to="https://twitter.com/msu_paramarsh" target="_blank">
              <IoLogoTwitter size={25} />
            </Link>
          </div>
          <div className="hover:-translate-y-[1vh] hover:translate-x-[1vh] transition duration-300 p-2 hover:scale-125">
            <Link to="https://www.youtube.com/@msu_paramarsh" target="_blank">
              <IoLogoYoutube size={25} />
            </Link>
          </div>
        </div>
      )}
      <div className="justify-center py-2 flex flex-wrap text-center sm:text-sm bg-black/60">
        <span className=" text-slate-300 py-2 px-1 ">
          &copy;Website Handled By
        </span>
        <span className="text-white py-2 px-1 hover:scale-110 transition duration-300">
          <Link to="/web">WebTeam'23</Link>
        </span>
      </div>
      <div className="flex flex-wrap w-full bg-black/60 items-center justify-center">
        <p className=" text-white text-xl py-[2vh] px-[2vw] flex w-[100vw] justify-center">
          {" "}
          Recognized by :
        </p>
        <div className="flex flex-col space-y-[2vw] px-[2vw] items-center justify-center">
          <img
            src={images.patro1}
            alt=""
            className="w-80 h-48 md:w-40 md:h-24"
          />
          <img
            src={images.patro2}
            alt=""
            className="filter invert w-80 h-48 md:w-40 md:h-24"
          />
        </div>
        <div className="bg-black/60 flex space-x-[2vw] px-[2vw]">
          <img src={images.patro3} alt="" className="w-80 md:w-40" />
        </div>
      </div>
      {/* <div className="px-[2vw]">
      <Carousel />
    </div> */}
    </>
  );
};

export default Footer;
