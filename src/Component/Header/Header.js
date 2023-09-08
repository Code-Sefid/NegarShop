import React from "react";

import Navbar from "./Component/Navbar";
import UserProfile from "./Component/UserProfile";
import SearchBox from "./Component/SearchBox";
import Logo from "./Component/Logo";
import Cart from "./Component/Cart";

export default function Header() {
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
      <div>
        {/* Navbar */}
        <Navbar />
      </div>
    </div>
  );
}
