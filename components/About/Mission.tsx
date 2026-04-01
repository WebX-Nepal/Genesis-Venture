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
    title: "Conviction",
    description:
      "We back founders others overlook — early, decisively, and with full commitment. We trust our judgment when it matters most, leaning into bold ideas before they become obvious. Our belief doesn't waver with market noise. ",
  },
  {
    title: "Partnership",
    description:
      "We sit alongside our founders through every stage, not just at the term sheet. From first check to scale, we provide strategic support, honest feedback, and long-term alignment. We win together and navigate challenges side by side. ",
  },
  {
    title: "Integrity",
    description:
      "Transparent communication and honest counsel, even when it's difficult. We believe trust is built through consistency and truth, not convenience. Our decisions are guided by strong principles, not short-term gains.",
  },
  {
    title: "Long-term thinking",
    description:
      "We measure success in decades, not quarters. Our focus is on building enduring companies that stand the test of time. We prioritize sustainable growth over quick wins. Patience and discipline guide every decision we make.",
  },
];

export default function Mission() {
  const containerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const splitTitle = new SplitText(".mission-heading", { type: "words" });

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

    if (!statsRef.current) return;

    const cards = statsRef.current.querySelectorAll(".stats");

    cards.forEach((card) => {
      const paragraph = card.querySelector("p");
      if (!paragraph) return;

      // Split text into words
      const words = paragraph.textContent
        ?.split(" ")
        .map((word) => `<span class="word">${word}</span>`)
        .join(" ");

      if (words) paragraph.innerHTML = words;

      const wordEls = paragraph.querySelectorAll(".word");

      // Animate words
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
            end: "bottom 70%",
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
      className=" h-screen w-full overflow-hidden z-0 bg-white flex flex-col px-8 md:px-16 py-16 md:py-24"
    >
      <div className="flex items-start justify-between border-b border-gray-200 pb-6">
        <span className="mission-heading text-xs uppercase tracking-widest text-gray-500 font-poppins">
          Mission & Values
        </span>
        <span className="mission-heading text-xs uppercase tracking-widest text-gray-500 font-poppins">
          02
        </span>
      </div>

      <div className=" flex flex-col md:flex-row gap-12 md:gap-24 flex-1 pt-10">
        <div className="md:w-1/3 flex flex-col justify-between gap-10">
          <h2 className="mission-heading text-2xl md:text-3xl text-genesis-navy leading-snug">
            Our mission is to back the builders who change industries.
          </h2>
          <div className="relative w-full h-64 md:h-full overflow-hidden">
            <Image
              src="/images/about/values.jpg"
              alt="About us"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          {/* <p className="text-sm text-gray-600 font-poppins  leading-relaxed">
            We invest at the intersection of ambition and execution — where a
            founder&apos;s vision meets the discipline to see it through.
          </p> */}
        </div>

        <div
          ref={statsRef}
          className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-px  bg-gray-200"
        >
          {values.map(({ title, description }) => (
            <div
              key={title}
              className="relative stats group bg-white px-6 md:px-8 flex flex-col justify-end gap-3 border border-transparent  transition-all duration-300 "
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-genesis-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

              <span className="text-xs uppercase tracking-widest text-genesis-navy group-hover:text-genesis-red  font-poppins">
                {title}
              </span>
              <p className="text-sm text-gray-600 font-poppins  leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
