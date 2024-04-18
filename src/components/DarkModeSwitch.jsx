"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
const DarkModeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mode, setMode] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => setMode(true), []);
  return (
    <div>
      {mode &&
        (currentTheme === "dark" ? (
          <MdLightMode
            onClick={() => setTheme("light")}
            className="text-2xl cursor-pointer"
          />
        ) : (
          <MdDarkMode
            onClick={() => setTheme("dark")}
            className="text-2xl cursor-pointer"
          />
        ))}
    </div>
  );
};

export default DarkModeSwitch;
