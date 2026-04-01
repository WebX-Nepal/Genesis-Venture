import React from "react";

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const PartnerCTA = () => {
  return (
    <section className="w-full bg-genesis-navy flex flex-col px-8 md:px-16 py-16 md:py-28">
      {/* ── Section Header ── */}
      <div className="flex items-start justify-between border-b border-white/10 pb-4 md:pb-6">
        <span className="text-xs uppercase tracking-widest text-white/40 font-poppins">
          Investor Relations
        </span>
      </div>

      {/* ── CTA Body ── */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 pt-10 md:pt-16">
        {/* Left: heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-snug font-[PPFONT] max-w-2xl">
          Partner with Genesis Ventures
        </h2>

        {/* Right: body + button */}
        <div className="flex flex-col gap-8 md:items-end md:text-right max-w-sm">
          <p className="text-sm text-white/60 font-poppins leading-relaxed">
            We welcome new investors who share our vision for long-term growth
            in transformative companies.
          </p>

          <a
            href="/contact"
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-poppins text-white border border-white/20 px-5 py-3 w-fit hover:bg-white hover:text-genesis-navy transition-all duration-200 group"
          >
            <span>Contact Us</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              <ArrowIcon />
            </span>
          </a>
        </div>
      </div>

      {/* ── Footer Bar ── */}
      <div className="border-t border-white/10 pt-3 mt-16 md:mt-24">
        <p className="text-xs text-white/30 font-poppins uppercase tracking-widest">
          Genesis Ventures, Inc. — Kathmandu, Nepal
        </p>
      </div>
    </section>
  );
};

export default PartnerCTA;
