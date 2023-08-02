import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook, BsTelegram } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";

export default function Footer() {
  return (
    <div
      className="flex flex-row-reverse flex-nowrap justify-between items-center content-stretch"
      dir="rtl"
    >
      <div>
        {" "}
        <h2 className="font-bold pb-8">
          نماد
          <span className="text-emerald-400"> اعتماد</span>
        </h2>
        <p className="font-thin text-xs">راه های اعتماد به فروشگاه</p>
        <hr className="w-[3rem] h-[0.20rem] bg-black/10 rounded-full mb-4" />
      </div>

      {/* <div className="px-[26rem]">
        <h2 className="font-bold pb-8">
          درباره <span className="text-emerald-400">قالب فروشگاهی ویترین</span>
        </h2>
        <hr className="w-[3rem] h-[0.20rem] bg-black/10 rounded-full mb-4" />
        <p className="font-serif text-base">
          فروشگاه اینترنتی فعالیت خود را از سال ۱۳۹۸ در زمینه فروش کیف پول های
          سخت افزاری شروع نموده است . این مجموعه کالا های خود را بدون واسطه و از
          طریق شرکت های اصلی سازنده کیف پول های سخت افزاری به صورت مستقیم تامین
          می کند و همچنین ضمانت اصالت و سلامت کالا را به تمام مشتریان ارائه می
          دهد. هدف اصلی ما در مجموعه تهران ولت در تمام این مدت تا به امروز این
          بوده است که شما عزیزان را برای خریدی بهتر به درستی راهنمایی کنیم تا در
          دنیای زیبای ارز های دیجیتال با خیالی آسوده ارز های خود را به صورت
          کاملا امن نگهداری کنید
        </p>
      </div> */}
      <div
        className="w-[15rem] h-[20rem] mr-[8rem] rounded-[1rem]
       bg-gradient-to-tl from-[#4141d0] from-0% via-[#5080c8]
        via-46% to-[#7075ff] to-100%
        shadow-lg shadow-black/80 block"
      >
        <div className="flex text-white  items-center justify-center mt-10 text-[2rem]">
          <AiOutlineInstagram className="mx-2 hover:text-pink-500" />
          <AiOutlineTwitter className="mx-2 hover:text-blue-700" />
          <BsFacebook className="mx-2 hover:text-blue-400" />
          <BsTelegram className="mx-2 hover:text-blue-300" />
        </div>
        <div className="pt-12 pr-[3.9rem] flex items-end text-white">
          <p className="font-bold text-[1.5rem]">4008144</p>
          <span className="text-xs pr-2 mb-1 text-white">021</span>
        </div>
        <div className="block mt-14 text-black text-xs">
          <p className="font-medium mr-16 mb-2">info@Sitename.com</p>
          <p className="font-bold mr-8">تهران، اشرفی اصفهانی، جلال آل احمد</p>
        </div>
        <div className="flex justify-center items-center mt-8">
          <button className="w-[3rem] hover:bg-black hover:text-white h-[3rem] rounded-full flex items-center justify-center bg-white">
            <IoIosArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
}
