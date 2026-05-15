"use client";

export default function Firm() {
  const focusItems = [
    { label: "Investment Focus", value: "Unlisted Shares" },
    { label: "Investment Stage", value: "Growth to Pre-IPO" },
    { label: "Horizon", value: "Long-Term Capital" },
  ];

  return (
    <section className="w-full h-screen bg-[#fdfcf9]">
      <div className="layout-7xl py-10 sm:py-12 md:py-14 lg:py-16">
        <div className="mx-auto mt-24 w-full max-w-5xl">
          <div className="flex items-center justify-center">
            <p className="firm-title w-full text-center font-agatho text-[clamp(1.5rem,8vw,3.8rem)] leading-[1.18] text-[#162e54]">
              About the Firm
            </p>
          </div>

          <p className="py-8 text-center font-montserrat text-xl font-medium  text-[#162e54]">
            Genesis Ventures ltd. is a dedicated private markets investment company focused exclusively on
            unlisted equity - stakes in businesses that operate beyond the reach of public exchanges, where
            the most meaningful value creation often takes place.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {focusItems.map((item) => (
            <div key={item.label} className="firm-item flex flex-col items-start gap-2 sm:gap-3">
               
              <div className="pt-0">
                <p className="font-poppins text-[10px] font-semibold uppercase tracking-[0.24em] text-[#162e54] sm:text-[11px] sm:tracking-[0.3em]">
                  {item.label}
                </p>
                <h3 className="mt-1.5 font-agatho text-[clamp(1.2rem,6vw,2.55rem)] leading-[1.08] text-[#162e54] sm:mt-2">
                  {item.value}
                </h3>
              </div>
               <div className="flex w-[90px] shrink-0 sm:w-[130px] lg:w-[290px]">
                <span className="h-[4px] w-full bg-[#8D1E39]" />
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
