export default function FirmWhoWeAreSection() {
  const items = [
    {
      title: "Company Identity",
      text: "Genesis Ventures is an independent private markets investment firm focused on unlisted equity and long-horizon value creation.",
    },
    {
      title: "Mission",
      text: "Our mission is to allocate capital with discipline, support ambitious businesses, and build durable outcomes for investors and partners.",
    },
    {
      title: "Expertise",
      text: "We combine sector insight, structured underwriting, and active portfolio support across growth-stage and pre-IPO opportunities.",
    },
  ] as const;

  return (
    <section className="w-full bg-white py-14 sm:py-16">
      <div className="layout-7xl">
        <h2 className="text-center font-agatho text-[clamp(2rem,4.6vw,3.2rem)] font-semibold leading-[1.08] text-[#162e54]">
          Who We Are
        </h2>
        <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:mt-10 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={item.title}
              className="group relative min-h-[220px] overflow-hidden border border-[#8D1E39]/30 bg-white/95 p-5 shadow-[0_10px_24px_rgba(22,46,84,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(22,46,84,0.13)] sm:min-h-[240px] sm:p-6"
            >
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-7 -translate-y-7 border border-[#162e54]/10" />
              <div className="relative z-10">
                <p className="font-montserrat text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8D1E39] sm:text-[11px]">
                  0{index + 1} - {item.title}
                </p>
                <h3 className="mt-3 font-montserrat text-[clamp(1.15rem,4.2vw,1.6rem)] font-semibold leading-[1.1] text-[#162e54]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-poppins leading-relaxed text-[#162e54]/75 sm:text-[0.98rem]">
                  {item.text}
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
