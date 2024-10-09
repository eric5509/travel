import React from "react";

export default function Newsletter() {
  return (
      <div className="grid translate-y-48 shadow-black items-center wrapper shadow-md rounded-3xl bg-[#ffda2e] grid-cols-[1.5fr_1fr] gap-5">
        <div className="px-10 rounded-2xl ">
          <div className="text-[42px] font-semibold mb-10 text-[#55261e] leading-none space-y-4">
            <p>Stay Updated with Our</p>
            <p>Travel Newsletter</p>
          </div>
          <div className="flex w-[80%] h-12 gap-3 ">
            <div className=" rounded-md border-black shadow-lg flex-1 overflow-hidden border-2 ">
              <input type="text" placeholder="Email" className="h-full pl-3 placeholder:text-black text-sm bg-transparent w-full outline-none border-none"/>
            </div>
            <button className="px-5 bg-black text-white py-3 shadow-md hover:scale-105 active:scale-100 duration-300 text-15 font-semibold rounded-md">Subscribe Now</button>
          </div>
        </div>
        <div className=" items-center">
          <img src="iii.png" alt="" />
        </div>
      </div>
  );
}
