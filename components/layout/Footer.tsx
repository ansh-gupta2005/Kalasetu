"use client";

import Link from "next/link";
import { useTheme } from "../ThemeContext";

export default function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`mt-20 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-800 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-3 gap-10">

        {/* About */}

        <div>

          <h2 className="text-3xl font-bold text-orange-500">
            KalaSetu
          </h2>

          <p className="mt-4 leading-7 text-gray-300">
            KalaSetu is a digital marketplace connecting talented
            Indian artisans with customers across the country.
            We aim to preserve India's rich handicraft heritage
            while empowering local creators.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h2 className="text-2xl font-semibold mb-4">
            Quick Links
          </h2>

          <div className="flex flex-col gap-3">

            <Link href="/" className="hover:text-orange-400">
              Home
            </Link>

            <Link
              href="/artisans"
              className="hover:text-orange-400"
            >
              Artisans
            </Link>

            <Link
              href="/marketplace"
              className="hover:text-orange-400"
            >
              Marketplace
            </Link>

            <Link
              href="/login"
              className="hover:text-orange-400"
            >
              Login
            </Link>

          </div>

        </div>

        {/* Contact */}

        <div>

          <h2 className="text-2xl font-semibold mb-4">
            Contact
          </h2>

          <p className="mb-3">
            📧 support@kalasetu.com
          </p>

          <p className="mb-3">
            📞 +91 9876543210
          </p>

          <p className="mb-6">
            📍 New Delhi, India
          </p>

          <div className="flex gap-5 text-2xl">

            <span className="cursor-pointer hover:text-orange-400">
              🌐
            </span>

            <span className="cursor-pointer hover:text-orange-400">
              📸
            </span>

            <span className="cursor-pointer hover:text-orange-400">
              💼
            </span>

            <span className="cursor-pointer hover:text-orange-400">
              🐦
            </span>

          </div>

        </div>

      </div>

      <div className="border-t border-gray-700 py-5 text-center text-gray-400">

        © {new Date().getFullYear()} KalaSetu. All Rights Reserved.

      </div>

    </footer>
  );
}