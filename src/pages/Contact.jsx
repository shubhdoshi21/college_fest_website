import React, { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
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
  return (
    <div className="text-purple-300 py-[10vh] md:pb-[5vh] md:pt-0">
      <section className="wrapper1">
        <div className="top tracking-normal px-2 md:text-[70px] sm:text-[50px] xs:text-[30px]">
          CONTACT US
        </div>
        <div
          className="bottom tracking-normal px-2 md:text-[70px] sm:text-[50px] xs:text-[30px]"
          aria-hidden="true"
        >
          CONTACT US
        </div>
      </section>
      <div className="w-full h-full flex flex-wrap">
        <div className="flex flex-wrap text-center justify-center w-full">
          <p className="text-base sm:text-sm px-10 text-center justify-center font-semibold flex items-center w-full">
            Find the nearest venues to your address or send us a message for
            further details about any events you’re interested in.
          </p>
        </div>
        <div className="flex">
          <div className="w-[50vw] px-[5vw] items-center justify-center space-y-3 py-10 sm:w-[100vw] sm:pb-0">
            <div className="flex ring-fuchsia-700 ring-1 p-1 rounded-md w-full">
              <input
                type="text"
                className="bg-purple-300 outline-none rounded-md backdrop-blur-sm text-purple-700 p-2 w-full md:text-sm custom-input"
                placeholder="Name"
                onChange={nameHandle}
              ></input>
            </div>
            <div className="flex ring-fuchsia-700 ring-1 p-1 rounded-md w-full">
              <input
                type="text"
                className="bg-purple-300 outline-none rounded-md backdrop-blur-sm text-purple-700 p-2 w-full md:text-sm custom-input"
                placeholder="E-Mail"
                onChange={mailHandle}
              ></input>
            </div>
            <div className="flex ring-fuchsia-700 ring-1 p-1 rounded-md w-full">
              <input
                type="text"
                className="bg-purple-300 outline-none rounded-md backdrop-blur-sm text-purple-700 p-2 w-full md:text-sm custom-input"
                placeholder="Contact Number"
                onChange={numHandle}
              ></input>
            </div>
            <div className="flex ring-fuchsia-700 ring-1 p-1 rounded-md w-full">
              <input
                type="text"
                className="bg-purple-300 outline-none rounded-md backdrop-blur-sm text-purple-700 p-2 w-full md:text-sm custom-input"
                placeholder="Message"
                onChange={msgHandle}
              ></input>
            </div>
            <button className="text-center rounded-sm bg-purple-800 hover:bg-purple-950 backdrop-blur-xl text-purple-400 p-1 w-full md:text-sm">
              SUBMIT
            </button>
          </div>
        </div>
        <div className="w-[50vw] justify-center text-center px-5 py-10 flex sm:w-[100vw] flex-col">
          <div className="flex">
            <div className="text-center flex items-center justify-center w-full">
              <IoIosCall color="" size={30} className="p-1 mr-1" />
              <a href="tel:+919510387540">Mehul Kanzaria : (+91)9510387540</a>
            </div>
          </div>
          <div className="flex m-2">
            <div className="text-center flex items-center justify-center w-full">
              <IoIosCall color="" size={30} className="p-1 mr-1" />
              <a href="tel:+919510387540">Naitik Kaklotar : (+91)7698839391</a>
            </div>
          </div>
          <div className="flex">
            <div className="text-center flex items-center justify-center flex-wrap w-full">
              <HiOutlineMail color="" size={30} className="p-1 mr-1" />
              <a href="mailto:msu.paramarsh2k23@gmail.com">
                E-Mail : msu.paramarsh2k23@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="w-[50vw] justify-center text-center px-5 flex md:w-[100vw] flex-col">
          <div className="flex flex-row w-full justify-center items-center">
            <SlLocationPin color="" size={30} className="p-1 mr-1" />
            <p className="flex">Address : </p>
          </div>
          <p className="w-full flex text-center justify-center">
            Faculty of Technology and Engineering, Kalabhavan, Dandiabazar,
            Vadodara - 390001.
          </p>
        </div>
        <div className=" w-[50vw] justify-center px-5 py-10 flex md:w-[100vw] flex-wrap">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                className="gmap_iframe"
                width="100%"
                frameBorder={0}
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?width=600&height=400&hl=en&q=msu techo&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              />
              <a href="https://gachanox.io/">Gacha Nox</a>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  ".mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
