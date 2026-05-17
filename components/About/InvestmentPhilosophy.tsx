"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const philosophyRows = [
  {
    title: "Conviction Over Noise",
    body: "We prioritize long-term fundamentals over short-term headlines. Our decisions are built on business quality, governance strength, and clarity of execution.",
    image: "/images/Projects/insight.webp",
  },
  {
    title: "Early entry advantage",
    body: "Investing before a public listing means accessing companies at valuations that reflect potential - not yet priced in by the crowd.",
    image: "/phyloshopy/2.png",
  },
  {
    title: "Disciplined Risk Framework",
    body: "Every position is sized with downside awareness. We seek resilient businesses that can compound through cycles while preserving capital integrity.",
    image: "/phyloshopy/3.png",
  },
];

const InvestmentPhilosophy = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const splitTitle = new SplitText(".investment-philosophy-heading", {
      type: "words",
    });

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
      .map((word) => `<span class="word inline-block">${word}</span>`)
      .join(" ");
    if (words) paragraph.innerHTML = words;

    const wordEls = paragraph.querySelectorAll(".word");

    gsap.fromTo(
      wordEls,
      { opacity: 0.15, y: 12, filter: "blur(6px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        stagger: 0.03,
        ease: "power2.out",
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
      id="investment-philosophy"
      ref={containerRef}
      className="w-full bg-white pb-14 sm:pb-16 lg:pb-20"
    >
      <div className="layout-7xl">
        <div className="sticky top-24 z-20 -mt-28 mb-6 flex justify-center sm:-mt-32 sm:mb-8">
          <Image
            src="/coin/coin.png"
            alt="Coin"
            width={128}
            height={128}
            className="h-24 w-24 object-contain sm:h-28 sm:w-28"
          />
        </div>

        <div className="space-y-4 sm:space-y-5">
          {philosophyRows.map((row, index) => (
            <article
              key={row.title}
              className={`grid grid-cols-1 overflow-hidden lg:grid-cols-[1fr_1.1fr] ${
                index % 2 === 0 ? "bg-white" : "bg-[#f6f9fd]"
              }`}
            >
              <div className={`relative min-h-[240px] sm:min-h-[280px] lg:min-h-[320px] ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                <Image
                  src={row.image}
                  alt={row.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div
                  className={`absolute inset-0 ${
                    index % 2 !== 0
                      ? "bg-gradient-to-r from-white via-white/65 to-transparent"
                      : "bg-gradient-to-l from-white via-white/65 to-transparent"
                  }`}
                />
              </div>
              <div className={`flex items-center p-6 sm:p-8 lg:p-10 ${index % 2 !== 0 ? "lg:order-1 lg:pr-20" : "lg:pl-24"}`}>
                <div className={index % 2 !== 0 ? "text-left lg:text-right" : "text-left"}>
                  <h3 className="font-agatho text-[clamp(1.15rem,2vw,1.8rem)] leading-[1.25] text-[#173053]">
                    {row.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4e617d] font-montserrat">
                    {row.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentPhilosophy;
