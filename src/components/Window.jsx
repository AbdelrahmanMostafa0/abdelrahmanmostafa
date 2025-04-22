"use client";
import { useRef } from "react";
import { motion, useDragControls } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import { cn } from "@/utils/cn";
const Window = ({
  containerRef,
  setOpenedWindow,
  title,
  children,
  containerStyle,
  width = 700,
}) => {
  const controls = useDragControls();
  const closeWindow = () => setOpenedWindow("");
  return (
    <motion.div
      drag
      dragControls={controls}
      dragConstraints={containerRef}
      className={cn(
        `md:block hidden w-full z-10 space-y-[1px] absolute top-[15%] left-[30%] ml-5`,
        containerStyle
      )}
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
    >
      {/* Top bar */}
      <div
        className={`hidden md:flex h-14 items-center px-4 min-w-[${width}px] bg-[#424242] rounded-t-lg drop-shadow-md border justify-between `}
      >
        <p className="text-2xl font-bold text-white">{title || "home"}</p>{" "}
        <button
          onClick={closeWindow}
          className="text-white gap-1 flex items-end font-bold"
        >
          [<IoCloseSharp />]
        </button>
      </div>

      {/* Main content */}
      <div
        className={`"
          h-[550px] p-5 py-2 gap-10 flex flex-col justify-center items-center
          md:min-w-[${width}px] md:border-2 md:border-[#424242] md:border-opacity-35 md:bg-white
          rounded-b-lg drop-shadow-xl overflow-auto
        "`}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default Window;
