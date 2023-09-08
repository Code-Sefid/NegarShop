import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import {Link} from 're'

export default function Cart() {
  return (
    <div className="relative mr-4 inline-flex w-fit">
      <div
        className="absolute bottom-auto left-auto text-white
         right-3 top-0 z-10 -translate-y-1/2
          translate-x-2/4
           scale-y-100 rounded-full bg-red-600 px-2 pb-[0.20em] pt-[0.20em] text-xs"
      >
        0
      </div>
      <Link
        href="#"
        className="flex items-center z-0
        xl:px-6 xl:py-3 lg:px-5 lg:py-2 md:px-4 md:py-2 bg-black/80 text-white hover:bg-blue-500 rounded-full"
      >
        سبد خرید{" "}
        <span className="ml-2">
          <FaShoppingCart />
        </span>
      </Link>
    </div>
  );
}
