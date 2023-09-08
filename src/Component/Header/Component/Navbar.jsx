import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <div dir="rtl">
      {/* Navbar */}
      <nav
        className="
    flex justify-between pr-[6rem] py-[2rem]"
      >
        <div className="block lg:hidden md:hidden"></div>
        <div
          className="w-full block flex-grow 
      lg:flex lg:items-center lg:w-auto md:flex"
        >
          <div className="text-sm lg:flex-grow md:flex">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white xl:mr-4
            lg:px-4 md:px-2 py-2 hover:bg-blue-500 rounded-full disabled:"
            >
              خانه
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4
            lg:px-4 md:px-2 py-2 hover:bg-blue-500 rounded-full"
            >
              لوازم جانبی
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4
            lg:px-4 md:px-2 py-2 hover:bg-blue-500 rounded-full"
            >
              موبایل و تبلتسبد خرید
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4
            lg:px-4 md:px-2 py-2 hover:bg-blue-500 rounded-full"
            >
              لپ تاپ
            </a>
          </div>
          <div>
            <a
              href="#"
              className="flex items-center text-sm xl:px-12 xl:ml-[5rem] 
            py-2 text-black mt-4 lg:mt-0 font-semibold
             md:pr-[17rem] md:px-0"
            >
              12345678 041 <BsFillTelephoneFill className="mr-2 rotate-45" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
