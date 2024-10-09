import React from "react";
import { CgMail } from "react-icons/cg";
import { MdCall } from "react-icons/md";
import { TiLocationOutline } from "react-icons/ti";

export default function Footer() {
  return (
    <div className="text-white border-t-2 border-gray-700 mt-10 bg-slate-950 pb- pt-56">
      <div className="grid grid-cols-3 wrapper gap-5">
        <div className="">
          <p className="mb-5 text-15">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            nihil, debitis a assumenda aliquid doloribus doloremque suscipit
            earum, autem mollitia facilis.
          </p>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map(() => (
              <div className="h-8 w-8 rounded-full border-2 grid place-content-center"></div>
            ))}
          </div>
        </div>
        <div className="">
          <p className="font-semibold">Category</p>
          <div className="flex flex-wrap gap-3 mt-4">
            {[1, 2, 3, 4, 5].map((el, key) => (
              <span className="px-4 rounded-xl cursor-pointer hover:bg-blue-600 duration-300 text-13 py-2 shadow-md bg-blue-800 text-white">
                Category
              </span>
            ))}
          </div>
        </div>
        <div className="">
          <p className=" text-15 font-semibold">Contact Us</p>
          <div className="space-y-3 mt-4">
            <div className="flex duration-300 hover:text-blue-600 cursor-pointer items-center gap-1 text-base">
              <MdCall size={20} />
              <p className="">+1234567890</p>
            </div>
            <div className="flex duration-300 hover:text-blue-600 cursor-pointer items-center gap-1 text-15">
              <CgMail size={20} />
              <p className="">hello@travelgo.com</p>
            </div>
            <div className="flex duration-300 hover:text-blue-600 cursor-pointer gap-1 text-15">
              <TiLocationOutline className="mt-1" size={20} />
              <div className="">
                <p className="">1 Hacker way Menlo Park</p>
                <p>California, United Stated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 justify-center mt-12">
        <img src="logo.png" className="h-52" alt="" />
        <p className="text-9xl font-extrabold text-blue-600 tracking-normal text-center">
          TRAVEL GO
        </p>
      </div>
    </div>
  );
}
