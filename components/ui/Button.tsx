type ButtonProps = {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

export default function Button({
  children,
}: ButtonProps) {
  return (
    <button className="bg-orange-600 text-white px-4 py-2 rounded">
      {children}
    </button>
  );
}