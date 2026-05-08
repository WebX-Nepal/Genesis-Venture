"use client";

import { useMemo, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioItems, sectorTabs, type Sector } from "./data";
import PortfolioSection from "@/components/what-we-do/PortfolioSection/PortfolioSection";
import PortfolioHeroSection from "@/components/what-we-do/PortfolioSection/PortfolioHeroSection";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function PortfolioPage() {
  const [activeSector, setActiveSector] = useState<Sector | "All">("All");
  const introRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!introRef.current) return;

    const paragraphs = introRef.current.querySelectorAll<HTMLElement>(
      "#portfolio-intro-paragraph p",
    );
    if (!paragraphs.length) return;

    paragraphs.forEach((paragraph) => {
      const words = paragraph.textContent
        ?.split(" ")
        .map((word) => `<span class="word inline-block">${word}</span>`)
        .join(" ");
      if (words) paragraph.innerHTML = words;
    });

    const wordEls = introRef.current.querySelectorAll(
      "#portfolio-intro-paragraph .word",
    );
    gsap.fromTo(
      wordEls,
      { opacity: 0.15, y: 10, filter: "blur(5px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        stagger: 0.02,
        ease: "power2.out",
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 88%",
          end: "top 20%",
          scrub: true,
        },
      },
    );
  }, { scope: introRef });

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

      <section ref={introRef} className="bg-[#f6f9fd] py-12 sm:py-14 md:py-16">
        <div className="layout-7xl">
          <div className="mb-8 border-b border-[#d7e0ec] pb-4">
            <div className="grid grid-cols-1 items-end gap-4 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8D1E39]">
                  Investment Portfolio
                </p>
                <h2 className="mt-3 font-montserrat text-[clamp(1.55rem,4vw,3rem)] leading-[1.2] text-[#173053] lg:whitespace-nowrap">
                  Conviction-led portfolio.
                </h2>
              </div>
            </div>
          </div>

          <div className="py-2 sm:py-3 md:py-4">
            <div id="portfolio-intro-paragraph" className="max-w-5xl space-y-4">
              <p className="text-sm sm:text-base leading-relaxed text-[#4e617d] font-montserrat">
                Genesis Ventures deploys long-term capital into unlisted
                businesses across six sectors. Every position is the result of
                independent research, direct engagement with management, and a
                clear view on intrinsic value, without the pressure of a fund
                cycle or the distortion of market noise.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#4e617d] font-montserrat">
                We build exposure with a deliberate long-horizon mindset,
                prioritizing business quality, governance strength, and sector
                durability over short-term market sentiment. Our portfolio
                construction reflects conviction, patience, and disciplined
                capital allocation designed to compound value through cycles.
              </p>
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
