"use client";

export default function Firm() {
  const focusItems = [
    { label: "Investment Focus", value: "Unlisted Shares" },
    { label: "Investment Stage", value: "Growth to Pre-IPO" },
    { label: "Horizon", value: "Long-Term Capital" },
  ];

  return (
    <section className="w-full bg-[#fdfcf9]">
      <div className="layout-7xl py-10 sm:py-12 md:py-14 lg:py-16">
        <div className="w-full max-w-[1180px]">
          <div className="flex items-start justify-between border-b border-[#8D1E39]/25 pb-3 sm:pb-4 md:pb-6">
            <p className="firm-kicker font-montserrat text-xs font-medium uppercase tracking-[0.22em] text-[#162e54]">
              Who We Are
            </p>
          </div>
       
          <div className="mt-6 grid grid-cols-1 gap-6 sm:mt-8 sm:gap-8 lg:mt-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8 xl:gap-10">
            <div className="flex items-center justify-start">
              <p className="firm-title w-full text-left font-montserrat text-[clamp(1.5rem,8vw,3.8rem)] leading-[1.18] text-[#162e54]">
                About the Firm
              </p>
            </div>
            <div className="space-y-5 sm:space-y-6 lg:space-y-8 lg:pl-8 xl:pl-14">
              <p className="font-poppins text-[15px] leading-[1.7] text-[#162e54] sm:text-base">
                Genesis Ventures ltd. is a dedicated private markets investment company focused exclusively on
                unlisted equity - stakes in businesses that operate beyond the reach of public exchanges, where
                the most meaningful value creation often takes place.
              </p>
              <div className="mt-8 space-y-6 sm:mt-10 sm:space-y-7 lg:mt-12 lg:space-y-9">
                {focusItems.map((item) => (
                  <div key={item.label} className="firm-item flex items-start gap-3 sm:gap-4 lg:gap-5">
                    <div className="mt-0.5 flex h-[56px] shrink-0 sm:h-[72px] lg:h-[92px]">
                      <span className="h-full w-[4px] bg-[#8D1E39]" />
                      <span className="h-full w-[2px] bg-[#b01236]" />
                    </div>
                    <div>
                      <p className="font-poppins text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] sm:tracking-[0.3em] text-[#162e54]">
                        {item.label}
                      </p>
                      <h3 className="mt-1.5 sm:mt-2 font-montserrat text-[clamp(1.2rem,6vw,2.55rem)] leading-[1.08] text-[#162e54]">
                        {item.value}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
