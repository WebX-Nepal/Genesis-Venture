"use client";

export default function Firm() {
  const focusItems = [
    {
      label: "Investment Focus",
      value: "Unlisted Shares",
      metric: "92%",
      note: "Private market allocation",
      curve: "M0 70 C30 72, 42 40, 66 34 C90 28, 108 42, 132 24 C158 6, 184 18, 210 42 C230 58, 248 66, 270 64",
      marker: { x: 210, y: 42 },
      tag: "$ 23,827",
      month: "August",
      delta: "%25",
    },
    {
      label: "Investment Stage",
      value: "Growth to Pre-IPO",
      metric: "3.4x",
      note: "Median stage progression",
      curve: "M0 78 C24 74, 42 50, 66 46 C90 42, 112 54, 136 30 C160 10, 182 18, 206 40 C226 58, 248 68, 270 66",
      marker: { x: 206, y: 40 },
      tag: "$ 18,420",
      month: "September",
      delta: "%19",
    },
    {
      label: "Horizon",
      value: "Long-Term Capital",
      metric: "7+ Yrs",
      note: "Typical holding horizon",
      curve: "M0 76 C28 78, 48 58, 72 50 C96 42, 120 52, 146 26 C168 8, 190 18, 214 36 C234 54, 252 66, 270 62",
      marker: { x: 214, y: 36 },
      tag: "$ 31,240",
      month: "October",
      delta: "%28",
    },
  ];

  return (
    <section className="relative w-full h-screen bg-[#fdfcf9]">
      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#8D1E3910_1px,transparent_1px),linear-gradient(to_bottom,#8D1E3908_1px,transparent_1px)] bg-[size:6rem_4rem]" />
      <div className="relative z-10 layout-7xl py-10 sm:py-12 md:py-14 lg:py-16">
        <div className="mx-auto mt-16 w-full max-w-4xl">
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
        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-7 sm:grid-cols-2 sm:gap-5 lg:mt-8 lg:grid-cols-3 lg:gap-6">
          {focusItems.map((item) => (
            <article
              key={`metric-${item.label}`}
              className="firm-item group relative min-h-[230px] overflow-hidden border border-[#162e54]/15 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#8D1E39]/35 hover:shadow-[0_16px_38px_rgba(22,46,84,0.12)] sm:min-h-[250px] sm:p-5"
            >
              <div>
                <p className="font-poppins text-[12px] font-semibold text-[#8D1E39] sm:text-[11px]">
                  {item.label}
                </p>
                <h3 className="mt-1.5 font-montserrat text-[clamp(1.2rem,6vw,2.0rem)]  font-semibold leading-[1.08] text-[#162e54] sm:mt-2">
                  {item.value}
                </h3>
                <div className="mt-3 flex items-end justify-between gap-3">
                  <p className="font-montserrat text-2xl font-semibold leading-none text-[#173053]">{item.metric}</p>
                  <p className="text-right font-montserrat text-[11px] text-[#162e54]/70">{item.note}</p>
                </div>
              </div>
              <div className="mt-4 border border-[#162e54]/10 bg-[#f8fafc] px-2 py-2">
                <div className="relative h-24 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(22,46,84,0.08)_1px,transparent_1px)] bg-[size:28px_100%]" />
                  <svg viewBox="0 0 270 90" className="relative z-10 h-full w-full">
                    <path
                      d={item.curve}
                      fill="none"
                      stroke="#173053"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-all duration-500 group-hover:stroke-[#0f2745]"
                    />
                    <circle cx={item.marker.x} cy={item.marker.y} r="4.5" fill="#ffffff" stroke="#173053" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
  
    </section>
  );
}
