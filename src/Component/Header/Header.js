import React from "react";

import Navbar from "./Component/Navbar";
import UserProfile from "./Component/UserProfile";
import SearchBox from "./Component/SearchBox";
import Logo from "./Component/Logo";
import Cart from "./Component/Cart";
import { useContext } from "react";
import { HeaderContext } from "../../Context/HeaderContext";

export default function Header() {
  const { open } = useContext(HeaderContext);
  return (
    <div className="block w-full xl:h-48 bg-[#e6e4e4] pt-4 lg:h-44 font-semibold">
      <div className=" flex flex-row-reverse flex-nowrap justify-between items-center content-stretch px-[8rem]">
        {/* Logo */}
        <Logo />
        {/* Search Box*/}
        <SearchBox />
        {/* User Profile */}
        <UserProfile />
        {/* Cart */}
        <Cart />
      </div>
      {/* side */}
      <div>
        <div
          className={`${
            open ? "w-[10rem] z-0" : "w-[0rem] hidden"
          } h-full bg-black`}
        >
          <div>dadad</div>
        </div>
      </div>
      <div>
        {/* Navbar */}
        <Navbar />
      </div>
    </div>
  );
}
