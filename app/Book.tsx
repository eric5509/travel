'use client'
import { BsFillGridFill } from "react-icons/bs";
import TripCard from "./TripCard";
import ProgressCard from "./ProgressCard";
import {motion} from 'framer-motion'
import { useEffect, useState } from "react";

export default function Book() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive === 0 ? 10 : 0)); // Toggle between 0 and 10
    }, 200);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []); // Empty dependency array ensures this runs only once on mount


  
  return (
    <div className="wrapper2 relative items-center mt-20 grid grid-cols-2 gap-4 ">
      <div className="">
        <div onClick={() => setActive(10)} className="font-bold text-4xl text-blue-950 mb-4">
          <p>Easilt Book</p>
          <p>Your Next Trip</p>
        </div>
        <div className="flex gap-3">
          <div className="">
            <BsFillGridFill className="mt-2 text-sm text-blue-600 rotate-45" />
          </div>
          <p onClick={() => setActive(0)} className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            sapiente voluptates, voluptatem ut commodi similique earum. Nulla,
            perspiciatis! Ex, officia.
          </p>
        </div>
        <div className="mt-7 flex gap-3">
          <motion.div animate={{opacity: active > 5 ? 0 : 1,transition: {duration: .5} }} className="">
            <BsFillGridFill className="mt-2 text-sm text-blue-600 rotate-45" />
          </motion.div>
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            sapiente voluptates, voluptatem ut commodi similique earum. Nulla,
            perspiciatis! Ex, officia.
          </p>
        </div>
        <div className="flex gap-3 mt-7">
          <div className="">
            <p className="text-3xl mb-2 font-bold text-blue-600">70%</p>
            <p className="text-13 text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              consequatur.
            </p>
          </div>
          <div className="">
            <p className="text-3xl mb-2 font-bold text-blue-600">85%</p>
            <p className="text-13 text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              consequatur.
            </p>
          </div>
        </div>
      </div>
      <div className="h-full ">
        <div className="h-full shadow-lg w-3/4 relative mx-auto min-h-[425px] rounded-2xl flex p-5 items-end ">
        <img src="https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/bltc9cb16743baee253/6139e2d111afe6381b258183/US_Cuba_CU_Header.jpg" className="w-full h-full object-cover top-0 left-0 absolute rounded-2xl" alt="" />
        <div className="h-full w-full left-0 top-0 absolute rounded-2xl bg-gradient-to-b from-black/10 to-black/80"></div>
          <TripCard />
        </div>
      </div>
      <ProgressCard />
    </div>
  );
}
