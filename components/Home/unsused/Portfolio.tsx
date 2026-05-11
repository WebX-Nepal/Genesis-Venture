"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Button from "@/ui/Button";

gsap.registerPlugin(SplitText, ScrollTrigger);

const companies = [
  {
    name: "Meridian AI",
    sector: "Technology",
    stage: "Series A",
    year: "2022",
  },
  { name: "Helix Health", sector: "Healthcare", stage: "Seed", year: "2023" },
  {
    name: "Clearpath Finance",
    sector: "Fintech",
    stage: "Series B",
    year: "2021",
  },
  { name: "Urbanbase", sector: "Real Estate", stage: "Series A", year: "2022" },
  { name: "Stackr", sector: "Technology", stage: "Seed", year: "2023" },
  {
    name: "Vantage Bio",
    sector: "Life Sciences",
    stage: "Series A",
    year: "2021",
  },
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const splitTitle = new SplitText(".portfolio-heading", { type: "words" });

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

    const rows = rowRef.current.querySelectorAll(".portfolio-row");

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
      className="w-full min-h-screen bg-white flex flex-col px-4 xs:px-6 sm:px-8 md:px-16 py-8 sm:py-12 md:py-24"
    >
      <div className="flex items-start justify-between border-b border-gray-200 pb-3 sm:pb-4 md:pb-6">
        <span className="portfolio-heading text-xs uppercase tracking-widest text-gray-500 font-poppins">
          Portfolio
        </span>
        <span className="portfolio-heading text-xs uppercase tracking-widest text-gray-500 font-poppins">
          04
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-24 flex-1 pt-5 sm:pt-6 md:pt-10 overflow-hidden">
        <div className="w-full md:w-1/3 flex flex-col gap-4 md:gap-2 md:justify-between">
          <h2 className="portfolio-heading text-[clamp(1.25rem,4vw,2rem)] text-genesis-navy font-[PPFONT] leading-snug">
            Selected investments.
          </h2>
          <div className="relative w-full h-44 xs:h-52 sm:h-64 md:h-full overflow-hidden">
            <Image
              src="/images/hero/investment.jpg"
              alt="About us"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <Button text="View All" href="/Projects" className="relative z-50" />
        </div>

        <div
          ref={rowRef}
          className="w-full md:w-2/3 flex flex-col justify-center divide-y divide-gray-200"
        >
          {companies.map(({ name, sector, stage, year }) => (
            <div
              key={name}
              className="relative portfolio-row flex items-center justify-between py-2.5 sm:py-3 md:py-4 px-2 md:px-4 group hover:bg-genesis-navy/20 transition-colors"
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-genesis-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

              <span className="text-sm sm:text-base lg:text-lg text-genesis-navy font-[PPFONT] group-hover:text-genesis-red">
                {name}
              </span>
              <div className="flex items-center gap-2 sm:gap-4 md:gap-12">
                <span className="text-xs sm:text-xs md:text-sm text-gray-600 group-hover:text-white font-poppins uppercase hidden sm:block">
                  {sector}
                </span>
                <span className="text-xs md:text-sm text-gray-600 group-hover:text-white font-poppins uppercase">
                  {stage}
                </span>
                <span className="text-xs md:text-sm text-gray-500 group-hover:text-white font-poppins">
                  {year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
