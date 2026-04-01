"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Description() {
  const containerRef = useRef(null);
  const mainTextRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mainText = SplitText.create(mainTextRef.current, {
        type: "lines",
        mask: "lines",
      });
      const leftText = SplitText.create(leftTextRef.current, {
        type: "lines",
        mask: "lines",
      });
      const rightText = SplitText.create(rightTextRef.current, {
        type: "lines",
        mask: "lines",
      });

      gsap.fromTo(
        mainText.lines,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom-=100px",
            once: true,
          },
        },
      );

      gsap.fromTo(
        leftText.lines,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          delay: 0.4,
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom-=100px",
            once: true,
          },
        },
      );

      gsap.fromTo(
        rightText.lines,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom-=100px",
            once: true,
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-150 bg-primary gap-8 md:gap-20 flex flex-col overflow-hidden py-10 md:py-[4vw] px-4 lg:px-12"
    >
      <p
        ref={mainTextRef}
        className="text-xl sm:text-3xl md:text-4xl lg:text-[2.6vw] w-full md:w-2/3 lg:w-full md:pt-20 md:pl-5 text-left font-[PPFONT] overflow-hidden max-w-[90vw] leading-none"
      >
        Our team of over 50 in-house consultants in New York City helps clients
        navigate even the toughest building code and zoning challenges. With 33
        years of experience across construction regulations, our team supports
        feasibility reviews, CCD1s, amendments, fire safety, land use matters,
        landmark coordination, violation resolution, and all the permits,
        approvals, and sign-offs your project needs.
      </p>
      <div className="flex flex-col mb-10 md:flex-row justify-end gap-3 overflow-hidden px-5 md:pl-10">
        <p
          ref={leftTextRef}
          className="text-xs md:text-sm lg:text-[0.9vw] tracking-tighter w-full md:w-100 lg:w-[24vw] text-left font-poppins"
        >
          From the first idea to sign-off, Outsource is by your side—helping you
          navigate code, construction, compliance, and whatever else your
          project needs.
        </p>
        <p
          ref={rightTextRef}
          className="text-xs md:text-sm lg:text-[0.9vw] tracking-tighter w-full md:w-100 lg:w-[24vw] text-left font-poppins"
        >
          Partnering with Outsource Special Inspections, Inc., we deliver a
          streamlined, start-to-finish approach—from permits and approvals to
          inspections and sign-offs.
        </p>
      </div>
    </div>
  );
}
