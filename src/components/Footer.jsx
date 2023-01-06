import Logo2 from "../assets/logo2.png";
import Logo3 from "../assets/logoSENA.png";
import Logo4 from "../assets/logoColombia.png";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  const social = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/profile.php?id=100087096844996&mibextid=ZbWKwL",
    },
  ];
  return (
    <footer className="footer footer-center p-10 bg-[#fba308] text-primary-content">
      <div>
        <div className="flex flex-col sm:flex-row gap-5 mb-5 justify-center items-center">
          <img src={Logo2} alt="Logo Servidrones" className="w-40 h-20" />
          <div className="divider md:divider-horizontal"></div>
          <img src={Logo3} alt="Logo SENA" className="w-40 h-20" />
          <div className="divider md:divider-horizontal"></div>
          <img src={Logo4} alt="Logo Colombia" className="w-20 h-20" />
        </div>
        <p className="font-bold uppercase">
          Servidrones de Colombia S.A.S <br />
          <span className="normal-case">Desarrollo de servicios</span>
        </p>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          {social.map((item, index) => (
            <a href={item.link} key={index} target="_blank" rel="noreferrer">
              <div className="btn btn-ghost btn-sm rounded-full text-lg">
                {item.icon}
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
