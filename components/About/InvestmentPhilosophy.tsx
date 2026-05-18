"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const philosophyRows = [
  {
    title: "Conviction Over Noise",
    body: "We prioritize long-term fundamentals over short-term headlines. Our decisions are built on business quality, governance strength, and clarity of execution.",
    image: "/coin/image.png",
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
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [footerIntersection, setFooterIntersection] = useState(0);
  const coinOpacity = isSectionVisible
    ? Math.max(0, 1 - footerIntersection / 0.2)
    : 0;

  useEffect(() => {
    const sectionEl = containerRef.current;
    const footerEl = document.querySelector("footer");
    if (!sectionEl || !footerEl) return;

    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.05 },
    );

    const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);
    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        setFooterIntersection(entry.intersectionRatio);
      },
      { threshold: thresholds },
    );

    sectionObserver.observe(sectionEl);
    footerObserver.observe(footerEl);

    return () => {
      sectionObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

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
        <div
          className="pointer-events-none fixed left-1/2 top-[60%] z-20 mb-6 -translate-x-1/2 sm:mb-8"
          style={{
            opacity: coinOpacity,
            transition: "opacity 120ms linear",
          }}
        >
          <Image
            src="/coin/coin.png"
            alt="Coin"
            width={128}
            height={128}
            className="h-20 w-20 object-contain animate-[coinPulse_2.8s_ease-in-out_infinite] sm:h-24 sm:w-24"
          />
        </div>
        {/* <div className="w-full border border-[#162e54]/12 bg-white p-6 text-left sm:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="border-l-4 border-[#8D1E39] pl-4 sm:pl-5">
              <h3 className="font-montserrat text-[clamp(1.35rem,2.1vw,1.85rem)] font-semibold leading-tight text-[#162e54]">
                Strategic Investment Approach
              </h3>
              <p className="mt-3 font-montserrat text-[1.03rem] leading-relaxed text-[#4e617d]">
                Our framework combines rigorous research, disciplined due diligence, and a long-term value
                creation perspective. Every investment decision is evaluated for business quality, governance
                strength, and the ability to compound sustainably over time.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="bg-zinc-100 px-4 py-3 font-montserrat text-[0.88rem] font-medium uppercase tracking-[0.08em] text-[#162e54]">
                  Research
                </div>
                <div className="bg-zinc-100 px-4 py-3 font-montserrat text-[0.88rem] font-medium uppercase tracking-[0.08em] text-[#162e54]">
                  Due Diligence
                </div>
                <div className="bg-zinc-100 px-4 py-3 font-montserrat text-[0.88rem] font-medium uppercase tracking-[0.08em] text-[#162e54]">
                  Long-Term Value
                </div>
              </div>
            </div>

            <div className="border-l-4 border-[#162e54]/25 pl-4 sm:pl-5">
              <h3 className="font-montserrat text-[clamp(1.35rem,2.1vw,1.85rem)] font-semibold leading-tight text-[#162e54]">
                Sustainable Growth
              </h3>
              <p className="mt-3 font-montserrat text-[1.03rem] leading-relaxed text-[#4e617d]">
                We prioritize future-ready businesses that can scale responsibly across cycles. Our focus is on
                resilient operating models, governance maturity, and execution capacity that support durable,
                compounding growth over the long term.
              </p>
              <div className="mt-6 bg-zinc-100 px-4 py-3 font-montserrat text-[0.88rem] font-medium uppercase tracking-[0.08em] text-[#162e54]">
                Show Future Thinking
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col gap-[40vh] pt-20 sm:pt-24">
          {philosophyRows.map((row, index) => (
            <article
              key={row.title}
              className={`grid grid-cols-1 gap-10 overflow-hidden lg:grid-cols-[1fr_1.1fr] lg:gap-24 xl:gap-32 ${
                index % 2 === 0 ? "bg-white" : "bg-white"
              }`}
            >
              <div className={`relative min-h-[340px] sm:min-h-[420px] lg:min-h-[520px] ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                <Image
                  src={row.image}
                  alt={row.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div
                  className={`absolute inset-0 ${
                    index % 2 !== 0
                      ? "bg-gradient-to-r from-white  to-transparent"
                      : "bg-gradient-to-l from-white to-transparent"
                  }`}
                />
              </div>
              <div className={`flex items-center p-6 sm:p-8 lg:p-10 ${index % 2 !== 0 ? "lg:order-1 lg:pr-20" : "lg:pl-24"}`}>
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
