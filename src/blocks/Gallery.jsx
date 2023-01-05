import React from "react";
import GalleryGrid from "../components/GalleryGrid";

export default function Gallery() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center uppercase">
        Galería de imagenes
      </h2>
      <GalleryGrid />
    </div>
  );
}
