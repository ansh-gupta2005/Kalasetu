type ProductCardProps = {
  title: string;
  description: string;
};

export default function ProductCard({
  title,
  description,
}: ProductCardProps) {
  return (
    <div className="border rounded-lg shadow p-4">
      <div className="bg-gray-200 h-24 rounded"></div>

      <h2 className="text-xl font-bold mt-4">
        {title}
      </h2>

      <p className="mt-2">
        {description}
      </p>

      <button className="mt-4 bg-orange-700 text-white px-4 py-2 rounded">
        View Details
      </button>
    </div>
  );
}