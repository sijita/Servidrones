import landscape1 from "../assets/landscape 1.jpeg";
import landscape2 from "../assets/landscape 2.jpeg";
import landscape3 from "../assets/landscape 3.jpeg";
import landscape4 from "../assets/landscape 4.jpeg";
import landscape5 from "../assets/landscape 5.jpeg";
import landscape6 from "../assets/landscape 6.jpeg";
import landscape7 from "../assets/landscape 7.jpeg";
import landscape8 from "../assets/landscape 8.jpeg";
import landscape9 from "../assets/landscape 9.jpeg";
import landscape10 from "../assets/landscape 10.jpeg";
import landscape11 from "../assets/landscape 11.jpeg";
import landscape12 from "../assets/landscape 12.jpeg";
import landscape13 from "../assets/landscape 13.jpeg";
import landscape14 from "../assets/landscape 14.jpeg";
import landscape15 from "../assets/landscape 15.png";
import landscape16 from "../assets/landscape 16.png";
import landscape17 from "../assets/landscape 17.png";

export default function GalleryGrid() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 pt-16 mx-auto flex flex-wrap gap-10">
        <div class="flex w-full flex-wrap">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Master Cleanse Reliac Heirloom
          </h1>
          <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom.
          </p>
        </div>
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class=" object-cover object-center block"
                src={landscape1}
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class=" object-cover object-center block"
                src={landscape2}
              />
            </div>
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="object-cover object-center block"
                src={landscape3}
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src={landscape4}
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src={landscape5}
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src={landscape6}
              />
            </div>
          </div>
        </div>
        <button className="btn border-0 rounded-none mx-auto bg-[#fba308] w-full sm:btn-wide">
          Ver más
        </button>
      </div>
    </section>
  );
}
