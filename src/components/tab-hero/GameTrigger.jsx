import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const GameTrigger = ({ setGamePlay }) => {
  return (
    <div className="hidden absolute bottom-4 right-4 md:block z-10 w-fit ">
      <div className="relative">
        {" "}
        <Image
          src={"/tab-hero.png"}
          alt="tab hero"
          width={180}
          height={180}
          // hight={200}
          className="drop-shadow-2xl"
        />
        {/* character Shadow */}
        <div className="w-20 h-3 absolute bottom-3 left-8 rounded-[800%] bg-black/20"></div>
      </div>
      <Image
        src={"/text-bubble.png"}
        alt="text bubble"
        width={200}
        height={200}
        className=" absolute w-96 bottom-24 right-12 -rotate-12 drop-shadow-2xl scale-x-[-1.25] scale-y-[1.25] "
      />
      <p className="absolute bottom-40  capitalize -rotate-[13deg] right-14 text- font-bold">
        <span className="whitespace-nowrap">Click to play a game I </span>
        <br />
        made while avoiding real work.
      </p>
      <button
        onClick={() => setGamePlay(true)}
        className="px-3 py-3 flex bg-green-500 -rotate-[10deg] right-8 absolute bottom-36 mb-2 items-center justify-center gap-6 font-bold text-white rounded-full hover:bg-green-400 duration-150"
      >
        <FaPlay />
      </button>
    </div>
  );
};
export default GameTrigger;
