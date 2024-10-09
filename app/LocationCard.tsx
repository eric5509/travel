import React from "react";

type Props = {
  track: number;
  location: {
    location: string;
    description: string;
    imageSrc: string;
  };
};

export default function LocationCard({ track, location }: Props) {
  return (
    <div
      className={`bg-blue-200 group rounded-2xl relative flex items-end p-5 shadow-md overflow-hidden 
      ${(track === 5 || track === 0) && "col-span-2"}
      `}
    >
      <img
        src={location.imageSrc}
        className="absolute top-0 left-0 h-full w-full rounded-2xl"
        alt=""
      />
      <div className="absolute h-full w-full left-0 top-0 rounded-2xl bg-gradient-to-b from-transparent to-black/50 z-0"></div>
      <div className=" duration-500 z-30 group-hover:translate-y-0 ">
        <p className="text-base font-bold text-white">{location.location}</p>
        <div className="grid grid-rows-[0fr] duration-500 overflow-hidden group-hover:grid-rows-[1fr]">
          <p
            className={`text-gray-50 overflow-hidden duration-500 text-xs mt-2 ${
              (track === 5 || track === 0) && "lg:w-2/3"
            } `}
          >
            {location.description}
          </p>
        </div>
      </div>
    </div>
  );
}
