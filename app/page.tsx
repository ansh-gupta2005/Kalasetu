"use client";
import { useTheme } from "../components/ThemeContext";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

export default function Home() {
  const { darkMode } = useTheme();

  return (
    <div
      className={
        darkMode
          ? "bg-gray-900 text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      <Navbar />

      <Hero />

      <section className="p-4">
        <h2 className="text-2xl font-bold mb-3">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <ProductCard
            title="Handwoven Saree"
            description="Traditional handcrafted saree made by local artisans."
          />

          <ProductCard
            title="Clay Pottery"
            description="Beautiful handmade pottery crafted with care."
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}