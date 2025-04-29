import Image from "next/image";

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
        <h4 className="text-5xl font-bold text-stone-800 dark:text-white">
          {" "}
          Tab hero
        </h4>{" "}
      </div>
    </div>
  );
};
export default GameLoading;
