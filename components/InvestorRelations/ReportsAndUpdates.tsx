"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prepItems = [
  {
    num: "01",
    label: "Quarterly",
    title: "Annual Performance Report",
    desc: "A complete record of portfolio returns, benchmarked against relevant indices and net of all fees. Published once verified by our independent reviewers.",
  },
  {
    num: "02",
    label: "Transparency",
    title: "Portfolio Disclosures",
    desc: "Holdings, stages, sector allocation, and concentration metrics, the things that actually tell you how capital is being deployed.",
  },
  {
    num: "03",
    label: "Outlook",
    title: "Letters to Investors",
    desc: "Our perspective on markets, risk, and the reasoning behind every significant decision. Candid, long-form, and written by the people managing your capital, not a communications team.",
  },
  {
    num: "04",
    label: "Governance",
    title: "Audit & Valuation Notes",
    desc: "Independent verification notes, valuation methodology updates, and key policy disclosures that inform how we report portfolio value.",
  },
];

const ReportsAndUpdates = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      defaults: { ease: "power2.out", duration: 0.6 },
    });

    tl.from(".iru-kicker", { y: 10, opacity: 0.65, duration: 0.45 })
      .from(".iru-card", { y: 18, scale: 0.985, stagger: 0.08 }, "-=0.2");
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <div className="h-[64%] bg-[#001D3F]" />
        <div className="h-[36%] bg-white" />
      </div>

      <div className="relative py-10 sm:py-14 md:py-16">
        <div className="layout-7xl">
          <div className="flex items-start justify-between border-b border-genesis-red pb-3 sm:pb-4">
            <span className="iru-kicker font-poppins text-[11px] font-medium uppercase tracking-[0.28em] text-white">
              In Preparation
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {prepItems.map((item) => (
              <article
                key={item.num}
                className="iru-card group flex min-h-[320px] flex-col justify-between border border-white/20 bg-[#e9edf2] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <div className="px-5 py-6 sm:px-6">
                  <p className="font-poppins text-xs font-semibold uppercase tracking-widest text-[#2f4268] transition-colors duration-300 group-hover:text-[#173053]">
                    {item.label}
                  </p>
                  <span className="mt-2 block h-[2px] w-10 bg-genesis-red transition-all duration-300 group-hover:w-14" />

                  <h3 className="mt-6 font-[PPFONT] text-xl leading-snug text-[#173053] transition-colors duration-300 group-hover:text-[#8d1e39] sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 font-poppins text-sm leading-relaxed text-[#2f4268]">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportsAndUpdates;
