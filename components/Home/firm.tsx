"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Firm() {
  const sectionRef = useRef<HTMLElement>(null);

  const focusItems = [
    { label: "Investment Focus", value: "Unlisted Shares" },
    { label: "Investment Stage", value: "Growth to Pre-IPO" },
    { label: "Horizon", value: "Long-Term Capital" },
  ];

  useGSAP(() => {
    if (!sectionRef.current) return;

    const splitKicker = new SplitText(".firm-kicker", { type: "words" });
    const splitTitle = new SplitText(".firm-title", { type: "words" });

    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 82%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(splitKicker.words, {
      autoAlpha: 0,
      y: 10,
      stagger: 0.09,
      duration: 0.82,
    })
      .from(
        splitTitle.words,
        {
          autoAlpha: 0,
          y: 14,
          filter: "blur(4px)",
          stagger: 0.1,
          duration: 1.05,
        },
        "-=0.2",
      )
      .from(
        ".firm-item",
        {
          autoAlpha: 0,
          y: 14,
          stagger: 0.16,
          duration: 1.08,
        },
        "<+0.06",
      );

    return () => {
      splitKicker.revert();
      splitTitle.revert();
      gsap.set(".firm-item", { clearProps: "all" });
    };
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="w-full bg-[#fdfcf9]">
      <div className="layout-7xl py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="max-w-[1180px]">
          <div className="flex items-start justify-between border-b border-[#8D1E39]/25 pb-3 sm:pb-4 md:pb-6">
            <p className="firm-kicker font-poppins text-xs font-medium uppercase tracking-[0.22em] text-[#8D1E39]">
              Who We Are
            </p>
          </div>
       
          <div className="mt-6 grid grid-cols-1 gap-6 sm:mt-8 sm:gap-8 lg:mt-12 lg:grid-cols-[1fr_1fr] lg:gap-8 xl:gap-10">
            <div className="flex min-h-[80px] items-center justify-start sm:min-h-[120px] lg:min-h-[220px]">
              <p className="firm-title w-full text-left font-[PPFONT] text-[clamp(1.8rem,4.6vw,4.4rem)] leading-[1.18] text-[#132b4d]">
                About the Firm
              </p>
            </div>
            <div className="space-y-5 sm:space-y-6 lg:col-start-2 lg:pl-8 xl:pl-14 lg:space-y-8">
              {focusItems.map((item) => (
                <div key={item.label} className="firm-item flex items-start gap-3 sm:gap-4 lg:gap-5">
                  <div className="mt-0.5 flex h-[64px] shrink-0 sm:h-[74px] lg:h-[92px]">
                    <span className="h-full w-[4px] bg-[#8D1E39]" />
                    <span className="h-full w-[2px] bg-[#b01236]" />
                  </div>
                  <div>
                    <p className="font-poppins text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] sm:tracking-[0.3em] text-[#8D1E39]">
                      {item.label}
                    </p>
                    <h3 className="mt-1.5 sm:mt-2 font-[PPFONT] text-[clamp(1.35rem,4.3vw,2.55rem)] leading-[1.08] text-[#122c4e]">
                      {item.value}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
