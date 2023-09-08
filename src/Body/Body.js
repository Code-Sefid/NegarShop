import React from "react";
import Header from "../Component/Header";
// import Footer from "../Component/Footer";
import CarouselComponent from "../Component/Carousel";

export default function Body() {
  return (
    <div className="bg-slate-200/40 h-full">
      <Header />
      <div className="flex justify-center mt-[2rem]">
        <CarouselComponent />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
