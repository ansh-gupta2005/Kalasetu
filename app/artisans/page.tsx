import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Artisans() {
  return (
    <>
      <Navbar />

      <main className="p-8">
        <h1 className="text-4xl font-bold">
          Artisan Directory
        </h1>

        <p className="mt-4">
          Meet talented artisans and learn about their craftsmanship.
        </p>
      </main>

      <Footer />
    </>
  );
}