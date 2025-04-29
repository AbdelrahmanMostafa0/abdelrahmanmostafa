import { IoCloseCircleSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { motion, useDragControls } from "framer-motion";
import { cn } from "@/utils/cn";
import GameLoading from "./GameLoading";
import { TabManager } from "@/hooks/useTabManger";
const TabHero = ({ setGamePlay }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsFullScreen(true);
    }, 5000);
  }, []);
  return (
    <div className="w-screen h-screen z-[1000] absolute flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
        className={cn(
          "w-screen h-screen z-[1000] absolute  flex items-center justify-center ",
          `${!isFullScreen && "mb-20 mr-20"}`
        )}
      >
        <div
          className={cn(
            "w-full z-10 space-y-[1px] md:max-w-[500px] relative duration-150 ",
            `${isFullScreen ? " w-screen h-screen absolute top-0 left-0" : ""}`
          )}
        >
          <div
            className={cn(
              "hidden md:flex h-14 items-center px-4 min-w-[500px] bg-[#424242] rounded-t-lg drop-shadow-md border  justify-between",
              `${isFullScreen ? " w-screen duration-150" : ""}`
            )}
          >
            <p className="text-2xl font-bold text-white"> Tab hero</p>
            <button
              className="rounded-full text-xl bg-white text-red-500 "
              onClick={() => setGamePlay(false)}
            >
              <IoCloseCircleSharp />
            </button>
          </div>
          <div
            className={cn(
              `
        min-h-[500px] p-5 gap-10 flex flex-col justify-center items-center
        md:min-w-[500px] md:border-2 md:border-[#424242] md:border-opacity-35 md:bg-white md:dark:bg-slate-800
        rounded-b-lg drop-shadow-xl md:dark:border-white
      `,
              `${isFullScreen ? " duration-150 w-screen h-full " : ""}`
            )}
          >
            {!isFullScreen ? <GameLoading /> : <TabManager />}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default TabHero;
