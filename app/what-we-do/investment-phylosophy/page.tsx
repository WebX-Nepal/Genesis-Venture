"use client";
import InvestmentPhilosophy from "@/components/About/InvestmentPhilosophy";
import IntroCommitment from "@/components/what-we-do/Philosophy/IntroCommitment";
import Pagehero from "@/components/ui/heropages";

export default function InvestmentPhylosophyPage() {
  return (
    <main className="bg-white text-[#2c2c34] font-montserrat">
      <Pagehero
        title={["Conviction-Led Investing,", "Built For Long-Term Value."]}
        description="Our investment philosophy is built on disciplined underwriting, long-term partnership, and transparent decision-making across market cycles."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "What We Do", href: "/what-we-do/portfolio" },
          { label: "Investment Philosophy" },
        ]}
        backgroundImage="/gif/videoph.gif"
        backgroundImageClassName="object-cover opacity-30"
        contentOffsetClassName="mt-6 md:mt-10"
        heightClassName="h-[80vh]"
        overlayClassName="bg-transparent"
        baseClassName="bg-transparent"
        showVideoFallback={false}
      />
      
      <InvestmentPhilosophy />

    </main>
  );
}
