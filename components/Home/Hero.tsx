"use client";
import Button from "@/ui/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImagePlayer } from "../image-player";
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

const stats = [
  { value: "$2.4B+", label: "AUM" },
  { value: "80+", label: "Portfolio Co." },
  { value: "30+", label: "Years" },
  { value: "12", label: "Countries" },
  { value: "14", label: "IPOs" },
];
const IMAGES = [
  "/images/hero/img1.jpg",
  "/images/hero/img2.jpg",
  "/images/hero/img3.jpg",
  "/images/hero/img4.jpg",
  "/images/hero/img5.jpg",
];

export default function Hero() {
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
    <section className="h-screen w-full bg-genesis-navy relative overflow-hidden flex flex-col items-center justify-center gap-10 px-8 md:px-16 pt-20 md:pt-32 pb-8 md:pb-12">
      {/* <Image
        src="/images/hero/try1.jpg"
        alt="hero image"
        fill
        className="object-cover"
      /> */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/night-sky.mp4" type="video/mp4" />
      </video>

      {/* <ImagePlayer
        images={IMAGES}
        interval={3000}
        renderImage={(src) => (
          <Image
            src={src}
            fill
            className="size-full object-cover inline-block align-middle"
            alt="showcalse"
          />
        )}
      /> */}
      <div className="absolute inset-0 bg-genesis-navy/30"></div>

      {/* <div
        className="absolute top-[-10%] right-[-5%] w-125 h-125 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,26,46,0.18) 0%, transparent 70%)",
        }}
      /> */}

      {/* <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-black/80"></div> */}
      <p className="absolute bottom-40 right-0 text-5xl font-[PPFONT] leading-tight text-white/8 select-none pointer-events-none pr-4">
        established in
      </p>
      <div className="absolute bottom-0 right-0 text-[10vw] font-[PPFONT] leading-none text-white/8 select-none pointer-events-none pr-4">
        1991
      </div>

      {/* Top meta */}
      {/* <div className="relative flex items-start justify-between">
        <span className="text-xs uppercase tracking-widest text-white/50 font-poppins">
          Est. 1991 — Kathmandu, Nepal
        </span>
        <span className="text-xs uppercase tracking-widest text-white/50 font-poppins">
          Venture Capital
        </span>
        <div className="flex items-center gap-3">
          <div className="w-6 h-px bg-genesis-red" />
          <span className="text-xs uppercase tracking-widest text-genesis-red font-poppins">
            Early-Stage Investment
          </span>
        </div>
      </div> */}

      {/* Main content */}
      <div className="relative flex flex-col   text-center gap-4 md:gap-6">
        <h1 className="hero-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-[PPFONT] text-white leading-tight">
          Creating Long Term
          <br />
          Sustainable Wealth
        </h1>
        <p className="desc text-sm text-white/80 font-poppins max-w-lg mx-auto leading-relaxed hidden sm:block">
          Genesis Ventures partners with founders at the earliest stages,
          providing capital, strategy, and long-term support across high-growth
          sectors.
        </p>
      </div>

      {/* Bottom: CTA + stats */}
      <Button text="Get in touch" href="/Contacts" className="relative z-50 " />
    </section>
  );
}
{
  /* <div className="flex gap-4 md:gap-6 flex-wrap">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col gap-0.5 border-l border-white/10 pl-3"
            >
              <span className="text-sm md:text-lg text-white font-[PPFONT] leading-none">
                {value}
              </span>
              <span className="text-xs text-white/50 font-poppins uppercase tracking-wider leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div> */
}
