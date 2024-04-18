"use client";

import { useTheme } from "next-themes";
import { MdLightMode, MdDarkMode } from "react-icons/md";
const DarkModeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {currentTheme === "dark" ? (
        <MdLightMode
          onClick={() => setTheme("light")}
          className="text-2xl cursor-pointer"
        />
      ) : (
        <MdDarkMode
          onClick={() => setTheme("dark")}
          className="text-2xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default DarkModeSwitch;
