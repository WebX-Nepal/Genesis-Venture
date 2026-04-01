"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Button from "@/ui/Button";

gsap.registerPlugin(SplitText, ScrollTrigger);

const stats = [
  { value: "$2.4B+", label: "Assets Under Management" },
  { value: "80+", label: "Portfolio Companies" },
  { value: "30+", label: "Years of Experience" },
  { value: "12", label: "Countries Reached" },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const splitTitle = new SplitText(".about-heading", { type: "words" });

    gsap.from(splitTitle.words, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "bottom 80%",
        scrub: true,
      },
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
      stagger: 0.05,
      duration: 1,
      ease: "power3.out",
    });

    if (!containerRef.current) return;

    const paragraph = containerRef.current.querySelector<HTMLParagraphElement>(
      "#animated-paragraph",
    );
    if (!paragraph) return;

    const words = paragraph.textContent
      ?.split(" ")
      .map((word) => `<span class="word">${word}</span>`)
      .join(" ");
    if (words) paragraph.innerHTML = words;

    const wordEls = paragraph.querySelectorAll(".word");

    gsap.fromTo(
      wordEls,
      { opacity: 0.1 },
      {
        opacity: 1,
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          end: "bottom 70%",
          scrub: true,
        },
      },
    );

    gsap.from(".stats", {
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top 95%",
        end: "bottom 80%",
        scrub: true,
      },
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
      stagger: 0.05,
      duration: 1,
      ease: "power3.out",
    });

    return () => {
      splitTitle.revert();
    };
  });
  return (
    <section
      ref={containerRef}
      className="h-screen w-full bg-white flex flex-col px-8 md:px-16 py-10 md:py-24"
    >
      <div className="flex items-start justify-between border-b border-gray-200 pb-4 md:pb-6">
        <span className="about-heading text-xs uppercase tracking-widest text-gray-500 font-poppins">
          About Us
        </span>
        <span className="about-heading text-xs uppercase tracking-widest text-gray-500 font-poppins">
          02
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-24 flex-1 pt-6 md:pt-10 overflow-hidden">
        <div className="md:w-1/2 flex flex-col gap-4 md:gap-6 md:justify-center">
          <h2 className="about-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl text-genesis-navy leading-snug font-[PPFONT]">
            A disciplined approach to early-stage investment.
          </h2>
          <p
            id="animated-paragraph"
            className="text-sm text-gray-600 font-poppins leading-relaxed max-w-sm hidden sm:block"
          >
            Founded in 1991, Genesis Ventures has built a reputation for
            identifying transformative businesses before they reach mainstream
            attention. We work closely with founders to accelerate growth and
            create lasting value.
          </p>
          <Button text="Our Story" href="/About" className="relative z-50" />
        </div>

        <div className="md:w-1/2">
          <div className="relative w-full h-64 md:h-full overflow-hidden">
            <Image
              src="/images/hero/about1.jpg"
              alt="About us"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-3 mt-4 md:mt-0 flex flex-col md:flex-row gap-6 md:gap-12">
        <p className="text-lg text-gray-500 font-poppins uppercase tracking-widest flex items-center">
          Genesis Ventures, Inc. — Kathmandu, Nepal
        </p>
        <div
          ref={statsRef}
          className="grid grid-cols-4 gap-4 md:gap-8 md:content-center"
        >
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="stats flex flex-col gap-1 border-l border-gray-200 pl-4 md:pl-5"
            >
              <span className="text-xl md:text-2xl lg:text-3xl font-[PPFONT] text-genesis-navy">
                {value}
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-widest font-poppins leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
