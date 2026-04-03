"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Link from "next/dist/client/link";
import Button from "../ui/Button2";

gsap.registerPlugin(SplitText, ScrollTrigger);

const stats = [
  { value: "1991", label: "Founded" },
  { value: "Kathmandu", label: "Headquarters" },
  { value: "$2.4B+", label: "Assets Under Management" },
  { value: "80+", label: "Portfolio Companies" },
];

export default function AboutUs() {
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
      "#about-animated-paragraph",
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

    gsap.from(".about-stat", {
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
      {/* Stats row — mirrors landing page pattern */}
      <div className="w-full mb-10 sm:mb-14 md:mb-20">
        <div
          ref={statsRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-10 md:gap-x-50"
        >
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="about-stat flex flex-col gap-1 border-l border-gray-200 pl-3 sm:pl-4 md:pl-5"
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

      {/* Section label */}
      <div className="flex items-start justify-between border-b border-gray-200">
        <span className="about-heading text-xs uppercase tracking-widest text-gray-500 font-poppins">
          About Us
        </span>
        <span className="about-heading text-xs uppercase tracking-widest text-gray-500 font-poppins">
          01
        </span>
      </div>

      {/* Content row */}
      <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-24 flex-1 pt-5 sm:pt-6 md:pt-10 pb-8 sm:pb-10 overflow-hidden">
        {/* Left: text */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6 md:justify-center">
          <h2 className="about-heading text-[clamp(1.25rem,4vw,2.5rem)] text-genesis-navy leading-snug font-[PPFONT]">
            Three decades of backing founders who change industries.
          </h2>

          <p
            id="about-animated-paragraph"
            className="text-xs sm:text-sm text-gray-600 font-poppins leading-relaxed max-w-lg"
          >
            Genesis Ventures was built on a simple belief — the most
            transformative companies are often misunderstood in their earliest
            stages. For over three decades, we have partnered with founders who
            see opportunities before the market does, providing not just
            capital, but conviction when it matters most. Our role extends
            beyond investment — we work closely with teams to navigate
            uncertainty, refine strategy, and build companies designed to
            endure.
          </p>
          <span className="text-xs uppercase tracking-widest text-genesis-navy font-[GT50] mt-2">
            Conviction over consensus.
          </span>
          {/* 
          <div className="flex flex-wrap gap-3 mt-2">
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
          </div> */}

          {/* <Button text="Contact Us" href="/About" className="relative z-50" /> */}
          <Link href="/contact">
            <Button
              variant="primary"
              size="md"
              className="mt-12 bg-genesis-navy px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white hover:bg-genesis-navy/80 transition-colors"
            >
              <span className="inline-flex items-center gap-3">Contact Us</span>
            </Button>
          </Link>
        </div>

        {/* Right: image */}
        <div className="relative w-full md:w-1/2 h-[40vh] xs:h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
          <Image
            src="/images/about/about-us.jpg"
            alt="About Genesis Ventures"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
