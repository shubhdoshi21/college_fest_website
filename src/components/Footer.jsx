import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = (handleClick1) => {
  const categories = [
    { title: "Home", route: "/" },
    { title: "About Us", route: "/about" },
    { title: "Events", route: "/event" },
    { title: "Our Team", route: "/team" },
    { title: "Contact", route: "/contact" },
  ];
  return (
    <div className="font-serif bg-black/70">
      <div className="py-5 flex justify-center flex-wrap filter invert">
        <div className="hover:animate-bounce p-2">
          <Link
            to="http://www.facebook.com/Paramarsh.ideasinfinite/"
            target="_blank"
          >
            <IoLogoFacebook size={25} />
          </Link>
        </div>
        <div className="hover:animate-bounce p-2">
          <Link
            to="http://instagram.com/msu_paramarsh?igshid=MzRlODBiNWFlZA=="
            target="_blank"
          >
            <IoLogoInstagram size={25} />
          </Link>
        </div>

        <div className="hover:animate-bounce p-2">
          <Link
            to="https://in.linkedin.com/company/paramarsh-ideas-infinite"
            target="_blank"
          >
            <IoLogoLinkedin size={25} />
          </Link>
        </div>
        <div className="hover:animate-bounce p-2">
          <Link to="https://twitter.com/msu_paramarsh" target="_blank">
            <IoLogoTwitter size={25} />
          </Link>
        </div>
        <div className="hover:animate-bounce p-2">
          <Link to="https://www.youtube.com/@msu_paramarsh" target="_blank">
            <IoLogoYoutube size={25} />
          </Link>
        </div>
      </div>

      <div className="flex justify-center flex-wrap ">
        {categories.map((category, key) => (
          <div
            key={key}
            className="cursor-pointer rounded-full p-2 hover:text-black hover:bg-white text-white "
          >
            <Link to={category.route} onClick={handleClick1}>
              {category.title}
            </Link>
          </div>
        ))}
      </div>
      <div className="justify-center py-2 flex flex-wrap text-center">
        <span className=" text-slate-300 py-2 px-1 text-sm">
          &copy;Website Handled By
        </span>
        <span className="text-white py-2 px-1">
          <Link to="/web" onClick={handleClick1}>
            WebTeam'23
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
