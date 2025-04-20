"use client";
import { WiDaySunny } from "react-icons/wi";
import { BsFillSunFill } from "react-icons/bs";
import { useState } from "react";
import { RiMoonFill } from "react-icons/ri";
const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleDarkMode = () => setIsDark((prev) => !prev);
  return (
    <div className="fixed top-5 left-5">
      {/* <WiDaySunny className="text-5xl" /> */}
      <button onClick={toggleDarkMode}>
        {isDark ? (
          <RiMoonFill className="text-4xl" />
        ) : (
          <BsFillSunFill className="text-4xl" />
        )}
      </button>
    </div>
  );
};

export default Header;
