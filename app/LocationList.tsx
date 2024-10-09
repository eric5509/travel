import React from "react";
import LocationCard from "./LocationCard";

export default function LocationList() {
  const locations = [
    {
      location: "Inglis, Manitoba, Canada",
      description: "Masura Hike",
      imageSrc:
        "https://cdn.pixabay.com/photo/2019/12/30/20/05/city-4730495_1280.jpg",
    },
    {
      location: "Indonesia, Bali",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum qui tenetur et.",
      imageSrc:
        "https://i.pinimg.com/736x/74/7f/87/747f879655e7564f63ce565ae5e0e471.jpg",
    },
    {
      location: "Japan, Mount Fuji",
      description:
        "Experience the breathtaking views of Mount Fuji, especially during sunrise.",
      imageSrc:
        "https://i.pinimg.com/originals/f3/48/92/f3489211499c24330c3fd72f3f9782ac.jpg",
    },
    {
      location: "Switzerland, Interlaken",
      description:
        "Explore the stunning landscapes and adventure sports in Interlaken.",
      imageSrc:
        "https://cdn.cheapism.com/images/iStock-510105533.max-784x410.jpg",
    },
    {
      location: "Australia, Great Barrier",
      description:
        "Dive into the world’s largest coral reef system and enjoy marine life.",
      imageSrc:
        "https://graphicdesignjunction.com/wp-content/uploads/2012/08/singapore-at-night.jpg",
    },
    {
      location: "USA, Grand Canyon",
      description:
        "Witness the majestic views of the Grand Canyon and its incredible geological formations.",
      imageSrc:
        "https://www.premierinn.com/content/dam/pi/websites/desktop/News/2021/cities-by-night/cities-by-night-new-york-1000x640.jpg",
    },
  ];

  return (
    <div className="py-20 bg-slate-950">
      <div className="wrapper2 mt-20 py-8">
        <div className="font-bold text-center text-4xl text-blue-50 mb-4">
          <p>Your Destination Of</p>
          <p>Cozy Comfort</p>
        </div>
        <p className="text-13 text-center text-emerald-50 mt-1 w-96 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          aspernatur ad quae
        </p>
        <div className="grid gap-5 mt-10 auto-rows-[300px] grid-cols-4">
          {locations.map((location, key) => (
            <LocationCard location={location} track={key} />
          ))}
        </div>
      </div>
    </div>
  );
}
