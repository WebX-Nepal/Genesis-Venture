"use client";

const leaderParagraphs = [
  "Anuj Rathi is the Founder and Chairman of Genesis Ventures Ltd, bringing over two decades of experience across manufacturing, consumer goods, and financial markets. This rare breadth of experience forms the foundation of Genesis Ventures and distinguishes it from conventionally trained investment managers.",
  "Anuj began his professional journey after graduating from Mayo College, earning his undergraduate degree from Shri Ram College of Commerce (SRCC), Delhi, and completing his postgraduate studies at the Faculty of Management Studies (FMS), Delhi. His career commenced at Cadbury India ltd, where he gained early exposure to business strategy, market dynamics, and consumer behavior.",
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
      className="scroll-mt-24 pt-12 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24"
    >
      <div className="layout-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 inline-flex items-center justify-center text-[11px] font-medium uppercase tracking-[0.28em] text-[#8D1E39] font-montserrat">
            Leadership
          </p>
          <h2 className="font-agatho text-[clamp(2rem,4.6vw,3.2rem)] leading-[1.08] tracking-[-0.01em] text-[#173053]">
            The Person Behind The Firm
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[360px_1fr] lg:items-start lg:gap-16">
          <div className="relative overflow-hidden bg-[#001D3F] p-9 lg:sticky lg:top-24 lg:self-start">
            <div className="absolute inset-0 " />
            <div className="relative z-10">
              <div className="mb-7 flex h-20 w-20 items-center justify-center border border-white/30 bg-white/15 font-[PPFONT] text-3xl text-white/90">
                AR
              </div>
              <h3 className="font-agatho text-[1.78rem] leading-[1.15] text-white">
                Anuj Rathi
              </h3>
              <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-white/85 font-montserrat">
                Founder and Chairman
              </p>
              <div className="my-7 h-px bg-white/25" />
              <div className="space-y-5 text-white/90 font-montserrat">
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

          <div className="text-justify text-[#173053]">
            <div className="mb-6 border-l-2 border-[#8D1E39] pl-4 text-[13px] uppercase tracking-[0.2em] text-[#8D1E39] font-montserrat">
              Founder Profile
            </div>
            {leaderParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mb-5 text-[16px] sm:text-[17px] text-justify leading-[1.65] last:mb-0 font-montserrat text-[#2a4363]"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-9 flex flex-wrap gap-2.5 border-t border-[#d9e3ef] pt-6">
              {expertiseTags.map((tag) => (
                <span
                  key={tag}
                  className="border border-[#8D1E39]/65 px-3 py-1.5 text-[11px] uppercase tracking-[0.08em] text-[#173053] font-montserrat"
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
