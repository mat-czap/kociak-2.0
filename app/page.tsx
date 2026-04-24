import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { MenuSection } from "./components/MenuSection";
import { GallerySection } from "./components/GallerySection";
import { ReservationSection } from "./components/ReservationSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <ReservationSection />
      </main>
      <Footer />
    </div>
  );
}
