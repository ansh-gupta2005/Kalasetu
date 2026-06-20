import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Marketplace() {
  return (
    <>
      <Navbar />

      <main className="p-8">
        <h1 className="text-4xl font-bold">
          Marketplace
        </h1>

        <p className="mt-4">
          Browse handmade products from local artisans.
        </p>
      </main>

      <Footer />
    </>
  );
}