import React from "react";
import logo from "../../../assets/Logo/logo-blue.png";

export default function Logo() {
  return (
    <div>
      <img
        src={logo}
        alt="logo"
        className="xl:max-w-[9rem] lg:max-w-[8rem] md:max-w-[6rem] lg:h-auto"
      />
      <p className="text-black/50 lg:text-base md:text-xs md:mt-1">
        خرید مطمئن، با کیفیت
      </p>
    </div>
  );
}
