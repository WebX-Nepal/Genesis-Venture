"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const investmentPhilosophy = [
  {
    id: 1,
    title: "High-conviction investing",
    description:
      "We make fewer bets, but go deeper—committing time, capital, and network from day one.",
  },
  {
    id: 2,
    title: "Founder-first approach",
    description:
      "We believe great companies are built by exceptional founders, prioritizing people.",
  },
  {
    id: 3,
    title: "Sector-focused insight",
    description:
      "We invest in sectors where we have deep expertise and strong operational understanding.",
  },
  {
    id: 4,
    title: "Long-term partnership",
    description:
      "We stay with our companies from inception to scale, supporting every stage of growth.",
  },
];

const InvestmentPhilosophy = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const splitTitle = new SplitText(".investment-philosophy-heading", {
      type: "words",
    });

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
      "#animated-paragraph",
    );
    if (!paragraph) return;

    const words = paragraph.textContent
      ?.split(" ")
      .map((word) => `<span class="word">${word}</span>`)
      .join(" ");
    if (words) paragraph.innerHTML = words;

    const wordEls = paragraph.querySelectorAll(".word");

    gsap.fromTo(
      wordEls,
      { opacity: 0.1 },
      {
        opacity: 1,
        stagger: 0.1,
        ease: "none",
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
      id="investment-philosophy"
      ref={containerRef}
      className="min-h-screen w-full bg-white flex flex-col px-4 xs:px-6 sm:px-8 md:px-16 py-8 sm:py-12 md:py-24"
    >
      <div className="flex items-start justify-between border-b border-gray-200 pb-3 sm:pb-4 md:pb-6 mb-6 sm:mb-8 md:mb-10">
        <span className="investment-philosophy-heading text-xs uppercase tracking-widest text-gray-500 font-poppins">
          Investment Philosophy
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-24 mb-8 sm:mb-10 md:mb-12">
        <div className="w-full md:w-1/3">
          <h2 className="investment-philosophy-heading text-[clamp(1.25rem,4vw,2rem)] text-genesis-navy leading-snug font-[PPFONT]">
            We invest early when conviction matters most.
          </h2>
          <p
            id="animated-paragraph"
            className="text-xs sm:text-sm text-gray-600 font-poppins leading-relaxed mt-3 sm:mt-4 max-w-xs"
          >
            Genesis Ventures focuses on founders at the earliest stages...
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 flex-1">
        {investmentPhilosophy.map(({ id, title, description }) => (
          <div
            key={id}
            className="relative bg-white flex flex-col justify-between p-4 xs:p-5 sm:p-6 md:p-8 transition-all duration-300 hover:bg-genesis-navy/20 group"
          >
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-genesis-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,0,0,0.03),transparent)] pointer-events-none" />

            <span className="text-xs sm:text-sm text-genesis-navy font-poppins uppercase tracking-widest group-hover:text-genesis-red transition-colors">
              {id}
            </span>

            <div className="flex flex-col gap-1.5 sm:gap-2 mt-auto pt-6 sm:pt-8">
              <div className="w-4 h-px bg-genesis-navy mb-2 sm:mb-3 transition-colors" />
              <span className="text-sm sm:text-base text-genesis-navy group-hover:text-genesis-red transition-colors font-[PPFONT]">
                {title}
              </span>
              <span className="text-xs sm:text-sm text-gray-600 group-hover:text-white/70 transition-colors font-poppins leading-relaxed">
                {description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InvestmentPhilosophy;
