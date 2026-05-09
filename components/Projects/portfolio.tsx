"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import Title from "../ui/Title";



const sectors = [
  { id: "all", label: "All" },
  { id: "fintech", label: "Fintech" },
  { id: "healthtech", label: "Healthtech" },
  { id: "edtech", label: "Edtech" },]

const PortfolioHeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const splitTitle = new SplitText(".hero-heading", { type: "words" });

    gsap.from(splitTitle.words, {
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
      stagger: 0.05,
      duration: 1,
      ease: "power3.out",
    });

    const splitDesc = new SplitText(".desc", { type: "lines" });

    gsap.from(splitDesc.lines, {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 1,
      ease: "power2.out",
      delay: 0.5,
    });

    return () => {
      splitTitle.revert();
      splitDesc.revert();
    };
  });
  return (
    <section
      ref={containerRef}
      className="relative min-h-[60vh] w-full flex flex-col items-center justify-center overflow-hidden px-4 xs:px-6 sm:px-8 md:min-h-screen md:px-16 pt-20 xs:pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 md:pb-12 text-center"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-0 scale-x-[-1]"
      >
        <source src="/videos/projects.mp4" type="video/mp4" className="" />
      </video>
      <div className="absolute inset-0 bg-genesis-navy/40 z-10" />



      <div className="relative z-20 flex w-full max-w-5xl flex-col gap-3 px-2 sm:gap-4">
        <Title
          text={["Backing Early-Stage", "Companies."]}
          className="font-agatho"
        />
        {/* <p className="desc project-heading desc text-xs xs:text-sm text-white/80 font-poppins leading-relaxed max-w-sm mx-auto">
          Genesis Ventures partners with founders from day one, providing
          capital, strategic guidance, and long-term support to build
          category-defining companies.
        </p> */}
      </div>


    </section>
  );
};

export default PortfolioHeroSection;
