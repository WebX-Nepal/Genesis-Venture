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
    image: "/images/Projects/investing.webp",
  },
  {
    index: "02",
    label: "Risk Discipline",
    title: "Reduced market noise",
    desc: "Unlisted investments are insulated from the short-term volatility and sentiment swings that affect public markets, enabling a clearer focus on fundamental value.",
    image: "/images/Projects/founder.webp",
  },
  {
    index: "03",
    label: "Entry Timing",
    title: "Early entry advantage",
    desc: "Investing before a public listing means accessing companies at valuations that reflect potential - not yet priced in by the crowd.",
    image: "/images/Projects/insight.webp",
  },
  {
    index: "04",
    label: "Network Access",
    title: "Relationship-driven deals",
    desc: "The best private deals are earned through trust and networks, not won through auctions - a discipline at the core of how Genesis Ventures operates.",
    image: "/images/Projects/partnership.webp",
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
        {/* <div className="flex items-start justify-between border-b border-gray-200 pb-3 sm:pb-4 md:pb-6 mb-6 sm:mb-8 md:mb-10">
          <span className="unlisted-heading text-xs uppercase tracking-widest text-[#8D1E39] font-poppins">
            Why Unlisted Markets
          </span>
        </div> */}
         <div className="flex items-start justify-between border-b border-[#8D1E39]/25 pb-3 sm:pb-4 md:pb-6 sm:mb-8 md:mb-10">
            <p className="firm-kicker font-poppins text-xs font-medium uppercase tracking-[0.22em] text-[#8D1E39]">
                Why Unlisted Markets
            </p>
          </div>

        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-24 mb-8 sm:mb-10 md:mb-12">
          <div className="w-full md:w-5xl">
            <h2 className="unlisted-heading text-[clamp(1.25rem,4vw,2rem)] text-genesis-navy leading-snug font-[PPFONT]">
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

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-0 border border-[#cfcfcf] flex-1">
          {items.map((item) => (
            <article
              key={item.index}
              className="relative -mt-px -ml-px border border-[#cfcfcf] bg-white flex flex-col p-4 sm:p-6 md:p-7 transition-all duration-300 hover:bg-genesis-navy/10 group overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-genesis-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,0,0,0.03),transparent)] pointer-events-none" />

              <span className="text-xs sm:text-sm text-genesis-navy font-poppins uppercase tracking-widest group-hover:text-genesis-red transition-colors">
                {item.label}
              </span>

              <div className="relative w-full aspect-4/3 overflow-hidden mt-3 sm:mt-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/25 to-transparent" />
              </div>

              <div className="flex flex-col gap-1.5 sm:gap-2 pt-6 sm:pt-8">
                <div className="w-4 h-px bg-genesis-navy mb-2 sm:mb-3 transition-colors" />
                <span className="text-sm sm:text-base text-genesis-navy group-hover:text-genesis-red transition-colors font-[PPFONT]">
                  {item.title}
                </span>
                <span className="text-xs sm:text-sm text-gray-600 group-hover:text-genesis-navy transition-colors font-poppins leading-relaxed">
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
