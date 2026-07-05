"use client";

import Link from "next/link";
import { useTheme } from "../ThemeContext";

export default function Hero() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`transition-all duration-300 ${
        darkMode
          ? "bg-gradient-to-r from-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-r from-orange-100 to-orange-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}

        <div>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">

            Connecting

            <span className="text-orange-500">
              {" "}Artisans{" "}
            </span>

            With The World

          </h1>

          <p className="mt-8 text-lg leading-8">

            KalaSetu is a digital marketplace that empowers
            local artisans by showcasing authentic handmade
            products to customers across India. Our mission
            is to preserve traditional craftsmanship while
            creating better opportunities for artisan
            communities.

          </p>

          <div className="mt-10 flex gap-4">

            <Link
              href="/marketplace"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl transition font-semibold"
            >
              Explore Marketplace
            </Link>

            <Link
              href="/artisans"
              className={`border px-8 py-3 rounded-xl font-semibold transition ${
                darkMode
                  ? "border-white hover:bg-white hover:text-black"
                  : "border-gray-900 hover:bg-gray-900 hover:text-white"
              }`}
            >
              Meet Artisans
            </Link>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <div
            className={`rounded-3xl shadow-2xl p-10 text-center ${
              darkMode
                ? "bg-gray-800"
                : "bg-white"
            }`}
          >

            <div className="text-7xl mb-6">
              🧵
            </div>

            <h2 className="text-3xl font-bold mb-4">
              Handmade With Love
            </h2>

            <p className="leading-7">

              Discover handcrafted products from talented
              artisans across India and support local
              craftsmanship.

            </p>

          </div>

        </div>

      </div>
    </section>
  );
}