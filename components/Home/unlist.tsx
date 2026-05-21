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
    image: "/cards/firstone.png",
    tone: "bg-[#FFFFFF] border-[#d7e0ec]",
    deco: "from-[#ebae84] to-[#f3d9be]",
  },
  {
    index: "02",
    label: "Risk Discipline",
    title: "Reduced market noise",
    desc: "Unlisted investments are insulated from the short-term volatility and sentiment swings that affect public markets, enabling a clearer focus on fundamental value.",
    tone: "bg-[#efefed] border-[#d7e0ec]",
    image: "/cards/sec.png",
    deco: "from-[#cfcfcd] to-[#e7e7e5]",
  },
  {
    index: "03",
    label: "Entry Timing",
    title: "Early entry advantage",
    desc: "Investing before a public listing means accessing companies at valuations that reflect potential - not yet priced in by the crowd.",
    image: "/cards/three.png",
    tone: "bg-[#ece8f3] border-[#d7e0ec]",
    deco: "from-[#c7bbe5] to-[#e7e2f2]",
  },
  {
    index: "04",
    label: "Network Access",
    title: "Relationship-driven deals",
    desc: "The best private deals are earned through trust and networks, not won through auctions - a discipline at the core of how Genesis Ventures operates.",
    image: "/cards/hand.png",
    tone: "bg-[#e8f0e2] border-[#d7e0ec]",
    deco: "from-[#7bb295] to-[#bdd9c7]",
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
      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full" />
      <div className="layout-7xl">
        <div className="relative z-10">

        <div className="mb-8 flex flex-col gap-6 sm:mb-10 sm:gap-8 md:mb-12 md:gap-24">
          <div className="mx-auto w-full max-w-4xl text-center">
            <h2 className="unlisted-heading font-agatho text-[clamp(2rem,4.6vw,3.2rem)] leading-[1.08] text-[#162e54]">
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
              className={`group relative min-h-[340px] overflow-hidden border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#8D1E39]/35 hover:shadow-[0_16px_38px_rgba(22,46,84,0.12)] sm:min-h-[360px] sm:p-6 ${item.tone}`}
            >
              {item.image ? (
                <div className="absolute right-0 top-0 z-10 h-full w-[42%] opacity-85">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover object-center"
                  />
                </div>
              ) : null}
              <div className={`absolute -right-8 top-10 z-0 h-44 w-44 bg-gradient-to-br opacity-70 blur-[1px] transition-transform duration-500 group-hover:scale-105 md:-right-10 md:top-12 md:h-52 md:w-52 ${item.deco}`} />
              <div className={`absolute -right-16 bottom-[-28px] z-0 h-36 w-36 bg-gradient-to-br opacity-55 blur-[1px] transition-transform duration-500 group-hover:scale-105 md:h-44 md:w-44 ${item.deco}`} />

              <div className="relative z-10 flex h-full flex-col">
                <span className="font-montserrat text-[12px] font-semibold  text-[#8D1E39] sm:text-[11px] ">
                  {item.label}
                </span>

                <div className="mt-8 max-w-[60%] sm:max-w-[65%]">
                  <h3 className="font-montserrat capitalize text-[clamp(1.2rem,3.2vw,2.15rem)] leading-[1.08] text-[#1f2937]">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-montserrat text-sm leading-relaxed text-[#3d444f] sm:text-[15px]">
                    {item.desc}
                  </p>
                </div>

              </div>

            </article>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
