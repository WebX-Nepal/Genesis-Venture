import About from "@/components/Home/About";
import FAQ from "@/components/Home/FAQ";
import Hero from "@/components/Home/Hero";
import Sectors from "@/components/Home/Sectors";

export default function Home() {
  return (
    <main className="w-full font-[PPFONT]">
      <Hero />
      <About />
      <Sectors />
      {/* <Portfolio /> */}
      <FAQ />
      {/* <Contact /> */}
    </main>
  );
}
