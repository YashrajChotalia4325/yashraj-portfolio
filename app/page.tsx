import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Systems from "@/components/Systems";
import TechMarquee from "@/components/TechMarquee";
import Wostup from "@/components/Wostup";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      <Navbar />

      <Hero />

      <About />

      <Systems />

      <TechMarquee />

      <Wostup />

      <Footer />

    </main>
  );
}