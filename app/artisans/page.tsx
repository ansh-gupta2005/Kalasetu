"use client";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useTheme } from "../../components/ThemeContext";

const artisans = [
  {
    id: 1,
    name: "Ramesh Kumar",
    craft: "Wood Carving",
    location: "Jaipur, Rajasthan",
    experience: "12 Years",
    image: "🪵",
  },
  {
    id: 2,
    name: "Meena Devi",
    craft: "Handwoven Sarees",
    location: "Varanasi, Uttar Pradesh",
    experience: "18 Years",
    image: "🧵",
  },
  {
    id: 3,
    name: "Suresh Patel",
    craft: "Clay Pottery",
    location: "Kutch, Gujarat",
    experience: "10 Years",
    image: "🏺",
  },
  {
    id: 4,
    name: "Anjali Sharma",
    craft: "Hand Embroidery",
    location: "Lucknow, Uttar Pradesh",
    experience: "9 Years",
    image: "🪡",
  },
  {
    id: 5,
    name: "Rahul Verma",
    craft: "Bamboo Crafts",
    location: "Assam",
    experience: "15 Years",
    image: "🎍",
  },
  {
    id: 6,
    name: "Sunita Joshi",
    craft: "Traditional Jewellery",
    location: "Odisha",
    experience: "14 Years",
    image: "💍",
  },
];

export default function Artisans() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "bg-gray-950 text-white"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      <Navbar />

      <section className="max-w-7xl mx-auto px-8 py-16">

        <h1 className="text-5xl font-bold text-center mb-4">
          Meet Our Artisans
        </h1>

        <p className="text-center text-lg mb-14">
          Discover talented artisans preserving India's rich
          cultural heritage through handcrafted creations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {artisans.map((artisan) => (

            <div
              key={artisan.id}
              className={`rounded-2xl shadow-xl p-8 transition hover:scale-105 ${
                darkMode
                  ? "bg-gray-800"
                  : "bg-white"
              }`}
            >

              <div className="text-7xl text-center mb-5">
                {artisan.image}
              </div>

              <h2 className="text-2xl font-bold text-center">
                {artisan.name}
              </h2>

              <p className="text-orange-500 text-center mt-2">
                {artisan.craft}
              </p>

              <p className="text-center mt-3">
                📍 {artisan.location}
              </p>

              <p className="text-center">
                💼 {artisan.experience}
              </p>

              <p className="text-center mt-3 text-yellow-500">
                ⭐⭐⭐⭐⭐
              </p>

            </div>

          ))}

        </div>

      </section>

      <Footer />
    </div>
  );
}