"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const AboutIntro = () => {
  useGSAP(() => {
    const splitTitle = new SplitText(".hero-heading", { type: "words" });

    gsap.from(splitTitle.words, {
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
      stagger: 0.05,
      duration: 1,
      ease: "power3.out",
    });

    const splitDesc = new SplitText(".desc", { type: "lines" });

    gsap.from(splitDesc.lines, {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 1,
      ease: "power2.out",
    });

    return () => {
      splitTitle.revert();
      splitDesc.revert();
    };
  });
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 xs:px-6 sm:px-8 md:px-16 pt-20 xs:pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 md:pb-12 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-0"
      >
        <source src="/videos/investors.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-genesis-navy/30 z-10" />
      <div className="relative z-20 flex w-full max-w-xs flex-col justify-center gap-3 px-2 text-center xs:max-w-sm sm:max-w-md sm:gap-4 md:max-w-5xl md:gap-6">
        <h1 className="hero-heading text-[clamp(1.6rem,5vw,3.75rem)] text-white leading-tight font-[PPFONT]">
          {/* Transparent insights into Genesis Ventures' performance and strategy */}
          Transparent insight into capital, performance, and strategy.
        </h1>
        {/* <p className="desc text-xs xs:text-sm text-white/80 font-poppins leading-relaxed max-w-xs sm:max-w-sm mx-auto">
          We provide our partners with clear visibility into capital allocation,
          portfolio performance, and strategic updates. Your trust drives our
          commitment to long-term growth.
        </p> */}
      </div>

    </section>
  );
};

export default AboutIntro;
