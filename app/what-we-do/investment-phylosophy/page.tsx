"use client";
import InvestmentPhilosophy from "@/components/About/InvestmentPhilosophy";
import IntroCommitment from "@/components/what-we-do/Philosophy/IntroCommitment";
import Pagehero from "@/components/ui/heropages";
import Principles from "@/components/what-we-do/Philosophy/principle";

export default function InvestmentPhylosophyPage() {
  return (
    <main className="bg-white text-[#2c2c34] font-montserrat">
      <Pagehero
        title={["Capital Guided by Principles, Not Just Opportunities."]}
        description="Our investment philosophy is built on disciplined underwriting, long-term partnership, and transparent decision-making across market cycles."
        crumbs={[
          { label: "Home  ", href: "/" },
          { label: "What We Do", href: "/what-we-do/portfolio" },
          { label: "Investment Philosophy" },
        ]}
        backgroundVideo="/videos/sky.mp4"
        backgroundImageClassName="object-cover opacity-30"
        heightClassName="h-screen"
        overlayClassName="bg-[#001D3F]/60"
        baseClassName="bg-transparent"
        showVideoFallback={false}
      />

      <IntroCommitment />
            <Principles />
      <InvestmentPhilosophy />

    </main>
  );
}
