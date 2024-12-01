import Image from "next/image";
import HeroSection from "./components/HeroSection";
import { Container } from "postcss";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black container ">
      <Navbar />
      <div class='Container mt-24 mx-auto px-14 py-20'>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
          <Footer />
        </div>
    </main>

  );
}
