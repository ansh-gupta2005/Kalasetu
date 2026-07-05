"use client";

import Link from "next/link";
import ThemeToggle from "../ThemeToggle";
import { useTheme } from "../ThemeContext";

export default function Navbar() {
  const { darkMode } = useTheme();

  return (
    <nav
      className={`sticky top-0 z-50 shadow-md transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        
        {/* Logo */}

        <Link
          href="/"
          className="text-3xl font-bold text-orange-500"
        >
          🧵 KalaSetu
        </Link>

        {/* Navigation */}

        <div className="hidden md:flex items-center gap-8 font-medium">

          <Link
            href="/"
            className="hover:text-orange-500 transition"
          >
            Home
          </Link>

          <Link
            href="/artisans"
            className="hover:text-orange-500 transition"
          >
            Artisans
          </Link>

          <Link
            href="/marketplace"
            className="hover:text-orange-500 transition"
          >
            Marketplace
          </Link>

          <Link
            href="/login"
            className="hover:text-orange-500 transition"
          >
            Login
          </Link>

          <ThemeToggle />

        </div>
      </div>
    </nav>
  );
}