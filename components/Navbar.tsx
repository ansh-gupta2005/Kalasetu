import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="bg-orange-700 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        KalaSetu
      </h1>

      <div className="flex gap-4 items-center">
        <Link href="/">Home</Link>
        <Link href="/artisans">Artisans</Link>
        <Link href="/marketplace">Marketplace</Link>
        <Link href="/login">Login</Link>

        <ThemeToggle />
      </div>
    </nav>
  );
}