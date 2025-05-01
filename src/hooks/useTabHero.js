"use client";
// take the window width and take out the tab width from it an give a random number between 0 and the number that came out
import { funnyTabTitles } from "@/components/tab-hero/funnyTabTitles";
import { useEffect, useState } from "react";
const useTabHero = () => {
  const [tabs, setTabs] = useState(funnyTabTitles);
  useEffect(() => {
    const windowWidth = window.innerWidth;
    console.log(windowWidth);
  }, []);
  return { tabs };
};

export default useTabHero;
