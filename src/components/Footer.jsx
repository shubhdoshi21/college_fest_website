import React, { useEffect, useRef, useState } from "react";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { TiLocation } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";
import images from "../assets/shubh/images";

const Footer = () => {
  const counterRef = useRef(null);
  const [showSideLogo, setShowSideLogo] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 100,
      offset: 0,
      easing: "ease-in-out",
    });

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowSideLogo(false);
        } else {
          setShowSideLogo(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <>
      {showSideLogo && (
        <div
          className={`fixed bottom-0 left-0 p-3 overflow-scroll z-20`}
          data-aos="slide-up"
        >
          <div className="hover:-translate-y-[1vh] hover:translate-x-[1vh] transition duration-300 hover:scale-125 p-2">
            <Link
              to="http://www.facebook.com/Paramarsh.ideasinfinite/"
              target="_blank"
            >
              <IoLogoFacebook size={25} className="icon" />
            </Link>
          </div>
          <div className="hover:-translate-y-[1vh] hover:translate-x-[1vh] transition duration-300 p-2 hover:scale-125">
            <Link
              to="http://instagram.com/msu_paramarsh?igshid=MzRlODBiNWFlZA=="
              target="_blank"
            >
              <IoLogoInstagram size={25} className="icon1" />
            </Link>
          </div>
          <div className="hover:-translate-y-[1vh] hover:translate-x-[1vh] transition duration-300 p-2 hover:scale-125">
            <Link
              to="https://in.linkedin.com/company/paramarsh-ideas-infinite"
              target="_blank"
            >
              <IoLogoLinkedin size={25} className="icon2" />
            </Link>
          </div>
          <div className="hover:-translate-y-[1vh] hover:translate-x-[1vh] transition duration-300 p-2 hover:scale-125">
            <Link to="https://twitter.com/msu_paramarsh" target="_blank">
              <FaXTwitter
                size={25}
                className="icon3 hover:bg-white rounded-md p-[2px]"
              />
            </Link>
          </div>
          <div className="hover:-translate-y-[1vh] hover:translate-x-[1vh] transition duration-300 p-2 hover:scale-125">
            <Link to="https://www.youtube.com/@msu_paramarsh" target="_blank">
              <IoLogoYoutube size={25} className="icon4" />
            </Link>
          </div>
        </div>
      )}
      <footer className="w-screen bggrad flex-col flex text-purple-300 h-[500px] sm:h-auto  overflow-hidden">
          <div className=" items-center justify-center w-full lg:hidden sm:flex">
            <img src={images.msulogo} alt="" className="w-[20%] p-1" />
          </div>
        <div className="w-full flex-row xs:flex-col flex h-full">
          <div className=" w-1/3 h-full flex flex-col justify-evenly sm:w-1/2 xs:w-full" >
            <div className="flex w-full flex-col items-center justify-center">
              <div className="font-bold text-3xl md:text-xl sm:text-lg borderzz text-center flex w-full p-2">
                CONNECT WITH US
              </div>
              <div className="flex m-2">
                <div className="text-center flex md:text-sm items-center justify-center">
                  <IoIosCall color="" size={30} className="p-1 mr-1" />
                  <a href="tel:+919510387540">+91 9510387540</a>
                </div>
              </div>
              <div className="flex mx-2 mb-2">
                <div className="text-center flex md:text-sm items-center justify-center flex-wrap">
                  <HiOutlineMail color="" size={30} className="p-1 mr-1" />
                  <a href="mailto:msu.paramarsh2k23@gmail.com">
                    msu.paramarsh2k23@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center">
              <div
                className="font-bold text-3xl md:text-xl sm:text-lg borderzz text-center flex w-full p-2"
                ref={counterRef}
              >
                FOLLOW US
              </div>
              <div
                className="flex flex-row justify-evenly w-full p-2"
                data-aos="slide-down"
              >
                <div className="hover:-translate-y-[1vh] transition duration-300 hover:scale-125 p-2">
                  <Link
                    to="http://www.facebook.com/Paramarsh.ideasinfinite/"
                    target="_blank"
                  >
                    <IoLogoFacebook size={25} className="icon" />
                  </Link>
                </div>
                <div className="hover:-translate-y-[1vh] transition duration-300 p-2 hover:scale-125">
                  <Link
                    to="http://instagram.com/msu_paramarsh?igshid=MzRlODBiNWFlZA=="
                    target="_blank"
                  >
                    <IoLogoInstagram size={25} className="icon1" />
                  </Link>
                </div>
                <div className="hover:-translate-y-[1vh] transition duration-300 p-2 hover:scale-125">
                  <Link
                    to="https://in.linkedin.com/company/paramarsh-ideas-infinite"
                    target="_blank"
                  >
                    <IoLogoLinkedin size={25} className="icon2" />
                  </Link>
                </div>
                <div className="hover:-translate-y-[1vh] transition duration-300 p-2 hover:scale-125">
                  <Link to="https://twitter.com/msu_paramarsh" target="_blank">
                    <FaXTwitter
                      size={25}
                      className="icon3 hover:bg-white rounded-md p-[2px]"
                    />
                  </Link>
                </div>
                <div className="hover:-translate-y-[1vh] transition duration-300 p-2 hover:scale-125">
                  <Link
                    to="https://www.youtube.com/@msu_paramarsh"
                    target="_blank"
                  >
                    <IoLogoYoutube size={25} className="icon4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" items-center justify-center flex w-1/3 sm:hidden">
            <img src={images.msulogo} alt="" className="w-[90%] p-5" />
          </div>
          <div className=" w-1/3 h-full flex flex-col justify-evenly sm:w-1/2 xs:w-full">
            <div className=" flex w-full flex-col items-center justify-center">
              <div className="font-bold text-3xl md:text-xl sm:text-lg borderzz text-center flex w-full p-2">
                FOR LATEST UPDATES
              </div>
              <div className="m-2 text-center md:text-sm">
                Write your email down to get news about any upcoming activities!
              </div>
              <div className="flex p-1">
                <form className="flex w-full justify-center items-center">
                  <div className="flex ring-fuchsia-700 ring-1 p-1 rounded-sm w-11/12">
                    <input
                      type="text"
                      className="bg-purple-300 outline-none rounded-tl-sm rounded-bl-sm backdrop-blur-sm text-purple-700 p-1 w-2/3 md:text-sm custom-input"
                      placeholder="Email address"
                    ></input>
                    <button className="text-center rounded-tr-sm rounded-br-sm bg-[#631b7367] backdrop-blur-xl text-purple-400 p-1 w-1/3 md:text-sm">
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center">
              <div className="font-bold text-center flex flex-wrap justify-center">
                <div className="font-bold text-3xl md:text-xl sm:text-lg borderzz text-center flex w-full p-2">
                  VISIT US AT
                </div>
                <a
                  href="https://goo.gl/maps/e3HhoiP1dwnZpuBp8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiLocation color="" size={50} className="p-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="items-center justify-center flex w-full p-2">
          <p className="text-purple-200">&#169; website handled by &nbsp;</p>
          <p className="font-bold">
            <Link to="/web">WEB TEAM'23</Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
