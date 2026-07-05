"use client";

import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded-full font-medium transition-all duration-300 shadow-md
      ${
        darkMode
          ? "bg-yellow-400 text-black hover:bg-yellow-300"
          : "bg-gray-900 text-white hover:bg-gray-700"
      }`}
    >
      {darkMode ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}