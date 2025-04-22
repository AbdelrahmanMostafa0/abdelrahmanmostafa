"use client";
import { useWindowsContext } from "@/context/WindowsContext";
import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { label: "about", icon: "/icons/icon_about.webp" },
  { label: "work", icon: "/icons/icon_work.webp" },
  { label: "links", icon: "/icons/icon_links.webp" },
  { label: "contact", icon: "/icons/icon_contact.webp" },
];

const NavButton = ({ label, icon, setOpenedWindow }) => {
  const { windows, addWindow } = useWindowsContext();
  const openWindow = () => {
    const audio = new Audio("/sound/click.mp3");

    if (windows.includes(label)) {
      return;
    } else {
      audio.play();
      addWindow(label);
    }
  };
  return (
    <button
      onClick={openWindow}
      className="flex flex-col items-center space-y-2 text-center group active:scale-95 dark:text-white"
    >
      <Image
        src={icon}
        alt={`${label} icon`}
        width={500}
        height={500}
        className="w-16 md:w-20 drop-shadow-xl transition-transform group-hover:scale-105 group-active:scale-100 dark:invert"
      />
      <p className="text-xl font-semibold ">{label}</p>
    </button>
  );
};

const MainWindow = ({ setOpenedWindow }) => {
  const taglines = [
    "Dev by Day, Side Project Goblin by Night",
    "CSS Wizard with Too Many Tabs Open",
    "I Turn 'Just an Idea' into 'Oh, It’s Live'",
    "Built with Love, Caffeine & Console Logs",
  ];

  const [randomTagline, setRandomTagline] = useState("");

  useEffect(() => {
    const random = taglines[Math.floor(Math.random() * taglines.length)];
    setRandomTagline(random);
  }, []);

  return (
    <div className="w-full z-10 space-y-[1px] md:max-w-[700px]">
      {/* Top bar */}
      <div className="hidden md:flex h-14 items-center px-4 min-w-[700px] bg-[#424242] rounded-t-lg drop-shadow-md border">
        <p className="text-2xl font-bold text-white">home</p>
      </div>

      {/* Main content */}
      <div
        className="
        min-h-[500px] p-5 gap-10 flex flex-col justify-center items-center
        md:min-w-[700px] md:border-2 md:border-[#424242] md:border-opacity-35 md:bg-white md:dark:bg-slate-800
        rounded-b-lg drop-shadow-xl md:dark:border-white
      "
      >
        <div className="pt-10 text-center space-y-4">
          <h1 className="text-5xl font-extrabold dark:text-white">
            hi!{" "}
            <span className="text-orange-500 dark:text-blue-300">
              i'm abdelrahman
            </span>
          </h1>
          <p className="text-2xl min-h-9 dark:text-white">{randomTagline}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 md:gap-x-10 md:gap-y-10">
          {navItems.map((item) => (
            <NavButton
              setOpenedWindow={setOpenedWindow}
              key={item.label}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainWindow;
