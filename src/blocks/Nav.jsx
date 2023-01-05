import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      label: "Inicio",
      to: "/",
    },
    {
      label: "Servicios",
      to: "/services",
    },
    {
      label: "Galería",
      to: "/gallery",
    },
    {
      label: "Contacto",
      to: "/contact",
    },
  ];

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-5 sticky top-0 z-50">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img src={Logo} className="h-9" alt="Logo de servidrones" />
          <span className="self-center text-2xl font-bold whitespace-nowrap">
            Servidrones
          </span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className={`${!isOpen && "hidden"} w-full md:block md:w-auto`}>
          <ul
            className={`flex mt-4 ${
              isOpen
                ? "flex-col p-4 text-sm font-medium"
                : "flex-row mt-0 text-sm font-medium"
            } `}
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  className="block text-base px-4 py-2 text-black rounded hover:bg-gray-50 hover:text-orange-400 hover:font-bold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
