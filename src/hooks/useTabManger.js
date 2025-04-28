import { useEffect, useRef, useState } from "react";
import GameTabWindow from "@/components/tab-hero/GameTabWindow";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { funnyTabTitles } from "@/components/tab-hero/funnyTabTitles";
import { IoCloseSharp } from "react-icons/io5";
export const TabManager = () => {
  const [tabs, setTabs] = useState([]); // Store active tabs
  const [tabId, setTabId] = useState(0); // To give each tab a unique ID

  const tabRef = useRef(null);
  useEffect(() => {
    // const checkPosition = () => {
    //   if (tabRef.current) {
    //     const rect = tabRef.current.getBoundingClientRect();
    //     console.log("Top:", rect.bottom, "Left:", rect.left);
    //     console.log("window.innerHeight", window.innerHeight);
    //     if (rect.bottom > window.innerHeight) {
    //       console.log("Tab reached the bottom!");
    //       clearInterval(interval); // Stop checking once the tab reaches the bottom
    //       // alert("Tab reached the bottom!");
    //       console.log("Tab reached the bottom!");
    //     }
    //   }
    // };
    // const interval = setInterval(checkPosition, 100); // Check every 100ms
    // return () => clearInterval(interval);
  }, []);
  console.log("hi");
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
          left: `calc(${percentageNumber}px)`,
        }}
        ref={tabRef}
        initial={{ top: 0 }}
        // animate={{ top: window.innerHeight }} // Animate to bottom of screen
        transition={{ duration: 3, ease: "linear" }} // Duration = 3 seconds
        className={cn(
          `md:block hidden w-[500px] left-[calc(100%_-_500)]  z-10 space-y-[1px] absolute  `
        )}
      >
        {/* Top bar */}
        <div
          // onClick={() => pushToTop(title)}

          className={`hidden md:flex h-14 items-center px-4 w-[500px] bg-[#424242] rounded-t-lg drop-shadow-md border justify-between `}
        >
          <p className="text-2xl font-bold text-white line-clamp-1">
            {funnyTabTitles[40]}
          </p>{" "}
          <button className="text-white gap-1 flex items-end font-bold">
            [<IoCloseSharp />]
          </button>
        </div>

        {/* Main content */}
        <div
          style={{
            height: "400px",
          }}
          className={cn(
            `custom-scrollbar w-[500px] p-5 py-2 gap-10 flex flex-col justify-center items-center  md:border-2 md:border-[#424242] md:border-opacity-35 md:bg-white md:dark:bg-slate-800 dark:text-white rounded-b-lg drop-shadow-xl overflow-auto
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
