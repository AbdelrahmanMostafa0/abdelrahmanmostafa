import Image from "next/image";

const MainWindow = () => {
  return (
    <div className="max-w-[700px] w-full space-y-[1px] z-10  ">
      <div className="h-14 rounded-t-lg bg-[#424242] flex items-center px-4 min-w-[700px] drop-shadow-md border">
        <p className="text-2xl font-bold text-white">home</p>
      </div>
      <div className="min-w-[700px] h-[500px] border-2 gap-10 border-[#424242] border-opacity-35 bg-white rounded-b-lg drop-shadow-xl flex flex-col justify-center items-center ">
        <div className="text-center space-y-4 pt-10">
          <h1 className="text-5xl font-extrabold">
            hi! <span className="text-orange-500">i'm abdelrahman</span>
          </h1>
          <p className="text-2xl">
            {/* Just a Dev with a Vision (and Too Many Side Projects). */}I
            Code. I Design. I Build Cool Stuff.
          </p>
        </div>
        <div className="flex justify-center gap-10">
          <button className="space-y-2 text-center out">
            <Image
              src={"/icons/icon_about.webp"}
              alt="about icon"
              width={500}
              height={500}
              className="w-20 drop-shadow-xl"
            />
            <p className="text-xl font-semibold">about</p>
          </button>
          <button className="space-y-2 text-center out">
            <Image
              src={"/icons/icon_Work.webp"}
              alt="about icon"
              width={500}
              height={500}
              className="w-20 drop-shadow-xl"
            />
            <p className="text-xl font-semibold">work</p>
          </button>
          <button className="space-y-2 text-center out">
            <Image
              src={"/icons/icon_Links.webp"}
              alt="about icon"
              width={500}
              height={500}
              className="w-20 drop-shadow-xl"
            />
            <p className="text-xl font-semibold">links</p>
          </button>
          <button className="space-y-2 text-center out">
            <Image
              src={"/icons/icon_contact.webp"}
              alt="about icon"
              width={500}
              height={500}
              className="w-20 drop-shadow-xl"
            />
            <p className="text-xl font-semibold">contact</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainWindow;
