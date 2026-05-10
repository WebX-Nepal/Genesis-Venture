"use client";

import FeaturedPortfolioCard from "@/components/what-we-do/FeaturedPortfolioCard";
import PortfolioCard from "@/components/what-we-do/PorfolioCard";
import type { PortfolioItem, Sector } from "@/app/what-we-do/portfolio/data";

type SectorTab = {
  key: Sector | "All";
  title: string;
};

interface PortfolioSectionProps {
  activeSector: Sector | "All";
  setActiveSector: (sector: Sector | "All") => void;
  filteredItems: PortfolioItem[];
  portfolioItems: PortfolioItem[];
  sectorTabs: readonly SectorTab[];
}
export default function PortfolioSection({
  activeSector,
  setActiveSector,
  filteredItems,
  portfolioItems,
  sectorTabs,
}: PortfolioSectionProps) {
  const getSectorCount = (key: Sector | "All") => {
    if (key === "All") return portfolioItems.length;
    return portfolioItems.filter((item) => item.sector === key).length;
  };

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="layout-7xl">
        <div className="mb-8 flex flex-col justify-between gap-6 border-b border-[#8D1E39] pb-8 md:flex-row md:items-end">
          <div>
            <h2 className="max-w-sm font-agatho text-[1.7rem] sm:text-[2rem] leading-[1.45] tracking-[-0.01em] text-[#08112a]">
            Portfolio Companies
            </h2>
          </div>

          <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 whitespace-nowrap md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
            {sectorTabs.map((sector) => {
              const isActive = sector.key === activeSector;
              return (
                <button
                  key={sector.key}
                  onClick={() => setActiveSector(sector.key)}
                  className={`shrink-0 px-4 py-2 border text-[11px] font-medium uppercase tracking-[0.12em] transition-all duration-300 ${
                    isActive
                      ? "bg-[#162e54] text-white border-[#162e54]"
                      : "bg-white text-[#173053]/80 border-[#8D1E39]/35 hover:border-[#8D1E39] hover:text-[#8D1E39]"
                  }`}
                >
                  <span>{sector.title}</span>
                  <span className="ml-2 text-[10px] font-semibold">
                    {getSectorCount(sector.key)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      <section id="portfolio" className="w-full">
        {activeSector === "All" ? (
          <>
            {sectorTabs
              .filter((sector) => sector.key !== "All")
              .map((sector) => {
                const sectorItems = portfolioItems.filter(
                  (item) => item.sector === sector.key,
                );

                if (sectorItems.length === 0) return null;

                return (
                  <div key={sector.key} className="mb-16">
                    <p className="mb-6 inline-flex items-center text-[11px] font-medium uppercase tracking-[0.28em] text-genesis-red font-poppins">
                      {sector.title}
                    </p>

                    <div className="md:hidden overflow-x-auto snap-x snap-mandatory">
                      <div className="flex min-w-max gap-5 pr-2">
                        {sectorItems.map((item) => (
                          <div
                            key={item.name}
                            className="w-[86vw] shrink-0 snap-center sm:w-[70vw]"
                          >
                            {item.isFeatured ? (
                              <FeaturedPortfolioCard item={item} />
                            ) : (
                              <PortfolioCard item={item} />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="hidden md:grid grid-cols-2 gap-5 lg:grid-cols-3">
                      {sectorItems.map((item) =>
                        item.isFeatured ? (
                          <FeaturedPortfolioCard key={item.name} item={item} />
                        ) : (
                          <PortfolioCard key={item.name} item={item} />
                        ),
                      )}
                    </div>
                  </div>
                );
              })}
          </>
        ) : (
          <div>
            <p className="mb-6 inline-flex items-center text-[11px] font-medium uppercase tracking-[0.28em] text-genesis-red font-poppins">
              {sectorTabs.find((s) => s.key === activeSector)?.title}
            </p>
            <div className="md:hidden overflow-x-auto snap-x snap-mandatory">
              <div className="flex min-w-max gap-5 pr-2">
                {filteredItems.map((item) => (
                  <div
                    key={item.name}
                    className="w-[86vw] shrink-0 snap-center sm:w-[70vw]"
                  >
                    {item.isFeatured ? (
                      <FeaturedPortfolioCard item={item} />
                    ) : (
                      <PortfolioCard item={item} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden md:grid grid-cols-2 gap-5 lg:grid-cols-3">
              {filteredItems.map((item) =>
                item.isFeatured ? (
                  <FeaturedPortfolioCard key={item.name} item={item} />
                ) : (
                  <PortfolioCard key={item.name} item={item} />
                ),
              )}
            </div>
          </div>
        )}
      </section>
      </div>
    </section>
  );
}
