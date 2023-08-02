import React from "react";
import Header from "../Component/Header";
// import Footer from "../Component/Footer";
import CarouselComponent from "../Component/Carousel";
import { CarouselData } from "../Component/Carousel/CarouselData";

export default function Body() {
  return (
    <div className="bg-slate-200/40 h-[100vh]">
      <Header />
      <CarouselComponent  />
      {/* <Footer /> */}
    </div>
  );
}
