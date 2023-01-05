import React from "react";
import MainBanner from "../blocks/MainBanner";
import Nav from "../blocks/Nav";
import Services from "../blocks/Services";
import Gallery from "../blocks/Gallery";
import Contact from "../blocks/Contact";
import Footer from "../components/Footer";
import WappBtn from "../components/WappBtn";

export default function Home() {
  return (
    <>
      <Nav />
      <MainBanner />
      <Services />
      <Gallery />
      <Contact />
      <WappBtn />
      <Footer />
    </>
  );
}
