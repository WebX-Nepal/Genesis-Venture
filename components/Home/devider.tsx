"use client";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "../ui/Title";

gsap.registerPlugin(SplitText, ScrollTrigger);
export default function Devider() {
  const containerRef = useRef<HTMLElement>(null);
  useGSAP(() => {
    if (!containerRef.current) return;
    const splitTitle = new SplitText(".devider-title", { type: "words" });
    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 82%",
        toggleActions: "play none none reverse",
      },
    });
    tl.from(splitTitle.words, {
      autoAlpha: 0,
      y: 22,
      filter: "blur(6px)",
      stagger: 0.06,
      duration: 0.7,
    });
    return () => {
      splitTitle.revert();
    };
  }, { scope: containerRef });
  return (
    <section
      ref={containerRef}
      className="relative h-screen  w-full overflow-hidden"
    >
      <Image
        src="/images/grow.png"
        alt="Growth visual divider"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#08112a]/68" />
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center sm:px-10 md:px-16 lg:px-20">
        <div className="max-w-5xl -translate-y-8 sm:-translate-y-10 md:-translate-y-12">
          {/* <h2 className="devider-title font-[PPFONT] text-[clamp(1.75rem,7vw,4.5rem)] leading-tight tracking-[0.015em] text-white">
            Backing bold ideas before the market catches on.
          </h2> */}
          <Title
          as="h1"
          text={<>
           Backing bold ideas before the<br/>
           market catches on.
          </>}
          />
        </div>
      </div>
    </section>
  );
}
