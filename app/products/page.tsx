"use client";

import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [editingId, setEditingId] = useState("");

  // Fetch Products
  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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

  // Load Product for Editing
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
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        KalaSetu Product Manager
      </h1>

      <div className="space-y-3 mb-8">

        <input
          className="border p-2 w-full"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {editingId ? (
          <button
            onClick={updateProduct}
            className="bg-green-600 text-white px-5 py-2 rounded"
          >
            Update Product
          </button>
        ) : (
          <button
            onClick={addProduct}
            className="bg-blue-600 text-white px-5 py-2 rounded"
          >
            Add Product
          </button>
        )}
      </div>

      <h2 className="text-2xl font-bold mb-4">
        Products
      </h2>

      {products.map((product: any) => (
        <div
          key={product._id}
          className="border p-4 rounded mb-3"
        >
          <h3 className="font-bold">
            {product.name}
          </h3>

          <p>{product.category}</p>

          <p>₹ {product.price}</p>

          <p>{product.description}</p>

          <div className="space-x-2 mt-3">
            <button
              onClick={() => editProduct(product)}
              className="bg-yellow-500 text-white px-4 py-1 rounded"
            >
              Edit
            </button>

            <button
              onClick={() => deleteProduct(product._id)}
              className="bg-red-600 text-white px-4 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}