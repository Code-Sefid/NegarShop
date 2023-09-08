import React from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBox() {
  return (
    <div
      className="-space-x-2 xl:mr-[4rem] lg:mr-[2rem] md:mr-[1rem] w-max relative"
      dir="rtl"
    >
      <input
        className="peer bg-slate-300 pr-5 pl-14
    text-[0.9rem] placeholder:text-xs md:w-[25rem]
    xl:w-[40rem] lg:w-[35rem] xl:h-[3.5rem] lg:h-[3rem] md:h-[2.5rem] rounded-[2rem]
     text-slate-600 outline-none"
        type="text"
        placeholder="جستجو در محصولات ..."
      />

      <button className="xl:w-11 xl:h-11 lg:10 lg:10 md:w-9 md:h-9 bg-black/80 hover:bg-blue-500 text-white rounded-[50%] absolute top-1/2 -translate-y-1/2 left-3">
        <AiOutlineSearch className="xl:mr-2.5 md:mr-[7px] w-6 h-6" />
      </button>
      <button className="absolute top-1/2 -translate-y-1/2 left-5">
        <GiSettingsKnobs className="w-5 h-5 absolute top-1/2 -translate-y-1/2 xl:left-12 lg:left-10 md:left-9 rotate-90" />
      </button>
    </div>
  );
}
