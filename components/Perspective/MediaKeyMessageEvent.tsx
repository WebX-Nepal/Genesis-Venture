import React from "react";

const mediaItems = [
  {
    id: 1,
    date: "March 2026",
    source: "Press Release",
    tag: "Investment",
    title: "Genesis Ventures Invests in Fintech Startup PayFlow",
    description:
      "Genesis Ventures announced its investment in PayFlow, a Nepal-based fintech startup focused on simplifying digital payments for small businesses.",
  },
  {
    id: 2,
    date: "February 2026",
    source: "Company Announcement",
    tag: "Fund",
    title: "Genesis Ventures Launches New $150M Early-Stage Fund",
    description:
      "The new fund aims to support early-stage startups across South Asia, with a focus on AI, fintech, and climate technology.",
  },
  {
    id: 3,
    date: "January 2026",
    source: "Event",
    tag: "Leadership",
    title: "Managing Partner Speaks at South Asia Startup Summit",
    description:
      "Genesis Ventures' Managing Partner shared insights on venture capital trends and startup growth strategies at the annual startup summit.",
  },
];

const ArrowIcon = () => (
  <svg
    width="13"
    height="13"
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

const ExternalIcon = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const Media = () => {
  return (
    <section
      id="media"
      className="w-full bg-white flex flex-col px-8 md:px-16 py-10 md:py-24"
    >
      {/* ── Section Header ── */}
      <div className="flex items-start justify-between border-b border-gray-200 pb-4 md:pb-6">
        <span className="text-xs uppercase tracking-widest text-gray-500 font-poppins">
          Media
        </span>
        <a
          href="/perspective/media"
          className="text-xs uppercase tracking-widest text-genesis-red font-poppins border-b border-genesis-red pb-0.5 hover:opacity-70 transition-opacity"
        >
          View All →
        </a>
      </div>

      {/* ── Section Title ── */}
      <div className="pt-6 md:pt-10 mb-10 md:mb-14">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-genesis-navy leading-snug font-[PPFONT] max-w-2xl">
          News, announcements, and public updates from Genesis Ventures.
        </h2>
      </div>

      {/* ── Media List ── */}
      <div className="flex flex-col divide-y divide-gray-200">
        {mediaItems.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12 py-6 md:py-8 group hover:bg-gray-50 -mx-8 md:-mx-16 px-8 md:px-16 transition-colors duration-200"
          >
            {/* Left: index + date */}
            <div className="flex md:flex-col gap-4 md:gap-1 md:w-28 shrink-0">
              <span className="text-xs text-gray-300 font-[PPFONT] tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-xs text-gray-400 font-poppins tracking-wide">
                {item.date}
              </span>
            </div>

            {/* Center: tag + title + description */}
            <div className="flex flex-col gap-2 flex-1">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-widest text-genesis-red font-poppins">
                  {item.tag}
                </span>
                <span className="text-xs text-gray-300 font-poppins">·</span>
                <span className="text-xs text-gray-400 font-poppins tracking-wide">
                  {item.source}
                </span>
              </div>
              <h3 className="text-base md:text-lg font-[PPFONT] text-genesis-navy leading-snug group-hover:text-genesis-red transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 font-poppins leading-relaxed max-w-xl">
                {item.description}
              </p>
            </div>

            {/* Right: Read More */}
            <div className="shrink-0 md:self-center">
              <button className="flex items-center gap-1.5 text-xs uppercase tracking-widest font-poppins text-genesis-navy hover:text-genesis-red transition-colors duration-150 group/btn">
                <span className="border-b border-gray-300 group-hover/btn:border-genesis-red pb-0.5 transition-colors duration-150">
                  Read
                </span>
                <span className="group-hover/btn:translate-x-0.5 transition-transform duration-150">
                  <ArrowIcon />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ── Footer Bar ── */}
      <div className="border-t border-gray-100 pt-3 mt-6 md:mt-10">
        <p className="text-xs text-gray-500 font-poppins uppercase tracking-widest">
          Genesis Ventures, Inc. — Kathmandu, Nepal
        </p>
      </div>
    </section>
  );
};

export default Media;
