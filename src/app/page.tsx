// src/app/page.tsx
import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Garis from "@/components/Garis";

export default function Home() {
  return (
    <div className="w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth h-screen">
      <Sidebar />

      {/* Section full screen */}
      <section id="hero" className="h-screen snap-start">
        <Hero />
      </section>

      <Garis />

      <section id="about" className="h-screen snap-start">
        <About />
      </section>

      <Garis />

      <section id="projects" className="h-screen snap-start">
        <Projects />
      </section>

      <Garis />

      <section id="skills" className="h-screen snap-start">
        <Skills />
      </section>

      <Garis />

      <section id="contact" className="h-screen snap-start">
        <Contact />
      </section>
    </div>
  );
}
