"use client";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import Footer from "../components/layout/Footer";
import { useTheme } from "../components/ThemeContext";

export default function Home() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        darkMode
          ? "bg-gray-950 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <Navbar />

      <Hero />

      {/* About */}

      <section className="max-w-6xl mx-auto px-8 py-20">

        <h2 className="text-4xl font-bold text-center mb-10">
          Why Choose KalaSetu?
        </h2>

        <p className="text-center text-lg leading-8 max-w-4xl mx-auto">
          KalaSetu bridges the gap between talented artisans and
          customers by providing a trusted platform to showcase
          handmade products. Every purchase supports traditional
          craftsmanship and helps preserve India's rich cultural
          heritage while empowering local communities.
        </p>

      </section>

      {/* Features */}

      <section className="max-w-6xl mx-auto px-8 pb-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="rounded-2xl shadow-lg p-6 text-center bg-orange-50 dark:bg-gray-800">

            <div className="text-5xl mb-4">🛍</div>

            <h3 className="text-xl font-bold mb-3">
              Handmade Products
            </h3>

            <p>
              Authentic handcrafted products made by skilled
              artisans across India.
            </p>

          </div>

          <div className="rounded-2xl shadow-lg p-6 text-center bg-orange-50 dark:bg-gray-800">

            <div className="text-5xl mb-4">❤️</div>

            <h3 className="text-xl font-bold mb-3">
              Support Artisans
            </h3>

            <p>
              Every purchase directly contributes to artisan
              livelihoods and growth.
            </p>

          </div>

          <div className="rounded-2xl shadow-lg p-6 text-center bg-orange-50 dark:bg-gray-800">

            <div className="text-5xl mb-4">🌍</div>

            <h3 className="text-xl font-bold mb-3">
              Across India
            </h3>

            <p>
              Discover unique regional crafts from different
              states and cultures.
            </p>

          </div>

          <div className="rounded-2xl shadow-lg p-6 text-center bg-orange-50 dark:bg-gray-800">

            <div className="text-5xl mb-4">⭐</div>

            <h3 className="text-xl font-bold mb-3">
              Trusted Marketplace
            </h3>

            <p>
              Secure, reliable and transparent shopping
              experience for everyone.
            </p>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="py-20">

        <h2 className="text-4xl font-bold text-center mb-16">
          Our Impact
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          <div>

            <h3 className="text-5xl font-bold text-orange-500">
              500+
            </h3>

            <p className="mt-3">
              Artisans
            </p>

          </div>

          <div>

            <h3 className="text-5xl font-bold text-orange-500">
              2000+
            </h3>

            <p className="mt-3">
              Products
            </p>

          </div>

          <div>

            <h3 className="text-5xl font-bold text-orange-500">
              100+
            </h3>

            <p className="mt-3">
              Cities
            </p>

          </div>

          <div>

            <h3 className="text-5xl font-bold text-orange-500">
              10000+
            </h3>

            <p className="mt-3">
              Happy Customers
            </p>

          </div>

        </div>

      </section>

      <Footer />
    </div>
  );
}