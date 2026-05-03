"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Title from "../ui/Title";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useGSAP(
    () => {
      const splitTitle = new SplitText(".hero-heading", { type: "words" });
      const titleTween = gsap.from(splitTitle.words, {
        opacity: 0,
        y: 30,
        filter: "blur(10px)",
        stagger: 0.05,
        duration: 1,
        ease: "power3.out",
      });
      let videoTween: gsap.core.Tween | null = null;

      if (sectionRef.current && videoRef.current) {
        videoTween = gsap.to(videoRef.current, {
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

      return () => {
        titleTween.kill();
        videoTween?.kill();
        splitTitle.revert();
      };
    },
    { scope: sectionRef },
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
        <Title
        as="h1"
        text={<>
          Creating Long Term
          <br/>
          Sustainable Wealth</>} 
        />
      </div>
    </section>
  );
}
