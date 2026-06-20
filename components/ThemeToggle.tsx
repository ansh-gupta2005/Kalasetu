"use client";

import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } =
    useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="bg-white text-black px-3 py-1 rounded"
    >
      {darkMode
        ? "☀️ Light"
        : "🌙 Dark"}
    </button>
  );
}