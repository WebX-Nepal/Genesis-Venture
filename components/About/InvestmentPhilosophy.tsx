"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const investmentPhilosophy = [
  {
    id: 1,
    title: "High-conviction investing",
    description:
      "We make fewer bets, but go deeper—committing time, capital, and network from day one.",
    image: "/images/Projects/investing.webp"
  },
  {
    id: 2,
    title: "Founder-first approach",
    description:
      "We believe great companies are built by exceptional founders, prioritizing people.",
    image: "/images/Projects/founder.webp"
  },
  {
    id: 3,
    title: "Sector-focused insight",
    description:
      "We invest in sectors where we have deep expertise and strong operational understanding.",
    image: "/images/Projects/insight.webp"
  },
  {
    id: 4,
    title: "Long-term partnership",
    description:
      "We stay with our companies from inception to scale, supporting every stage of growth.",
    image: "/images/Projects/partnership.webp"
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
      id="investment-philosophy"
      ref={containerRef}
      className="min-h-screen  max-w-7xl bg-white flex flex-col  sm:px-8 py-8 sm:py-12 md:py-24 mx-auto"
    >
      <div className="flex items-start justify-between border-b border-gray-200 pb-3 sm:pb-4 md:pb-6 mb-6 sm:mb-8 md:mb-10">
        <span className="investment-philosophy-heading text-[11px] uppercase tracking-[0.28em] text-[#8D1E39] font-poppins">
          Investment Philosophy
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-24 mb-8 sm:mb-10 md:mb-12">
        <div className="w-full md:w-5xl">
          <h2 className="investment-philosophy-heading text-[1.7rem] sm:text-[2rem] text-genesis-navy leading-[1.45] tracking-[-0.01em] font-[PPFONT]">
            We invest early when conviction matters most.
          </h2>
          <p
            id="animated-paragraph"
            className="text-[16px] text-gray-600 font-poppins leading-[1.55] mt-3 sm:mt-4 max-w-7xl"
          >
            Genesis Ventures focuses on founders at the earliest stages, when
            clarity, speed, and hands-on support matter most. We partner with
            ambitious teams from idea to scale, helping shape strategy, refine
            product direction, and build durable businesses with long-term
            value.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 flex-1">
        {investmentPhilosophy.map(({ id, title, image, description }) => (
          <div
            key={id}
            className="relative bg-white flex flex-col p-4 sm:p-6 md:p-7 transition-all duration-300 hover:bg-genesis-navy/10 group overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-genesis-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,0,0,0.03),transparent)] pointer-events-none" />

            <span className="text-[11px] text-genesis-navy font-poppins uppercase tracking-[0.28em] group-hover:text-genesis-red transition-colors">
              {id}
            </span>

            <div className="relative w-full aspect-4/3 overflow-hidden mt-3 sm:mt-4">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/25 to-transparent" />
            </div>

            <div className="flex flex-col gap-1.5 sm:gap-2 pt-6 sm:pt-8">
              <div className="w-4 h-px bg-genesis-navy mb-2 sm:mb-3 transition-colors" />
              <span className="text-[1.05rem] sm:text-[1.125rem] text-genesis-navy group-hover:text-genesis-red transition-colors font-[PPFONT]">
                {title}
              </span>
              <span className="text-[16px] text-gray-600 group-hover:text-genesis-navy transition-colors font-poppins leading-[1.55]">
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
