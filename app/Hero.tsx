import { CgArrowTopLeft, CgArrowTopRight } from "react-icons/cg";

export default function Hero() {
  return (
    <div className="h-screen w-full relative">
      <div className="h-full z-20 overflow-hidden w-full relative">
        <img
          src="img.png"
          className="absolute z-20 top-96 -translate-y-1/2 left-1/2 -translate-x-1/2"
          alt=""
        />
        <img
          src="https://wallpapercave.com/wp/wp8525914.jpg"
          className="h-full w-full object-cover absolute top-0 left-0"
          alt=""
        />
        <div className="h-full w-full absolute bg-gradient-to-b from-black/80 to-transparent z-0"></div>
        <div className="absolute text-center z-10 text-white text-7xl font-bold top-32 left-1/2 -translate-x-1/2 ">
          <p className="text-3d">
            <span className="text-blue-600 fill-none text-3d-discover ">
              Discover
            </span>{" "}
            the
          </p>
          <p className="text-3d">
            Excitement <span className="relative">Ahead</span>
          </p>
        </div>
      </div>
    </div>
  );
}

// https://wallpapercave.com/wp/wp10611290.jpg
