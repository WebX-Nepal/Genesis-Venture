"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PartnerCTA = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 82%",
        toggleActions: "play none none reverse",
      },
      defaults: { ease: "power2.out", duration: 0.62 },
    });

    tl.from(".cta-kicker", { autoAlpha: 0, y: 10 })
      .from(".cta-quote", { autoAlpha: 0, y: 18 }, "-=0.24")
      .from(".cta-author", { autoAlpha: 0, y: 10 }, "-=0.3");
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="commitment"
      className="group relative flex min-h-screen items-center border-t border-[#e4e0db] bg-white py-16"
    >
      <div className="layout-7xl relative z-10 w-full">
        <div className="max-w-[960px] mx-auto text-center">
          <span className="cta-kicker inline-flex items-center gap-3 font-montserrat text-[11px] font-medium tracking-[0.28em] uppercase text-[#8D1E39]">
            The Commitment
          </span>

          <blockquote className="cta-quote my-8 sm:my-10 font-montserrat text-[clamp(0.95rem,1.8vw,1.35rem)] leading-relaxed text-genesis-navy/85 italic font-normal">
           &quot;
            We will share our numbers the same way we make our decisions
            carefully, honestly, and only when we can stand behind every line. If
            that costs us a conversation with an impatient investor, it is a
            conversation we were never going to win anyway.
            &quot;
          </blockquote>

          <div className="cta-author flex items-center justify-center gap-4 sm:gap-6 font-montserrat text-xs sm:text-sm leading-relaxed">
            <div>
              <span className="text-[#08112a] text-xs sm:text-sm font-medium tracking-[0.02em]">
                Anuj Rathi
              </span>
              <span className="block text-[#616877] italic text-[10px] sm:text-[11px] mt-0.5">
                Founder &amp; Managing Director
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerCTA;

