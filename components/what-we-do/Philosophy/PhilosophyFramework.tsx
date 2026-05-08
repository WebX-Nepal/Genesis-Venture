"use client";
import Image from "next/image";

export default function PhilosophyFramework() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="layout-7xl space-y-6">
        <div className="px-1 sm:px-0">
          <p className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8D1E39]">
            Investment Framework
          </p>
          <h2 className="mt-3 font-montserrat text-[clamp(1.4rem,3vw,2.2rem)] leading-[1.2] text-[#173053]">
            How we make decisions when capital is at risk.
          </h2>
        </div>

        <div className="border border-[#d9e2ee] bg-white p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
            <div className="space-y-4">
              <h3 className="font-montserrat text-[clamp(1.2rem,2.2vw,1.75rem)] text-[#173053]">
                Risk, Alignment, and Expectations
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#385273]">
                Risk is not price movement. Risk is permanent loss of capital. We
                focus on downside protection first, then seek compounding returns.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#385273]">
                We earn only from transparent advisory fees. No commissions, no
                hidden incentives, and no conflict-driven product pushing.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#385273]">
                We set realistic expectations: markets are cyclical, drawdowns are
                inevitable, and long-term discipline beats short-term prediction.
              </p>
            </div>
            <div className="relative min-h-[240px] overflow-hidden border border-[#d9e2ee]">
              <Image
                src="/images/Projects/insight.webp"
                alt="Investment analysis session"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 35vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173053]/55 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
