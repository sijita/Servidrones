import React from "react";
import { Link } from "react-router-dom";
import Logo2 from "../assets/logo2.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const social = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/servidronescolombia",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/servidronescolombia/",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      link: "https://twitter.com/servidrones",
    },
  ]
  return (
    <footer className="footer footer-center p-10 bg-[#fba308] text-primary-content">
      <div>
        <img src={Logo2} alt="Logo Servidrones" className="w-40" />
        <p className="font-bold uppercase">
          Servidrones de Colombia S.A.S <br />
          <span className="normal-case">Desarrollo de servicios</span>
        </p>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          {
            social.map((item, index) => (
              <a href={item.link} key={index} target="_blank" rel="noreferrer">
                <div className="btn btn-ghost btn-sm rounded-full text-lg">
                  {item.icon}
                </div>  
              </a>
            ))
          }
        </div>
      </div>
    </footer>
  );
}