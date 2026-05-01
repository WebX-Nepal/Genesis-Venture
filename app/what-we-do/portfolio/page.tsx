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
    <main className="min-h-screen bg-white font-poppins">
      <PortfolioHeroSection heroStats={heroStats} />

      <section className="bg-[#fdfcf9] py-10 sm:py-12 md:py-14">
        <div className="layout-7xl">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#8D1E39] font-medium">
            Investment Portfolio
          </div>
          <h2 className="mt-3 max-w-4xl font-[PPFONT] text-[clamp(1.7rem,4vw,3rem)] leading-[1.15] text-[#173053]">
            A disciplined portfolio built on <em className="italic">conviction,</em> not consensus.
          </h2>
          <p className="mt-4 max-w-4xl text-sm sm:text-[15px] leading-[1.8] text-[#51617b]">
            Genesis Ventures deploys long-term capital into unlisted businesses across six sectors.
            Every position is the result of independent research, direct engagement with management,
            and a clear view on intrinsic value - without the pressure of a fund cycle or the
            distortion of market noise.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
            {heroStats.map((stat) => (
              <div
                key={stat.desc}
                className="border border-[#152F53] bg-[#152F53] px-4 py-4 sm:px-5 sm:py-5"
              >
                <p className="text-[10px] uppercase tracking-[0.1em] text-white/75">
                  {stat.desc}
                </p>
                <p className="mt-2 font-[PPFONT] text-3xl leading-none text-white">
                  {stat.desc === "Manufacturing"
                    ? "5"
                    : stat.desc === "Agro"
                      ? "2"
                      : stat.value}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.08em] text-white/85">
                  {(stat.desc === "Manufacturing"
                    ? "5"
                    : stat.desc === "Agro"
                      ? "2"
                      : stat.value) === "1"
                    ? "company"
                    : "companies"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
