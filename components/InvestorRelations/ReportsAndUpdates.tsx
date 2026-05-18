"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BadgeDollarSign, Factory, Sprout, TrendingUp } from "lucide-react";
import ReportsSidebar from "./ReportsSidebar";
import FinancialReportingSection from "./FinancialReportingSection";
import { investorServiceCards, shareholderCards, type ReportCardItem } from "./reportsData";
gsap.registerPlugin(ScrollTrigger);
const tabSectionIds = ["ir-financial-reporting", "ir-shareholders", "ir-service-centre"];

export default function ReportsAndUpdates() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    const target = document.getElementById(tabSectionIds[index]);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
          defaults: { ease: "power2.out", duration: 0.5 },
        })
        .from(".ir-left-panel", { autoAlpha: 0 }, "-=0.2")
        .from(".ir-copy", { y: 10, autoAlpha: 0 }, "-=0.2");
    },
    { scope: sectionRef }
  );

  useEffect(() => {
    const sectionElements = tabSectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sectionElements.length) return;

    const updateActiveByScroll = () => {
      const triggerY = window.innerHeight * 0.3;
      let currentIndex = 0;
      for (let i = 0; i < sectionElements.length; i += 1) {
        if (sectionElements[i].getBoundingClientRect().top <= triggerY) currentIndex = i;
      }
      setActiveTab((prev) => (prev === currentIndex ? prev : currentIndex));
    };

    updateActiveByScroll();
    window.addEventListener("scroll", updateActiveByScroll, { passive: true });
    window.addEventListener("resize", updateActiveByScroll);
    return () => {
      window.removeEventListener("scroll", updateActiveByScroll);
      window.removeEventListener("resize", updateActiveByScroll);
    };
  }, []);

  const renderBlueCards = (cards: readonly ReportCardItem[]) => (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <Link
          key={card.slug}
          href={`/investment-relation/${card.slug}`}
          className="flex min-h-[180px] items-center justify-center bg-[#162e54] p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:bg-[#8D1E39] hover:shadow-[0_16px_32px_rgba(22,46,84,0.35)]"
        >
          <p className="max-w-[13ch] text-[1.2rem] font-semibold leading-[1.2] text-white sm:text-[1.35rem]">
            {card.title}
          </p>
        </Link>
      ))}
    </div>
  );

  return (
    <section ref={sectionRef} className="w-full bg-[#f3f4f6] py-10 sm:py-12">
      <div className="layout-7xl">
        <h2 className="mb-7 text-center font-agatho text-[clamp(2rem,3.8vw,3.2rem)] font-semibold text-[#162e54]">
          Investor Relations
        </h2>
        <ReportsSidebar activeTab={activeTab} onTabClick={handleTabClick} />

        <div className="ir-copy pb-14 pt-8 text-center sm:pb-16">
          <section id="ir-financial-reporting">
            <FinancialReportingSection />
          </section>

          <section id="ir-shareholders" className="mt-10">
            <h3 className="mb-5 text-[2rem] font-semibold text-[#162e54]">Shareholders&apos; Information</h3>
            {renderBlueCards(shareholderCards)}
          </section>

          <section id="ir-service-centre" className="mt-10">
            <h3 className="mb-5 text-[2rem] font-semibold text-[#162e54]">Investor Service Centre</h3>
            {renderBlueCards(investorServiceCards)}
          </section>

          <section className="mt-20">
            <h3 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-[#162e54]">
              Genesis At A Glance
            </h3>
            <p className="mx-auto mt-6 max-w-[120ch] text-[1.12rem] leading-relaxed text-[#162e54]/80">
              Genesis Ventures Ltd. is a private markets investment company focused on unlisted equity
              opportunities across high-growth sectors. We partner with promising businesses from growth stage
              to pre-IPO, with a disciplined long-term approach designed to create sustainable value for our
              investors.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
              <article className="flex flex-col items-center">
                <BadgeDollarSign className="mb-4 text-[#8D1E39]" size={44} strokeWidth={2.2} />
                <p className="text-[1.25rem] font-semibold text-[#8D1E39] sm:text-[1.4rem]">Gross Revenue</p>
              </article>
              <article className="flex flex-col items-center">
                <TrendingUp className="mb-4 text-[#8D1E39]" size={44} strokeWidth={2.2} />
                <p className="text-[1.25rem] font-semibold text-[#8D1E39] sm:text-[1.4rem]">Portfolio Value Growth</p>
              </article>
              <article className="flex flex-col items-center">
                <Factory className="mb-4 text-[#8D1E39]" size={44} strokeWidth={2.2} />
                <p className="text-[1.25rem] font-semibold text-[#8D1E39] sm:text-[1.4rem]">High-Growth Portfolio Companies</p>
              </article>
              <article className="flex flex-col items-center">
                <Sprout className="mb-4 text-[#8D1E39]" size={44} strokeWidth={2.2} />
                <p className="text-[1.25rem] font-semibold text-[#8D1E39] sm:text-[1.4rem]">Long-Term Investor Partnerships</p>
              </article>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
