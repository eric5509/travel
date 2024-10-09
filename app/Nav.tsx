"use client";
import { useEffect, useState } from "react";

export default function Nav() {
  const links = [
    "about",
    "tranvel packages",
    "destinations",
    "careers",
    "contact",
  ];
  const [navColor, setNavColor] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setNavColor(true); // Change color when scroll is past 300px
    } else {
      setNavColor(false); // Revert to original color
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  return (
    <div
      className={`h-[75px] shadow-md duration-500 z-[5000000] fixed border-b-[3px] w-full ${
        navColor
          ? "border-gray-400 bg-black/50 shadow-gray-600 backdrop-blur-2xl"
          : "shadow-transparent border-transparent bg-transparent"
      }`}
    >
      <div className="lg:w-[1200px] mx-auto flex justify-between items-center h-full w-full">
        <img src="logo.png" className="h-28" alt="" />
        <div className="flex font text-base text-white items-center gap-14">
          {links.map((link) => (
            <p
              className="text-13 font-semibold hover:font-semibold select-none cursor-pointer relative after:hover:w-1/2 after:duration-500 after:w-0 after:absolute after:h-[2px] after:left-0  after:top-full after:bg-[#ffda2e]
            
            before:hover:w-1/2 before:duration-500 before:w-0 before:absolute before:h-[2px] before:right-0  before:top-full before:bg-[#ffda2e]
            hover:text-[#ffda2e] duration-300 capitalize"
            >
              {link}
            </p>
          ))}
        </div>
        <div className="flex gap-7 items-center">
          <p className="text-13 text-[#ffda2e]">Sign up</p>
          <p className="px-5 py-2 cursor-pointer shadow-md rounded-full text-black text-13 font-semibold bg-[#ffda2e]">
            Login
          </p>
        </div>
      </div>
    </div>
  );
}
