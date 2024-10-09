import { BiHeart, BiStar } from "react-icons/bi";
import { BsCalendar, BsFillStarFill, BsHeart } from "react-icons/bs";
import { TiLocationOutline } from "react-icons/ti";

type Props = {
  hike: {
    location: string;
    hikeName: string;
    rating: string;
    reviews: number;
    duration: string;
    imageUrl: string;
    price: string;
  };
};

export default function HikeCard({ hike }: Props) {
  return (
    <div className="w-full group">
      <div className="h-52 overflow-hidden group-hover:rounded-tl-sm group-hover:rounded-br-[35px] duration-500 rounded-[35px] w-full rounded-br-sm relative">
        <div className="h-full w-full z-20 absolute bg-gradient-to-b from-transparent to-black/30"></div>
        <img src={hike.imageUrl} className="h-full z-10 w-full absolute object-cover" alt="" />
      </div>
      <div className="p-3 w-full">
        <div className="flex items-center gap-1">
          <TiLocationOutline size={20} color="red" />
          <p className="text-sm font-semibold">{hike.location}</p>
        </div>
        <div className="flex text-xs text-gray-700 mt-3 items-center gap-1">
          <BsFillStarFill size={13} fill="orange" className="inline" />
          <span>{hike.rating}</span>
          <span>({hike.reviews} reviews)</span>
          <div className="flex gap-1 ml-2 items-center">
            <BsCalendar />
            <span>{hike.duration}</span>
          </div>
        </div>
        <div className="flex text-13  justify-between mt-4 items-center">
          <p>
            from{" "}
            <strong className="ml-1 text-blue-600 text-base font-semibold">
              {" "}
              {hike.price}
            </strong>
          </p>
          <BiHeart stroke="red" className="text-lg text-red-500" />
        </div>
      </div>
    </div>
  );
}
