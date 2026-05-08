"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BeliefsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 82%",
        toggleActions: "play none none reverse",
      },
      defaults: { ease: "power2.out", duration: 0.6 },
    });

    tl.from(".belief-intro", { y: 16, autoAlpha: 0 });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="beliefs" className="bg-[#f6f9fd] py-14 sm:py-16 lg:py-20">
      <div className="layout-7xl space-y-6">
        <div className="px-1 sm:px-0">
          <p className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8D1E39]">
            What We Believe
          </p>
          <h2 className="mt-3 font-montserrat text-[clamp(1.4rem,3vw,2.2rem)] leading-[1.2] text-[#173053]">
            We are not in the business of
            <span className="italic text-[#8D1E39]"> selling confidence.</span>
          </h2>
        </div>

        <div className="belief-intro border border-[#d9e2ee] bg-white p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div>
              <div className="space-y-4 pt-0">
                <h3 className="font-montserrat text-[clamp(1.05rem,1.8vw,1.35rem)] font-semibold text-[#173053]">
                  Integrity as Our Operating Standard
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-[#385273] font-montserrat">
                  We measure success by something harder to fake: whether our
                  clients can look back a decade from now and say that Genesis
                  Ventures was the most honest partner they ever had in financial
                  life.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-[#385273] font-montserrat">
                  Performance follows integrity - not the other way around. When
                  advice is given free of conflicts, when fees are transparent,
                  and when we have the discipline to say &quot;we do not know&quot;
                  rather than bluff,
                  <strong className="font-semibold text-[#173053]">
                    {" "}better decisions get made
                  </strong>
                  . That is the foundation of everything we do.
                </p>
              </div>
            </div>

            <div className="relative min-h-[240px] overflow-hidden border border-[#d9e2ee]">
              <Image
                src="/images/hero/investment.webp"
                alt="Investment discussion at Genesis Ventures"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173053]/65 via-[#173053]/15 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 sm:p-6">
                <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-white/80">
                  Conviction With Clarity
                </p>
                <p className="mt-1 font-montserrat text-sm sm:text-base text-white">
                  We communicate risk as clearly as opportunity.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
