import Image from "next/image"
import Button from "../ui/Button2"
import Link from "next/link"
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);
const AnnualReport = () => {
  const containerRef = useRef(null);
  useGSAP(() => {
    const splitTitle = new SplitText(".report-heading", { type: "words" });

    gsap.from(splitTitle.words, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "top top",
        scrub: true,
      },
      opacity: 0,
      y: 40,
      filter: "blur(10px)",
      stagger: 0.05,
      duration: 1.1,
      ease: "power3.out",
    });

    return () => {
      splitTitle.revert();
    };
  });
  return (

    <div ref={containerRef} className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-24 flex-1 pt-5 sm:pt-6 md:pt-14 pb-8 sm:pb-30 overflow-hidden">
      <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6 md:justify-center">
        <h3 className="report-heading text-[clamp(1.5rem,4.6vw,3rem)] text-genesis-navy leading-[1.12] font-[PPFONT]">
          Annual Report 2025
        </h3>

        <p className="text-sm sm:text-base text-gray-600 font-poppins leading-8 max-w-2xl "        >
          A comprehensive overview of our investment activities, portfolio performance, and key strategic milestones achieved throughout 2025. This report highlights fund growth, major partnerships, and insights into how our long-term vision continues to drive sustainable value creation across diverse markets.
        </p>

        <Link href="/About">
          <Button
            variant="primary"
            size="md"
            className="mt-12 bg-genesis-navy px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white hover:bg-genesis-navy/80 transition-colors"
          >
            <span className="inline-flex items-center gap-3">DOWNLOAD PDF</span>
          </Button>
        </Link>
      </div>
      <div className="relative w-full md:w-1/2 h-[40vh] xs:h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <Image
          src="/images/relations/performance.png"
          alt="Annual Report"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}

export default AnnualReport