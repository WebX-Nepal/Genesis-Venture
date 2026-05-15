"use client";

export default function Firm() {
  const focusItems = [
    {
      label: "Investment Focus",
      value: "Unlisted Shares",
      metric: "92%",
      note: "Private market allocation",
      curve: "M2 28 C18 8, 34 20, 52 9 C70 0, 90 20, 108 7 C126 0, 146 18, 166 6 C184 1, 206 12, 224 2",
    },
    {
      label: "Investment Stage",
      value: "Growth to Pre-IPO",
      metric: "3.4x",
      note: "Median stage progression",
      curve: "M2 30 C20 18, 40 30, 60 13 C78 1, 98 18, 118 8 C136 1, 156 16, 176 7 C194 2, 210 10, 224 6",
    },
    {
      label: "Horizon",
      value: "Long-Term Capital",
      metric: "7+ Yrs",
      note: "Typical holding horizon",
      curve: "M2 34 C20 24, 40 30, 60 18 C78 8, 98 20, 118 11 C136 3, 156 16, 176 8 C194 3, 210 11, 224 5",
    },
  ];

  return (
    <section className="w-full h-screen bg-[#fdfcf9]">
      <div className="layout-7xl py-10 sm:py-12 md:py-14 lg:py-16">
        <div className="mx-auto mt-24 w-full max-w-4xl">
          <div className="flex items-center justify-center">
            <p className="firm-title w-full text-center font-agatho text-[clamp(1.5rem,8vw,3.8rem)] leading-[1.18] text-[#162e54]">
              About the Firm
            </p>
          </div>

          <p className="py-8 text-center font-montserrat text-md font-medium  text-[#162e54]">
            Genesis Ventures ltd. is a dedicated private markets investment company focused exclusively on
            unlisted equity - stakes in businesses that operate beyond the reach of public exchanges, where
            the most meaningful value creation often takes place.
          </p>
        </div>

        {/* <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {focusItems.map((item) => (
            <div key={`focus-${item.label}`} className="firm-item border border-[#162e54]/12 bg-white p-4 sm:p-5">
              <div className="flex w-[90px] shrink-0 sm:w-[130px] lg:w-[190px]">
                <span className="h-[4px] w-full bg-[#8D1E39]" />
              </div>
              <div className="mt-3">
                <p className="font-poppins text-[10px] font-semibold uppercase tracking-[0.24em] text-[#162e54] sm:text-[11px] sm:tracking-[0.3em]">
                  {item.label}
                </p>
                <h3 className="mt-1.5 font-agatho text-[clamp(1.2rem,6vw,2.1rem)] leading-[1.08] text-[#162e54] sm:mt-2">
                  {item.value}
                </h3>
              </div>
            </div>
          ))}
        </div> */}

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-7 sm:grid-cols-2 sm:gap-5 lg:mt-8 lg:grid-cols-3 lg:gap-6">
          {focusItems.map((item) => (
            <article
              key={`metric-${item.label}`}
              className="firm-item group relative min-h-[230px] overflow-hidden border border-[#162e54]/15 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#8D1E39]/35 hover:shadow-[0_16px_38px_rgba(22,46,84,0.12)] sm:min-h-[250px] sm:p-5"
            >
             
              <div>
                <p className="font-poppins text-[10px] font-semibold uppercase tracking-[0.24em] text-[#162e54]/80 sm:text-[11px] sm:tracking-[0.3em]">
                  {item.label}
                </p>
                <h3 className="mt-1.5 font-montserrat text-[clamp(1.2rem,6vw,2.0rem)]  font-semibold leading-[1.08] text-[#162e54] sm:mt-2">
                  {item.value}
                </h3>
                <div className="mt-3 flex items-end justify-between gap-3">
                  <p className="font-montserrat text-2xl font-semibold leading-none text-[#8D1E39]">{item.metric}</p>
                  <p className="text-right font-montserrat text-[11px] text-[#162e54]/70">{item.note}</p>
                </div>
              </div>

              <div className="mt-4 bg-[#f8f3f5] px-2 py-2">
                <svg viewBox="0 0 226 36" className="h-11 w-full">
                  <path
                    d={item.curve}
                    fill="none"
                    stroke="#8D1E39"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-500 group-hover:stroke-[#173053]"
                  />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
