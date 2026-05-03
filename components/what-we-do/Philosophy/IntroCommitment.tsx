"use client";

import Link from "next/link";
import Button from "@/components/ui/Button2";

const heroStats = [
  { value: "NPR 1B+", desc: "Assets Under Management" },
  { value: "25+", desc: "Years of Experience" },
  { value: "20+", desc: "Portfolio Companies" },
  { value: "3", desc: "IPO" },
];
export default function IntroCommitment() {
  return (
    <section className="relative  overflow-hidden">
     
      <div className="absolute inset-0 bg-white" />

      <div className="layout-7xl relative py-14 sm:py-18 lg:py-22">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
          <span className="inline-flex items-center gap-3 font-poppins text-[11px] font-medium tracking-[0.28em] uppercase text-[#8D1E39]">
            Investment Philosophy
          </span>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#8D1E39] font-poppins lg:pl-14 lg:text-left">
            Our Commitment
          </p>
        </div>
        <div className="mt-7 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-start">
              <h1 className="mt-0 sm:mt-1 font-[PPFONT] text-[1.7rem] sm:text-[2rem] leading-[1.45] tracking-[-0.01em] text-[#173053]">
                <span className="block">Integrity before</span>
                <span className="block italic text-[#8D1E39] font-medium">
                  returns. Always.
                </span>
              </h1>

              <p className="mt-5 sm:mt-7 max-w-[620px] text-[16px] leading-[1.55] text-[#355171]">
                Genesis Ventree Ltd. is an independent investment firm that
                places your interests above all else - including our own. In a
                world where performance is routinely promised and seldom earned,
                we have chosen a different measure of success: trust.
              </p>

            <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="#beliefs">
                <Button
                  variant="primary"
                  size="md"
                  className="inline-flex items-center justify-center gap-2 bg-[#8D1E39] px-4 py-2.5 font-poppins text-[11px] font-medium uppercase tracking-[0.12em] text-white transition-all duration-350 hover:bg-[#a52344] sm:px-6 sm:py-3"
                >
                  What We Believe
                </Button>
              </Link>
              <Link href="/Contacts">
                <Button
                  variant="primary"
                  size="md"
                  className="inline-flex items-center justify-center gap-2 border border-[#173053] bg-[#173053] px-4 py-2.5 font-poppins text-[11px] font-medium uppercase tracking-[0.12em] text-white transition-all duration-350 hover:bg-[#122948] sm:px-6 sm:py-3"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-start lg:pl-8 xl:pl-12 mt-8">
            <div className="rounded-sm border border-[#dbe2ea] bg-[#f8fafd] p-6 sm:p-8 lg:p-9">
              
              <blockquote className="max-w-[620px] font-[PPFONT] text-[clamp(1.05rem,2.4vw,1.75rem)] italic leading-[1.5] text-[#102347]">
                &quot;We will never recommend what is profitable for us over what is
                <span className="not-italic"> right for you.</span> That is not a
                policy - it is the reason we exist.&quot;
              </blockquote>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {heroStats.map((stat) => (
            <article
              key={stat.desc}
              className="group flex min-h-[148px] flex-col justify-between border border-[#152F53] bg-[#152F53] px-5 py-6 sm:px-6 sm:py-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8D1E39]/45 hover:shadow-[0_8px_24px_rgba(16,35,71,0.14)]"
            >
              <div className="mb-4 h-[2px] w-10 bg-white/80 transition-all duration-300 group-hover:w-14" />
              <p className="font-[PPFONT] text-[1.7rem] sm:text-[2rem] leading-none text-white">
                {stat.value}
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.11em] text-white/80 font-poppins leading-tight">
                {stat.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
