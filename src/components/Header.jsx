"use client";
import { WiDaySunny } from "react-icons/wi";
import { BsFillSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { RiMoonFill } from "react-icons/ri";
import { motion } from "motion/react";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  console.log("isDark", isDark);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    const nowDark = html.classList.toggle("dark");
    localStorage.setItem("theme", nowDark ? "dark" : "light");
    setIsDark(nowDark);
  };
  const playSound = () => {
    const audio = new Audio("/sound/click.mp3");
    audio.play();
  };
  return (
    <div className="fixed top-5 left-5 dark:text-white z-10">
      {/* <WiDaySunny className="text-5xl" /> */}
      <button
        onClick={() => {
          playSound();
          toggleDarkMode();
        }}
      >
        {isDark ? (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 90 }}
            transition={{ duration: 0.5, repeatType: "reverse" }}
          >
            <BsFillSunFill className="text-4xl" />
          </motion.div>
        ) : (
          <motion.div>
            <RiMoonFill className="text-4xl" />
          </motion.div>
        )}
        {/* {!isDark ? (
          <RiMoonFill className="text-4xl" />
        ) : (
          <BsFillSunFill className="text-4xl" />
        )} */}
      </button>
    </div>
  );
};

export default Header;
