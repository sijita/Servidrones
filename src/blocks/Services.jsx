import React from "react";
import Cards from "../components/Cards";
import { TbDrone } from "react-icons/tb";
import {
  GiRat,
  GiGardeningShears,
  GiFarmer,
  GiBirchTrees,
} from "react-icons/gi";
import { BsTreeFill } from "react-icons/bs";
import { FaShieldVirus } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Agricultura de presición",
      image: <GiFarmer className="text-[#b16400]" size={35} />,
    },
    {
      title: "Fumigación aérea",
      image: <TbDrone className="text-[#b16400]" size={35} />,
    },
    {
      title: "Control de plagas",
      image: <GiRat className="text-[#b16400]" size={35} />,
    },
    {
      title: "Poda de árboles",
      image: <GiBirchTrees className="text-[#b16400]" size={35} />,
    },
    {
      title: "Mantenimiento de jardines",
      image: <GiGardeningShears className="text-[#b16400]" size={35} />,
    },
    {
      title: "Limpieza y desinfección",
      image: <FaShieldVirus className="text-[#b16400]" size={35} />,
    },
  ];
  return (
    <section class="bg-[#fba308] text-black">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-lg text-center px-5">
          <h2 class="text-3xl font-bold sm:text-4xl uppercase ">
            Áreas de aplicación
          </h2>

          <p class="mt-4 text-lg text-black">
            Estas son las áreas de aplicación de nuestros servicios.
          </p>
        </div>

        <div class="mt-8 grid grid-cols-1 md:gap-12 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Cards key={index} title={service.title} image={service.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
