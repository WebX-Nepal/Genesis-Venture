import HeroPage from "@/components/ui/HeroPage";
import Title from "@/components/ui/Title";

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

const trustSection = {
  lead: "It takes integrity and clarity to establish trust. For us, relationship building starts early and stays consistent.",
  title: "When we commit, we commit fully",
  paragraphs: [
    "Genesis Ventures works with founders and investors through every phase of the journey, not just at moments that look good on paper. We stay close to operations, people, and long-term strategy so our decisions are informed by reality.",
    "Our partnerships are built on shared purpose, disciplined execution, and direct communication. By understanding each business deeply, we can support growth with patience, accountability, and conviction.",
  ],
};

const leaderParagraphs = [
  "Anuj Rathi is the Founder and Managing Director of Genesis Ventures Ltd, bringing over two decades of experience across manufacturing, consumer goods, and financial markets. This rare breadth of experience forms the foundation of Genesis Ventures and distinguishes it from conventionally trained investment managers.",
  "Anuj began his professional journey after graduating from Mayo College, earning his undergraduate degree from Shri Ram College of Commerce (SRCC), Delhi, and completing his postgraduate studies at the Faculty of Management Studies (FMS), Delhi. His career commenced at Cadbury, where he served as Area Sales Manager for Karnataka, gaining early exposure to business strategy, market dynamics, and consumer behavior.",
  "He subsequently played an instrumental role in the establishment and operations of leading industrial enterprises, including Maruti Cements Ltd and Premier Distilleries Ltd. He currently serves as Chairman of Maruti Cements Ltd and as Director of Premier Distilleries Ltd, bringing strategic oversight and deep operational insight to both organizations.",
  "This extensive operating experience gave Anuj a firsthand understanding of industrial operations, supply chains, capital allocation, and the forces that shape real businesses. He later brought this operational expertise to finance, developing a disciplined, research-driven investment approach grounded in business fundamentals.",
  "Today, Anuj leads Genesis Ventures with a hands-on approach, personally overseeing investment strategy, client relationships, and portfolio management. His philosophy is rooted in long-term value creation, disciplined risk management, and an unwavering commitment to transparency, integrity, and trust.",
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
    title: "Strategic Judgment",
    description:
      "We make long-term decisions with clarity, discipline, and a strong sense of timing across changing market conditions.",
  },
  {
    title: "Founder Partnership",
    description:
      "Leadership at Genesis is hands-on where it matters most, supporting founders through key decisions, growth, and inflection points.",
  },
  {
    title: "Operational Perspective",
    description:
      "Our approach combines capital allocation with real operating insight, helping businesses scale with greater resilience and focus.",
  },
  {
    title: "Governance First",
    description:
      "We believe disciplined governance creates better companies, stronger accountability, and more durable long-term outcomes.",
  },
];

export default function OurStoriesPage() {
  return (
    <main className="bg-white text-[#1a1714] font-montserrat">
      <section className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#0a1634] px-4 xs:px-6 sm:px-8 md:px-16 pt-20 xs:pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 md:pb-12 text-white">
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
        <div className="relative z-20 flex w-full max-w-5xl flex-col items-center gap-3 px-2 text-center sm:gap-4">
          <Title
          text={["Capital guided by principles,","not just Opportunity"]}
          />
        </div>
      </section>

      <section className="bg-white px-6 pt-16 pb-10 sm:px-10 sm:pt-20 sm:pb-12 lg:px-16 lg:pt-24 lg:pb-14">
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
                      className="font-montserrat text-[15px] sm:text-[16px] leading-[1.65] text-[#575b63]"
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
            <p className="mb-4 inline-flex items-center text-[11px] font-medium uppercase tracking-[0.28em] text-[#8D1E39] font-montserrat">
              Leadership
            </p>
            <h2 className="font-[PPFONT] text-[1.7rem] sm:text-[2rem] leading-[1.45] tracking-[-0.01em] text-[#08112a]">
              The person behind the firm
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[340px_1fr] lg:gap-20">
            <div className="relative overflow-hidden bg-[#152F53] p-10">
              <div className="relative z-10">
                <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/15 font-[PPFONT] text-3xl text-white/90">
                  AR
                </div>
                <h3 className="font-[PPFONT] text-[1.7rem] leading-[1.2] text-white">
                  Anuj Rathi
                </h3>
                <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-white/85 font-montserrat">
                  Founder and Managing Director
                </p>
                <div className="my-7 h-px bg-white/20" />
                <div className="space-y-5 text-white/85 font-montserrat">
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

            <div className="text-[#173053]">
              {leaderParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mb-5 text-[14px] sm:text-[15px] leading-7 last:mb-0 font-montserrat"
                >
                  {paragraph}
                </p>
              ))}

              <div className="mt-8 flex flex-wrap gap-2">
                {expertiseTags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#8D1E39] px-3 py-1.5 text-[11px] uppercase tracking-[0.08em] text-[#08112a] font-montserrat"
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
          <div className="pb-3 sm:pb-4 md:pb-6">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#8D1E39] font-montserrat font-medium">
              What We Stand For
            </span>
          </div>

          <div className="border-t border-[#e5e9f0] pt-8 sm:pt-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">
              <h2 className="font-[PPFONT] text-[clamp(1.9rem,4.3vw,3.3rem)] leading-[1.08] text-[#173053]">
                Leadership built on judgment, discipline, and long-term partnership.
              </h2>
              <p className="max-w-[560px] text-[14px] sm:text-[15px] leading-[1.75] text-[#355171]">
                Genesis brings a leadership approach shaped by rigorous thinking, active partnership, and a
                commitment to building resilient businesses with lasting value.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-0 sm:grid-cols-2 md:grid-cols-4">
            {values.map((item) => (
              <article
                key={item.title}
                className="group relative -mt-px -ml-px flex min-h-[220px] flex-col overflow-hidden border border-[#cfd9e6] bg-white p-5 sm:p-6 md:p-7 transition-all duration-300 hover:bg-genesis-navy/10"
              >
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-genesis-red scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />
                <h3 className="text-[1.15rem] sm:text-[1.3rem] font-[PPFONT] leading-[1.25] text-[#173053]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#4f6783] font-montserrat">
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
