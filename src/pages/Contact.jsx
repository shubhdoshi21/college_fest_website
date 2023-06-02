import React, { useState } from "react";

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
    <div className="w-full h-full bg-black flex flex-wrap">
      <div className="flex flex-wrap text-white text-center justify-center">
        <p className=" text-6xl md:text-5xl sm:text-4xl xs:text-2xl pt-[25vh] px-2 font-bold">
          CONTACT US
        </p>
        <p className="text-base px-[15vw] p-[3vh] text-center justify-center font-semibold">
          Find the nearest venues to your address or send us a message for
          further details about any events you’re interested in.
        </p>
      </div>
      <div className="flex">
        <div className="w-[50vw] px-[10vw] space-y-3 py-10 sm:w-[100vw]">
          <input
            type="text"
            placeholder="Name"
            className="outline-none text-white rounded-xl w-full bg-slate-800 px-5 py-3"
            onChange={nameHandle}
          />
          <input
            type="text"
            placeholder="E-mail"
            className="outline-none text-white rounded-xl w-full bg-slate-800 px-5 py-3"
            onChange={mailHandle}
          />
          <input
            type="text"
            placeholder="Contact Number"
            className="outline-none text-white rounded-xl w-full bg-slate-800 px-5 py-3"
            onChange={numHandle}
          />
          <input
            type="text"
            placeholder="Message"
            className="outline-none text-white rounded-xl w-full bg-slate-800 px-5 py-3"
            onChange={msgHandle}
          />
          <button className="text-center text-white border border-x-white border-y-slate-400 p-2 hover:text-black hover:bg-white w-full rounded-xl">
            SUBMIT
          </button>
        </div>
      </div>
      <div className="text-white w-[50vw] text-center justify-center space-y-3 p-10 flex sm:w-[100vw] flex-wrap">
        <p className="flex w-full">Varshil kotecha : (+91) 9428839058</p>
        <p className="flex w-full">Divyadeepsinh Gohil : (+91) 9081578050</p>
        <p className="flex w-full">EMAIL : paramarsh22.fte@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
