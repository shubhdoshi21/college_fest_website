import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import images from "../assets/shubh/images";

const Cogni = () => {
  const visitsData = [
    {
      title: "Radio Mirchi",
      image: images.cogni2,
      content:
        "Team Paramarsh visits the leading Radio station of the town - Radio Mirchi 98.3 to meet the enlivening voices behind the 24×7 vibrant Vadodara. Had a cognizant interaction with the Programming Head, Mr. Krishnamurthi Kumar.",
    },
    {
      title: "Arena Animation",
      image: images.cogni1,
      content:
        "A visit to the leading animation hub of the town - Arena Animation, was conducted.It was a workshop cum interactive session to perceive some valuable facts related to the world of animation. The session included: - • Introduction to the Field of Animation and Vfx. • Hands On Task of VFX using Green Screen. • Understanding the Use of Sound and Edit in Films with Live Recording(Foley).",
    },
    {
      title: "SEE LINKAGE",
      image: images.cogni3,
      content:
        "A visit was arrange for the students of Mechanical and Electrical Engineeringstudents to SEE Linkages Pvt Ltd, Vadodara. This industrial visit providedstudents better insights on Hydraulic & Pneumatic, Electrical & Mechanical Linkages, Customized Electromechanical assemblies as well as Customized Machine parts.",
    },
    {
      title: "HWP - Heavy water treatment plant",
      image: images.cogni4,
      content:
        "On July 18, 2022, Team Paramarsh paid a visit to HWP in Baroda. HWP is India's first monothermic ammonia-hydrogen exchange process plant.It also includes the manufacture of potassium metal and deuterium gas. We went on a plant tour that included the potassium metal plant, the TBP plant, and the sodium electrolytic cell. This industrial visit provided students perception on scientific and futuristic vision of our country. ",
    },
  ];
  const ben = [
    { content: " ●Offers practical training" },
    { content: "●Opportunit to interact with big bussiness" },
    {
      content:
        " ●Chance to explore different aspects of manufacturing, processing and production.",
    },
    { content: " ●Brings face-to-face with industrial realities." },
    { content: " ●Illusions about a workplace are considerably solved." },
    { content: "● Develops interpersonal skills." },
    { content: " ●Regular visits help to identify different areas of work." },
  ];

  return (
    <div className=" py-[10vh] md:pb-[5vh] md:pt-0 text-purple-300">
      <section className=" wrapper1">
        <div className=" top tracking-normal px-2 md:text-[70px] sm:text-[50px] xs:text-[30px]">
          COGNIZANCE
        </div>
        <div
          className=" bottom tracking-normal px-2 md:text-[70px] sm:text-[50px] xs:text-[30px]"
          aria-hidden="true"
        >
          COGNIZANCE
        </div>
      </section>
      <div className="w-full overflow-hidden">
        <div className=" flex justify-center items-center flex-col">
          <div className=" my-5 flex-col items-center justify-center">
            <p className="  px-10 md:px-5 md:text-lg sm:text-base xs:text-sm text-xl text-center ">
              Industrial visits are an integral part of the college curriculum
              for professional degrees and it's main objective is to offer an
              insight into the working of a factory or industrial unit.
            </p>
            <p className=" py-4 px-10 md:px-5 md:text-lg sm:text-base xs:text-sm text-xl text-center">
              While a lot of theoretical knowledge is available left books,
              students get an opportunity to experience them only when they
              visit these units and delve deeper into the reality.
            </p>
            <p className="  px-10 md:px-5 md:text-lg sm:text-base xs:text-sm text-xl text-center">
              Paramarsh under it's segment- Cognizance, raises this initiative
              to give a vision to the budding engineers and lead their goals
              with acuity.
            </p>
            <div className=" text-center my-5 text-[50px] md:text-[40px] sm:text-[35px] xs:text-[20px] text-purple-100">
              Past Visits:
            </div>
            <div className="space-y-5">
              {visitsData.map((visit, index) => (
                <div className="">
                  <div
                    key={index}
                    className="text-center"
                    data-aos="fade-left"
                  >
                    <p className="text-2xl borderzz pt-5">{visit.title}</p>
                  </div>
                  <div className=" flex flex-row sm:flex-col">
                    <img
                      className=" w-1/2 h-auto sm:w-full  p-2"
                      src={visit.image}
                      alt=""
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                    />
                    <p className="items-center sm:text-sm justify-center flex p-5" data-aos="zoom-out-left">
                      {visit.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="gap-2">
            <p className="text-[40px] md:text-[30px] sm:text-[20px] xs:text-[15px] text-center text-purple-100 py-5">
              Benefits of Industrial visits:
            </p>
            {ben.map((con, key) => (
              <ul key={key} className="sm:text-sm px-2">
                {con.content}
              </ul>
            ))}
          </div>

          <div className="gap-2">
            <p className="text-[40px] md:text-[30px] sm:text-[20px] xs:text-[15px] text-center text-purple-100 py-5">
              Out of the box sectors
            </p>
            <ul className="sm:text-sm space-y-2">
              <li>●3D printing</li>
              <li>●Animation</li>
              <li>●Radio Station</li>
              <li>●Renewable Energy Sector</li>
              <li>●Sewage treatment plant</li>
              <li>●Dairy</li>
            </ul>
          </div>

          <div className="text-[30px] md:text-[20px] sm:text-[15px] text-purple-100 pt-5">
            For Queries,
          </div>
          <div className="sm:text-sm">
            Contact :-
            <br />
            Krishna Rana :+91 8735886614
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cogni;
