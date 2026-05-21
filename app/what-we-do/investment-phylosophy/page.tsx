"use client";
import InvestmentPhilosophy from "@/components/About/InvestmentPhilosophy";
import Pagehero from "@/components/ui/heropages";

export default function InvestmentPhylosophyPage() {
  return (
    <main className="bg-white text-[#2c2c34] font-montserrat">
      <Pagehero
        title={["Disciplined Thinking. Strategic Capital."]}
        description="Our investment philosophy is built on disciplined underwriting, long-term partnership, and transparent decision-making across market cycles."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "What We Do", href: "/what-we-do/portfolio" },
          { label: "Investment Philosophy" },
        ]}
        backgroundImage="/gif/videoph.gif"
        backgroundImageClassName="object-cover opacity-30"
        heightClassName="h-[80vh]"
        overlayClassName="bg-[#001D3F]/60"
        baseClassName="bg-transparent"
        showVideoFallback={false}
      />
      
      <InvestmentPhilosophy />

    </main>
  );
}
