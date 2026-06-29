"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import Loader from "../components/ui/Loader";

interface Product {
  id: number;
  name: string;
  category: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      <Hero />

      <section className="p-6">
        <h2 className="text-3xl font-bold mb-5">
          Featured Products
        </h2>

        {loading ? (
          <Loader />
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.name}
                description={product.category}
              />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}