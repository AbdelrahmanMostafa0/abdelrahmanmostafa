"use client";
import MainWindow from "@/components/MainWindow";
import { useRef, useState } from "react";
import RenderWindow from "@/components/windows/RenderWindow";
import { useWindowsContext } from "@/context/WindowsContext";

export default function Home() {
  const containerRef = useRef(null);
  const [openedWindow, setOpenedWindow] = useState("");
  const { windows } = useWindowsContext();

  return (
    <div
      ref={containerRef}
      className="grid h-dvh place-content-center overflow-hidden overscroll-none w-screen dark:bg-slate-900"
    >
      <MainWindow setOpenedWindow={setOpenedWindow} />
      {windows.map((window) => {
        return (
          <RenderWindow
            key={window}
            window={window}
            // setOpenedWindow={setOpenedWindow}
            containerRef={containerRef}
          />
        );
      })}
      <RenderWindow
        window={openedWindow}
        setOpenedWindow={setOpenedWindow}
        containerRef={containerRef}
      />
      <div className="fixed bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#60A5FA"
            fillOpacity="0.7"
            d="M0,64L80,74.7C160,85,320,107,480,128C640,149,800,171,960,165.3C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
