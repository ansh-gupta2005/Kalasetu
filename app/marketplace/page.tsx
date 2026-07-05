"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useTheme } from "../../components/ThemeContext";
import ProductCard from "../../components/ProductCard";
import ProductForm from "../../components/ProductForm";

interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

export default function Marketplace() {
  const { darkMode } = useTheme();

  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (id: string) => {
    if (!confirm("Delete this product?")) return;

    try {
      await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
      });

      fetchProducts();
    } catch (err) {
      console.log(err);
    }
  };

  const editProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const clearSelection = () => {
    setSelectedProduct(null);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "bg-gray-950 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <Navbar />

      <section className="max-w-7xl mx-auto px-8 py-12">

        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-10">

          <div>

            <h1 className="text-5xl font-bold">
              Marketplace
            </h1>

            <p className="mt-3 text-lg text-gray-500">
              Explore handcrafted products from talented local artisans.
            </p>

          </div>

          <input
            type="text"
            placeholder="Search Products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-xl px-5 py-3 w-80 text-black"
          />

        </div>

        <ProductForm
          selectedProduct={selectedProduct}
          fetchProducts={fetchProducts}
          clearSelection={clearSelection}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

          {filteredProducts.map((product) => (
                        <ProductCard
              key={product._id}
              product={product}
              onEdit={editProduct}
              onDelete={deleteProduct}
            />
          ))}

        </div>

      </section>

      <Footer />

    </div>
  );
}