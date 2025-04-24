import { useWindowsContext } from "@/context/WindowsContext";
import { motion } from "framer-motion";
import { FiChevronsDown } from "react-icons/fi";
import About from "./windows/About";
import Contact from "./windows/Contact";
import Links from "./windows/Links";
import Work from "./windows/Work";
const RenderMobileWindow = ({ children, title = "about" }) => {
  const { clearWindows, windows } = useWindowsContext();
  const playSound = () => {
    const audio = new Audio("/sound/click.mp3");
    audio.play();
  };
  const renderComp = () => {
    switch (windows[0]) {
      case "about":
        return <About />;
      case "work":
        return <Work />;
      case "links":
        return <Links />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "tween", duration: 0.5 }}
      className="fixed bottom-0 left-0 w-full h-[94dvh] z-[9999] shadow-[0_-2px_10px_rgba(0,0,0,0.1)] rounded-t-2xl "
    >
      {/* Your content here */}

      <div className="w-full  grid gap-0 overflow-hidden ">
        <div className="text-white bg-[#424242]  flex justify-between py-2 px-4 h-fit rounded-t-lg">
          <p>{windows[0] || title}</p>
          <button
            onClick={() => {
              clearWindows();
              playSound();
            }}
            className="text-white text-xl"
          >
            <FiChevronsDown />
          </button>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-800 h-full overflow-y-auto p-3   ">
        {renderComp()}
      </div>
    </motion.div>
  );
};

export default RenderMobileWindow;
