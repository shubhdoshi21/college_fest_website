import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import images from "../assets/shubh/images";

const Startup = () => {
  Aos.init({
    offset: 10,
  });

  return (
    <>
      <div className=" text-purple-300 px-20 md:px-10 sm:px-5 py-[10vh] md:pb-[5vh] md:pt-0">
        <div className="flex justify-center w-full items-center flex-col">
          <div className="overflow-hidden flex-col items-center">
            <div className="flex justify-center items-center border-b-2 border-b-purple-600">
              <img src={images.startup} alt="" />
            </div>
            <div className="">
              <div
                className="text-2xl md:text-xl sm:text-lg p-5 pt-10 mb-5 font-semibold bg-black/30 backdrop-blur-sm shadow-md ring-fuchsia-800 ring-1 rounded-lg m-1 "
                data-aos="zoom-out"
              >
                <div className="text-center">
                  It’s not magic. It’s talent and sweat” (Silicon Valley).
                </div>
                <div
                  className=" text-lg sm:text-sm text-center pt-5"
                  data-aos="zoom-out"
                >
                  Why not give that talent a platform, a stairway to success. An
                  idea is the beginning of an achievement. Paramarsh’23 ignited
                  the idea of Startupedia - a development dialogue, with the
                  sole aim of giving path to young mind. We take pleasure in
                  providing young innovators and entrepreneurs a platform to
                  take their talent and ideas to the level they deserve.
                  Cozoom-out with an idea isn’t enough, it is crafting of the
                  idea into a real working thing, that’s a truly delightful
                  experience. It is about making the idea come alive.
                  Startupedia is amalgamation of workshops, consolidation,
                  mentoring and presentation.
                </div>
              </div>

              <div
                className=" text-left mt-5 bg-black/30 backdrop-blur-sm shadow-md ring-fuchsia-800 ring-1 rounded-lg m-1 p-5 sm:text-sm"
                data-aos="zoom-out"
              >
                <p className=""> Rules :</p>
                <ol className="list-none p-5 paragraphtext">
                  <li>
                    1) Participants have to register via Konfhub. There is no
                    fee for entry.
                  </li>
                  <li>
                    2) Participation can be done as an individual or a team.
                  </li>
                  <li>
                    3) Each individual or team may enter only one idea or
                    concept.
                  </li>
                  <li>
                    4) Pitch competitors cannot be part of multiple teams.
                  </li>
                  <li>5) Entries must be the original work of entrants.</li>
                  <li>
                    6) Ensure your availability on the day of the event before
                    participating
                  </li>
                  <li>
                    7) Participants have to share the presentation about their
                    startup on paramarsh22.startupedia@gmail.com{" "}
                  </li>
                  <li>
                    8) Participants will be short listed on the basis of:-
                  </li>
                  <li className="pl-4"> a) Level of traction </li>
                  <li className="pl-4"> b) Market value and growth</li>
                  <li className="pl-4">c) Product and business plan</li>
                  <li className="pl-4">d) Futuristic vision</li>
                  <li>
                    9) Shortlisted participants will get an opportunity to pitch
                    their ideas in front of investors and jury.
                  </li>
                </ol>
              </div>

              <div
                className="text-left mt-5 bg-black/30 backdrop-blur-sm shadow-md ring-fuchsia-800 ring-1 rounded-lg m-1 p-5"
                data-aos="zoom-out"
              >
                <p className="">For Queries,</p>
                <p>Contact :-</p>
                <p>Om Singh: +91 7096898216</p>
              </div>
              <div
                className="flex items-center flex-wrap justify-center py-5"
                data-aos="zoom-out"
              >
                <button className="text-center p-2 btn">REGISTER HERE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Startup;
