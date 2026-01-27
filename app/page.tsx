import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import VisionMission from "@/sections/VisionMission";
import Facilities from "@/sections/Facilities";
import Activities from "@/sections/Activities";
import Gallery from "@/sections/Gallery";
import Registration from "@/sections/Registration";
import Toppers from "@/sections/Toppers";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <Facilities />
      <Activities />
      <Gallery />
      <Registration />
      <Toppers />
      <Contact />
      <Footer />
    </main>
  );
}
