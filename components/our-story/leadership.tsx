"use client";

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

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-24"
    >
      <div className="layout-7xl">
        <div className="mb-12">
          <p className="mb-4 inline-flex items-center text-[11px] font-medium uppercase tracking-[0.28em] text-[#8D1E39] font-montserrat">
            Leadership
          </p>
          <h2 className="font-montserrat text-[1.7rem] sm:text-[2rem] leading-[1.45] tracking-[-0.01em] text-[#08112a]">
            The person behind the firm
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[340px_1fr] lg:items-start lg:gap-20">
          <div className="relative overflow-hidden bg-[#152F53] p-10 lg:sticky lg:top-24 lg:self-start">
            <div className="relative z-10">
              <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/15 font-[PPFONT] text-3xl text-white/90">
                AR
              </div>
              <h3 className="font-montserrat text-[1.7rem] leading-[1.2] text-white">
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
  );
}
