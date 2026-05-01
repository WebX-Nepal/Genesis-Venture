import HeroPage from "@/components/ui/HeroPage";

const heroStats = [
  { value: "20+", label: "Years of cross-sector experience" },
  { value: "2", label: "Sectors of deep expertise" },
  { value: "Global", label: "Investment perspective and reach" },
  { value: "All", label: "Investor types served" },
];

const storyParagraphs = [
  "Genesis Ventures Ltd was founded on a straightforward but powerful idea: that the best investment decisions are made by those who understand not just financial markets, but the real-world industries that drive them. Too often, capital is managed by those who have only ever known finance - and that is precisely where the gaps in judgment appear.",
  "We are different. Genesis Ventures was built at the intersection of two worlds - manufacturing and finance - bringing to bear a rare combination of operational understanding and market acumen that most investment firms simply cannot offer.",
];

const trustSection = {
  lead: "It takes integrity and clarity to establish trust. For us, relationship building starts early and stays consistent.",
  title: "When we commit, we commit fully",
  paragraphs: [
    "Genesis Ventures works with founders and investors through every phase of the journey, not just at moments that look good on paper. We stay close to operations, people, and long-term strategy so our decisions are informed by reality.",
    "Our partnerships are built on shared purpose, disciplined execution, and direct communication. By understanding each business deeply, we can support growth with patience, accountability, and conviction.",
  ],
};

const leaderParagraphs = [
  "Anuj Rathi is the Founder and Managing Director of Genesis Ventures Ltd, bringing over two decades of varied and distinguished experience spanning both the manufacturing sector and financial markets. This rare dual background forms the intellectual core of Genesis Ventures - and sets it apart from conventionally trained investment managers.",
  "Anuj's career began in manufacturing, where he developed a granular, ground-level understanding of industrial operations, supply chains, capital allocation, and the cyclical pressures that shape real businesses. He witnessed firsthand how companies are built, scaled, and stress-tested - insight that cannot be found in a textbook or on a trading floor.",
  "Over time, his career expanded into finance, where he applied that operational knowledge to investment strategy - building a disciplined, research-led approach to capital markets that is informed by an understanding of business fundamentals few peers can match. He has navigated multiple market cycles, managed risk across asset classes, and developed a philosophy of investing that prioritises long-term value over short-term noise.",
  "Today, Anuj leads Genesis Ventures with a hands-on approach - personally overseeing investment strategy, client relationships, and portfolio management. He believes that trust is earned through consistency, transparency, and the courage to take a long-term view even when markets are short-term in their thinking.",
];

const expertiseTags = [
  "Manufacturing",
  "Finance",
  "Portfolio Strategy",
  "Risk Management",
  "Capital Allocation",
  "Wealth Planning",
];

const values = [
  {
    title: "Integrity",
    description:
      "We act in our clients' best interests at all times - with complete transparency about fees, risks, and our reasoning. No exceptions.",
    bgColor: "#001D3F",
  },
  {
    title: "Patience",
    description:
      "We resist the pull of short-termism. Wealth is built over years, not quarters - and we have the conviction to stay the course.",
    bgColor: "#04356A",
  },
  {
    title: "Rigour",
    description:
      "Every decision is grounded in research and evidence. We examine fundamentals deeply and challenge assumptions before committing capital.",
    bgColor: "#054E98",
  },
  {
    title: "Partnership",
    description:
      "We see every client as a long-term partner. We succeed when they succeed - that alignment shapes every conversation and every decision.",
    bgColor: "#0A6ED3",
  },
];

export default function OurStoriesPage() {
  return (
    <main className="bg-white text-[#1a1714] font-poppins">
      <section className="relative h-screen w-full overflow-hidden bg-[#0a1634] text-white">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/projects.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/35" />
        <div className="layout-7xl relative flex h-full flex-col">
          <div className="flex flex-1 items-center justify-center">
            <h1 className="hero-heading project-heading text-center text-[clamp(1.6rem,5vw,3.75rem)] leading-tight text-white/95">
              <span className="block">Capital guided by principles,</span>
              <span className="block">not just Opportunity</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pt-16 pb-10 sm:px-10 sm:pt-20 sm:pb-12 lg:px-16 lg:pt-24 lg:pb-14">
        <div className="layout-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
            <span className="inline-flex items-center gap-3 font-poppins text-[11px] font-medium tracking-[0.28em] uppercase text-[#8D1E39]">
              Our Story
            </span>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#8D1E39] font-poppins lg:pl-14 lg:text-left">
              Where We Come From
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2">
            <div className="order-2 flex flex-col justify-start lg:order-2 lg:pl-14">
              <p className="max-w-[560px] text-[16px] sm:text-[17px] leading-[1.55] text-[#08112a]">
                {storyParagraphs[0]}
              </p>

              <p className="mt-5 max-w-[560px] text-[16px] sm:text-[17px] leading-[1.55] text-[#08112a]">
                {storyParagraphs[1]}
              </p>
            </div>

            <div className="order-1 flex flex-col justify-start lg:order-1">
              <div className="mb-10 pb-10">
                <blockquote className="font-[PPFONT] text-[1.7rem] sm:text-[2rem] italic leading-[1.45] text-[#08112a]">
                  We do not just read balance sheets. We understand what it
                  takes to build a business and weather a cycle.
                </blockquote>
              </div>
            </div>
          </div>

          <div className="mt-10 sm:mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="min-h-[132px] sm:min-h-[144px] bg-[#173053] px-5 py-7 transition hover:bg-[#173053]"
              >
                <p className="font-[PPFONT] text-[1.9rem] sm:text-[2.1rem] leading-none text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.08em] text-white/85 font-poppins leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {false && (
        <section className="bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="layout-7xl">
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
              <h2 className="font-[PPFONT] text-[2rem] sm:text-[2.25rem] leading-[1.25] text-[#223760] max-w-[700px]">
                {trustSection.lead}
              </h2>

              <div>
                <h3 className="font-[PPFONT] text-[1.7rem] sm:text-[2rem] leading-[1.35] text-[#36393f]">
                  {trustSection.title}
                </h3>
                <div className="mt-7 space-y-7">
                  {trustSection.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="font-poppins text-[15px] sm:text-[16px] leading-[1.65] text-[#575b63]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section
        id="leadership"
        className="px-6 pt-10 pb-16 sm:px-10 sm:pt-12 sm:pb-20 lg:px-16 lg:pt-14 lg:pb-24"
      >
        <div className="layout-7xl">
          <div className="mb-12">
            <p className="mb-4 inline-flex items-center text-[11px] font-medium uppercase tracking-[0.28em] text-[#8D1E39] font-poppins">
              Leadership
            </p>
            <h2 className="font-[PPFONT] text-[1.7rem] sm:text-[2rem] leading-[1.45] tracking-[-0.01em] text-[#08112a]">
              The person behind the firm
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[340px_1fr] lg:gap-20">
            <div className="relative overflow-hidden bg-[#173053] p-10">
              <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_80%_20%,#fff_0%,transparent_55%)]" />
              <div className="relative z-10">
                <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/15 font-[PPFONT] text-3xl text-white/90">
                  AR
                </div>
                <h3 className="font-[PPFONT] text-[1.7rem] leading-[1.2] text-white">
                  Anuj Rathi
                </h3>
                <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-white/85 font-poppins">
                  Founder and Managing Director
                </p>
                <div className="my-7 h-px bg-white/20" />
                <div className="space-y-5 text-white/85 font-poppins">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/55">
                      Experience
                    </p>
                    <p className="text-[14px] leading-7">20+ years</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/55">
                      Sectors
                    </p>
                    <p className="text-[14px] leading-7">Manufacturing and Finance</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/55">
                      Role
                    </p>
                    <p className="text-[14px] leading-7">Portfolio Strategy and Management</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[#616877]">
              {leaderParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mb-5 text-[14px] sm:text-[15px] leading-7 last:mb-0 font-poppins"
                >
                  {paragraph}
                </p>
              ))}

              <div className="mt-8 flex flex-wrap gap-2">
                {expertiseTags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#8D1E39] px-3 py-1.5 text-[11px] uppercase tracking-[0.08em] text-[#08112a] font-poppins"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-10 sm:py-14 md:py-16">
        <div className="layout-7xl">
          <div className="flex items-start justify-between border-b border-[#8D1E39]/25 pb-3 sm:pb-4 md:pb-6">
            <span className="text-xs uppercase tracking-[0.22em] text-[#8D1E39] font-poppins font-medium">
              What We Stand For
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-5">
            {values.map((item, idx) => (
              <article
                key={item.title}
                className="group relative flex min-h-[320px] flex-col border border-[#d8dde6] bg-white p-5 sm:p-6 md:p-7 transition-all duration-200 hover:bg-[#fff7f9] hover:border-[#8D1E39]/35"
              >
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#8D1E39] scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />

                <p className="text-xs uppercase tracking-widest text-[#8D1E39] font-poppins font-medium">
                  {(idx + 1).toString().padStart(2, "0")}
                </p>
                <span className="mt-2 block h-px w-10 bg-[#8D1E39]" />

                <h3 className="mt-6 text-[1.25rem] sm:text-[1.45rem] font-[PPFONT] leading-[1.2] text-genesis-navy transition-colors duration-200 group-hover:text-[#8D1E39]">
                  {item.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-[#4d5c75] font-poppins">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
