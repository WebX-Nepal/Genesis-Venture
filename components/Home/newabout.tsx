"use client";

export default function Firm() {
  const focusItems = [
    {
      label: "Investment Focus",
      value: "Unlisted Shares",
      blurb: "Targeting private businesses where long-term value can compound away from short-term market pressure.",
    },
    {
      label: "Investment Stage",
      value: "Growth to Pre-IPO",
      blurb: "Backing companies in the execution-heavy stage where strategic support can accelerate outcomes.",
    },
    {
      label: "Horizon",
      value: "Long-Term Capital",
      blurb: "Structured with patience to support durable business building across multi-year timelines.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#f7f8fb] py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full">
        <div className="absolute -left-24 top-10 h-48 w-48 bg-[#8D1E39]/10 blur-3xl" />
        <div className="absolute -right-24 bottom-6 h-56 w-56 bg-[#162e54]/10 blur-3xl" />
      </div>
      <div className="relative z-10 layout-7xl">
        <div className="mx-auto w-full max-w-4xl text-center">
          <p className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8D1E39] sm:text-xs">
            Genesis Ventures
          </p>
          <div className="flex items-center justify-center">
            <h2 className="firm-title mt-3 w-full text-center font-agatho text-[clamp(2rem,4.6vw,3.2rem)] leading-[1.08] text-[#162e54]">
              About the Firm
            </h2>
          </div>
          <p className="mx-auto max-w-3xl py-6 font-montserrat text-sm font-medium leading-relaxed text-[#162e54]/90 sm:py-7 sm:text-base">
            Genesis Ventures Ltd. is a dedicated private markets investment company focused exclusively on
            unlisted equity - stakes in businesses that operate beyond the reach of public exchanges, where
            the most meaningful value creation often takes place.
          </p>
        </div>
        <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {focusItems.map((item, index) => (
            <article
              key={`metric-${item.label}`}
              className="firm-item group relative min-h-[220px] overflow-hidden border border-[#8D1E39]/30 bg-white/95 p-5 shadow-[0_10px_24px_rgba(22,46,84,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(22,46,84,0.13)] sm:min-h-[240px] sm:p-6"
            >
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-7 -translate-y-7 border border-[#162e54]/10" />
              <div className="relative z-10">
                <p className="font-montserrat text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8D1E39] sm:text-[11px]">
                 {item.label}
                </p>
                <h3 className="mt-3 font-montserrat text-[clamp(1.25rem,5vw,2rem)] font-semibold leading-[1.1] text-[#162e54]">
                  {item.value}
                </h3>
                <p className="mt-3 max-w-[30ch] font-poppins text-sm leading-relaxed text-[#162e54]/75">
                  {item.blurb}
                </p>
                <div className="mt-5 h-[2px] w-14 bg-[#8D1E39]/45 transition-all duration-300 group-hover:w-20 group-hover:bg-[#8D1E39]" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
