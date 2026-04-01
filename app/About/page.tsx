import Hero from "@/components/About/Hero";
import Mission from "@/components/About/Mission";
import Milestone from "@/components/About/Milestone";
import Leadership from "@/components/About/Leadership";
import InvestmentPhilosophy from "@/components/About/InvestmentPhilosophy";

export default function About() {
  return (
    <main className="w-full font-[PPFONT]">
      <Hero />
      <Mission />
      <Milestone />
      <Leadership />
    </main>
  );
}
