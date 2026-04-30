"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function UnlistedMarket() {
  const sectionRef = useRef<HTMLElement>(null);

  const cards = [
    {
      label: "Strategic Edge",
      title: "Asymmetric opportunity",
      description:
        "Private companies represent the largest and fastest-growing segment of the economy, yet remain inaccessible to most institutional and retail investors."
     
    },
    {
      label: "Risk Discipline",
      title: "Reduced market noise",
      description:
        "Unlisted investments are insulated from the short-term volatility and sentiment swings that affect public markets, enabling a clearer focus on fundamental value."
   
    },
    {
      label: "Entry Timing",
      title: "Early entry advantage",
      description:
        "Investing before a public listing means accessing companies at valuations that reflect potential - not yet priced in by the crowd."
    },
    {
      label: "Network Access",
      title: "Relationship-driven deals",
      description:
        "The best private deals are earned through trust and networks, not won through auctions - a discipline at the core of how Genesis Ventures operates."
    },
  ];
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

    tl.from(".ulm-kicker", { y: 10, opacity: 0.65, duration: 0.45 })
      .from(".ulm-card", { y: 18, scale: 0.985, stagger: 0.08 }, "-=0.2");
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
            <span className="ulm-kicker font-poppins text-[11px] font-medium uppercase tracking-[0.28em] text-white">
              Why Unlisted Markets
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => (
              <article
                key={card.title}
                className="ulm-card group flex min-h-[320px] flex-col justify-between border border-white/20 bg-[#e9edf2] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <div className="px-5 py-6 sm:px-6">
                  <p className="font-poppins text-xs font-semibold uppercase tracking-widest text-[#2f4268] transition-colors duration-300 group-hover:text-[#173053]">
                    {card.label}
                  </p>
                  <span className="mt-2 block h-[2px] w-10 bg-genesis-red transition-all duration-300 group-hover:w-14" />

                  <h4 className="mt-6 font-[PPFONT] text-xl leading-snug text-[#173053] transition-colors duration-300 group-hover:text-[#8d1e39] sm:text-2xl">
                    {card.title}
                  </h4>
                  <p className="mt-4 font-poppins text-sm leading-relaxed text-[#2f4268]">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
