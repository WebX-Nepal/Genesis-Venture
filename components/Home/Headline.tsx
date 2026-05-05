"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Headline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const recentRef = useRef<HTMLHeadingElement>(null);
  const workRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        recentRef.current,
        { x: "-30%" },
        {
          x: "0%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "center center",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        workRef.current,
        { x: "30%" },
        {
          x: "0%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "center center",
            scrub: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="pb-20 max-w-7xl mx-auto overflow-visible flex items-center justify-center"
    >
        <div className="flex justify-between items-end w-full">
          <div className="flex flex-col gap-0">
          
              <h1
                ref={recentRef}
                className="text-[clamp(1.75rem,7vw,4.5rem)] font-[PPFONT] text-center  leading-tight tracking-[0.015em]"
              >
                Create Wealth
              </h1>
              <h1
                ref={workRef}
                className="text-[clamp(1.75rem,7vw,4.5rem)] font-[PPFONT] text-center  leading-tight tracking-[0.015em]"
              >
                With Genesis
              </h1>
        </div>
        </div>
    </div>
  );
}