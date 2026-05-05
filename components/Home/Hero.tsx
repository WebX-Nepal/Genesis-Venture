"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { usePreLoader } from "@/context/PreLoaderContext";
export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);
const { hasLoaded } = usePreLoader()
  useGSAP(
    () => {
    if (textRef.current) {
      gsap.set(textRef.current, { y: 20, opacity: 1, color: "#1a2e5a" });

      gsap.to(textRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "cubic-bezier(0.55, 0, 1, 0.45)",
        delay: 1.3,
        color: "white",
      });
    }
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

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,22,42,0.35)_0%,rgba(8,22,42,0.18)_28%,rgba(8,22,42,0.42)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_34%),radial-gradient(circle_at_bottom,rgba(143,211,255,0.09),transparent_30%)]" />

      <div className="relative z-10 mx-auto -translate-y-14 flex w-full max-w-5xl flex-col items-center justify-center text-center md:-translate-y-20">
        <div className="mb-7 flex items-center gap-4 text-white/80 md:mb-8">
          <span className="h-px w-10 bg-white/35 md:w-16" />
          <span className="font-poppins text-[10px] uppercase tracking-[0.45em] text-white/75">
            Early-Stage Venture Capital
          </span>
          <span className="h-px w-10 bg-white/35 md:w-16" />
        </div>
        {hasLoaded ? 
        <>
         <h1
          className="text-[clamp(1.75rem,7vw,4.5rem)] font-[PPFONT] text-center  leading-tight tracking-[0.015em] text-white"
        >
          <span className="block">Creating Long Term</span>
          <span>Sustainable Wealth</span>
        </h1>
        </>
        :  <h1
          ref={textRef}
          className="text-[clamp(1.75rem,7vw,4.5rem)] font-[PPFONT] text-center  leading-tight tracking-[0.015em]"
        >
          <span className="block">Creating Long Term</span>
          <span>Sustainable Wealth</span>
        </h1>}
       
      </div>
    </section>
  );
}