"use client";

import { useMemo, useState } from "react";
import { portfolioItems, sectorTabs, type Sector } from "./data";
import PortfolioSection from "@/components/what-we-do/PortfolioSection/PortfolioSection";
import PortfolioHeroSection from "@/components/what-we-do/PortfolioSection/PortfolioHeroSection";

const sectorStats = [
  { sector: "Manufacturing", count: "5", unit: "companies" },
  { sector: "Hydropower", count: "4", unit: "companies" },
  { sector: "Hospitality", count: "4", unit: "companies" },
  { sector: "Healthcare", count: "3", unit: "companies" },
  { sector: "Agro", count: "2", unit: "companies" },
  { sector: "Others", count: "1", unit: "company" },
];

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

      <section className="bg-[#f6f9fd] py-12 sm:py-14 md:py-16">
        <div className="layout-7xl">
          <div className="mb-8 border-b border-[#d7e0ec] pb-4">
            <div className="grid grid-cols-1 items-end gap-4 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8D1E39]">
                  Investment Portfolio
                </p>
                <h2 className="mt-3 font-montserrat text-[clamp(1.55rem,4vw,3rem)] leading-[1.2] text-[#173053]">
                  A disciplined portfolio built on conviction, not consensus.
                </h2>
              </div>
              <p className="font-montserrat text-[10px] uppercase tracking-[0.18em] text-[#6b7b93] lg:pb-1">
                Structured sector allocation
              </p>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="py-2 sm:py-3 md:py-4">
              <p className="max-w-4xl text-sm sm:text-base leading-relaxed text-[#4e617d] font-montserrat">
                Genesis Ventures deploys long-term capital into unlisted
                businesses across six sectors. Every position is the result of
                independent research, direct engagement with management, and a
                clear view on intrinsic value, without the pressure of a fund
                cycle or the distortion of market noise.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
              {sectorStats.map((item) => (
                <article
                  key={item.sector}
                  className="group border border-[#d9e2ee] bg-white p-4 sm:p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#173053]/35 hover:shadow-[0_10px_24px_rgba(16,35,71,0.08)]"
                >
                  <p className="font-montserrat text-[10px] uppercase tracking-[0.16em] text-[#6b7c95]">
                    {item.sector}
                  </p>
                  <p className="mt-2 font-montserrat text-[1.7rem] sm:text-[1.95rem] font-semibold leading-none text-[#173053]">
                    {item.count}
                  </p>
                  <p className="mt-1 font-montserrat text-[11px] uppercase tracking-[0.12em] text-[#8D1E39]">
                    {item.unit}
                  </p>
                </article>
              ))}
            </div>
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
