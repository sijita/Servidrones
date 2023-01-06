import React from "react";
import { Link } from "react-router-dom";

export default function Cards({ title, description, image }) {
  return (
    <Link
      className="flex flex-col justify-center items-center p-8 hover:bg-[#fcb251]"
      to="/"
    >
      {image}

      <h2 className="mt-4 text-xl font-semibold text-black text-center">
        {title}
      </h2>
    </Link>
  );
}
