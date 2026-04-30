"use client";

import Link from "next/link";
import Button from "@/components/ui/Button2";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="layout-7xl relative py-20 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
          <span className="inline-flex items-center gap-3 font-poppins text-[11px] font-medium tracking-[0.28em] uppercase text-genesis-red">
            Investor Relations
          </span>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#8D1E39] font-poppins lg:pl-14 lg:text-left">
            Reporting In Progress
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col justify-start">
            <h1 className="mt-0 sm:mt-1 font-[PPFONT] text-[1.7rem] sm:text-[2rem] leading-[1.55] tracking-[-0.01em] text-[#08112a] font-medium">
              <span className="block">Good data takes time.</span>
              <span className="block italic text-genesis-red font-medium">
                Great data takes discipline.
              </span>
            </h1>

            <p className="mt-6 sm:mt-9 max-w-[560px] text-[16px] sm:text-[17px] leading-[1.55] text-[#08112a]">
              Ours is almost ready and worth the wait. Performance materials,
              portfolio disclosures, and investor letters are released only when they
              meet the standards we hold ourselves to, not the standards the market
              is willing to accept.
            </p>

            <div className="mt-8 sm:mt-12 flex flex-row gap-3 sm:gap-5">
              <Link href="#access">
                <Button
                  variant="primary"
                  size="md"
                  className="inline-flex items-center justify-center gap-2 bg-genesis-red px-4 py-2.5 font-poppins text-[11px] font-medium uppercase tracking-[0.12em] text-white transition-all duration-350 hover:bg-[#a52344] sm:px-6 sm:py-3"
                >
                  Request Materials
                </Button>
              </Link>
              <Link href="#commitment">
                <Button
                  variant="primary"
                  size="md"
                  className="inline-flex items-center justify-center gap-2 border-[#173053] bg-[#173053] px-4 py-2.5 font-poppins text-[11px] font-medium uppercase tracking-[0.12em] !text-white transition-all duration-350 hover:!bg-[#173053] sm:px-6 sm:py-3"
                >
                  Our Commitment
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-2 flex flex-col justify-start border border-[#173053]/15 bg-white p-6 sm:p-8 lg:mt-0 lg:ml-4">
            <div className="mb-8 border-b border-[#1a2e4a]/15 pb-8">
              <blockquote className="font-[PPFONT] text-[1.7rem] sm:text-[2rem] italic leading-[1.55] text-[#102347]">
                &quot;We&apos;d rather show you{" "}
                <span className="not-italic">nothing</span> than show
                you something half-built.&quot;
              </blockquote>
            </div>

            <p className="text-[15px] sm:text-[16px] text-[#2f4268] leading-[1.9] font-poppins">
              Most firms publish performance the moment it flatters them. We have
              chosen a different path: to release figures only when they have been
              audited, stress-tested, and reviewed against the standards we hold
              ourselves to.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
