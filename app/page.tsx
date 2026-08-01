import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import ContactSection from "@/components/ContactSection";
import RevealInit from "@/components/RevealInit";

export default function Home() {
  return (
    <>
      <RevealInit />
      <div className="glow glow-a" aria-hidden />
      <div className="glow glow-b" aria-hidden />
      <div className="mesh" aria-hidden />

      <Nav />
      <main>
        <Hero />
        <Stats />
        <Work />
        <Skills />
        <Experience />
        <ContactSection />
      </main>
    </>
  );
}
