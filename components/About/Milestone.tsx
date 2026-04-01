"use client";
import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

const milestones = [
  {
    year: "1991",
    title: "Founded in Kathmandu",
    description:
      "Established with a focus on early-stage technology companies.",
    image: "/images/milestones/kathmandu.jpg",
  },
  {
    year: "1998",
    title: "First Fund Closed",
    description:
      "Raised $120M, backing 14 companies across tech and healthcare.",
    image: "/images/milestones/fund.jpg",
  },
  {
    year: "2005",
    title: "Life Sciences Expansion",
    description: "Launched a dedicated biotech and digital health practice.",
    image: "/images/milestones/science.jpg",
  },
  {
    year: "2012",
    title: "Fund III — $500M",
    description: "Largest fund to date, reflecting strong LP confidence.",
    image: "/images/milestones/fund2.jpg",
  },
  {
    year: "2018",
    title: "Global Reach",
    description: "Portfolio companies operating across 12 countries.",
    image: "/images/milestones/global.jpg",
  },
  {
    year: "2024",
    title: "Fund V Launched",
    description:
      "$800M in commitments, continuing our focus on transformative founders.",
    image: "/images/milestones/fund3.jpg",
  },
];

export default function Milestone() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Drag state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  const scrollBy = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth =
      el.querySelector<HTMLElement>(".milestone-card")?.clientWidth ?? 220;
    el.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.pageX - el.offsetLeft;
    scrollLeft.current = el.scrollLeft;
    el.style.cursor = "grabbing";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  useGSAP(() => {
    const splitTitle = new SplitText(".milestone-heading", { type: "words" });

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

    return () => {
      splitTitle.revert();
    };
  });

  return (
    <section
      id="our-history"
      ref={containerRef}
      className=" bg-white h-screen w-full flex flex-col px-8 md:px-16 py-16 md:py-24"
    >
      {/* Header row */}
      <div className="flex items-start justify-between border-b border-gray-200 pb-6">
        <span className="milestone-heading text-xs uppercase tracking-widest text-gray-500 font-poppins">
          Our History
        </span>
        <span className="milestone-heading text-xs uppercase tracking-widest text-gray-500 font-poppins">
          03
        </span>
      </div>

      <div className="flex flex-col gap-10 flex-1 pt-10 justify-between">
        {/* Title + controls row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="milestone-heading text-2xl md:text-3xl text-genesis-navy leading-snug max-w-sm">
            Three decades of disciplined investing.
          </h2>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollBy("left")}
              disabled={!canScrollLeft}
              className={`w-9 h-9 flex items-center justify-center border transition-colors duration-200 ${
                canScrollLeft
                  ? "border-genesis-navy text-genesis-navy hover:bg-genesis-navy hover:text-white"
                  : "border-gray-200 text-gray-300 cursor-not-allowed"
              }`}
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => scrollBy("right")}
              disabled={!canScrollRight}
              className={`w-9 h-9 flex items-center justify-center border transition-colors duration-200 ${
                canScrollRight
                  ? "border-genesis-navy text-genesis-navy hover:bg-genesis-navy hover:text-white"
                  : "border-gray-200 text-gray-300 cursor-not-allowed"
              }`}
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          className="flex gap-px bg-gray-200 overflow-x-auto flex-1 select-none"
          style={{ scrollbarWidth: "none", cursor: "grab" }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          {milestones.map(({ year, title, description, image }) => (
            <div
              key={year}
              className="milestone-card relative bg-white flex flex-col min-w-55 md:min-w-65 flex-1 overflow-hidden px-2
                hover:bg-gray-50 transition-colors duration-300 group"
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-genesis-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

              {/* Year label */}
              <div className="px-4 pt-4 pb-3">
                <span className="text-[11px] uppercase tracking-widest text-gray-400 font-poppins group-hover:text-gray-500 transition-colors">
                  {year}
                </span>
              </div>

              {/* Photo band */}
              <div className="relative w-full h-40 overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.03]"
                  draggable={false}
                />
              </div>

              {/* Text content */}
              <div className="flex flex-col gap-1.5 px-4 pt-4 pb-6 flex-1">
                <div className="w-5 h-px bg-gray-300 mb-2" />
                <span className="text-sm font-medium text-genesis-navy group-hover:text-genesis-red leading-snug font-[PPFONT]">
                  {title}
                </span>
                <span className="text-xs text-gray-500 font-poppins leading-relaxed">
                  {description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
