"use client";

import { useRef } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button2";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const animateWords = (text: string, startDelay = 0, step = 42) => {
  return text.split(" ").map((word, idx) => (
    <span
      key={`${word}-${idx}`}
      className="ir-word-animate"
      data-delay={startDelay + idx * step}
    >
      {word}
    </span>
  ));
};

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const nodes = Array.from(
      section.querySelectorAll<HTMLElement>(".ir-word-animate"),
    ).sort(
      (a, b) =>
        Number.parseInt(a.dataset.delay || "0", 10) -
        Number.parseInt(b.dataset.delay || "0", 10),
    );

    gsap.set(nodes, {
      autoAlpha: 0,
      y: 12,
      scale: 0.985,
      filter: "blur(3px)",
      willChange: "transform, opacity, filter",
      force3D: true,
    });

    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      scrollTrigger: {
        trigger: section,
        start: "top 78%",
        end: "bottom 25%",
        toggleActions: "play none none reverse",
      },
    });

    nodes.forEach((node) => {
      const delay = Number.parseInt(node.dataset.delay || "0", 10) / 1000;
      tl.to(
        node,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.38,
        },
        delay,
      );
    });

    return () => {
      gsap.set(nodes, { clearProps: "all" });
    };
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white">
      <style>{`
        .ir-word-animate {
          display: inline-block;
          opacity: 1;
          margin-right: 0.28em;
          transition: color 0.25s ease, text-shadow 0.25s ease;
        }
        .ir-word-animate:hover {
          text-shadow: 0 0 16px rgba(141, 30, 57, 0.25);
        }
      `}</style>

      <div className="layout-7xl relative py-20 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
          <span className="inline-flex items-center gap-3 font-poppins text-[11px] font-medium tracking-[0.28em] uppercase text-genesis-red">
            {animateWords("Investor Relations", 0, 36)}
          </span>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#8D1E39] font-poppins lg:pl-14 lg:text-left">
            {animateWords("Reporting In Progress", 90, 36)}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col justify-start">
            <h1 className="mt-0 sm:mt-1 font-[PPFONT] text-[1.7rem] sm:text-[2rem] leading-[1.55] tracking-[-0.01em] text-[#08112a] font-medium">
              <span className="block">
                {animateWords("Good data takes time.", 140, 36)}
              </span>
              <span className="block italic text-genesis-red font-medium">
                {animateWords("Great data takes discipline.", 300, 36)}
              </span>
            </h1>

            <p className="mt-6 sm:mt-9 max-w-[560px] text-[16px] sm:text-[17px] leading-[1.55] text-[#08112a]">
              {animateWords(
                "Ours is almost ready and worth the wait. Performance materials, portfolio disclosures, and investor letters are released only when they meet the standards we hold ourselves to, not the standards the market is willing to accept.",
                520,
                16,
              )}
            </p>

            <div className="mt-8 sm:mt-12 flex flex-row gap-3 sm:gap-5">
              <Link href="#access">
                <Button
                  variant="primary"
                  size="md"
                  className="inline-flex items-center justify-center gap-2 bg-genesis-red px-4 py-2.5 font-poppins text-[11px] font-medium uppercase tracking-[0.12em] text-white transition-all duration-350 hover:bg-[#a52344] sm:px-6 sm:py-3"
                >
                  {animateWords("Request Materials", 760, 28)}
                </Button>
              </Link>
              <Link href="#commitment">
                <Button
                  variant="primary"
                  size="md"
                  className="inline-flex items-center justify-center gap-2 border-[#173053] bg-[#173053] px-4 py-2.5 font-poppins text-[11px] font-medium uppercase tracking-[0.12em] !text-white transition-all duration-350 hover:!bg-[#173053] sm:px-6 sm:py-3"
                >
                  {animateWords("Our Commitment", 820, 28)}
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-2 flex flex-col justify-start border border-[#173053]/15 bg-white p-6 sm:p-8 lg:mt-0 lg:ml-4">
            <div className="mb-8 border-b border-[#1a2e4a]/15 pb-8">
              <blockquote className="font-[PPFONT] text-[1.7rem] sm:text-[2rem] italic leading-[1.55] text-[#102347]">
                <span className="ir-word-animate not-italic mr-1" data-delay={280}>
                  &quot;
                </span>
                {animateWords("We'd rather show you", 300, 32)}
                <span className="ir-word-animate not-italic" data-delay={420}>
                  nothing
                </span>
                <span className="ml-1">{animateWords("than show you something half-built.", 460, 30)}</span>
                <span className="ir-word-animate not-italic" data-delay={640}>
                  &quot;
                </span>
              </blockquote>
            </div>

            <p className="text-[15px] sm:text-[16px] text-[#2f4268] leading-[1.9] font-poppins">
              {animateWords(
                "Most firms publish performance the moment it flatters them. We have chosen a different path: to release figures only when they have been audited, stress-tested, and reviewed against the standards we hold ourselves to.",
                520,
                16,
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
