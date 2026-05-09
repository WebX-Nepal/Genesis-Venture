"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

const items = [
  {
    index: "01",
    label: "Strategic Edge",
    title: "Asymmetric opportunity",
    desc: "Private companies represent the largest and fastest-growing segment of the economy, yet remain inaccessible to most institutional and retail investors.",
    image: "/images/hero/strategy.webp",
  },
  {
    index: "02",
    label: "Risk Discipline",
    title: "Reduced market noise",
    desc: "Unlisted investments are insulated from the short-term volatility and sentiment swings that affect public markets, enabling a clearer focus on fundamental value.",
    image: "/images/hero/growth.webp",
  },
  {
    index: "03",
    label: "Entry Timing",
    title: "Early entry advantage",
    desc: "Investing before a public listing means accessing companies at valuations that reflect potential - not yet priced in by the crowd.",
    image: "/images/hero/investment.webp",
  },
  {
    index: "04",
    label: "Network Access",
    title: "Relationship-driven deals",
    desc: "The best private deals are earned through trust and networks, not won through auctions - a discipline at the core of how Genesis Ventures operates.",
    image: "/images/hero/handshake.webp",
  },
];

export default function UnlistedMarket() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const splitTitle = new SplitText(".unlisted-heading", { type: "words" });

    gsap.from(splitTitle.words, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "top top",
        scrub: true,
      },
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
      stagger: 0.05,
      duration: 1,
      ease: "power3.out",
    });

    if (!containerRef.current) return;

    const paragraph = containerRef.current.querySelector<HTMLParagraphElement>(
      "#unlisted-animated-paragraph",
    );
    if (!paragraph) return;

    const words = paragraph.textContent
      ?.split(" ")
      .map((word) => `<span class="word inline-block">${word}</span>`)
      .join(" ");
    if (words) paragraph.innerHTML = words;

    const wordEls = paragraph.querySelectorAll(".word");

    gsap.fromTo(
      wordEls,
      { opacity: 0.15, y: 12, filter: "blur(6px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        stagger: 0.03,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          end: "top -10%",
          scrub: true,
        },
      },
    );

    return () => {
      splitTitle.revert();
    };
  });

  return (
    <section
      ref={containerRef}
      className="w-full bg-white py-10 sm:py-12 md:py-20"
    >
      <div className="layout-7xl">
        <div className="flex items-start justify-between border-b border-[#8D1E39]/25 pb-3 sm:pb-4 md:pb-6 sm:mb-8 md:mb-10">
          <p className="firm-kicker font-montserrat text-xs font-medium uppercase tracking-[0.22em] text-[#8D1E39]">
            Why Unlisted Markets
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-24 mb-8 sm:mb-10 md:mb-12">
          <div className="w-full md:w-5xl">
            <h2 className="unlisted-heading text-[clamp(1.25rem,4vw,2rem)] text-genesis-navy leading-snug font-montserrat font-medium">
              Built for patient capital and long-duration value.
            </h2>
            <p
              id="unlisted-animated-paragraph"
              className="text-[16px] sm:text-[17px] text-gray-600 font-montserrat leading-[1.55] mt-3 sm:mt-4 max-w-7xl"
            >
              We invest where structural growth, operating discipline, and
              founder quality can compound for years without the pressure of
              quarterly market reactions.
            </p>
          </div>
        </div>

        <div className="md:hidden overflow-x-auto snap-x snap-mandatory">
          <div className="flex gap-4 min-w-max pr-2">
            {items.map((item) => (
              <article
                key={item.index}
                className="group relative h-[60vh] w-[82vw] sm:h-[60vh] sm:w-[64vw] shrink-0 snap-center overflow-hidden border border-[#0a3f73] bg-gradient-to-br from-[#001D3F] to-[#04356A] transition-colors duration-300"
              >
                <div className="absolute inset-0 opacity-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 82vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/50 to-black/30" />
                </div>

                <div className="relative z-20 h-full p-5">
                  <div className="flex items-center gap-3">
                    <span className="font-montserrat text-[10px] uppercase tracking-[0.24em] text-[#f3dce3]">
                      {item.index}
                    </span>
                    <span className="h-px w-8 bg-[#f3dce3]/55" />
                    <span className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#f3dce3]">
                      {item.label}
                    </span>
                  </div>

                  <div className="absolute inset-x-5 top-1/2 -translate-y-1/2">
                    <h3 className="text-center font-montserrat text-[1.3rem] leading-[1.25] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 font-montserrat text-[15px] leading-[1.55] text-white/90">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="hidden md:grid grid-cols-2 gap-5 xl:grid-cols-4">
          {items.map((item) => (
            <article
              key={item.index}
              className="group relative aspect-[4/5] overflow-hidden border border-[#0a3f73] bg-gradient-to-br from-[#001D3F] to-[#04356A] transition-colors duration-300"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/50 to-black/30" />
              </div>

              <div className="relative z-20 h-full p-5 sm:p-6">
                <div className="flex items-center gap-3 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                  <span className="font-montserrat text-[10px] uppercase tracking-[0.24em] text-[#f3dce3]">
                    {item.index}
                  </span>
                  <span className="h-px w-8 bg-[#f3dce3]/55 transition-colors duration-300" />
                  <span className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#f3dce3] transition-colors duration-300">
                    {item.label}
                  </span>
                </div>

                <div className="absolute inset-x-5 top-1/2 -translate-y-1/2 sm:inset-x-6">
                  <h3 className="text-center font-montserrat text-[clamp(1.2rem,1.9vw,1.55rem)] leading-[1.25] text-white transition-opacity duration-500 group-hover:opacity-0">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-h-0 translate-y-2 overflow-hidden font-montserrat text-[15px] leading-[1.55] text-white/90 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:max-h-40 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
