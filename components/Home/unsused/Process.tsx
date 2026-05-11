"use client";
import ScrollAnimated from "./ScrollAnimated";
import { useSlideInFromBottom } from "@/hooks/useSlideInFromBottom";
import { useRef } from "react";

export default function Process() {
  const headerRef = useRef<HTMLHeadingElement>(null);
  useSlideInFromBottom(headerRef, { duration: 0.4, stagger: 0.1 });

  return (
    <div className="w-full relative overflow-hidden">
      <div className="absolute inset-0 font-[PPFONT] hidden md:grid grid-cols-3 w-full pointer-events-none">
        <div className="h-full uppercase text-primary p-2 border-r border-primary text-xs lg:text-[1vw]">
          process
        </div>
        <div className="h-full border-r border-primary"></div>
        <div className="h-full text-right text-primary uppercase p-2 text-xs lg:text-[1vw]">
          [OCT. 09]
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        {/* left side */}
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-[5vw] py-10 md:py-24 md:w-1/2 justify-center z-1">
          {/* mobile only */}
          <div className="flex md:hidden justify-between text-primary px-4 font-[PPFONT] text-xs">
            <p>PROCESS</p>
            <p>[OCT. 09]</p>
          </div>
          <h1
            ref={headerRef}
            className="font-[PPFONT] leading-none text-primary px-4
            text-[48px] sm:text-[72px] md:text-[64px] lg:text-[11vw] lg:leading-[9.8vw]"
          >
            Here <br />
            <span className="bg-neutral-dark">at every</span> <br />
            step
          </h1>
          <div className="md:ml-10 lg:ml-[10vw] px-4 md:px-0 z-1 bg-neutral-dark max-w-md lg:max-w-[22vw] ">
            <p className="text-primary font-poppins text-sm sm:text-base lg:text-[0.9vw] uppercase tracking-wide">
              Navigating regulatory agencies can seem like an insurmountable
              task for architects, engineers, owners and contractors.
            </p>
          </div>
        </div>

        {/* right side */}
        <div className="w-full md:w-1/2 py-10 md:py-20 lg:py-28 px-4 md:px-6 z-1">
          <ScrollAnimated />
        </div>
      </div>
    </div>
  );
}
