"use client";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "../ui/Title";
import { useHeroVideoLoad } from "@/context/HeroVideoLoadContext";

gsap.registerPlugin(SplitText, ScrollTrigger);

const InvestorIntro = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const { setHeroVideoReady } = useHeroVideoLoad();

  useEffect(() => {
    setHeroVideoReady(false);
    return () => setHeroVideoReady(true);
  }, [setHeroVideoReady]);

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
    <section ref={sectionRef} className="relative min-h-[60vh] w-full flex flex-col items-center justify-center overflow-hidden px-4 xs:px-6 sm:px-8 md:min-h-screen md:px-16 pt-20 xs:pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 md:pb-12">
      {!isVideoReady ? (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-[#0a1634] via-[#13356f] to-[#102852]" />
      ) : null}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedMetadata={() => {
          setIsVideoReady(true);
          setHeroVideoReady(true);
        }}
        onError={() => {
          setIsVideoReady(true);
          setHeroVideoReady(true);
        }}
        className={`absolute inset-0 h-full w-full object-cover z-0 transition-opacity duration-500 ${isVideoReady ? "opacity-100" : "opacity-0"}`}
      >
        <source src="/videos/invest.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0  z-10" />
      <div className="relative capitalize z-20 flex w-full max-w-xs flex-col justify-center gap-3 px-2 text-center xs:max-w-sm sm:max-w-md sm:gap-4 md:max-w-5xl md:gap-6">
        <Title
          text={["Clear insight into capital,","performance, and strategy."]}
          className="font-agatho"
        />
      </div>

    </section>
  );
};

export default InvestorIntro;
