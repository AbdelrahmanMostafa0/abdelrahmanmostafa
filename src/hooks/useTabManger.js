import { useEffect, useRef, useState } from "react";
import GameTabWindow from "@/components/tab-hero/GameTabWindow";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { funnyTabTitles } from "@/components/tab-hero/funnyTabTitles";
import { TiTabsOutline } from "react-icons/ti";
import { IoClose, IoCloseSharp } from "react-icons/io5";
import { HiMiniMinus } from "react-icons/hi2";
import { VscSettings } from "react-icons/vsc";
export const TabManager = () => {
  const [tabs, setTabs] = useState([]); // Store active tabs
  const [tabId, setTabId] = useState(0); // To give each tab a unique ID

  const tabRef = useRef(null);
  useEffect(() => {
    const checkPosition = () => {
      if (tabRef.current) {
        const rect = tabRef.current.getBoundingClientRect();
        console.log("Top:", rect.bottom, "Left:", rect.left);
        console.log("window.innerHeight", window.innerHeight);
        if (rect.bottom > window.innerHeight + 300) {
          console.log("Tab reached the bottom!");
          clearInterval(interval); // Stop checking once the tab reaches the bottom
          alert("Tab reached the bottom!");
          console.log("Tab reached the bottom!");
        }
      }
    };
    const interval = setInterval(checkPosition, 100); // Check every 100ms
    return () => clearInterval(interval);
  }, []);
  const randomBetween0and100 = () => {
    return Math.floor(Math.random() * 100);
  };
  console.log("randomBetween0and100", randomBetween0and100());
  const percentageNumber = () => {
    if (randomBetween0and100() < 500) {
      return randomBetween0and100();
    } else {
      return randomBetween0and100() + 500;
    }
  };
  return (
    <div className="w-full">
      <motion.div
        style={{
          width: "500px",
          left: `${percentageNumber}%`,
        }}
        ref={tabRef}
        initial={{ top: -300 }}
        animate={{ top: window.innerHeight }} // Animate to bottom of screen
        transition={{ duration: 4, ease: "linear" }} // Duration = 3 seconds
        className={cn(
          `md:block hidden w-[500px] left-[calc(100%_-_500)]  z-10  absolute  `
        )}
      >
        {/* Top bar */}
        <div
          // onClick={() => pushToTop(title)}

          className={`hidden md:flex flex-col min-h-10 pt-1 items-start  w-[500px] bg-[#adafb4]  rounded-t-lg drop-shadow-md border justify-between `}
        >
          <div className="w-full flex items-center justify-between ">
            <div className="w-5/12 rounded-t-xl h-6 bg-[#fff] ml-0.5 flex items-center justify-between px-2   ">
              <p className="line-clamp-1 text-xs">{funnyTabTitles[7]}</p>
              <IoClose className="text-black" />
            </div>
            <div className="flex items-center gap-2 pr-3">
              <HiMiniMinus />
              <TiTabsOutline />
              <IoClose className="text-black" />
            </div>
          </div>
          <div className="w-full bg-[#fff]  h-9 flex items-center px-2 gap-2">
            <div className="w-full text-xs bg-[#d4d6da] gap-0.5 rounded-full h-6 flex items-center text-stone-800 font-medium px-2">
              <div className="p-1 rounded-full bg">
                <VscSettings />
              </div>
              <p>
                <strong>google.com</strong>/search?q=
                {funnyTabTitles[7].split(" ").join("+").toLocaleLowerCase()}
              </p>
            </div>
          </div>
          {/* <p className="text-2xl font-bold text-white line-clamp-1">
            {funnyTabTitles[40]}
          </p>{" "}
          <button className="text-white gap-1 flex items-end font-bold">
            [<IoCloseSharp />]
          </button> */}
        </div>

        {/* Main content */}
        <div
          style={{
            height: "300px",
          }}
          className={cn(
            `custom-scrollbar w-[500px] p-5 py-2 gap-10 flex flex-col justify-center items-center  md:border-2 md:border-[#424242] md:border-opacity-35 md:bg-white  dark:text-white rounded-b-lg drop-shadow-xl overflow-auto
            `
          )}
        >
          <button
            style={{
              zIndex: 1000,
            }}
            className="bg-red-500 px-4 py-2 rounded-md text-white "
          >
            Close window
          </button>
        </div>
      </motion.div>
    </div>
  );
};
