import React from "react";
import { Link } from "react-router-dom";
import { IoLogoLinkedin } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import images from "../assets/shubh/images";
const teamMembers = [
  {
    name: "Megh Prajapati",
    role: "Front End Developer",
    image:
      images.team1,
      linkedin: "https://in.linkedin.com/",
      github: "https://github.com/",
  },
  {
    name: "Man Chopda",
    role: "Front End Developer",
    image:
      images.team2,
      linkedin: "https://in.linkedin.com/",
      github: "https://github.com/",
  },
  {
    name: "Shubh Doshi",
    role: "Front End Developer",
    image:
    images.team3,
      linkedin: "https://in.linkedin.com/",
      github: "https://github.com/",
  },
  {
    name: "Riddhi Thakkar",
    role: "Front End Developer",
    image:
    images.team4,
      linkedin: "https://in.linkedin.com/",
      github: "https://github.com/",
  },
  {
    name: "Priyal Rawal",
    role: "Front End Developer",
    image:
    images.team5,
      linkedin: "https://in.linkedin.com/",
      github: "https://github.com/",
  },
  {
    name: "Hetvi Shah",
    role: "Front End Developer",
    image:
    images.team6,
      linkedin: "https://in.linkedin.com/",
      github: "https://github.com/",
  },
];

const Team = () => {
  return (
    <div className="py-[10vh] md:pb-[5vh] md:pt-0 text-purple-300">
      <section className="wrapper1">
        <div className="top tracking-normal px-2 ">OUR TEAM</div>

        <div className="bottom tracking-normal px-2" aria-hidden="true">
          OUR TEAM
        </div>
      </section>
      <div className="flex items-center justify-evenly w-full flex-wrap gap-5 px-10 sm:p-10 xs:p-0">
      {teamMembers.map((member, index) => (
          <div key={index} className="profile-card">
            <div className="img ">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="caption text-black">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className="social-links items-center justify-center flex">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoLinkedin size={25} />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub size={25} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center py-[5vh]">
        <button className="text-center p-2 btn">
          <Link to="/web">WEB TEAM</Link>
        </button>
      </div>
    </div>
  );
};

export default Team;
