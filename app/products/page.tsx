"use client";

import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [editingId, setEditingId] = useState("");
  const [loadingAI, setLoadingAI] = useState(false);

  // Fetch Products
  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // AI Description Generator
  const generateDescription = async () => {
    if (!name || !category) {
      alert("Please enter Product Name and Category first.");
      return;
    }

    setLoadingAI(true);

    try {
      const res = await fetch("http://localhost:5000/api/ai/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productName: name,
          material: "Handmade",
          category: category,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setDescription(data.description);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("AI Generation Failed");
    }

    setLoadingAI(false);
  };

  // Add Product
  const addProduct = async () => {
    await fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        category,
        price: Number(price),
        description,
      }),
    });

    setName("");
    setCategory("");
    setPrice("");
    setDescription("");

    fetchProducts();
  };

  // Delete Product
  const deleteProduct = async (id: string) => {
    await fetch(`http://localhost:5000/api/products/${id}`, {
      method: "DELETE",
    });

    fetchProducts();
  };

  // Edit Product
  const editProduct = (product: any) => {
    setEditingId(product._id);
    setName(product.name);
    setCategory(product.category);
    setPrice(product.price);
    setDescription(product.description);
  };

  // Update Product
  const updateProduct = async () => {
    await fetch(`http://localhost:5000/api/products/${editingId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        category,
        price: Number(price),
        description,
      }),
    });

    setEditingId("");

    setName("");
    setCategory("");
    setPrice("");
    setDescription("");

    fetchProducts();
  };

  return (
    <div className="max-w-5xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        KalaSetu Product Manager
      </h1>

      <div className="space-y-4 bg-gray-100 p-6 rounded-lg shadow">

        <input
          className="border p-3 rounded w-full"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-3 rounded w-full"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          className="border p-3 rounded w-full"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <textarea
          className="border p-3 rounded w-full"
          rows={5}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          onClick={generateDescription}
          disabled={loadingAI}
          className="bg-purple-600 text-white px-5 py-3 rounded w-full"
        >
          {loadingAI ? "Generating AI Description..." : "Generate AI Description"}
        </button>

        {editingId ? (
          <button
            onClick={updateProduct}
            className="bg-green-600 text-white px-5 py-3 rounded w-full"
          >
            Update Product
          </button>
        ) : (
          <button
            onClick={addProduct}
            className="bg-blue-600 text-white px-5 py-3 rounded w-full"
          >
            Add Product
          </button>
        )}

      </div>

      <h2 className="text-3xl font-bold mt-10 mb-5">
        Products
      </h2>

      {products.map((product: any) => (
        <div
          key={product._id}
          className="border rounded-lg p-5 mb-4 shadow"
        >
          <h3 className="text-xl font-bold">
            {product.name}
          </h3>

          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <p>
            <strong>Price:</strong> ₹{product.price}
          </p>

          <p className="mt-2">
            {product.description}
          </p>

          <div className="mt-4 space-x-3">

            <button
              onClick={() => editProduct(product)}
              className="bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Edit
            </button>

            <button
              onClick={() => deleteProduct(product._id)}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Delete
            </button>

          </div>
        </div>
      ))}

    </div>
  );
}