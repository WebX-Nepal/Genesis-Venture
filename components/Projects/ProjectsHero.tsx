"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

const sectors = [
  { id: "all", label: "All" },
  { id: "fintech", label: "Fintech" },
  { id: "healthtech", label: "Healthtech" },
  { id: "edtech", label: "Edtech" },]

const ProjectsHero = () => {
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
      className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-4 xs:px-6 sm:px-8 md:px-16 pt-20 xs:pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 md:pb-12 overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-20  scale-x-[-1]"
      >
        <source src="/videos/projects.mp4" type="video/mp4" className="" />
      </video>
      <div className="absolute inset-0 bg-genesis-navy/40 -z-10" />



      <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-xl px-2">
        <h1 className="hero-heading project-heading text-[clamp(1.6rem,5vw,3.75rem)] text-white leading-tight">
          Backing early-stage companies.
        </h1>
        {/* <p className="desc project-heading desc text-xs xs:text-sm text-white/80 font-poppins leading-relaxed max-w-sm mx-auto">
          Genesis Ventures partners with founders from day one, providing
          capital, strategic guidance, and long-term support to build
          category-defining companies.
        </p> */}
      </div>


    </section>
  );
};

export default ProjectsHero;
