import React from "react";
import Logo from "./logo-blue.png";
import { GiSettingsKnobs } from "react-icons/gi";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Header() {
  return (
    <div className="block w-full h-48 bg-white dark:bg-black mt-8 font-semibold">
      <div
        className=" flex flex-row-reverse flex-nowrap
    justify-start items-center content-stretch "
      >
        <div>
          {/* Logo */}
          <img
            src={Logo}
            alt="logo"
            className="max-w-[9rem] h-auto mr-[8rem]"
          />
          <p className="text-black/50">خرید مطمئن، با کیفیت</p>
        </div>
        {/* Search Box*/}
        <div className="-space-x-2 mr-[4rem] w-max relative" dir="rtl">
          <input
            className="peer bg-slate-200/50 pr-5 pl-14
          text-[0.9rem] placeholder:text-xs
          w-[40rem] h-[3.5rem] rounded-[2rem]
           text-slate-600 outline-none"
            type="text"
            placeholder="جستجو در محصولات ..."
          />

          <button className="w-11 h-11 bg-black/80 hover:bg-blue-500 text-white rounded-[50%] absolute top-1/2 -translate-y-1/2 left-3">
            <AiOutlineSearch className="mr-2.5 w-6 h-6" />
          </button>
          <button className="absolute top-1/2 -translate-y-1/2 left-5">
            <GiSettingsKnobs className="w-5 h-5 absolute top-1/2 -translate-y-1/2 left-12 rotate-90" />
          </button>
        </div>
        {/* User Profile */}
        <button className="mr-[2rem]">
          <AiOutlineUser className="w-8 h-8" />
        </button>

        <div className="relative mr-4 inline-flex w-fit">
          <div
            className="absolute bottom-auto left-auto text-white
         right-3 top-0 z-10 -translate-y-1/2
          translate-x-2/4
           scale-y-100 rounded-full bg-red-600 px-2 pb-[0.20em] pt-[0.20em] text-xs"
          >
            0
          </div>
          <a
            href="#"
            className="flex items-center z-0
        px-6 py-3 bg-black/80 text-white hover:bg-blue-500 rounded-full"
          >
            سبد خرید{" "}
            <span className="ml-2">
              <FaShoppingCart />
            </span>
          </a>
        </div>
      </div>
      <div>
        <div dir="rtl">
          <nav className="flex items-center justify-between flex-wrap py-10 mr-[6rem]">
            <div className="block lg:hidden"></div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow">
                <a
                  href="#responsive-header"
                  className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4
                  px-4 py-2 hover:bg-blue-500 rounded-full disabled:"
                >
                  خانه
                </a>
                <a
                  href="#responsive-header"
                  className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4
                  px-4 py-2 hover:bg-blue-500 rounded-full"
                >
                  لوازم جانبی
                </a>
                <a
                  href="#responsive-header"
                  className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4
                  px-4 py-2 hover:bg-blue-500 rounded-full"
                >
                  موبایل و تبلت
                </a>
                <a
                  href="#responsive-header"
                  className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4
                  px-4 py-2 hover:bg-blue-500 rounded-full"
                >
                  لپ تاپ
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="flex items-center text-sm px-12 ml-[5rem] 
                  py-2 text-black mt-4 lg:mt-0 font-semibold"
                >
                  12345678 041{" "}
                  <BsFillTelephoneFill className="mr-2 rotate-45" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
