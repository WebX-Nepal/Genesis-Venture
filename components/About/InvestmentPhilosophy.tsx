"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Handshake, LucideIcon, Target, Users, TrendingUp } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const investmentPhilosophy = [
  {
    id: 1,
    number: "01",
    title: "High-conviction investing",
    description:
      "We make fewer bets, but go deeper—committing time, capital, and network from day one.",
    image: "/images/Projects/investing.webp",
    icon: Target,
  },
  {
    id: 2,
    number: "03",
    title: "Founder-first approach",
    description:
      "We believe great companies are built by exceptional founders, prioritizing people.",
    image: "/images/Projects/founder.webp",
    icon: Users,
  },
  {
    id: 3,
    number: "02",
    title: "Sector-focused insight",
    description:
      "We invest in sectors where we have deep expertise and strong operational understanding.",
    image: "/images/Projects/insight.webp",
    icon: TrendingUp,
  },
  {
    id: 4,
    number: "04",
    title: "Long-term partnership",
    description:
      "We stay with our companies from inception to scale, supporting every stage of growth.",
    image: "/images/Projects/partnership.webp",
    icon: Handshake,
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
      className="bg-white w-full px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
    >
      <div className="layout-7xl">
        <div className="grid grid-cols-1 w-full lg:grid-cols-2 gap-12 lg:gap-12 items-center ">

          {/* Left side */}
          <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-4  ">
            <div className="flex flex-col gap-4 h-full ">
              {investmentPhilosophy.filter((_, i) => i % 2 === 0).map(({ id, title, description, icon, number }) => (
                <Card key={id} id={id} title={title} description={description} icon={icon} number={number} />
              ))}
            </div>

            <div className="flex flex-col gap-4 lg:mt-16 h-full ">
              {investmentPhilosophy.filter((_, i) => i % 2 !== 0).map(({ id, title, description, icon, number }) => (
                <Card key={id} id={id} title={title} description={description} icon={icon} number={number} />
              ))}
            </div>
          </div>

          {/* Right side */}
          <div>
            <h2 className="investment-philosophy-heading text-[2rem] text-genesis-navy leading-[1.45] tracking-[-0.01em] font-[PPFONT]">
              We invest early when conviction matters most.
            </h2>
            <p
              id="animated-paragraph"
              className="text-[16px] text-gray-600 font-poppins leading-[1.55] mt-4"
            >
              Genesis Ventures focuses on founders at the earliest stages, when
              clarity, speed, and hands-on support matter most. We partner with
              ambitious teams from idea to scale, helping shape strategy, refine
              product direction, and build durable businesses with long-term value.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default InvestmentPhilosophy;

const Card = ({ id, title, description, icon, number }: {
  id: number,
  title: string,
  description: string,
  icon: LucideIcon,
  number: string
}) => {
  const Icon = icon;

  return (
    <div className="relative bg-white justify-center h-70 md:h-80 lg:h-fit border border-[#173053]/25 flex flex-col p-6 lg:p-8 transition-all duration-300 hover:bg-[#f7faff] hover:shadow-[0_8px_24px_rgba(16,35,71,0.08)] cursor-pointer group overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-genesis-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
      <div className="flex justify-between items-center">
        <span className="h-[2px] w-10 bg-[#173053] transition-all duration-300 group-hover:w-14" />
        <span className="font-poppins text-[11px] font-semibold tracking-[0.2em] text-[#173053]">
          {number}
        </span>
      </div>



      <div className="flex flex-col gap-2 pt-8">
        {Icon && (
          <Icon className="w-12 h-12 text-genesis-navy group-hover:text-genesis-red transition-colors" />
        )}

        <span className="text-[1.125rem] font-normal text-genesis-navy group-hover:text-genesis-red transition-colors font-[PPFONT]">
          {title}
        </span>

        <span className="text-[16px] text-gray-600 group-hover:text-genesis-navy transition-colors font-poppins leading-[1.55]">
          {description}
        </span>
      </div>
    </div>
  );
};
