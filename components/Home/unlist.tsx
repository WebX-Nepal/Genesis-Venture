"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const items = [
  {
    index: "01",
    label: "Strategic Edge",
    title: "Asymmetric opportunity",
    desc: "Private companies represent the largest and fastest-growing segment of the economy, yet remain inaccessible to most institutional and retail investors.",
  },
  {
    index: "02",
    label: "Risk Discipline",
    title: "Reduced market noise",
    desc: "Unlisted investments are insulated from the short-term volatility and sentiment swings that affect public markets, enabling a clearer focus on fundamental value.",
  },
  {
    index: "03",
    label: "Entry Timing",
    title: "Early entry advantage",
    desc: "Investing before a public listing means accessing companies at valuations that reflect potential - not yet priced in by the crowd.",
  },
  {
    index: "04",
    label: "Network Access",
    title: "Relationship-driven deals",
    desc: "The best private deals are earned through trust and networks, not won through auctions - a discipline at the core of how Genesis Ventures operates.",
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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 md:gap-5">
          {items.map((item) => (
            <article
              key={item.index}
              className="group relative flex flex-col overflow-hidden border border-[#d7e0ec] bg-white p-4 transition-all duration-300 hover:border-[#b9c8dd] sm:p-6 md:p-7"
            >
              <span className="font-poppins text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8D1E39] sm:text-[11px] sm:tracking-[0.3em]">
                {item.label}
              </span>

              <div className="mt-4 h-px w-full bg-[#e3e8f1]" />

              <div className="flex flex-col gap-1.5 pt-5 text-center sm:gap-2 sm:pt-6">
                <div className="mb-2 h-px w-full bg-[#d7e0ec] sm:mb-3" />
                <span className="font-agatho text-[clamp(1.2rem,6vw,2.1rem)] leading-[1.08] text-[#162e54]">
                  {item.title}
                </span>
                <span className="font-poppins text-xs leading-relaxed text-[#5b5f67] sm:text-sm">
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
