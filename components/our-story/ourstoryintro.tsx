"use client";

const heroStats = [
  { value: "20+", label: "Years of cross-sector experience" },
  { value: "2", label: "Sectors of deep expertise" },
  { value: "Global", label: "Investment perspective and reach" },
  { value: "All", label: "Investor types served" },
];

const storyParagraphs = [
  "Genesis Ventures Ltd was founded on a simple belief: the best investment decisions come from understanding both financial markets and the industries that drive them. Too often, capital is managed without a true understanding of the businesses behind it.",
  "Built at the intersection of manufacturing and finance, we combine operational insight with market expertise to identify opportunities, manage risk thoughtfully, and create enduring value for our investors, partners, and the businesses we support.",
];

export default function OurStoryIntro() {
  return (
    <section className="bg-white pt-16 pb-10 sm:pt-20 sm:pb-12 lg:pt-24 lg:pb-14">
      <div className="layout-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
          <span className="inline-flex items-center gap-3 font-montserrat text-[11px] font-medium tracking-[0.28em] uppercase text-[#8D1E39]">
            Our Story
          </span>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#8D1E39] font-montserrat lg:pl-14 lg:text-left">
            Where We Come From
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2">
          <div className="order-2 flex flex-col justify-start lg:order-2 lg:pl-14">
            <p className="max-w-[560px] text-[16px] sm:text-[17px] leading-[1.55] text-[#173053]">
              {storyParagraphs[0]}
            </p>

            <p className="mt-5 max-w-[560px] text-[16px] sm:text-[17px] leading-[1.55] text-[#173053]">
              {storyParagraphs[1]}
            </p>
          </div>

          <div className="order-1 flex flex-col justify-start lg:order-1 lg:justify-center lg:-mt-3">
            <div className="mb-10 pb-10 lg:mb-0 lg:pb-0">
              <blockquote className="font-[PPFONT] text-[1.7rem] sm:text-[2rem] italic leading-[1.45] text-[#173053]">
                We do not just read balance sheets. We understand what it takes
                to build a business and weather a cycle.
              </blockquote>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="min-h-[132px] sm:min-h-[144px] bg-[#152F53] px-5 py-7 transition hover:bg-[#152F53]"
            >
              <p className="font-[PPFONT] text-[1.9rem] sm:text-[2.1rem] leading-none text-white">
                {stat.value}
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.08em] text-white/85 font-montserrat leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
