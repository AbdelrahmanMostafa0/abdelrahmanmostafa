"use client";
import { useEffect } from "react";

const ThemeProvider = () => {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);
  return <div>ThemeProvider</div>;
};
export default ThemeProvider;
