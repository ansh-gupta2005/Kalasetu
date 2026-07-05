"use client";

import { useTheme } from "./ThemeContext";

interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

interface Props {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

export default function ProductCard({
  product,
  onEdit,
  onDelete,
}: Props) {
  const { darkMode } = useTheme();

  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <img
  src={
    product.image
      ? product.image
      : "https://placehold.co/600x400?text=KalaSetu"
  }
  alt={product.name}
  className="w-full h-60 object-cover"
  onError={(e) => {
    (e.currentTarget as HTMLImageElement).src =
      "https://placehold.co/600x400?text=KalaSetu";
  }}
/>

      <div className="p-5">

        <h2 className="text-2xl font-bold">
          {product.name}
        </h2>

        <p className="text-orange-500 mt-2">
          {product.category}
        </p>

        <p className="text-2xl font-bold mt-3">
          ₹ {product.price}
        </p>

        <p className="mt-3 text-sm leading-6">
          {product.description}
        </p>

        <div className="flex justify-between mt-6">

          <button
            onClick={() => onEdit(product)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(product._id)}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
          >
            Delete
          </button>

        </div>

      </div>
    </div>
  );
}