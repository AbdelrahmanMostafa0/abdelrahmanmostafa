import MainWindow from "@/components/MainWindow";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid h-dvh place-content-center">
      <MainWindow />
      {/* <div className="z-10">
        <Image
          src={"/avatar-img.png"}
          width={1000}
          height={1000}
          alt="avatar image"
          className="max-w-[500px] w-full"
        />
        <h1 className="text-center font-bold text-4xl animate-">
          Abdelrahman Mostafa
        </h1>
      </div> */}
      <div className="fixed bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fillOpacity="0.7"
            d="M0,64L80,74.7C160,85,320,107,480,128C640,149,800,171,960,165.3C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
