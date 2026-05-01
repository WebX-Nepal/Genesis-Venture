"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const prepItems = [
  {
    num: "01",
    label: "Quarterly",
    title: "Annual Performance Report",
    desc: "A complete record of portfolio returns, benchmarked against relevant indices and net of all fees. Published once verified by our independent reviewers.",
    image: "/images/Projects/investing.webp",
    meta: "PDF · Updated Quarterly",
  },
  {
    num: "02",
    label: "Transparency",
    title: "Portfolio Disclosures",
    desc: "Holdings, stages, sector allocation, and concentration metrics, the things that actually tell you how capital is being deployed.",
    image: "/images/Projects/founder.webp",
    meta: "Disclosure Pack · Updated Quarterly",
  },
  {
    num: "03",
    label: "Outlook",
    title: "Letters to Investors",
    desc: "Our perspective on markets, risk, and the reasoning behind every significant decision. Candid, long-form, and written by the people managing your capital, not a communications team.",
    image: "/images/Projects/insight.webp",
    meta: "Letter Series · Periodic",
  },
  {
    num: "04",
    label: "Governance",
    title: "Audit & Valuation Notes",
    desc: "Independent verification notes, valuation methodology updates, and key policy disclosures that inform how we report portfolio value.",
    image: "/images/Projects/partnership.webp",
    meta: "Audit Notes · As Published",
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

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {prepItems.map((item) => (
              <article
                key={item.num}
                className="iru-card group relative flex min-h-[320px] flex-col gap-3 overflow-hidden border border-[#d8e0ea] bg-white p-4 transition-colors duration-200 hover:bg-gray-50 sm:gap-4 sm:p-6"
              >
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-genesis-red scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />
                <div className="flex items-center justify-between">
                  <p className="font-poppins text-xs font-semibold uppercase tracking-widest text-[#2f4268] transition-colors duration-300 group-hover:text-[#173053]">
                    {item.label}
                  </p>
                  <span className="font-poppins text-[11px] font-semibold tracking-[0.2em] text-[#8D1E39]">
                    {item.num}
                  </span>
                </div>
                <h3 className="text-base font-[PPFONT] leading-snug text-[#173053] transition-colors duration-200 group-hover:text-[#8D1E39] sm:text-lg">
                  {item.title}
                </h3>
                <div className="relative w-full aspect-4/3 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/25 to-transparent" />
                </div>
                <p className="flex-1 font-poppins text-sm leading-relaxed text-[#2f4268]">
                  {item.desc}
                </p>
                <span className="text-xs text-[#6c7a93] font-poppins tracking-wide">{item.meta}</span>
                <div className="border-t border-gray-100" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportsAndUpdates;
