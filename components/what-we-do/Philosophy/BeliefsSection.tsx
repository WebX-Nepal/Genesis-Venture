"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const beliefCards = [
  {
    no: "01",
    title: "Your interests are the only interests",
    body: "We earn no commissions, hold no proprietary positions that compete with your portfolio, and accept no payments from third parties for directing your capital. Our only revenue is the fee you pay us. Full stop.",
  },
  {
    no: "02",
    title: "Honesty in difficult moments",
    body: "We will tell you when a market is overvalued even if it means watching the index rally without you. We will flag risk before it materialises, not after. We will never dress up a bad outcome with reassuring language. You deserve the truth - especially when it is uncomfortable.",
  },
  {
    no: "03",
    title: "Discipline over narrative",
    body: "We do not chase themes, trends, or the comfort of consensus. Investment decisions at Genesis Ventures are made through documented, stress-tested process - not conviction built from a compelling story. If the numbers do not support it, neither do we.",
  },
];

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

    tl.from(".belief-intro", { y: 16, autoAlpha: 0 })
      .from(".belief-card", { y: 16, autoAlpha: 0, stagger: 0.1 }, "-=0.25");
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="beliefs" className="bg-[#f6f9fd] py-14 sm:py-16 lg:py-20">
      <div className="layout-7xl">
        <div className="belief-intro rounded-sm border border-[#d8e2ee] bg-white p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
            <div>
              <p className="inline-flex items-center font-montserrat text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8D1E39]">
                What We Believe
              </p>
              <h2 className="mt-4 font-montserrat text-[clamp(1.4rem,3.1vw,2.3rem)] leading-[1.2] text-[#173053]">
                We are not in the business of
                <span className="block italic text-[#8D1E39]">selling confidence.</span>
              </h2>
            </div>

            <div className="space-y-4 border-l-0 border-[#e7edf6] pt-0 lg:border-l lg:pl-8">
              <p className="text-sm sm:text-base leading-relaxed text-[#385273] font-montserrat">
                Most firms measure themselves by the returns they generate. We
                measure ourselves by something harder to fake: whether our
                clients can look back a decade from now and say that Genesis
                Ventree was the most honest partner they ever had in financial
                life.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#385273] font-montserrat">
                Performance follows integrity - not the other way around. When
                advice is given free of conflicts, when fees are transparent, and
                when a firm has the discipline to say &quot;we do not know&quot;
                rather than bluff,
                <strong className="font-semibold text-[#173053]">
                  {" "}better decisions get made
                </strong>
                . That is the foundation of everything we do.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {beliefCards.map((card) => (
            <article
              key={card.no}
              className="belief-card group flex h-full flex-col border border-[#d9e2ee] bg-white p-6 sm:p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#173053]/35 hover:shadow-[0_10px_24px_rgba(16,35,71,0.08)]"
            >
              <div className="mb-4 flex items-center justify-between border-b border-[#ebf0f7] pb-3">
                <span className="font-montserrat text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8D1E39]">
                  Principle
                </span>
                <span className="font-montserrat text-[11px] font-semibold tracking-[0.14em] text-[#173053]">
                  {card.no}
                </span>
              </div>

              <h3 className="font-montserrat text-base sm:text-[1.05rem] font-semibold leading-[1.35] text-[#173053]">
                {card.title}
              </h3>

              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#4f6583] font-montserrat">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
