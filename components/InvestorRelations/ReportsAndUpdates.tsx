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
    desc: "",
    image: "/images/Projects/investing.webp",
  },
  {
    num: "02",
    label: "Transparency",
    title: "Portfolio Disclosures",
    desc: "Holdings, stages, sector allocation, and concentration metrics that show exactly how capital is deployed.",
    image: "/images/Projects/founder.webp",
  },
  {
    num: "03",
    label: "Outlook",
    title: "Letters to Investors",
    desc: "Our perspective on markets, risk, and key strategic decisions shared in long-form, candid format.",
    image: "/images/Projects/insight.webp",
  },
  {
    num: "04",
    label: "Governance",
    title: "Audit & Valuation Notes",
    desc: "Independent verification notes, valuation methodology updates, and key policy disclosures.",
    image: "/images/Projects/partnership.webp",
  },
];

const reportCards = [
  {
    type: "Financial - Quarterly",
    title: "Q1 2026 Financial Report",
    desc: "Quarterly financial summary including performance, allocation, and portfolio updates.",
  },
  {
    type: "Financial - Annual",
    title: "Annual Financial Report 2025",
    desc: "Annual audited overview with full-year performance, governance notes, and key disclosures.",
  },
];

const ReportsAndUpdates = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const featured = prepItems[0];
  const timelineItems = prepItems.slice(1);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      defaults: { ease: "power2.out", duration: 0.62 },
    });

    tl.from(".iru-header", { y: 12, autoAlpha: 0, duration: 0.45 })
      .from(".iru-featured", { y: 18, autoAlpha: 0 }, "-=0.18")
      .from(".iru-timeline-item", { y: 14, autoAlpha: 0, stagger: 0.1 }, "-=0.28")
      .from(".iru-reports-header", { y: 12, autoAlpha: 0 }, "-=0.2")
      .from(".iru-report-card", { y: 14, autoAlpha: 0, stagger: 0.08 }, "-=0.24");
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden border-y border-[#e8edf5] bg-white py-14 sm:py-16 md:py-20"
    >
      <div className="layout-7xl">
        <div className="iru-header flex items-end justify-between border-b border-[#d7e0ec] pb-4">
          <div>
            <p className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8D1E39]">
              In Preparation
            </p>
            <h2 className="mt-3 font-agatho text-[clamp(1.3rem,3vw,2.2rem)] leading-[1.2] text-[#173053]">
              Upcoming Reports & Investor Materials
            </h2>
          </div>
          <p className="hidden font-montserrat text-[10px] uppercase tracking-[0.18em] text-[#6b7b93] md:block">
            Structured release calendar
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="iru-featured group relative min-h-[420px] overflow-hidden border border-[#dbe3ef] bg-white lg:min-h-full">
            <div className="absolute inset-0">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2745]/70 via-[#0f2745]/10 to-transparent" />
            </div>
            <div className="relative z-10 flex h-full min-h-[420px] flex-col justify-between p-5 sm:p-6 lg:min-h-full">
              <div className="inline-flex w-fit items-center gap-3 bg-white/90 px-3 py-2">
                <span className="font-montserrat text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8D1E39]">
                  Featured
                </span>
                <span className="font-montserrat text-[10px] uppercase tracking-[0.16em] text-[#173053]">
                  {featured.label}
                </span>
              </div>
              <div>
                <h3 className="mt-2 font-montserrat text-[clamp(1.05rem,2.2vw,1.5rem)] font-semibold leading-[1.25] text-white">
                  {featured.title}
                </h3>
                {featured.desc ? (
                  <p className="mt-3 max-w-[56ch] text-xs sm:text-sm leading-relaxed font-montserrat text-white/90">
                    {featured.desc}
                  </p>
                ) : null}
              </div>
            </div>
          </article>

          <div className="border border-[#dbe3ef] bg-white p-5 sm:p-6">
            <div className="space-y-5">
              {timelineItems.map((item) => (
                <article
                  key={item.num}
                  className="iru-timeline-item grid grid-cols-[auto_1fr] gap-4 border-b border-[#e8eef6] pb-5 last:border-b-0 last:pb-0"
                >
                  <div className="flex flex-col items-center">
                    <span className="font-montserrat text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8D1E39]">
                      {item.num}
                    </span>
                    <span className="mt-2 h-full w-px bg-[#dce4f0]" />
                  </div>

                  <div>
                    <p className="font-montserrat text-[10px] uppercase tracking-[0.16em] text-[#6c7c95]">
                      {item.label}
                    </p>
                    <h4 className="mt-1 font-montserrat text-base font-semibold leading-[1.35] text-[#173053]">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed font-montserrat text-[#556781]">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="iru-reports-header mt-12 flex items-center gap-4 sm:gap-6">
          <span className="h-px flex-1 bg-[#d9e2ee]" />
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8D1E39]">
            Reports
          </span>
          <span className="h-px flex-1 bg-[#d9e2ee]" />
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {reportCards.map((card) => (
            <a
              key={card.title}
              href="#"
              className="iru-report-card group border border-[#0a3f73] bg-gradient-to-br from-[#001D3F] to-[#04356A] p-4 text-white transition-colors sm:p-5"
            >
              <div className="flex items-start gap-3">
                <span className="shrink-0 pt-0.5">
                  <Image
                    src="/icons/image.png"
                    alt="Document icon"
                    width={42}
                    height={42}
                    className="object-contain"
                  />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#f3dce3] font-semibold">
                    {card.type}
                  </p>
                  <h4 className="mt-1 text-sm font-semibold text-white">
                    {card.title}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-white/85">
                    {card.desc}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReportsAndUpdates;
