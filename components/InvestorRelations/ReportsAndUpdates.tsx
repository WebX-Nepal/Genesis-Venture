"use client";

import { useMemo, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BriefcaseBusiness, IndianRupee, PhoneCall } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type TabKey = "financial" | "shareholders" | "service";

const tabs: { key: TabKey; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: "financial", label: "Financial Reporting", icon: IndianRupee },
  { key: "shareholders", label: "Shareholders' Information", icon: BriefcaseBusiness },
  { key: "service", label: "Investor Service Centre", icon: PhoneCall },
];

const tabContent: Record<
  TabKey,
  {
    title: string;
    subtitle: string;
    cards: { title: string; desc: string }[];
  }
> = {
  financial: {
    title: "Financial Reporting",
    subtitle: "Structured disclosures to help investors track performance with clarity.",
    cards: [
      {
        title: "Quarterly Results",
        desc: "Quarterly operating and financial performance with key highlights.",
      },
      {
        title: "ITC Report and Accounts",
        desc: "Audited statements, schedules, and notes to accounts.",
      },
    ],
  },
  shareholders: {
    title: "Shareholders' Information",
    subtitle: "Important updates and materials relevant for current and prospective shareholders.",
    cards: [
      {
        title: "Press Releases",
        desc: "Material announcements and official corporate updates.",
      },
      {
        title: "Investor Presentations",
        desc: "Management presentations on strategy, portfolio, and outlook.",
      },
    ],
  },
  service: {
    title: "Investor Service Centre",
    subtitle: "Support documents and contact-ready resources for investor queries.",
    cards: [
      {
        title: "Disclosure Notes",
        desc: "Supplementary policy and valuation related disclosures.",
      },
      {
        title: "Support Contacts",
        desc: "Dedicated channels for investor services and document requests.",
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
    <section ref={sectionRef} className="w-full border-y border-[#e8edf5] bg-white py-14 sm:py-16 md:py-20">
      <div className="layout-7xl">
        <div className="ir-header border-b border-[#d7e0ec] pb-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8D1E39] font-montserrat">
            Investor Relations
          </p>
          <h2 className="mt-3 font-agatho text-[clamp(1.3rem,3vw,2.2rem)] leading-[1.2] text-[#173053]">
            Reports and investor resources
          </h2>
          <p className="mt-3 max-w-[64ch] text-sm leading-relaxed text-[#5a6f8c] sm:text-[15px]">
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
                  ? "border-[#2f67ea] bg-[#eef4ff] text-[#1b4fd6]"
                  : "border-[#dbe3ef] bg-white text-[#173053] hover:bg-[#f7faff]"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] sm:text-[11px]">{label}</span>
            </button>
          ))}
        </div>

        <div className="ir-panel mt-6 border border-[#dbe3ef] bg-[#f8fbff] p-5 sm:p-6">
          <h3 className="font-montserrat text-[1.15rem] font-semibold text-[#173053] sm:text-[1.25rem]">
            {current.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#566b88] sm:text-[15px]">
            {current.subtitle}
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {current.cards.map((card) => (
              <article key={card.title} className="ir-card border border-[#cfdcf0] bg-white p-4 sm:p-5">
                <p className="text-sm font-semibold text-[#173053] sm:text-base">{card.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-[#566b88] sm:text-sm">{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
