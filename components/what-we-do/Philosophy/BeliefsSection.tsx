"use client";

const beliefCards = [
  {
    no: "01",
    title: "Your interests are the only interests",
    body: "We earn no commissions, hold no proprietary positions that compete with your portfolio, and accept no payments from third parties for directing your capital. Our only revenue is the fee you pay us. Full stop.",
  },
  {
    no: "02",
    title: "Honesty in difficult moments",
    body: "We will tell you when a market is overvalued even if it means watching the index rally without you. We will flag risk before it materialises, not after. We will never dress up a bad outcome with reassuring language. You deserve the truth - especially when it is uncomfortable.",
  },
  {
    no: "03",
    title: "Discipline over narrative",
    body: "We do not chase themes, trends, or the comfort of consensus. Investment decisions at Genesis Ventures are made through documented, stress-tested process - not conviction built from a compelling story. If the numbers do not support it, neither do we.",
  },
];

export default function BeliefsSection() {
  return (
    <section
      id="beliefs"
      className="bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
    >
      <div className="layout-7xl">
        <div className="mb-12 grid grid-cols-1 gap-8 border-b border-white/20 bg-[#173053] px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[420px_1fr] lg:gap-20">
          <div>
            <p className="mb-4 inline-flex items-center text-[11px] font-medium uppercase tracking-[0.28em] text-[#8D1E39] font-poppins">
              What We Believe
            </p>
            <h2 className="font-[PPFONT] text-[1.7rem] sm:text-[2rem] leading-[1.45] tracking-[-0.01em] text-white">
              We are not in
              <br />
              the business of
              <br />
              <em className="text-[#8D1E39]">selling confidence.</em>
            </h2>
          </div>

          <div className="pt-1 text-white/85 font-poppins">
            <p className="mb-4 text-[14px] sm:text-[15px] leading-7">
              Most firms measure themselves by the returns they generate. We
              measure ourselves by something harder to fake: whether our
              clients can look back a decade from now and say that Genesis
              Ventree was the most honest partner they ever had in financial
              life.
            </p>
            <p className="text-[14px] sm:text-[15px] leading-7">
              Performance follows integrity - not the other way around. When
              advice is given free of conflicts, when fees are transparent, and
              when a firm has the discipline to say &quot;we do not know&quot;
              rather than bluff,
              <strong className="font-semibold text-white">
                {" "}
                better decisions get made
              </strong>
              . That is the foundation of everything we do.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {beliefCards.map((card) => (
            <article
              key={card.no}
              className="group cursor-pointer border border-[#173053]/25 bg-white px-7 py-9 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#173053]/45 hover:bg-[#f7faff] hover:shadow-[0_8px_24px_rgba(16,35,71,0.08)] sm:px-8 sm:py-10"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="h-[2px] w-10 bg-[#173053] transition-all duration-300 group-hover:w-14" />
                <p className="font-poppins text-[13px] font-semibold tracking-[0.2em] text-[#173053]">
                  {card.no}
                </p>
              </div>
              <h3 className="mb-3 font-[PPFONT] text-[1.2rem] sm:text-[1.35rem] leading-[1.2] text-[#152F53] transition-colors duration-300 group-hover:text-[#173053]">
                {card.title}
              </h3>
              <p className="text-[14px] sm:text-[15px] leading-7 text-[#355171] font-poppins transition-colors duration-300 group-hover:text-[#173053]">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
