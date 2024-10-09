import React from "react";
import HikeCard from "./HikeCard";
import { ArrowUpRight } from "lucide-react";

export default function HikeList() {
  const hikingTrips = [
    {
      location: "Inglis, Manitoba, Canada",
      hikeName: "Masura Hike",
      rating: "4.8 star",
      reviews: 899,
      duration: "5 days",
      imageUrl: "https://www.civitatis.com/blog/wp-content/uploads/2023/02/shutterstock_604451678-1280x853.jpg",
      price: "$756",
    },
    {
      location: "Zion National Park, Utah, USA",
      hikeName: "Angels Landing",
      rating: "4.9 star",
      reviews: 1200,
      duration: "3 days",
      imageUrl: "https://usercontent.one/wp/livingmags.co.uk/wp-content/uploads/2014/04/Park-in-spring.jpg",
      price: "$600",
    },
    {
      location: "Torres del Paine, Chile",
      hikeName: "W Trek",
      rating: "4.7 star",
      reviews: 850,
      duration: "7 days",
      imageUrl: "https://experience.transat.com/wp-content/uploads/2018/01/parc-la-grange-geneve.jpg",
      price: "$1,200",
    },
    {
      location: "Cinque Terre, Italy",
      hikeName: "Sentiero Azzurro",
      rating: "4.6 star",
      reviews: 650,
      duration: "4 days",
      imageUrl: "https://viprow.co.uk/wp-content/uploads/2024/04/HD-wallpaper-beautiful-park-lovely-grass-greenery-beautiful-park-trees-freshness-pond-bridge-summer-nature.jpg",
      price: "$480",
    },
  ];
  return (
    <div className="mt-20 wrapper">
      <div className="grid grid-cols-2 items-center mb-8">
        <div className="text-[45px] leading-none font-bold">
          <p>Your Gateway To</p>
          <p className="mt-3"> Adventure</p>
        </div>
        <p className="text-13 text-gray-700">
          Explore New Horizons and Experience the Thrill of Nature's Beauty.
          Immerse Yourself in Unforgettable Landscapes, from Majestic Mountains
          to Serene Forests. Let Every Adventure Lead You to New Discoveries,
          Inspiring Stories, and Lifelong Friendships
        </p>
      </div>
      <div className="grid wrapper gap-5 grid-cols-4">
        {hikingTrips.map((hike, key) => (
          <HikeCard key={key} hike={hike}/>
        ))}
      </div>
      <div className="bg-amber-300 rounded-full px-5 py-[10px] text-sm font-semibold w-fit flex items-center mx-auto mt-5 border-2 border-amber-700 shadow-md gap-3">
        <p className="">View More</p>
        <ArrowUpRight size={17} />
      </div>
    </div>
  );
}
