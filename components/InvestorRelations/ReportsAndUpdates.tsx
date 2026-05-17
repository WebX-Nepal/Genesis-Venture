"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReportsSidebar from "./ReportsSidebar";
import FinancialReportingSection from "./FinancialReportingSection";

gsap.registerPlugin(ScrollTrigger);

const tabSectionIds = ["ir-financial-reporting", "ir-shareholders", "ir-service-centre"];
const shareholderDocs = [
  {
    title: "Shareholder Notice Circular",
    file: "Shareholder-Notice-Circular-2026.pdf",
    meta: "Governance Notice",
  },
  {
    title: "Major Shareholding Update",
    file: "Major-Shareholding-Update-2026.pdf",
    meta: "Regulatory Filing",
  },
  {
    title: "Annual Voting & Meeting Outcomes",
    file: "Annual-Voting-Meeting-Outcomes-2026.pdf",
    meta: "Shareholder Disclosure",
  },
] as const;

const serviceDocs = [
  {
    title: "Investor Service Request Form",
    file: "Investor-Service-Request-Form.pdf",
    meta: "Request Form",
  },
  {
    title: "Investor Contact & Escalation Guide",
    file: "Investor-Contact-Escalation-Guide.pdf",
    meta: "Support Resource",
  },
  {
    title: "KYC & Account Update Checklist",
    file: "KYC-Account-Update-Checklist.pdf",
    meta: "Service Checklist",
  },
] as const;

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
    <section ref={sectionRef} className="w-full bg-white">
      <div className="layout-7xl">
        <div className="space-y-6">
          <ReportsSidebar activeTab={activeTab} onTabClick={handleTabClick} />

          <div className="text-center pb-10 sm:pb-12">
            <section id="ir-financial-reporting" className="">
              <FinancialReportingSection />
            </section>

            <section id="ir-shareholders" className="ir-copy mt-8 pt-2">
              <h3 className="mb-3 font-agatho text-[clamp(1.3rem,3.2vw,2rem)] leading-[1.15] text-[#173053]">
                Shareholders' Information
              </h3>
              <p className="mx-auto max-w-[66ch] text-[0.9rem] leading-[1.6] text-[#173053]/80 sm:text-[0.96rem]">
                Shareholding updates, notices, and governance disclosures will be published in this section.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {shareholderDocs.map((doc) => (
                  <article
                    key={doc.file}
                    className="group bg-gradient-to-br from-[#f5f8ff] via-[#edf4ff] to-[#e5eefb] p-5 text-left"
                  >
                    <p className="text-[0.82rem] uppercase tracking-[0.08em] text-[#173053]/70">{doc.meta}</p>
                    <p className="mt-2 text-[1rem] font-semibold text-[#173053]">{doc.title}</p>
                    <p className="mt-3 text-[0.85rem] text-[#173053]/65">PDF · {doc.file}</p>
                    <a
                      href={`/reports/${doc.file}`}
                      download
                      className="mt-4 inline-flex items-center justify-center border border-[#173053]/30 bg-white px-4 py-2 text-[0.82rem] font-semibold text-[#173053] transition-colors hover:bg-[#173053] hover:text-white"
                    >
                      Download
                    </a>
                  </article>
                ))}
              </div>
            </section>

            <section id="ir-service-centre" className="ir-copy mt-8 border-t border-[#173053]/20 pt-8">
              <h3 className="mb-3 font-agatho text-[clamp(1.3rem,3.2vw,2rem)] leading-[1.15] text-[#173053]">
                Investor Service Centre
              </h3>
              <p className="mx-auto max-w-[66ch] text-[0.9rem] leading-[1.6] text-[#173053]/80 sm:text-[0.96rem]">
                Service requests, contact details, and investor support resources will be maintained here.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {serviceDocs.map((doc) => (
                  <article
                    key={doc.file}
                    className="group bg-gradient-to-br from-[#f5f8ff] via-[#edf4ff] to-[#e5eefb] p-5 text-left"
                  >
                    <p className="text-[0.82rem] uppercase tracking-[0.08em] text-[#173053]/70">{doc.meta}</p>
                    <p className="mt-2 text-[1rem] font-semibold text-[#173053]">{doc.title}</p>
                    <p className="mt-3 text-[0.85rem] text-[#173053]/65">PDF · {doc.file}</p>
                    <a
                      href={`/reports/${doc.file}`}
                      download
                      className="mt-4 inline-flex items-center justify-center border border-[#173053]/30 bg-white px-4 py-2 text-[0.82rem] font-semibold text-[#173053] transition-colors hover:bg-[#173053] hover:text-white"
                    >
                      Download
                    </a>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
