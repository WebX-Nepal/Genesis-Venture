"use client";

import { useMemo, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BriefcaseBusiness, FileText, FileTextIcon, PhoneCall } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type TabKey = "financial" | "shareholders" | "service";

const tabs: { key: TabKey; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: "financial", label: "Financial Reporting", icon: FileText },
  { key: "shareholders", label: "Shareholders' Information", icon: BriefcaseBusiness },
  { key: "service", label: "Investor Service Centre", icon: PhoneCall },
];

const tabContent: Record<
  TabKey,
  {
    title: string;
    subtitle: string;
    cards: { year: string; month: string; title: string; file: string }[];
  }
> = {
  financial: {
    title: "Financial Reporting",
    subtitle: "Structured disclosures to help investors track performance with clarity.",
    cards: [
      {
        year: "2024",
        month: "October",
        title: "Quarterly Results",
        file: "Q4-2024-Quarterly-Results.pdf",
      },
      {
        year: "2025",
        month: "July",
        title: "ITC Report and Accounts",
        file: "ITC-Report-and-Accounts-2025.pdf",
      },
      {
        year: "2025",
        month: "January",
        title: "Annual Financial Statement",
        file: "Annual-Financial-Statement-2025.pdf",
      },
      {
        year: "2025",
        month: "April",
        title: "Half-Year Performance Summary",
        file: "Half-Year-Performance-Summary-2025.pdf",
      },
    ],
  },
  shareholders: {
    title: "Shareholders' Information",
    subtitle: "Important updates and materials relevant for current and prospective shareholders.",
    cards: [
      {
        year: "2025",
        month: "March",
        title: "Press Releases",
        file: "Press-Releases-March-2025.pdf",
      },
      {
        year: "2025",
        month: "September",
        title: "Investor Presentations",
        file: "Investor-Presentation-September-2025.pdf",
      },
      {
        year: "2024",
        month: "December",
        title: "Shareholder Meeting Notice",
        file: "Shareholder-Meeting-Notice-2024.pdf",
      },
      {
        year: "2025",
        month: "June",
        title: "Corporate Actions Update",
        file: "Corporate-Actions-Update-June-2025.pdf",
      },
    ],
  },
  service: {
    title: "Investor Service Centre",
    subtitle: "Support documents and contact-ready resources for investor queries.",
    cards: [
      {
        year: "2024",
        month: "November",
        title: "Disclosure Notes",
        file: "Disclosure-Notes-November-2024.pdf",
      },
      {
        year: "2025",
        month: "January",
        title: "Support Contacts",
        file: "Investor-Service-Contacts-2025.pdf",
      },
      {
        year: "2025",
        month: "May",
        title: "Service Request Guidelines",
        file: "Service-Request-Guidelines-2025.pdf",
      },
      {
        year: "2025",
        month: "August",
        title: "Investor Helpdesk Manual",
        file: "Investor-Helpdesk-Manual-2025.pdf",
      },
    ],
  },
};

export default function ReportsAndUpdates() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<TabKey>("financial");

  useGSAP(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 82%",
        toggleActions: "play none none reverse",
      },
      defaults: { ease: "power2.out", duration: 0.55 },
    });

    tl.from(".ir-header", { y: 12, autoAlpha: 0 })
      .from(".ir-tab", { y: 10, autoAlpha: 0, stagger: 0.08 }, "-=0.18")
      .from(".ir-panel", { y: 14, autoAlpha: 0 }, "-=0.16")
      .from(".ir-card", { y: 10, autoAlpha: 0, stagger: 0.08 }, "-=0.2");
  }, { scope: sectionRef });

  const current = useMemo(() => tabContent[activeTab], [activeTab]);

  return (
    <section ref={sectionRef} className="w-full bg-white py-14 sm:py-16 md:py-20">
      <div className="layout-7xl">
        <div className="ir-header border-b border-[#d8d0c1] pb-5 text-center">
          <h2 className="mt-3 font-agatho text-[clamp(1.5rem,8vw,3.8rem)] leading-[1.18] text-[#1f2937]">
            Reports And Investor Resources
          </h2>
          <p className="mx-auto mt-3 max-w-[64ch] text-sm leading-relaxed text-[#5b5f67] sm:text-[15px]">
            Explore financial reporting, shareholder updates, and service resources through a cleaner structure.
          </p>
        </div>

        <div className="mt-7 grid gap-3 md:grid-cols-3">
          {tabs.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTab(key)}
              className={`ir-tab flex items-center gap-3 border px-4 py-3 text-left transition-colors ${
                activeTab === key
                  ? "border-[#173053] bg-[#e9eef5] text-[#173053]"
                  : "border-[#d8d0c1] bg-white text-[#173053] hover:bg-[#f3eee5]"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="font-agatho text-[1.05rem] leading-none sm:text-[1.2rem]">{label}</span>
            </button>
          ))}
        </div>

        <div className="ir-panel mt-6">
          <h3 className="font-montserrat text-[1.15rem] font-semibold text-[#1f2937] sm:text-[1.25rem]">
            {current.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#5b5f67] sm:text-[15px]">
            {current.subtitle}
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {current.cards.map((card) => (
              <article key={card.title} className="ir-card border border-[#d9d3c8] bg-white p-5 sm:p-6">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-[1fr_auto] md:items-start">
                  <div>
                    <div className="flex items-end justify-between gap-4">
                      <h4 className="font-montserrat text-[2rem] leading-none text-[#1f2937] sm:text-[2.25rem]">
                        {card.year}
                      </h4>
                      <p className="font-montserrat text-[1.2rem] text-[#1f2937] sm:text-[1.3rem]">{card.month}</p>
                    </div>
                    <p className="mt-1 text-[1.2rem] leading-relaxed text-[#5b5f67]">{card.title}</p>
                    <div className="mt-5 h-px w-full bg-[#d8d0c1]" />
                    <a
                      href="#"
                      className="mt-3 inline-flex text-sm font-semibold tracking-wide text-[#173053] underline underline-offset-4"
                    >
                      Download PDF · {card.file}
                    </a>
                  </div>
                  <div className="hidden h-20 w-20 items-center justify-center border border-[#d8d0c1] bg-[#f7f4ee] md:flex">
                    <FileTextIcon className="h-8 w-8 text-[#8D1E39]" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
