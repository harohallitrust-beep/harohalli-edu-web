import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import StatsSection from "@/components/StatsSection";
import About from "@/sections/About";
import PUCollege from "@/sections/PUCollege";
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
      <StatsSection />
      <About />
      <PUCollege />
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
