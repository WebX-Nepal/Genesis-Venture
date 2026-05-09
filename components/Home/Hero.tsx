"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useGSAP(
    () => {
      if (sectionRef.current && videoRef.current) {
        gsap.to(videoRef.current, {
          yPercent: 12,
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=100%",
            scrub: true,
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-genesis-navy px-6 pt-28 sm:px-8 md:px-16 md:pt-32"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-[115%] w-full object-cover will-change-transform"
      >
        <source src="/videos/night-sky.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 mx-auto -translate-y-14 flex w-full max-w-5xl flex-col items-center justify-center text-center md:-translate-y-20">
        <div className="mb-7 flex items-center gap-4 text-white/80 md:mb-8">
          <span className="h-px w-10 bg-white/35 md:w-16" />
          <span
            className="font-montserrat text-[10px] font-medium uppercase tracking-[0.45em] text-white/75"
          >
            Early-Stage Capital
          </span>
          <span className="h-px w-10 bg-white/35 md:w-16" />
        </div>
        <h1
          className="font-agatho text-[clamp(1.5rem,5.8vw,3.8rem)] font-medium text-center leading-tight tracking-wide text-white"
        >
          <span className="block">Creating Long Term</span>
          <span>Sustainable Wealth</span>
        </h1>
      </div>
    </section>
  );
}
