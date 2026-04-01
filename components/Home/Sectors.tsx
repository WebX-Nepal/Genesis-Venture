"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const sectors = [
  {
    number: "01",
    name: "Technology & AI",
    description:
      "Enterprise software, AI, and deep tech redefining how industries operate.",
  },
  {
    number: "02",
    name: "Healthcare & Life Sciences",
    description:
      "Biotech, digital health, and medical devices improving patient outcomes.",
  },
  {
    number: "03",
    name: "Financial Services",
    description:
      "Fintech platforms modernizing access to capital and financial tools.",
  },
  {
    number: "04",
    name: "Real Estate & Infrastructure",
    description:
      "PropTech and sustainable infrastructure for the built environment.",
  },
  {
    number: "05",
    name: "Consumer & Retail",
    description: "Next-generation consumer brands with strong unit economics.",
  },
];

export default function Sectors() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const splitTitle = new SplitText(".sectors-heading", { type: "words" });

    gsap.from(splitTitle.words, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "bottom 80%",
        scrub: true,
      },
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
      stagger: 0.05,
      duration: 1,
      ease: "power3.out",
    });

    if (!rowRef.current) return;

    const rows = rowRef.current.querySelectorAll(".sector-row");

    rows.forEach((row) => {
      gsap.fromTo(
        row,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
            end: "top 60%",
            scrub: false,
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    return () => {
      splitTitle.revert();
    };
  });
  return (
    <section
      ref={containerRef}
      className=" h-screen w-full bg-neutral-50 flex flex-col px-8 md:px-16 py-10 md:py-24"
    >
      <div className="flex items-start justify-between border-b border-gray-200 pb-4 md:pb-6">
        <span className="sectors-heading text-xs uppercase tracking-widest text-gray-500 font-poppins">
          Invested Sectors
        </span>
        <span className="sectors-heading text-xs uppercase tracking-widest text-gray-500 font-poppins">
          03
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-24 flex-1 pt-6 md:pt-10 overflow-hidden">
        <div className="md:w-1/3 flex flex-col gap-3 md:justify-between">
          <h2 className="sectors-heading text-xl sm:text-2xl md:text-3xl text-genesis-navy font-[PPFONT] leading-snug">
            Where we focus our capital.
          </h2>
          <div className="relative  w-full h-64 md:h-full overflow-hidden">
            <Image
              src="/images/hero/sector.jpg"
              alt="About us"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <p className=" text-sm text-gray-600 font-poppins leading-relaxed max-w-xs hidden md:block">
            We concentrate on sectors where technology creates durable
            competitive advantages and outsized returns.
          </p>
        </div>

        <div
          ref={rowRef}
          className="md:w-2/3 flex flex-col justify-center divide-y divide-gray-200"
        >
          {sectors.map(({ number, name, description }) => (
            <div
              key={number}
              className="relative group sector-row flex items-start gap-4 md:gap-6 py-2 md:py-4 px-2 md:px-4 hover:bg-genesis-navy/20 transition-colors"
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-genesis-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

              <span
                className="text-xs text-gray-400 group-hover:text-white font-poppins pt-0.5 w-5 shrink-0"
                style={{ opacity: 0 }}
              >
                {number}
              </span>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-0.5 md:gap-8">
                <span className="text-sm md:text-base lg:text-lg text-genesis-navy group-hover:text-genesis-red font-[PPFONT]  shrink-0">
                  {name}
                </span>
                <span className="text-xs md:text-sm text-gray-600 group-hover:text-white font-poppins md:max-w-xs leading-relaxed hidden sm:block">
                  {description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
