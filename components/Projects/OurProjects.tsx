"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface Company {
  name: string;
  stage: string;
  year: string;
  description: string;
}

interface Sector {
  id: string;
  label: string;
  img: string;
  tagline: string;
  stat: { value: string; label: string };
  companies: Company[];
}

const sectors: Sector[] = [
  {
    id: "technology",
    label: "Technology & AI",
    img: "/images/projects/ai.jpg",
    tagline:
      "Backing software and AI companies redefining how industries operate.",
    stat: { value: "18 companies", label: "in portfolio" },
    companies: [
      {
        name: "Meridian AI",
        stage: "Series A",
        year: "2022",
        description: "Enterprise AI platform for supply chain optimization.",
      },
      {
        name: "Stackr",
        stage: "Seed",
        year: "2023",
        description: "Developer infrastructure for cloud-native applications.",
      },
      {
        name: "Loopline",
        stage: "Series B",
        year: "2020",
        description: "Workflow automation for mid-market operations teams.",
      },
      {
        name: "Vectara",
        stage: "Seed",
        year: "2023",
        description:
          "Neural search and retrieval for enterprise knowledge bases.",
      },
    ],
  },
  {
    id: "healthcare",
    img: "/images/projects/healthcare.jpg",
    label: "Healthcare & Life Sciences",
    tagline: "Investing in companies improving patient outcomes at scale.",
    stat: { value: "12 companies", label: "in portfolio" },
    companies: [
      {
        name: "Helix Health",
        stage: "Seed",
        year: "2023",
        description:
          "Digital-first primary care platform for underserved communities.",
      },
      {
        name: "Vantage Bio",
        stage: "Series A",
        year: "2021",
        description: "Precision oncology diagnostics using liquid biopsy.",
      },
      {
        name: "Carepath",
        stage: "Series B",
        year: "2019",
        description: "Care coordination software for hospital networks.",
      },
    ],
  },
  {
    id: "fintech",
    img: "/images/projects/finance.jpg",
    label: "Financial Services",
    tagline: "Modernizing access to capital and financial infrastructure.",
    stat: { value: "9 companies", label: "in portfolio" },
    companies: [
      {
        name: "Clearpath Finance",
        stage: "Series B",
        year: "2021",
        description: "Embedded lending platform for SMB marketplaces.",
      },
      {
        name: "Aurum",
        stage: "Seed",
        year: "2022",
        description:
          "Automated treasury management for growth-stage companies.",
      },
      {
        name: "Bridgeway",
        stage: "Series A",
        year: "2020",
        description:
          "Cross-border payments infrastructure for emerging markets.",
      },
    ],
  },
  {
    id: "realestate",
    label: "Real Estate & Infrastructure",
    img: "/images/projects/real.jpg",
    tagline:
      "PropTech and sustainable infrastructure for the built environment.",
    stat: { value: "6 companies", label: "in portfolio" },
    companies: [
      {
        name: "Urbanbase",
        stage: "Series A",
        year: "2022",
        description:
          "AI-powered site selection and feasibility analysis for developers.",
      },
      {
        name: "Gridform",
        stage: "Seed",
        year: "2023",
        description: "Modular construction management platform.",
      },
    ],
  },
  {
    id: "consumer",
    label: "Consumer & Retail",
    img: "/images/projects/retail.jpg",
    tagline: "Next-generation consumer brands with strong unit economics.",
    stat: { value: "11 companies", label: "in portfolio" },
    companies: [
      {
        name: "Forma",
        stage: "Series A",
        year: "2021",
        description: "Personalized skincare brand powered by AI diagnostics.",
      },
      {
        name: "Shelf",
        stage: "Seed",
        year: "2022",
        description:
          "Inventory intelligence platform for independent retailers.",
      },
      {
        name: "Nouri",
        stage: "Series B",
        year: "2020",
        description:
          "Functional nutrition brand distributed across 8,000+ locations.",
      },
    ],
  },
];

export default function OurProjects() {
  const [activeId, setActiveId] = useState(sectors[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectors.forEach(({ id }) => {
      const el = sectionRefs.current[id];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { threshold: 0.5 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".company-row").forEach((row) => {
      gsap.fromTo(
        row,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    gsap.utils.toArray<HTMLElement>(".sector-left").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
  });

  return (
    <div ref={containerRef} className="w-full bg-white flex flex-col">
      <section id="portfolio" className="relative flex flex-col">
        {sectors.map(({ id, label, img, tagline, stat, companies }, si) => {
          const isReversed = si % 2 !== 0;
          return (
            <section
              key={id}
              id={id}
              ref={(el) => {
                sectionRefs.current[id] = el;
              }}
              className={`w-full h-screen min-h-[600px] max-h-[1000px] flex flex-col border-b border-gray-100 px-4 xs:px-6 sm:px-8 md:px-16 pt-6 sm:pt-8 md:pt-10 pb-4 sm:pb-6 md:pb-8 ${si % 2 === 0 ? "bg-white" : "bg-neutral-50"}`}
            >
              {/* Section header — fixed small */}
              <div className="flex items-center justify-between border-b border-gray-200 pb-2.5 mb-4 sm:mb-5 md:mb-6 shrink-0">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-poppins">
                  {label}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-genesis-navy/30 font-poppins">
                  0{si + 1}
                </span>
              </div>

              {/* Main layout — fills remaining height */}
              <div
                className={`flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-10 lg:gap-16 flex-1 min-h-0 ${isReversed ? "md:flex-row-reverse" : ""}`}
              >
                {/* Image column */}
                <div
                  className={`sector-left group shrink-0 flex flex-col gap-3 md:gap-4 md:w-[32%] lg:w-[30%] ${
                    // on mobile show image as a short strip, on desktop fill height
                    "h-[28vw] min-h-35 max-h-50 md:h-auto md:max-h-none"
                  }`}
                >
                  <div className="relative w-full flex-1 overflow-hidden min-h-0">
                    <Image
                      src={img}
                      alt={label}
                      fill
                      className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-genesis-navy/20" />
                    <div className="absolute bottom-0 left-0 right-0 px-3 sm:px-4 py-3 bg-linear-to-t from-genesis-navy/80 to-transparent">
                      <span className="text-white/40 text-[9px] uppercase tracking-widest font-poppins hidden sm:block">
                        Sector
                      </span>
                      <h2 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-[PPFONT] leading-snug">
                        {label}
                      </h2>
                    </div>
                  </div>

                  {/* Meta stats — hidden on small mobile to save space */}
                  <div className="hidden sm:flex items-start gap-4 shrink-0">
                    <div className="flex flex-col gap-0.5 border-l border-gray-200 pl-3">
                      <span className="text-sm md:text-base lg:text-lg font-[PPFONT] text-genesis-navy leading-none">
                        {stat.value}
                      </span>
                      <span className="text-[9px] uppercase tracking-widest text-gray-400 font-poppins">
                        {stat.label}
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5 border-l border-gray-200 pl-3">
                      <span className="text-sm md:text-base lg:text-lg font-[PPFONT] text-genesis-navy leading-none">
                        {companies[companies.length - 1].year}
                      </span>
                      <span className="text-[9px] uppercase tracking-widest text-gray-400 font-poppins">
                        Latest
                      </span>
                    </div>
                  </div>
                </div>

                {/* Company rows column */}
                <div className="flex-1 flex flex-col justify-start gap-5 min-h-0 overflow-hidden">
                  {/* Column headers */}
                  <p className="hidden lg:block text-sm lg:text-2xl text-gray-400 font-poppins leading-relaxed shrink-0">
                    {tagline}
                  </p>
                  <div className="flex items-center justify-between pb-2 mb-0.5 shrink-0">
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-300 font-poppins">
                      Company
                    </span>
                    <div className="flex items-center gap-5 sm:gap-8 md:gap-10">
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-300 font-poppins hidden sm:block">
                        Stage
                      </span>
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-300 font-poppins">
                        Year
                      </span>
                    </div>
                  </div>

                  <div className="divide-y divide-gray-100 overflow-hidden">
                    {companies.map(({ name, stage, year, description }) => (
                      <div
                        key={name}
                        className="relative company-row group flex items-center justify-between gap-3 sm:gap-4 py-2.5 sm:py-3 md:py-3.5 px-2 sm:px-3 hover:bg-genesis-navy/[0.05] transition-colors cursor-default"
                      >
                        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-genesis-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                        <div className="flex flex-col gap-0.5 min-w-0">
                          <span className="text-xs sm:text-sm md:text-base text-genesis-navy group-hover:text-genesis-blue font-[PPFONT] transition-colors truncate">
                            {name}
                          </span>
                          <span className="text-[10px] sm:text-xs text-gray-400 group-hover:text-gray-600 font-poppins leading-relaxed line-clamp-1 sm:line-clamp-2 md:line-clamp-1 transition-colors">
                            {description}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 sm:gap-6 md:gap-8 shrink-0">
                          <span className="text-[10px] sm:text-[11px] text-gray-400 group-hover:text-genesis-navy font-poppins uppercase tracking-wider hidden sm:block transition-colors">
                            {stage}
                          </span>
                          <span className="text-[10px] sm:text-[11px] text-gray-400 group-hover:text-genesis-navy font-poppins tracking-wider transition-colors">
                            {year}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </section>
    </div>
  );
}
