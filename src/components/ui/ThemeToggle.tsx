"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handle = setTimeout(() => {
      setMounted(true);
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    }, 0);
    return () => clearTimeout(handle);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  if (!mounted) {
    // Return a placeholder structure during server side rendering to prevent layout shift
    return (
      <div className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50" />
    );
  }

  // Spring transition timing function for premium animation feel
  const springStyle = {
    transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm cursor-pointer overflow-hidden group focus:outline-none focus:ring-2 focus:ring-teal-500/50"
      aria-label="Toggle Color Theme"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {/* Sun Icon */}
        <Sun
          className="w-5 h-5 absolute transition-all duration-500 transform rotate-0 scale-100 dark:-rotate-90 dark:scale-0 text-amber-500"
          style={springStyle}
        />
        
        {/* Moon Icon */}
        <Moon
          className="w-5 h-5 absolute transition-all duration-500 transform rotate-90 scale-0 dark:rotate-0 dark:scale-100 text-teal-500 dark:text-teal-400"
          style={springStyle}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
