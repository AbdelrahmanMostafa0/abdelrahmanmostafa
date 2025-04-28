import Image from "next/image";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const GameLoading = () => {
  return (
    <div className="space-y-5 flex flex-col items-center justify-center">
      <div className="flex items-center flex-col justify-center gap-5 mt-10">
        <Image
          alt="tab"
          src={"/tab-hero.png"}
          className="animate-pulse"
          width={150}
          height={150}
        />
        <h4 className="text-5xl font-bold text-stone-800 ani"> Tab hero</h4>{" "}
      </div>
      {/* <AiOutlineLoading3Quarters className="text-6xl text-sky-500 animate-spin" /> */}
    </div>
  );
};
export default GameLoading;
