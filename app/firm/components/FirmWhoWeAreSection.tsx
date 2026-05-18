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
    {
      title: "Positioning",
      text: "Genesis is positioned as a long-term strategic partner that bridges capital, governance, and execution for scalable businesses.",
    },
  ] as const;

  return (
    <section className="w-full bg-white py-14 sm:py-16">
      <div className="layout-7xl">
        <h2 className="text-center font-agatho text-[clamp(2rem,4vw,3rem)] leading-[1.1] text-[#162e54]">
          Who We Are
        </h2>
        <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:mt-10 md:grid-cols-2">
          {items.map((item) => (
            <article key={item.title} className="border border-[#162e54]/12 bg-white p-6 sm:p-7">
              <h3 className="font-montserrat text-[1.05rem] font-semibold text-[#8D1E39]">{item.title}</h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-[#162e54]/80">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
