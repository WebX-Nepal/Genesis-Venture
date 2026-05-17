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
  const [activeSector, setActiveSector] = useState<Sector | "All">("Hydropower");
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
