"use client";
import InvestmentPhilosophy from "@/components/About/InvestmentPhilosophy";
import HeroVideo from "@/components/what-we-do/Philosophy/HeroVideo";
import IntroCommitment from "@/components/what-we-do/Philosophy/IntroCommitment";
import RedBand from "@/components/what-we-do/Philosophy/RedBand";
import BeliefsSection from "@/components/what-we-do/Philosophy/BeliefsSection";

export default function InvestmentPhylosophyPage() {
  return (
    <main className="bg-white text-[#2c2c34] font-poppins">
      <HeroVideo />
      <IntroCommitment />
      <BeliefsSection />
        <RedBand />
      <InvestmentPhilosophy />

      <style jsx global>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </main>
  );
}
