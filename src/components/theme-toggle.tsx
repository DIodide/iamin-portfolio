"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="cursor-pointer hover:scale-120 duration-300 inline-flex items-center justify-center h-10 w-10 bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-background/80 transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 relative overflow-hidden"
      style={{ borderRadius: "0px" }}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
