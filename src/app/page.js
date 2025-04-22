"use client";
import About from "@/components/windows/About";
import MainWindow from "@/components/MainWindow";
import Window from "@/components/Window";
import Image from "next/image";
import { useRef, useState } from "react";
import Work from "@/components/windows/Contact";
import Contact from "@/components/windows/Contact";
import Links from "@/components/windows/Links";

export default function Home() {
  const containerRef = useRef(null);
  const [openedWindow, setOpenedWindow] = useState("");
  return (
    <div
      ref={containerRef}
      className="grid h-dvh place-content-center overflow-hidden overscroll-none w-screen"
    >
      <MainWindow setOpenedWindow={setOpenedWindow} />
      {openedWindow && openedWindow === "about" ? (
        <Window
          title={openedWindow}
          containerRef={containerRef}
          setOpenedWindow={setOpenedWindow}
          containerStyle={"max-w-[500px]"}
        >
          <div className="!overflow-auto w-full h-dvh">
            <About />

            {/* <About /> */}
            {/* <Contact /> */}
          </div>
        </Window>
      ) : openedWindow === "contact" ? (
        <Window
          width={400}
          title={openedWindow}
          containerRef={containerRef}
          setOpenedWindow={setOpenedWindow}
          containerStyle={"max-w-[500px]"}
        >
          <div className="!overflow-auto w-full h-dvh">
            <Contact />
          </div>
        </Window>
      ) : (
        openedWindow === "links" && (
          <Window
            height={350}
            width={500}
            title={openedWindow}
            containerRef={containerRef}
            setOpenedWindow={setOpenedWindow}
            containerStyle={"max-w-[500px]"}
          >
            <div className="!overflow-auto w-full h-dvh">
              <Links />
            </div>
          </Window>
        )
      )}
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
