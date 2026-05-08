"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "../ui/Title";

gsap.registerPlugin(SplitText, ScrollTrigger);

const InvesrtorIntro = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const splitTitle = new SplitText(".hero-heading", { type: "words" });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      defaults: { ease: "power2.out" },
    });

    tl.from(splitTitle.words, {
      opacity: 0,
      y: 20,
      filter: "blur(6px)",
      stagger: 0.045,
      duration: 0.62,
    });

    return () => {
      splitTitle.revert();
    };
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 xs:px-6 sm:px-8 md:px-16 pt-20 xs:pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 md:pb-12 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-0"
      >
        <source src="/videos/investors.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0  z-10" />
      <div className="relative capitalize z-20 flex w-full max-w-xs flex-col justify-center gap-3 px-2 text-center xs:max-w-sm sm:max-w-md sm:gap-4 md:max-w-5xl md:gap-6">
        <Title
          text={["Clear insight into capital,","performance, and strategy."]}
        />
        {/* <p className="desc text-xs xs:text-sm text-white/80 font-poppins leading-relaxed max-w-xs sm:max-w-sm mx-auto">
          We provide our partners with clear visibility into capital allocation,
          portfolio performance, and strategic updates. Your trust drives our
          commitment to long-term growth.
        </p> */}
      </div>

    </section>
  );
};

export default InvesrtorIntro;
