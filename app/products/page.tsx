"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductsPage() {
  const router = useRouter();

  const [products, setProducts] = useState<any[]>([]);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [editingId, setEditingId] = useState("");
  const [loadingAI, setLoadingAI] = useState(false);

  // =============================
  // Authentication + Fetch Products
  // =============================

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    fetchProducts();
  }, [router]);

  // =============================
  // Fetch Products
  // =============================

  const fetchProducts = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/products");

    const data = await res.json();

    console.log("Products from API:", data);

    setProducts(data);
  } catch (error) {
    console.log(error);
    alert("Unable to fetch products.");
  }
};

  // =============================
  // AI Description Generator
  // =============================

  const generateDescription = async () => {
    if (!name || !category) {
      alert("Please enter Product Name and Category.");
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
          category,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setDescription(data.description);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("AI Generation Failed");
    }

    setLoadingAI(false);
  };

  // =============================
  // Add Product
  // =============================

  const addProduct = async () => {
    if (!name || !category || !price || !description) {
      alert("Please fill all fields.");
      return;
    }

    try {
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

      alert("Product Added Successfully!");

      setName("");
      setCategory("");
      setPrice("");
      setDescription("");

      fetchProducts();

    } catch (error) {
      console.log(error);
      alert("Unable to add product.");
    }
  };

  // =============================
  // Delete Product
  // =============================

  const deleteProduct = async (id: string) => {
    try {
      await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
      });

      alert("Product Deleted Successfully!");

      fetchProducts();

    } catch (error) {
      console.log(error);
      alert("Unable to delete product.");
    }
  };

  // =============================
  // Edit Product
  // =============================

  const editProduct = (product: any) => {
    setEditingId(product._id);
    setName(product.name);
    setCategory(product.category);
    setPrice(product.price.toString());
    setDescription(product.description);
  };

  // =============================
  // Update Product
  // =============================

  const updateProduct = async () => {
    if (!name || !category || !price || !description) {
      alert("Please fill all fields.");
      return;
    }

    try {
      await fetch(
        `http://localhost:5000/api/products/${editingId}`,
        {
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
        }
      );

      alert("Product Updated Successfully!");

      setEditingId("");

      setName("");
      setCategory("");
      setPrice("");
      setDescription("");

      fetchProducts();

    } catch (error) {
      console.log(error);
      alert("Unable to update product.");
    }
  };
  console.log("Products State:", products);
    return (
    <div className="max-w-5xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8 text-center">
        KalaSetu Product Manager
      </h1>

      {/* Product Form */}

      <div className="bg-gray-100 p-6 rounded-lg shadow space-y-4">

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
          type="number"
          className="border p-3 rounded w-full"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <textarea
          rows={5}
          className="border p-3 rounded w-full"
          placeholder="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* AI Button */}

        <button
          onClick={generateDescription}
          disabled={loadingAI}
          className={`w-full py-3 rounded text-white font-semibold ${
            loadingAI
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-700"
          }`}
        >
          {loadingAI
            ? "Generating AI Description..."
            : "Generate AI Description"}
        </button>

        {/* Add / Update */}

        {editingId ? (
          <button
            onClick={updateProduct}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded font-semibold"
          >
            Update Product
          </button>
        ) : (
          <button
            onClick={addProduct}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold"
          >
            Add Product
          </button>
        )}

      </div>

      {/* Products */}

      <h2 className="text-3xl font-bold mt-10 mb-5">
        Products
      </h2>

      {products.length === 0 ? (

        <div className="bg-gray-100 rounded-lg p-10 text-center shadow">

          <h3 className="text-2xl font-semibold">
            No Products Available
          </h3>

          <p className="text-gray-500 mt-2">
            Add your first product to get started.
          </p>

        </div>

      ) : (

        <div className="grid md:grid-cols-2 gap-5">

          {products.map((product: any) => (

            <div
              key={product._id}
              className="border rounded-lg shadow-lg p-5 bg-white"
            >

              <h3 className="text-2xl font-bold">
                {product.name}
              </h3>

              <p className="mt-2">
                <strong>Category:</strong> {product.category}
              </p>

              <p className="mt-1">
                <strong>Price:</strong> ₹{product.price}
              </p>

              <p className="mt-3 text-gray-700">
                {product.description}
              </p>

              <div className="flex gap-3 mt-5">

                <button
                  onClick={() => editProduct(product)}
                  className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteProduct(product._id)}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}