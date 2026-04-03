"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const values = [
  {
    title: "Conviction Over Consensus",
    description:
      "We invest before it's obvious. Our edge lies in forming independent views early — before markets converge, before narratives form. We back founders others overlook, and we hold that position with discipline.",
  },
  {
    title: "Founder Alignment",
    description:
      "Our incentives are built around founder success, not fee income. We take board seats seriously, show up in hard moments, and measure our performance by the outcomes of the companies we back — nothing else.",
  },
  {
    title: "Fiduciary Discipline",
    description:
      "Every capital allocation decision is held to the highest standard of rigor and responsibility. We treat our LPs' trust as a privilege, maintain strict governance, and never conflate enthusiasm with diligence.",
  },
  {
    title: "Compounding Relationships",
    description:
      "The best deals come through deep trust built over years. We invest in relationships long before term sheets — with founders, co-investors, and operators — because durable networks compound like the best businesses.",
  },
];

export default function Values() {
  const containerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const splitTitle = new SplitText(".mission-heading", { type: "words" });

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

    if (!statsRef.current) return;

    const cards = statsRef.current.querySelectorAll(".stats");

    cards.forEach((card) => {
      const paragraph = card.querySelector("p");
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
          stagger: 0.05,
          ease: "none",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 70%",
            end: "top 20%",
            scrub: true,
          },
        },
      );
    });

    return () => {
      splitTitle.revert();
    };
  });

  return (
    <section
      id="our-values"
      ref={containerRef}
      className="w-full min-h-screen overflow-hidden z-0 bg-white flex flex-col px-4 xs:px-6 sm:px-8 md:px-16 py-8 sm:py-12 md:py-24"
    >
      <div className="flex items-start justify-between border-b border-gray-200 pb-3 sm:pb-4 md:pb-6">
        <span className="mission-heading text-xs uppercase tracking-widest text-gray-500 font-poppins">
          Our Values
        </span>
        <span className="mission-heading text-xs uppercase tracking-widest text-gray-500 font-poppins">
          02
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-24 flex-1 pt-5 sm:pt-6 md:pt-10">
        <div className="w-full md:w-1/3 flex flex-col justify-between gap-6 sm:gap-8 md:gap-10">
          <div className="flex flex-col gap-3 sm:gap-4">
            {/* <span className="mission-heading text-xs uppercase tracking-widest text-genesis-blue font-[GT50]">
              The principles we invest by
            </span> */}
            <h2 className="mission-heading text-[clamp(1.25rem,4vw,2rem)] text-genesis-navy leading-snug font-[PPFONT]">
              Capital guided by principle, not just opportunity.
            </h2>
          </div>
          <div className="relative w-full h-44 xs:h-52 sm:h-64 md:h-full overflow-hidden">
            <Image
              src="/images/about/values.jpg"
              alt="Our values"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>

        <div
          ref={statsRef}
          className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200"
        >
          {values.map(({ title, description }) => (
            <div
              key={title}
              className="relative stats group bg-white px-4 xs:px-5 sm:px-6 md:px-8 py-5 sm:py-6 md:py-8 flex flex-col justify-end gap-2 sm:gap-3 border border-transparent transition-all duration-300"
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-genesis-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
              <span className="text-xs uppercase tracking-widest text-genesis-navy group-hover:text-genesis-red font-poppins transition-colors duration-300">
                {title}
              </span>
              <p className="text-xs sm:text-sm text-gray-600 font-poppins leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
