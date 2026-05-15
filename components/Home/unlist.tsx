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
      className="relative min-h-screen w-full overflow-x-hidden bg-white flex flex-col py-8 sm:py-12 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#8D1E3910_1px,transparent_1px),linear-gradient(to_bottom,#8D1E3908_1px,transparent_1px)] bg-[size:6rem_4rem]" />
      <div className="layout-7xl">
        <div className="relative z-10">

        <div className="mb-8 flex flex-col gap-6 sm:mb-10 sm:gap-8 md:mb-12 md:gap-24">
          <div className="mx-auto w-full max-w-4xl text-center">
            <h2 className="unlisted-heading font-agatho text-[clamp(1.5rem,8vw,3.8rem)] leading-[1.18] text-[#162e54]">
              Why Unlisted Markets
            </h2>
            <p
              id="unlisted-animated-paragraph"
              className="mt-3 font-montserrat text-[15px] leading-[1.7] text-[#162e54] sm:mt-4 sm:text-base"
            >
              Built for patient capital and long-duration value, unlisted
              markets let investors focus on fundamentals, governance quality,
              and long-term compounding without short-term market noise.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 border border-[#cfcfcf] flex-1">
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
      </div>
    </section>
  );
}
