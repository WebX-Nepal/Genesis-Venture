"use client";

import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const stats = [
  {
    value: "15+",
    label: "Years of investment expertise",
  },
  {
    value: "Rs 4B",
    label: "Assets under advisory",
  },
  {
    value: "100%",
    label: "Fiduciary independence",
  },
  {
    value: "0",
    label: "Proprietary products sold",
  },
];

const highlights = [
  "Conflict-Free & Fiduciary",
  "Client Interests First, Last & Always",
  "Long-Horizon. No Short-Term Pressure.",
];

export default function Hero() {
  useGSAP(() => {
    const splitTitle = new SplitText(".about-hero-title", { type: "lines,words" });

    gsap.from(splitTitle.words, {
      opacity: 0,
      y: 28,
      filter: "blur(10px)",
      stagger: 0.04,
      duration: 0.9,
      ease: "power3.out",
    });

    gsap.from(".about-hero-fade", {
      opacity: 0,
      y: 24,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.25,
    });

    return () => {
      splitTitle.revert();
    };
  });

  return (
    <section className="w-full bg-[#08112a] text-white">
      <div className="relative grid min-h-[760px] overflow-hidden lg:grid-cols-[1.05fr_0.95fr]">
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
          <svg
            viewBox="0 0 800 600"
            preserveAspectRatio="xMaxYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
          >
            <line x1="0" y1="600" x2="800" y2="0" stroke="white" strokeWidth="0.5" />
            <line x1="100" y1="600" x2="900" y2="0" stroke="white" strokeWidth="0.5" />
            <line x1="200" y1="600" x2="1000" y2="0" stroke="white" strokeWidth="0.5" />
            <line x1="300" y1="600" x2="1100" y2="0" stroke="white" strokeWidth="0.5" />
            <line x1="400" y1="600" x2="1200" y2="0" stroke="white" strokeWidth="0.5" />
            <rect x="580" y="80" width="220" height="220" fill="none" stroke="white" strokeWidth="0.5" />
            <rect x="630" y="130" width="120" height="120" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col justify-center border-b border-white/10 px-5 py-20 sm:px-8 md:px-12 lg:border-b-0 lg:border-r lg:border-r-white/10 lg:px-16 lg:py-24 xl:px-20">
          <div className="about-hero-fade mb-6 flex items-center gap-3">
            <span className="h-px w-7 bg-[#c0192b]" />
            <span className="font-poppins text-[10px] font-semibold uppercase tracking-[0.28em] text-[#e0202f] sm:text-[11px]">
              Who We Are
            </span>
          </div>

          <div className="about-hero-fade mb-8 h-[2px] w-14 bg-[#c0192b]" />

          <h1 className="about-hero-title max-w-[12ch] font-[PPFONT] text-[clamp(2.8rem,7vw,5.2rem)] leading-[0.98] tracking-[-0.03em] text-white">
            Integrity before <span className="italic text-[#e0202f]">returns.</span> Always.
          </h1>

          <p className="about-hero-fade mt-8 max-w-xl font-poppins text-sm font-light leading-8 text-white/60 sm:text-[15px]">
            Genesis Ventree Ltd. is an independent investment firm that places
            your interests above all else, including our own. In a world where
            performance is routinely promised and seldom earned, we have chosen
            a different measure of success: trust.
          </p>

          <div className="about-hero-fade mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Link
              href="#our-values"
              className="inline-flex items-center justify-center bg-[#c0192b] px-8 py-4 font-poppins text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#e0202f]"
            >
              What We Believe
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 font-poppins text-[12px] font-medium uppercase tracking-[0.12em] text-white/50 transition hover:text-white/85"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="relative z-10 flex flex-col justify-between bg-[#162952] px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-14 lg:py-24 xl:px-16">
          <div className="about-hero-fade border-b border-white/10 pb-10">
            <span className="mb-4 block font-poppins text-[10px] font-semibold uppercase tracking-[0.24em] text-[#e0202f] sm:text-[11px]">
              Our commitment
            </span>
            <blockquote className="max-w-xl font-[PPFONT] text-2xl leading-[1.55] text-white sm:text-[28px]">
              &ldquo;We will never recommend what is profitable for us over what
              is <span className="text-[#e0202f]">right for you.</span> That is
              not a policy, it is the reason we exist.&rdquo;
            </blockquote>
          </div>

          <div className="about-hero-fade mt-10 grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="group relative bg-[#162952] px-6 py-7 transition duration-300 hover:bg-[#1e3a6e]"
              >
                <span className="absolute left-0 top-0 h-0 w-[3px] bg-[#c0192b] transition-all duration-300 group-hover:h-full" />
                <div className="font-[PPFONT] text-[38px] leading-none text-white sm:text-[42px]">
                  {value}
                </div>
                <p className="mt-2 max-w-[12ch] font-poppins text-[10.5px] uppercase leading-5 tracking-[0.12em] text-white/40">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 bg-[#c0192b] px-5 py-6 sm:px-8 md:px-12 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-16 xl:px-20">
        {highlights.map((item, index) => (
          <div
            key={item}
            className="flex items-center gap-3 lg:flex-1 lg:justify-center lg:first:justify-start lg:last:justify-end"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              className="h-5 w-5 shrink-0 opacity-80"
              aria-hidden="true"
            >
              {index === 0 && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />}
              {index === 1 && (
                <>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </>
              )}
              {index === 2 && (
                <>
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </>
              )}
            </svg>
            <p className="font-poppins text-[11px] font-medium uppercase tracking-[0.12em] text-white/90 sm:text-[11.5px]">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
