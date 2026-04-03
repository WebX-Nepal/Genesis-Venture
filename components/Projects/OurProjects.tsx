"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

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
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    gsap.utils.toArray<HTMLElement>(".sector-left").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
  });

  return (
    <div
      ref={containerRef}
      className="w-full bg-white flex flex-col px-4 xs:px-6 sm:px-8 md:px-16 py-8 sm:py-12 md:py-24"
    >
      <section id="portfolio" className="relative flex flex-col gap-0">
        {sectors.map(({ id, label, img, tagline, stat, companies }, si) => {
          const isReversed = si % 2 !== 0;
          return (
            <section
              key={id}
              id={id}
              ref={(el) => {
                sectionRefs.current[id] = el;
              }}
              className={`w-full flex flex-col py-12 sm:py-16 md:py-24 border-b border-gray-100 ${si % 2 === 0 ? "bg-white" : "bg-neutral-50"}`}
            >
              {/* Section header */}
              <div className="flex items-start justify-between border-b border-gray-200 pb-3 sm:pb-4 md:pb-6 mb-8 sm:mb-10 md:mb-14">
                <span className="text-xs uppercase tracking-widest text-gray-400 font-poppins">
                  {label}
                </span>
                <span className="text-xs uppercase tracking-widest text-genesis-navy/40 font-poppins">
                  0{si + 1}
                </span>
              </div>

              {/* Main layout */}
              <div
                className={`flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-24 ${isReversed ? "md:flex-row-reverse" : ""}`}
              >
                {/* Left/Right: image + meta stacked */}
                <div className="sector-left group w-full md:w-2/5 flex flex-col gap-5">
                  <div className="relative w-full h-52 xs:h-64 sm:h-72 md:h-[380px] lg:h-[440px] overflow-hidden">
                    <Image
                      src={img}
                      alt={label}
                      fill
                      className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-genesis-navy/20" />
                    {/* Sector label overlay on image */}
                    <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-genesis-navy/80 to-transparent">
                      <span className="text-white/50 text-[10px] uppercase tracking-widest font-poppins">
                        Sector
                      </span>
                      <h2 className="text-white text-lg sm:text-xl md:text-2xl font-[PPFONT] leading-snug mt-0.5">
                        {label}
                      </h2>
                    </div>
                  </div>

                  {/* Meta row below image */}
                  <div className="flex items-start gap-6">
                    <div className="flex flex-col gap-1 border-l border-gray-200 pl-4">
                      <span className="text-base sm:text-lg md:text-xl font-[PPFONT] text-genesis-navy">
                        {stat.value}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-gray-400 font-poppins">
                        {stat.label}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 border-l border-gray-200 pl-4">
                      <span className="text-base sm:text-lg md:text-xl font-[PPFONT] text-genesis-navy">
                        {companies[companies.length - 1].year}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-gray-400 font-poppins">
                        Latest investment
                      </span>
                    </div>
                  </div>

                  {/* <p className="text-xs sm:text-sm text-gray-500 font-poppins leading-relaxed max-w-sm">
                    {tagline}
                  </p> */}
                </div>

                {/* Right/Left: company rows */}
                <div className="w-full md:w-3/5 flex flex-col justify-center divide-y divide-gray-100">
                  <div className="flex items-center justify-between pb-3 mb-1">
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-poppins">
                      Company
                    </span>
                    <div className="flex items-center gap-6 sm:gap-10">
                      <span className="text-[10px] uppercase tracking-widest text-gray-400 font-poppins hidden sm:block">
                        Stage
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-gray-400 font-poppins">
                        Year
                      </span>
                    </div>
                  </div>

                  {companies.map(({ name, stage, year, description }) => (
                    <div
                      key={name}
                      className="relative company-row group flex items-start justify-between gap-4 py-4 sm:py-5 px-3 sm:px-4 hover:bg-genesis-navy/[0.06] transition-colors cursor-default"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-genesis-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                      <div className="flex flex-col gap-1">
                        <span className="text-sm sm:text-base text-genesis-navy group-hover:text-genesis-blue font-[PPFONT] transition-colors">
                          {name}
                        </span>
                        <span className="text-xs text-gray-500 group-hover:text-gray-700 font-poppins leading-relaxed max-w-[220px] sm:max-w-xs transition-colors">
                          {description}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 sm:gap-8 shrink-0 pt-0.5">
                        <span className="text-[11px] text-gray-400 group-hover:text-genesis-navy font-poppins uppercase tracking-wider hidden sm:block transition-colors">
                          {stage}
                        </span>
                        <span className="text-[11px] text-gray-400 group-hover:text-genesis-navy font-poppins tracking-wider transition-colors">
                          {year}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </section>
    </div>
  );
}
