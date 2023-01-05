import React from "react";
import { Link } from "react-router-dom";
import VideoHero from "../assets/video1.mp4";

export default function MainBanner() {
  return (
    <section class="relative bg-hero bg-cover bg-center bg-no-repeat">
      <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

      <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 flex flex-col md:flex-row gap-16">
        <div class="max-w-xl text-center sm:text-left px-5 lg:px-0">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#fba308] to-[#eb8c65] text-4xl sm:text-6xl font-extrabold">
            Servidrones
          </h1>
          <h1 class="text-3xl font-extrabold sm:text-5xl">de Colombia S.A.S</h1>

          <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            Emprendimiento del programa fondo empreder SENA, que nace como
            alternativa de solución en el servicio de fumigación y aspersión con
            drones orientado a la agricultura de precisión.
          </p>

          <div class="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              to="/"
              class="w-full bg-[#fba308] btn border-0 sm:w-auto rounded-none text-md"
            >
              Saber más
            </Link>
          </div>
        </div>
        <div>
          <video
            autoPlay
            loop
            muted
            controls
            className="w-full h-full px-5 lg:px-0"
          >
            <source src={VideoHero} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
