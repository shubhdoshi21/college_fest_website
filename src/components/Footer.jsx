import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  
  const categories = [
    { title: "Home", route: "/" },
    { title: "About Us", route: "/about" },
    { title: "Events", route: "/event" },
    { title: "Our Team", route: "/team" },
    { title: "Contact", route: "/contact" },
  ];
  return (
    <div className="bg-black/70">
      <div className="py-5 flex justify-center flex-wrap filter invert">
        <div className="hover:-translate-y-[2vh] transition duration-300 hover:scale-125 p-2">
          <Link
            to="http://www.facebook.com/Paramarsh.ideasinfinite/"
            target="_blank"
          >
            <IoLogoFacebook size={25} />
          </Link>
        </div>
        <div className="hover:-translate-y-[2vh] transition duration-300 p-2 hover:scale-125">
          <Link
            to="http://instagram.com/msu_paramarsh?igshid=MzRlODBiNWFlZA=="
            target="_blank"
          >
            <IoLogoInstagram size={25} />
          </Link>
        </div>

        <div className="hover:-translate-y-[2vh] transition duration-300 p-2 hover:scale-125">
          <Link
            to="https://in.linkedin.com/company/paramarsh-ideas-infinite"
            target="_blank"
          >
            <IoLogoLinkedin size={25} />
          </Link>
        </div>
        <div className="hover:-translate-y-[2vh] transition duration-300 p-2 hover:scale-125">
          <Link to="https://twitter.com/msu_paramarsh" target="_blank">
            <IoLogoTwitter size={25} />
          </Link>
        </div>
        <div className="hover:-translate-y-[2vh] transition duration-300 p-2 hover:scale-125">
          <Link to="https://www.youtube.com/@msu_paramarsh" target="_blank">
            <IoLogoYoutube size={25} />
          </Link>
        </div>
      </div>

      <div className="flex justify-center flex-wrap ">
        {categories.map((category, key) => (
          <div
            key={key}
            className="cursor-pointer rounded-full p-2 hover:text-black hover:bg-white text-white hover:scale-110 transition duration-300"
          >
            <Link to={category.route}>{category.title}</Link>
          </div>
        ))}
      </div>
      <div className="justify-center py-2 flex flex-wrap text-center">
        <span className=" text-slate-300 py-2 px-1 text-sm ">
          &copy;Website Handled By
        </span>
        <span className="text-white py-2 px-1 hover:scale-110 transition duration-300">
          <Link to="/web">WebTeam'23</Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
