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
      className="min-h-screen w-full bg-white flex flex-col px-4 xs:px-6 sm:px-8 md:px-16 py-8 sm:py-12 md:py-24"
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
              className="text-xs sm:text-sm text-gray-600 font-poppins leading-relaxed mt-3 sm:mt-4 max-w-7xl"
            >
              We invest where structural growth, operating discipline, and
              founder quality can compound for years without the pressure of
              quarterly market reactions.
            </p>
          </div>
        </div>

        <div className="flex flex-col border border-[#d6dce8] flex-1">
          {items.map((item) => (
            <article
              key={item.index}
              className="group relative -mt-px flex flex-col md:flex-row border-t border-[#d6dce8] first:border-t-0 bg-white transition-colors duration-300 hover:bg-[#f8fbff]"
            >
              <div className="absolute left-0 top-0 h-full w-[3px] bg-[#8c1d3c] scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />

              <div className="relative w-full md:w-[38%] lg:w-[34%] h-[220px] sm:h-[250px] md:h-auto">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 42vw, 32vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent md:bg-gradient-to-t md:from-black/20 md:to-transparent" />
              </div>

              <div className="flex flex-1 flex-col justify-center px-4 py-4 sm:px-6 sm:py-6 md:px-7 md:py-7">
                <div className="mb-2 flex items-center gap-3">
                  <span className="font-montserrat text-[10px] uppercase tracking-[0.24em] text-[#8c1d3c]">
                    {item.index}
                  </span>
                  <span className="h-px w-10 bg-[#8c1d3c]/35" />
                  <span className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#173053]">
                    {item.label}
                  </span>
                </div>
                <span className="font-montserrat text-[clamp(1.05rem,2.1vw,1.55rem)] text-[#162e54] leading-[1.2]">
                  {item.title}
                </span>
                <span className="mt-2 text-sm text-[#4f5f78] font-poppins leading-relaxed max-w-3xl">
                  {item.desc}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
