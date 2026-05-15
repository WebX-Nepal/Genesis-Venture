"use client";
import InvestmentPhilosophy from "@/components/About/InvestmentPhilosophy";
import HeroVideo from "@/components/what-we-do/Philosophy/HeroVideo";
import IntroCommitment from "@/components/what-we-do/Philosophy/IntroCommitment";

export default function InvestmentPhylosophyPage() {
  return (
    <main className="bg-white text-[#2c2c34] font-montserrat">
      <HeroVideo />
      
      <IntroCommitment />
      <InvestmentPhilosophy />
  
    </main>
  );
}
