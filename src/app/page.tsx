import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutPage from "./Components/About";
import TechnologiesPage from "./Components/Technologies";
import ProductPage from "./Components/Products";
import DiscoverPage from "./Components/Discover";
import TeamSection from "./Components/Team";
import Pricing from "./Components/Pricing";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center min-h-screen  text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="w-full fixed top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-800">
        <Navbar />
      </nav>

      {/* Main Content */}
      <main className="flex flex-col w-full max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 mt-[80px] gap-20 sm:gap-24 md:gap-28">
        <section id="hero" className="flex justify-center items-center">
          <Hero />
        </section>

        <section id="about" className="w-full">
          <AboutPage />
        </section>

        <section id="technologies" className="w-full">
          <TechnologiesPage />
        </section>

        <section id="products" className="w-full h-screen">
          <ProductPage />
        </section>

        <section id="discover" className="w-full">
          <DiscoverPage />
        </section>

        <section id="team" className="w-full">
          <TeamSection />
        </section>

        <section id="pricing" className="w-full">
          <Pricing />
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-b from-[#0a0a0a] to-[#111] text-gray-300 pt-20 pb-10 px-6 sm:px-10 md:px-16 lg:px-24 mt-16 border-t border-gray-800">
        <Footer />
        <p className="text-center text-xs sm:text-sm mt-10 opacity-70">
          © {new Date().getFullYear()} Tüm Hakları Saklıdır.
        </p>
      </footer>
    </div>
  );
}
