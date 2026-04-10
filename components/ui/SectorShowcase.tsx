import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap/all';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

interface Company {
  name: string;
  stage: string;
  year: string | number;
  description: string;
}

interface SectorShowcaseProps {
  label: string;
  isReversed?: boolean;
  stat: {
    label: string;
    value: string | number;
  };
  companies: Company[];
}

gsap.registerPlugin(SplitText, ScrollTrigger)
const SectorShowcase: React.FC<SectorShowcaseProps> = ({
  label,
  isReversed = false,
  stat,
  companies,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const imageRef = useRef<HTMLImageElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const splitTitle = new SplitText(titleRef.current, { type: "words" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "top top",
        scrub: true,
      }
    });

    tl.from(splitTitle.words, {
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
      stagger: 0.05,
      duration: 0.1,
      ease: "power1.out",
    });

    tl.from(labelRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
    }, "<0.1");

    tl.from(statsRef.current, {
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 0.3,
    }, "<");

    // Image animation (keep separate)
    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "10% 70%",
        end: "10% 70%",
        scrub: true,
      },
      x: -100,
      duration: 0.5,
      ease: "power1.in",
    });

    return () => {
      splitTitle.revert();
    };
  }, { scope: containerRef });


  return (
    <section
      ref={containerRef}
      className={`flex flex-col md:flex-${isReversed ? "row-reverse" : "row"
        } gap-0 items-stretch min-h-[70vh] py-10 lg:py-20`}
    >
      <div className="relative w-full md:w-1/2 h-[40vh] md:h-auto overflow-hidden group">
        <Image
          ref={imageRef}
          src="/images/sectors.jpeg"
          alt={label}
          fill
          className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col px-6 sm:px-10 md:px-14 lg:px-16 py-12 md:py-16 bg-white">
        <div className="mb-10">
          <span className="block text-[10px] tracking-[0.25em] uppercase text-genesis-red font-semibold font-poppins mb-3">
            Sector
          </span>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <h2 ref={titleRef} className="text-3xl sm:text-4xl text-genesis-navy leading-none">
              {label}
            </h2>
            <div className="flex gap-8">
              <div ref={labelRef}>
                <span className="block text-[9px] tracking-[0.15em] uppercase text-gray-400 font-poppins mb-1">
                  {stat.label}
                </span>
                <strong className="block text-xl text-genesis-navy leading-none">
                  {stat.value}
                </strong>
              </div>
              <div ref={statsRef}>
                <span className="block text-[9px] tracking-[0.15em] uppercase text-gray-400 font-poppins mb-1">
                  Latest
                </span>
                <strong className="block text-xl text-genesis-navy leading-none">
                  {companies[companies.length - 1]?.year}
                </strong>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-center pb-2.5 border-b border-black/10 mb-1">
            <span className="text-[9px] tracking-[0.2em] uppercase text-black/40 font-poppins">
              Portfolio Company
            </span>
            <div className="flex gap-8 sm:gap-10">
              <span className="text-[9px] tracking-[0.2em] uppercase text-black/40 font-poppins hidden sm:block">
                Stage
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-black/40 font-poppins">
                Year
              </span>
            </div>
          </div>

          {companies.map(({ name, stage, year, description }) => (
            <div
              key={name}
              className="relative group flex items-center justify-between gap-4 pl-4 pr-2 py-4 border-b border-black/5 hover:bg-genesis-navy/10 transition-colors cursor-default"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-genesis-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
              <div className="min-w-0 flex-1">
                <div className="text-lg text-genesis-navy group-hover:text-genesis-red transition-colors truncate">
                  {name}
                </div>
                <div className="text-[12px] text-gray-600 mt-0.5 line-clamp-1 font-poppins ">
                  {description}
                </div>
              </div>
              <div className="flex items-center gap-6 sm:gap-10 shrink-0">
                <span className="text-[10px] tracking-widest uppercase text-gray-400 hidden sm:block">
                  {stage}
                </span>
                <span className="text-[10px] tracking-widest text-gray-400 font-poppins">
                  {year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorShowcase;