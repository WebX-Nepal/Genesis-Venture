"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

interface Company {
  name: string;
  stage: string;
  year: string | number;
  description: string;
}

interface SectorShowcaseBannerProps {
  label: string;
  stat: {
    label: string;
    value: string | number;
  };
  companies: Company[];
}

const SectorShowcaseBanner: React.FC<SectorShowcaseBannerProps> = ({
  label,
  stat,
  companies,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const latestYear = companies.length > 0
    ? Math.max(...companies.map(c => Number(c.year)))
    : "N/A";


  useGSAP(() => {
    const splitTitle = new SplitText(titleRef.current, {
      type: "words",
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
        end: "top top",
        scrub: 2,
        toggleActions: "play none none reverse"
      }
    });
    tl.from(splitTitle.words, {
      opacity: 0,
      y: 20,
      filter: "blur(6px)",
      stagger: 0.06,
      duration: 0.6,
      ease: "power3.out",
    })
      .from(statsRef.current, {
        opacity: 0,
        y: 30,
        filter: "blur(6px)",
        duration: 0.6,
        ease: "power3.out",
      }, "<0.2")

    return () => {
      splitTitle.revert();
    };
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#08112a] text-white min-h-screen lg:h-screen lg:min-h-[800px]"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/about/grow.png"
          alt={`${label} Background`}
          fill
          className="object-cover object-center md:object-right opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-[#08112a]/40" />
        <div className="absolute inset-0 bg-linear-to-t from-[#08112a] via-[#08112a]/60 md:via-[#08112a]/40 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col h-full px-4 py-12 xs:px-6 sm:px-8 md:px-16 lg:px-20 lg:py-16">
        <div className="flex w-full flex-col h-full lg:justify-between">

          <div className="w-full max-w-4xl pt-16 sm:pt-24 md:pt-32 lg:pt-36">
            <div className="mb-4 sm:mb-6">
              <span className="font-poppins text-[11px] uppercase tracking-[0.24em] text-white/90">
                Portfolio Sector
              </span>
            </div>

            <div className="mb-10 max-w-2xl sm:mb-12">
              <h2 ref={titleRef} className="values-showcase-heading font-[PPFONT] text-[clamp(1.6rem,3.8vw,2.8rem)] leading-[1.06] text-white">
                Building the future of <br />{label}
              </h2>
            </div>

            <div ref={statsRef} className="sector-stats-bar grid grid-cols-2 md:flex md:items-center gap-6 md:gap-12 border-t border-white/10 py-6 md:py-8 max-w-2xl">
              <div className="flex flex-col gap-1">
                <span className="text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-white/60 font-poppins">Active Portfolio</span>
                <p className="font-[PPFONT] text-xl sm:text-2xl text-white">{stat.value}</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-white/60 font-poppins">Market Insight</span>
                <p className="font-[PPFONT] text-xl sm:text-2xl text-white">High Growth</p>
              </div>

              <div className="hidden md:block h-8 w-px bg-white/10" />

              <div className="flex flex-col gap-1 col-span-2 md:col-span-1">
                <span className="text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-white/60 font-poppins">Year</span>
                <p className="font-[PPFONT] text-xl sm:text-2xl text-white">{latestYear}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 sm:mt-12 lg:mt-0 pb-8">
            {companies.slice(0, 4).map(({ name, description, year, stage }) => (
              <article
                key={name}
                className="group flex flex-col justify-between bg-white/10 p-5 backdrop-blur-md border border-white/5 transition-all hover:bg-white/5 cursor-pointer"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-[PPFONT] text-[1rem] sm:text-[1.1rem] leading-tight text-white transition-colors">
                      {name}
                    </h3>
                    <div className="bg-white/10 px-2 py-1.5 rounded-sm shrink-0 flex">
                      <span className="text-[8px] uppercase font-bold tracking-wider text-white/60 font-poppins">{stage}</span>
                    </div>
                  </div>
                  <p className="font-poppins text-[11px] leading-5 text-white/70 sm:text-xs sm:leading-6 line-clamp-3 md:line-clamp-4 group-hover:text-white/90 transition-colors">
                    {description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                  <span className="text-[10px] text-white/30 font-poppins">EST. {year}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-genesis-red opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SectorShowcaseBanner;