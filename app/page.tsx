import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section className="p-3">
        <h2 className="text-1xl font-bold mb-2">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <ProductCard
            title="Handwoven Saree"
            description="Traditional handcrafted saree made by local artisans."
          />

          <ProductCard
            title="Clay Pottery"
            description="Beautiful handmade pottery crafted with care."
          />
        </div>
      </section>

      <Footer />
    </>
  );
}