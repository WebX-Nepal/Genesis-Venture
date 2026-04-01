"use client";
import Button from "@/ui/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ImagePlayer } from "../image-player";
import Image from "next/image";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const IMAGES = [
  "/images/hero/img1.jpg",
  "/images/hero/img2.jpg",
  "/images/hero/img3.jpg",
  "/images/hero/img4.jpg",
  "/images/hero/img5.jpg",
];

const Hero = () => {
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
    <section className="relative h-screen w-full flex flex-col items-center justify-between px-8 md:px-16 pt-32 pb-12">
      {/* <ImagePlayer
        images={IMAGES}
        interval={3000}
        renderImage={(src) => (
          <Image
            src={src}
            fill
            className="size-full object-cover inline-block align-middle -z-20"
            alt="showcalse"
          />
        )}
      /> */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/night-sky.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-genesis-navy/30 -z-20"></div>

      <div className="flex items-start justify-between border-b border-white/10 pb-6">
        <span className="hero-heading text-xs uppercase tracking-widest text-white/40 font-poppins">
          Investor Relations
        </span>
      </div>

      <div className="flex flex-col justify-center text-center gap-6 max-w-2xl">
        <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
          Transparent insights into Genesis Ventures’
          <br />
          performance and strategy
        </h1>
        <p className="desc text-sm  text-white/80 font-poppins leading-relaxed max-w-md mx-auto">
          We provide our partners with clear visibility into capital allocation,
          portfolio performance, and strategic updates. Your trust drives our
          commitment to long-term growth.
        </p>
      </div>

      <div className="flex flex-wrap w-full justify-between gap-6 md:gap-16 border-t border-white/10 pt-8">
        {[
          { value: "$2.4B+", label: "Assets Under Management" },
          { value: "80+", label: "Portfolio Companies" },
          { value: "30+", label: "Years of Experience" },
          { value: "12", label: "Countries" },
          { value: "14", label: "IPOs" },
        ].map(({ value, label }) => (
          <div key={label} className="flex flex-col gap-1">
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

export default Hero;
