import AboutUs from "@/components/About/AboutUs";
import Hero from "@/components/About/Hero";
import Leadership from "@/components/About/Leadership";
import Milestone from "@/components/About/Milestone";
import ValuesShowcase from "@/components/About/ValuesShowcase";
import SCROLLING_HEADLINE from "@/components/Home/ScrollingHeadline";

export default function About() {
  return (
    <main className="w-full font-[PPFONT]">
      <Hero />
      <AboutUs />
      <ValuesShowcase />
      <Leadership />
      <SCROLLING_HEADLINE />
    </main>
  );
}
