"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeContext";

interface Product {
  _id?: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

interface Props {
  selectedProduct: Product | null;
  fetchProducts: () => void;
  clearSelection: () => void;
}

export default function ProductForm({
  selectedProduct,
  fetchProducts,
  clearSelection,
}: Props) {
  const { darkMode } = useTheme();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (selectedProduct) {
      setName(selectedProduct.name);
      setCategory(selectedProduct.category);
      setPrice(selectedProduct.price.toString());
      setDescription(selectedProduct.description);
      setImage(selectedProduct.image);
    } else {
      setName("");
      setCategory("");
      setPrice("");
      setDescription("");
      setImage("");
    }
  }, [selectedProduct]);

  const handleSubmit = async () => {
    if (
      !name ||
      !category ||
      !price ||
      !description ||
      !image
    ) {
      alert("Please fill all fields.");
      return;
    }

    const product = {
      name,
      category,
      price: Number(price),
      description,
      image,
    };

    try {
      if (selectedProduct) {
        await fetch(
          `http://localhost:5000/api/products/${selectedProduct._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          }
        );
      } else {
        await fetch(
          "http://localhost:5000/api/products",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          }
        );
      }

      fetchProducts();

      setName("");
      setCategory("");
      setPrice("");
      setDescription("");
      setImage("");

      clearSelection();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className={`rounded-2xl shadow-xl p-8 mb-10 ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <h2 className="text-3xl font-bold mb-6">
        {selectedProduct ? "Edit Product" : "Add Product"}
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <input
          className="border p-3 rounded-lg text-black"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-3 rounded-lg text-black"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          className="border p-3 rounded-lg text-black"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          className="border p-3 rounded-lg text-black"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

      </div>

      <textarea
        className="border p-3 rounded-lg w-full mt-5 text-black"
        rows={4}
        placeholder="Description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      <div className="flex gap-4 mt-6">

        <button
          onClick={handleSubmit}
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg"
        >
          {selectedProduct
            ? "Update Product"
            : "Add Product"}
        </button>

        {selectedProduct && (
          <button
            onClick={clearSelection}
            className="bg-gray-500 text-white px-8 py-3 rounded-lg"
          >
            Cancel
          </button>
        )}

      </div>
    </div>
  );
}