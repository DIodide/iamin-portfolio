import { useState, useCallback } from "react";

export type TerminalColorScheme = "default" | "red" | "yellow" | "green";

export interface TerminalColors {
  container: string;
  header: string;
  content: string;
  border: string;
}

// Get color scheme styles
export const getTerminalColorScheme = (
  scheme: TerminalColorScheme
): TerminalColors => {
  switch (scheme) {
    case "red":
      return {
        container:
          "from-red-100/95 to-red-200/95 dark:from-red-900/90 dark:to-red-800/90",
        header:
          "bg-red-200/80 dark:bg-red-800/50 border-red-300/50 dark:border-red-700/30",
        content: "bg-red-50/70 dark:bg-red-900/60",
        border: "border-red-300/50 dark:border-red-600/50",
      };
    case "yellow":
      return {
        container:
          "from-yellow-100/95 to-yellow-200/95 dark:from-yellow-900/90 dark:to-yellow-800/90",
        header:
          "bg-yellow-200/80 dark:bg-yellow-800/50 border-yellow-300/50 dark:border-yellow-700/30",
        content: "bg-yellow-50/70 dark:bg-yellow-900/60",
        border: "border-yellow-300/50 dark:border-yellow-600/50",
      };
    case "green":
      return {
        container:
          "from-green-100/95 to-green-200/95 dark:from-green-900/90 dark:to-green-800/90",
        header:
          "bg-green-200/80 dark:bg-green-800/50 border-green-300/50 dark:border-green-700/30",
        content: "bg-green-50/70 dark:bg-green-900/60",
        border: "border-green-300/50 dark:border-green-600/50",
      };
    default:
      return {
        container:
          "from-gray-100/95 to-gray-200/95 dark:from-slate-800/90 dark:to-slate-900/90",
        header:
          "bg-gray-200/80 dark:bg-slate-700/50 border-gray-300/50 dark:border-slate-600/30",
        content: "bg-white/70 dark:bg-slate-900/60",
        border: "border-gray-300/50 dark:border-slate-600/50",
      };
  }
};

// Custom hook for managing terminal state
export const useTerminal = () => {
  const [colorScheme, setColorScheme] =
    useState<TerminalColorScheme>("default");
  const [isShaking, setIsShaking] = useState(false);

  const handleButtonClick = useCallback((color: "red" | "yellow" | "green") => {
    setColorScheme(color);
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  }, []);

  const colors = getTerminalColorScheme(colorScheme);

  return {
    colorScheme,
    isShaking,
    colors,
    handleButtonClick,
  };
};

// Terminal button props interface
export interface TerminalButtonProps {
  color: "red" | "yellow" | "green";
  symbol: "×" | "−" | "+";
  onClick: () => void;
}

// Get terminal button styling
export const getTerminalButtonClasses = (
  color: "red" | "yellow" | "green"
) => ({
  buttonClass: `w-3 h-3 bg-${color}-500 rounded-full cursor-pointer hover:bg-${color}-600 transition-colors duration-200 flex items-center justify-center group`,
  symbolClass: `text-[12px] text-${color}-900 opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-bold leading-none`,
});
