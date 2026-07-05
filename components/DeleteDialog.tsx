"use client";

import { useTheme } from "./ThemeContext";

interface Props {
  id: string;
  fetchProducts: () => void;
}

export default function DeleteDialog({
  id,
  fetchProducts,
}: Props) {
  const { darkMode } = useTheme();

  const deleteProduct = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
      });

      fetchProducts();

      alert("Product deleted successfully!");
    } catch (error) {
      console.log(error);
      alert("Something went wrong.");
    }
  };

  return (
    <button
      onClick={deleteProduct}
      className={`px-5 py-2 rounded-lg text-white transition ${
        darkMode
          ? "bg-red-600 hover:bg-red-700"
          : "bg-red-500 hover:bg-red-600"
      }`}
    >
      Delete
    </button>
  );
}