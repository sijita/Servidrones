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
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-16 mx-auto flex flex-wrap gap-10">
        <div className="flex w-full flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Fotos de nuestros servicios
          </h1>
          {/* <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            
          </p> */}
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className=" object-cover object-center block w-full h-full"
                src={landscape1}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className=" object-cover object-center block w-full h-full"
                src={landscape2}
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="object-cover object-center block w-full h-full"
                src={landscape3}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="object-cover object-center block w-full h-full"
                src={landscape4}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="object-cover object-center block w-full h-full"
                src={landscape5}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="object-cover object-center block w-full h-full"
                src={landscape6}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
