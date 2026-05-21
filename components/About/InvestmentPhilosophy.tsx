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
    image: "/coin/1.png",
  },
  {
    title: "Early Entry Advantage",
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
      className="w-full bg-white py-10 sm:py-12 md:py-14 lg:py-16"
    >
      <div className="layout-7xl">
        <div className="flex flex-col gap-0">
          {philosophyRows.map((row, index) => (
            <article
              key={row.title}
              className={`grid grid-cols-1 gap-0 overflow-hidden lg:grid-cols-[1fr_1.1fr] lg:gap-0 xl:gap-0 ${
                index % 2 === 0 ? "bg-white" : "bg-white"
              }`}
            >
              <div className={`relative min-h-[260px] sm:min-h-[300px] lg:min-h-[340px] ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                <Image
                  src={row.image}
                  alt={row.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                
              
              </div>
              <div className={`flex items-center p-4 sm:p-5 md:p-6 lg:p-7 ${index % 2 !== 0 ? "lg:order-1 lg:pr-12" : "lg:pl-12"}`}>
                <div className={index % 2 !== 0 ? "text-left lg:text-right" : "text-left"}>
                  <h3 className="font-agatho text-[clamp(1.4rem,2.6vw,2.2rem)] leading-[1.2] text-[#173053]">
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
