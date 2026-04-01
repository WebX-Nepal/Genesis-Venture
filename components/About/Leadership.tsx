"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface Member {
  name: string;
  title: string;
  imageURL: string;
}

const team: Member[] = [
  {
    name: "Anthony Roselli",
    title: "Managing Partner",
    imageURL: "/images/leadership/anthony-roselli.avif",
  },
  {
    name: "Joseph Roselli",
    title: "General Partner",
    imageURL: "/images/leadership/joseph-roselli.avif",
  },
  {
    name: "Diego Caballero",
    title: "General Partner",
    imageURL: "/images/leadership/diego-caballero.avif",
  },
  {
    name: "Mithun Islam",
    title: "Partner",
    imageURL: "/images/leadership/mithun-islam.avif",
  },
  {
    name: "Scott Walker",
    title: "Principal",
    imageURL: "/images/leadership/scott-walker.avif",
  },
  {
    name: "Angie Silva",
    title: "Vice President",
    imageURL: "/images/leadership/angie-silva.avif",
  },
  {
    name: "Carlos Duque",
    title: "Vice President",
    imageURL: "/images/leadership/carlos-duque.avif",
  },
  {
    name: "Kaela Fanning",
    title: "Director, Marketing",
    imageURL: "/images/leadership/kaela-fanning.avif",
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
      className="relative bg-white min-h-screen w-full flex flex-col px-8 md:px-16 py-16 md:py-24"
    >
      <div className="flex items-start justify-between border-b border-gray-200 pb-6 mb-10">
        <span className="leadership-heading text-xs uppercase tracking-widest text-gray-500 font-poppins">
          Leadership
        </span>
        <span className="leadership-heading text-xs uppercase tracking-widest text-gray-500 font-poppins">
          04
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-12">
        <div className="md:w-1/3">
          <h2 className="leadership-heading text-2xl md:text-3xl text-genesis-navy leading-snug">
            The team behind the portfolio.
          </h2>
          <p
            id="animated-paragraph"
            className="text-sm text-gray-600 font-poppins leading-relaxed mt-4 max-w-xs"
          >
            Experienced operators and investors who have built, scaled, and
            exited companies across every major sector.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100">
        {team.map(({ name, title, imageURL }) => (
          <div
            key={name}
            className="bg-white flex flex-col group overflow-hidden"
          >
            <div className="relative w-full aspect-3/4 overflow-hidden">
              <Image
                src={imageURL}
                alt={name}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="p-4 flex flex-col gap-0.5">
              <span className="text-sm text-genesis-navy font-[PPFONT]">
                {name}
              </span>
              <span className="text-xs text-gray-400 uppercase tracking-widest font-poppins">
                {title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
