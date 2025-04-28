import { cn } from "@/utils/cn";
import { motion, useDragControls } from "framer-motion";
import { useEffect, useState } from "react";

const GameTabWindow = ({ width = 700, height = 550 }) => {
  const [position, setPosition] = useState(0); // Starting position
  const [isFalling, setIsFalling] = useState(true); // Track if falling

  useEffect(() => {
    if (isFalling) {
      const fallInterval = setInterval(() => {
        setPosition((prevPosition) => prevPosition + 2); // Speed of fall (increase for faster fall)
      }, 16); // Around 60 FPS (16ms per frame)

      // Check if tab reaches the bottom of the screen
      if (position > window.innerHeight) {
        clearInterval(fallInterval); // Stop the fall
        // Optionally, remove tab from state
      }

      return () => clearInterval(fallInterval);
    }
  }, [isFalling, position]);
  return (
    <motion.div
      style={{
        position: "absolute",
        top: `${position}px`,
        left: `${Math.random() * window.innerWidth}px`, // Random horizontal start position
        background: "blue",
        width: "50px",
        height: "50px",
      }}
      animate={{ top: position }} // Framer Motion for smooth animations
      className={`md:block hidden w-full z-10 space-y-[1px] absolute `}
    >
      <div
        // onClick={() => pushToTop(title)}

        className={`hidden md:flex h-14 items-center px-4 min-w-[${width}px] bg-[#424242] rounded-t-lg drop-shadow-md border justify-between `}
      >
        <p className="text-2xl font-bold text-white">{"home"}</p>{" "}
      </div>
      <div
        className={cn(
          `custom-scrollbar 
            h-[550px] p-5 py-2 gap-10 flex flex-col justify-center items-center
                md:min-w-[${width}px] md:border-2 md:border-[#424242] md:border-opacity-35 md:bg-white md:dark:bg-slate-800 dark:text-white
                rounded-b-lg drop-shadow-xl overflow-auto
              `,
          `h-[${height}px]`
        )}
      >
        {/* {children} */}
      </div>
    </motion.div>
  );
};
export default GameTabWindow;
