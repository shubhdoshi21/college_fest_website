import React from "react";

const Startup = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex flex-wrap items-center justify-center">
        <div className=" text-9xl md:text-8xl sm:text-6xl xs:text-4xl pt-[25vh] px-3 w-[100vw] text-center font-bold">
          STARTUPEDIA
          <p className="text-5xl md:text-4xl sm:text-3xl xs:text-1xl px-2 pt-[2vh] font-semibold">
            A Development Dialogue
          </p>
          <p className="text-xl px-8 pt-[5vh] text-center font-semibold">
            “It’s not magic. It’s talent and sweat” (Silicon Valley).
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className=" px-[20vw] pt-[5vh] text-justify ">
            Why not give that talent a platform, a stairway to success. An idea
            is the beginning of an achievement. Paramarsh’22 ignited the idea of
            Startupedia - a development dialogue, with the sole aim of giving
            path to young mind. We take pleasure in providing young innovators
            and entrepreneurs a platform to take their talent and ideas to the
            level they deserve. Coming up with an idea isn’t enough, it is
            crafting of the idea into a real working thing, that’s a truly
            delightful experience. It is about making the idea come alive.
            Startupedia is amalgamation of workshops, consolidation, mentoring
            and presentation.
          </p>
        </div>
      </div>
      <div className="px-[20vw] py-[5vh]">
        <p className="text-xl">Rules:-</p>
        <ol className="list-decimal">
          <li>
            Participants have to register via Google form/ Townscript. There is
            no fee for entry.
          </li>
          <li>Participation can be done as an individual or a team.</li>
          <li>Each individual or team may enter only one idea or concept.</li>
          <li>Pitch competitors cannot be part of multiple teams.</li>
          <li>Entries must be the original work of entrants.</li>
          <li>
            Ensure your availability on the day of the event before
            participating.
          </li>
          <li>
            {" "}
            Participants will be short listed on the basis of : -
            <ul className="text-lg list-disc px-[5vw]">
              <li>Level of traction</li>
              <li>Market value and growth</li>
              <li>Product and business plan</li>
              <li>Futuristic vision</li>
            </ul>
          </li>
          <li>
            Shortlisted participants will get an opportunity to pitch their
            ideas in front of investors and jury.
          </li>
        </ol>
      </div>
      <div className="px-[20vw] py-[5vh]">
        <p className="text-xl">FOR QUERIES, </p>
        <p className="">CONTACT :-</p>
        <p className="">Visakh Nair : +91 9510350778</p>
      </div>
      <div className="flex items-center flex-col py-[5vh]">
        <button className="text-center text-white border border-x-white border-y-slate-400 p-2 hover:text-black hover:bg-white">
          REGISTER HERE
        </button>
      </div>
    </div>
  );
};

export default Startup;
