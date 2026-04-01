"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const stats = [
  { value: "120+", label: "Articles Published" },
  { value: "12", label: "Markets Covered" },
  { value: "Since 1991", label: "Sharing Insights" },
  { value: "Weekly", label: "Market Updates" },
];

const PerspectiveHero = () => {
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
      delay: 0.5,
    });

    return () => {
      splitTitle.revert();
      splitDesc.revert();
    };
  });

  return (
    <section className="relative h-screen w-full flex flex-col justify-between items-center px-8 md:px-16 pt-32 pb-12 overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/night-sky.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-genesis-navy/30 -z-10" />

      {/* Top label */}
      <div className="hero-heading w-full flex items-start justify-between border-b border-white/10 pb-3">
        <span className="text-xs uppercase tracking-widest text-white/40 font-poppins">
          Perspective
        </span>
        <span className="text-xs uppercase tracking-widest text-white/40 font-poppins">
          04
        </span>
      </div>

      {/* Center content */}
      <div className="flex flex-col items-center gap-6 max-w-2xl text-center">
        <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl text-white leading-tight font-[PPFONT]">
          Insight over
          <br />
          <span className="italic text-white/50">noise.</span>
        </h1>
        <p className="desc text-sm text-white/70 font-poppins leading-relaxed max-w-md">
          Our team of investors and analysts share what they&apos;re seeing
          across markets, sectors, and the founders shaping the next decade.
        </p>

        {/* Nav tabs */}
        <div className="flex gap-0 border border-white/10 mt-2">
          <a
            href="#market-insights"
            className="px-6 py-2.5 text-xs uppercase tracking-widest font-poppins text-white bg-white/10 hover:bg-white/20 transition-colors duration-150"
          >
            Market Insights
          </a>
          <a
            href="#media"
            className="px-6 py-2.5 text-xs uppercase tracking-widest font-poppins text-white/50 hover:text-white hover:bg-white/10 transition-colors duration-150"
          >
            Media
          </a>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="flex flex-wrap gap-6 w-full justify-between text-center md:gap-16 border-t border-white/10 pt-8">
        {stats.map(({ value, label }) => (
          <div key={label} className="flex flex-col justify-between gap-1">
            <span className="text-xl md:text-2xl text-white font-[PPFONT]">
              {value}
            </span>
            <span className="text-xs text-white/50 uppercase tracking-widest font-poppins">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PerspectiveHero;
