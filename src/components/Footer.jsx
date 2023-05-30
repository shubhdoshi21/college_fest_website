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
    <div className=" font-serif">
      <div className="py-5 flex justify-center flex-wrap filter invert">
        <div className="hover:animate-bounce p-2">
          <a
            href="http://www.facebook.com/Paramarsh.ideasinfinite/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoFacebook size={25} />
          </a>
        </div>
        <div className="hover:animate-bounce p-2">
          <a
            href="http://instagram.com/msu_paramarsh?igshid=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoInstagram size={25} />
          </a>
        </div>

        <div className="hover:animate-bounce p-2">
          <a
            href="https://in.linkedin.com/company/paramarsh-ideas-infinite"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin size={25} />
          </a>
        </div>
        <div className="hover:animate-bounce p-2">
          <a
            href="https://twitter.com/msu_paramarsh"
            target="_blank"
            rel="noopener noreferrer" 
          >
            <IoLogoTwitter size={25} />
          </a>
        </div>
        <div className="hover:animate-bounce p-2">
          <a
            href="https://www.youtube.com/@msu_paramarsh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoYoutube size={25} />
          </a>
        </div>
      </div>

      <div className="flex justify-center flex-wrap ">
        {categories.map((category, key) => (
          <div
            key={key}
            className="cursor-pointer rounded-full p-2 hover:text-black hover:bg-white text-white "
          >
            <Link to={category.route}>{category.title}</Link>
          </div>
        ))}
      </div>
      <div className="justify-center py-2 flex flex-wrap text-center">
        <span className=" text-slate-300 py-2 px-1 text-sm">&copy;Website Handled By</span>
        <span className="text-white py-2 px-1">
         <Link to="/web">WebTeam'23</Link></span>
      </div>
    </div>
  );
};

export default Footer;
