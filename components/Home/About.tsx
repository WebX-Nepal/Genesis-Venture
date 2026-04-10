"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Link from "next/link";
import Button from "../ui/Button2";
import HeroSectionTitle from "../ui/HeroSectionTitle";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
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

    return () => {
      splitTitle.revert();
    };
  });

  return (
    <section
      ref={containerRef}
      className="w-full bg-white text-white flex flex-col px-4 xs:px-6 sm:px-8 md:px-16 py-8 sm:py-12 md:py-24"
    >
      <div className="flex items-start justify-between border-b border-gray-200">
        <span className="about-heading text-xs uppercase tracking-widest text-gray-500 font-poppins">
          About Us
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-24 flex-1 pt-5 sm:pt-6 md:pt-10 pb-8 sm:pb-10 overflow-hidden">
        <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6 md:justify-center">
          <HeroSectionTitle
            as="h2"
            className="about-heading text-[clamp(1.5rem,4.6vw,3rem)] text-genesis-navy leading-[1.12] font-[PPFONT]"
            prefix="Integrity before"
            highlight="returns."
            suffix="Always."
          />

          <p
            id="animated-paragraph"
            className="text-sm sm:text-base text-gray-600 font-poppins leading-8 max-w-2xl"
          >
            Genesis Ventures is an early-stage venture capital firm based in
            Kathmandu, partnering with ambitious founders from idea to scale. We
            invest in high-growth sectors where technology and innovation create
            lasting competitive advantage.
          </p>

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
            src="/images/bull.jpeg"
            alt="About us"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
