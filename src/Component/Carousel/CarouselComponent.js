import React, { useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { RxDotFilled } from "react-icons/rx";
import { slides } from "./CarouselData";

function CarouselComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1000px] h-[300px] w-full px-4 relative group ml-[7rem] mt-[3rem]">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-[2.5rem] bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-slate-200 opacity-[40%] ml-5 text-white cursor-pointer">
        <GrFormPrevious onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-slate-200 opacity-[40%] mr-5 text-white cursor-pointer">
        <GrFormNext onClick={nextSlide} size={30} />
      </div>
      <div className="flex -mt-8 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer text-white w-4"
          >
            <RxDotFilled className="text-black" />
            {/* <span class="block h-3 w-10 cursor-pointer rounded-full transition-colors content-[''] bg-white"></span> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarouselComponent;
