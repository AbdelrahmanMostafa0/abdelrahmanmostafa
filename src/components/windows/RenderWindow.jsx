"use";
import { useWindowsContext } from "@/context/WindowsContext";
import Window from "../Window";
import About from "./About";
import Contact from "./Contact";
import Links from "./Links";
import Work from "./Work";

const RenderWindow = ({ window, setOpenedWindow, containerRef }) => {
  const renderTab = () => {
    switch (window) {
      case "about":
        return (
          <Window
            title={window}
            containerRef={containerRef}
            setOpenedWindow={setOpenedWindow}
            containerStyle={"max-w-[500px]"}
          >
            <div className="!overflow-auto w-full ">
              <About />

              {/* <About /> */}
              {/* <Contact /> */}
            </div>
          </Window>
        );
      case "contact":
        return (
          <Window
            width={400}
            title={window}
            containerRef={containerRef}
            setOpenedWindow={setOpenedWindow}
            containerStyle={"max-w-[500px]"}
          >
            <div className="!overflow-auto w-full ">
              <Contact />
            </div>
          </Window>
        );
      case "links":
        return (
          <Window
            height={350}
            width={500}
            title={window}
            containerRef={containerRef}
            setOpenedWindow={setOpenedWindow}
            containerStyle={"max-w-[500px]"}
          >
            <div className=" w-full ">
              <Links />
            </div>
          </Window>
        );
      case "work":
        return (
          <Window
            title={window}
            containerRef={containerRef}
            setOpenedWindow={setOpenedWindow}
            containerStyle={"max-w-[500px]"}
          >
            <div className="!overflow-auto w-full h-full scrollbar-retro  ">
              <Work />
            </div>
          </Window>
        );
      default:
        return null;
    }
  };
  return renderTab();
};
export default RenderWindow;
