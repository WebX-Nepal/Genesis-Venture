"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const leadershipPoints = [
  {
    title: "Strategic Judgment",
    description:
      "We make long-term decisions with clarity, discipline, and a strong sense of timing across changing market conditions.",
  },
  {
    title: "Founder Partnership",
    description:
      "Leadership at Genesis is hands-on where it matters most, supporting founders through key decisions, growth, and inflection points.",
  },
  {
    title: "Operational Perspective",
    description:
      "Our approach combines capital allocation with real operating insight, helping businesses scale with greater resilience and focus.",
  },
  {
    title: "Governance First",
    description:
      "We believe disciplined governance creates better companies, stronger accountability, and more durable long-term outcomes.",
  },
];

export default function Leadership() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const splitTitle = new SplitText(".leadership-heading", { type: "words" });

    gsap.from(splitTitle.words, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "top top",
        scrub: true,
      },
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
      stagger: 0.05,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".leadership-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
      opacity: 0,
      y: 24,
      stagger: 0.08,
      duration: 0.8,
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
          end: "top -10%",
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
      id="leadership"
      ref={containerRef}
      className="relative flex min-h-screen w-full flex-col bg-white px-4 py-16 xs:px-6 sm:px-8 md:px-16 md:py-24 font-montserrat"
    >
      <div className="mb-10 flex items-start justify-between border-b border-gray-200 pb-6">
        <span className="leadership-heading font-montserrat text-xs uppercase tracking-widest text-gray-500">
          Leadership
        </span>
      </div>

      <div className="mb-12 flex flex-col gap-10 md:mb-16 md:flex-row md:gap-20">
        <div className="w-full md:max-w-xl">
          <h2 className="leadership-heading font-montserrat text-[clamp(1.8rem,4vw,3rem)] leading-[1.08] text-genesis-navy">
            Leadership built on judgment, discipline, and long-term partnership.
          </h2>
        </div>
        <div className="w-full md:max-w-md">
          <p
            id="animated-paragraph"
            className="font-montserrat text-sm leading-7 text-gray-600"
          >
            Genesis brings a leadership approach shaped by rigorous thinking,
            active partnership, and a commitment to building resilient
            businesses over time.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {leadershipPoints.map(({ title, description }) => (
          <article
            key={title}
            className="leadership-card border border-black/10 bg-white/75 px-5 py-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-md sm:px-6 sm:py-7 md:px-7"
          >
            <h3 className="font-montserrat text-[1.2rem] leading-tight text-genesis-navy">
              {title}
            </h3>
            <p className="mt-3 font-montserrat text-sm leading-7 text-gray-600">
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
