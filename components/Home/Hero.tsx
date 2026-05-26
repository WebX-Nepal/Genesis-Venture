"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useHeroVideoLoad } from "@/context/HeroVideoLoadContext";
export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const { setHeroVideoReady } = useHeroVideoLoad();

  useEffect(() => {
    setHeroVideoReady(false);
  }, [setHeroVideoReady]);

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

  useGSAP(
    () => {
      if (!isVideoReady || !headingRef.current || !eyebrowRef.current) return;

      const titleLines = headingRef.current.querySelectorAll("span");
      const tl = gsap.timeline();

      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 16, filter: "blur(5px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.45, ease: "power3.out" },
      );

      tl.fromTo(
        titleLines,
        { opacity: 0, y: 34, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.12,
          duration: 0.58,
          ease: "power3.out",
        },
        "-=0.18",
      );
    },
    { dependencies: [isVideoReady], scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-genesis-navy px-6 pt-28 sm:px-8 md:px-16 md:pt-32"
    >
      {!isVideoReady ? (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-[#0a1634] via-[#13356f] to-[#102852]" />
      ) : null}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedData={() => {
          setIsVideoReady(true);
          setHeroVideoReady(true);
        }}
        className={`absolute inset-0 h-[115%] w-full object-cover will-change-transform transition-opacity duration-500 ${isVideoReady ? "opacity-100" : "opacity-0"}`}
      >
        <source src="/videos/hero1.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 mx-auto -translate-y-14 flex w-full max-w-5xl flex-col items-center justify-center text-center md:-translate-y-20">
        <div ref={eyebrowRef} className="mb-7 flex items-center gap-4 text-white/80 md:mb-8">
          <span className="h-px w-10 bg-white/35 md:w-16" />
          <span
            className="font-montserrat text-[10px] font-medium uppercase tracking-[0.45em] text-white/75"
          >
            Early-Stage Capital
          </span>
          <span className="h-px w-10 bg-white/35 md:w-16" />
        </div>
        <h1
          ref={headingRef}
          className="font-agatho text-[clamp(2.05rem,8.2vw,3.8rem)] font-medium text-center leading-[1.08] tracking-wide text-white"
        >
          <span className="block">Creating Long Term</span>
          <span>Sustainable Wealth</span>
        </h1>
      </div>
    </section>
  );
}
