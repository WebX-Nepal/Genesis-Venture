"use client";

import { useMemo, useState } from "react";
import { portfolioItems, sectorTabs, type Sector } from "./data";
import PortfolioSection from "@/components/what-we-do/PortfolioSection/PortfolioSection";
import PortfolioHeroSection from "@/components/what-we-do/PortfolioSection/PortfolioHeroSection";
import HeroPage from "@/components/ui/HeroPage";

export default function PortfolioPage() {
  const [activeSector, setActiveSector] = useState<Sector | "All">("All");

  const heroStats = useMemo(() => {
    return sectorTabs
      .filter((tab) => tab.key !== "All")
      .map((tab) => ({
        value: portfolioItems
          .filter((item) => item.sector === tab.key)
          .length.toString(),
        desc: tab.title,
      }));
  }, []);

  const filteredItems = useMemo(() => {
    if (activeSector === "All") return portfolioItems;
    return portfolioItems.filter((item) => item.sector === activeSector);
  }, [activeSector]);

  return (
    <main className="min-h-screen bg-[#fdfcf9] font-poppins">
  
      <PortfolioHeroSection heroStats={heroStats} />

      <PortfolioSection
        activeSector={activeSector}
        setActiveSector={setActiveSector}
        filteredItems={filteredItems}
        portfolioItems={portfolioItems}
        sectorTabs={sectorTabs}
      />
    </main>
  );
}