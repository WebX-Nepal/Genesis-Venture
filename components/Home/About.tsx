"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Link from "next/link";
import Button from "../ui/Button2";

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
          end: "top -20%",
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
      className="w-full bg-white flex flex-col px-4 xs:px-6 sm:px-8 md:px-16 py-8 sm:py-12 md:py-24"
    >
      <div className="w-full mb-10 sm:mb-14 md:mb-20">
        <div
          ref={statsRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-10 md:gap-x-50"
        >
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="stats flex flex-col gap-1 border-l border-gray-200 pl-3 sm:pl-4 md:pl-5"
            >
              <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-5xl font-[PPFONT] text-genesis-navy">
                {value}
              </span>
              <span className="text-[10px] xs:text-xs text-gray-500 uppercase tracking-widest font-poppins leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-start justify-between border-b border-gray-200">
        <span className="about-heading text-xs uppercase tracking-widest text-gray-500 font-poppins">
          About Us
        </span>
        <span className="about-heading text-xs uppercase tracking-widest text-gray-500 font-poppins">
          02
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-24 flex-1 pt-5 sm:pt-6 md:pt-10 pb-8 sm:pb-10 overflow-hidden">
        <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6 md:justify-center">
          <h2 className="about-heading text-[clamp(1.25rem,4vw,2.5rem)] text-genesis-navy leading-snug font-[PPFONT]">
            A disciplined approach to early-stage investment.
          </h2>

          <p
            id="animated-paragraph"
            className="text-xs sm:text-sm text-gray-600 font-poppins leading-relaxed max-w-lg"
          >
            Genesis Ventures is an early-stage venture capital firm based in
            Kathmandu, partnering with ambitious founders from idea to scale. We
            invest in high-growth sectors where technology and innovation create
            lasting competitive advantage.
          </p>

          <div className="flex gap-4 mt-2">
            {[
              "Founder-first approach",
              "High-conviction investing",
              "Long-term partnership",
            ].map((item) => (
              <span
                key={item}
                className="text-xs uppercase tracking-widest text-gray-500 border border-gray-200 px-3 py-1"
              >
                {item}
              </span>
            ))}
          </div>

          {/* <div className="flex gap-6 mt-2 text-xs text-gray-500 font-[GT50] uppercase tracking-widest">
            <span>30+ Years</span>
            <span>80+ Companies</span>
            <span>$2.4B AUM</span>
          </div> */}

          {/* <Button text="Our Story" href="/About" className="relative z-50" /> */}
          <Link href="/About">
            <Button
              variant="primary"
              size="md"
              className="mt-12 bg-genesis-navy px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white hover:bg-genesis-navy/80 transition-colors"
            >
              <span className="inline-flex items-center gap-3">Our Story</span>
            </Button>
          </Link>
        </div>
        <div className="relative w-full md:w-1/2 h-[40vh] xs:h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
          <Image
            src="/images/about/meeting.jpg"
            alt="About us"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
