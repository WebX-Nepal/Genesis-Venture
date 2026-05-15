"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReportsSidebar from "./ReportsSidebar";
import InvestorStatsCards from "./InvestorStatsCards";
import FundDescription from "./FundDescription";
import FinancialReportingSection from "./FinancialReportingSection";

gsap.registerPlugin(ScrollTrigger);

const tabSectionIds = ["ir-overview", "ir-financial-reporting", "ir-shareholders", "ir-service-centre"];

export default function ReportsAndUpdates() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    const target = document.getElementById(tabSectionIds[index]);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
          defaults: { ease: "power2.out", duration: 0.55 },
        })
        .from(".ir-left-panel", { autoAlpha: 0 }, "-=0.25")
        .from(".ir-stat", { y: 12, autoAlpha: 0, stagger: 0.08 }, "-=0.3")
        .from(".ir-copy", { y: 12, autoAlpha: 0 }, "-=0.25");
    },
    { scope: sectionRef }
  );

  useEffect(() => {
    const sectionElements = tabSectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!sectionElements.length) return;

    const updateActiveByScroll = () => {
      const triggerY = window.innerHeight * 0.28;
      let currentIndex = 0;

      for (let i = 0; i < sectionElements.length; i += 1) {
        const rect = sectionElements[i].getBoundingClientRect();
        if (rect.top <= triggerY) currentIndex = i;
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

  return (
    <section ref={sectionRef} className="w-full bg-white py-14 sm:py-16 md:py-20">
      <div className="layout-7xl">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[300px_1fr] lg:items-start lg:gap-8">
          <ReportsSidebar activeTab={activeTab} onTabClick={handleTabClick} />

          <div>
            <section id="ir-overview" className="py-5 sm:py-6">
              <h3 className="mb-4 font-agatho text-[clamp(1.3rem,3.2vw,2rem)] leading-[1.15] text-[#173053]">
                Reports And Investor Resources
              </h3>
              <InvestorStatsCards />
              <FundDescription />
            </section>

            <section id="ir-financial-reporting" className="mt-8 border-t border-[#173053]/20 pt-8">
              <FinancialReportingSection />
            </section>

            <section id="ir-shareholders" className="ir-copy mt-8 border-t border-[#173053]/20 pt-8">
              <h3 className="mb-3 font-agatho text-[clamp(1.3rem,3.2vw,2rem)] leading-[1.15] text-[#173053]">
                Shareholders' Information
              </h3>
              <p className="max-w-[66ch] text-[0.9rem] leading-[1.6] text-[#173053]/80 sm:text-[0.96rem]">
                Shareholding updates, notices, and governance disclosures will be published in this section.
              </p>
            </section>

            <section id="ir-service-centre" className="ir-copy mt-8 border-t border-[#173053]/20 pt-8">
              <h3 className="mb-3 font-agatho text-[clamp(1.3rem,3.2vw,2rem)] leading-[1.15] text-[#173053]">
                Investor Service Centre
              </h3>
              <p className="max-w-[66ch] text-[0.9rem] leading-[1.6] text-[#173053]/80 sm:text-[0.96rem]">
                Service requests, contact details, and investor support resources will be maintained here.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
