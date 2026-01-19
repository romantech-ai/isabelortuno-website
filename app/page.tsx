import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Methodology from "@/components/sections/Methodology";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <a
        href="#sobre-mi"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-primary focus:text-white focus:rounded-full focus:shadow-lg"
      >
        Saltar al contenido principal
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Methodology />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
