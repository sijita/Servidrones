import React from "react";
import { IoLogoWhatsapp } from "react-icons/io5";

export default function WappBtn() {
  return (
    <aside className="z-50 absolute">
      <div className="text-center flex flex-col gap-8 fixed list-none sm:bottom-10 sm:right-10 bottom-5 right-5">
        <a
          href="https://wa.me/573112635728"
          target="_blank"
          rel="noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-14 h-14 flex items-center justify-center"
        >
          <IoLogoWhatsapp className="text-2xl" />
        </a>
      </div>
    </aside>
  );
}
