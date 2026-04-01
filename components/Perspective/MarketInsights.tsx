import React from "react";

const articles = [
  {
    id: 1,
    date: "March 2026",
    author: "Genesis Ventures",
    tag: "AI & Technology",
    title: "The Rise of AI Startups in Emerging Markets",
    excerpt:
      "Artificial Intelligence is no longer limited to developed markets. Emerging economies are witnessing a rapid surge in AI-driven startups, particularly in sectors like healthcare, fintech, and logistics.",
  },
  {
    id: 2,
    date: "February 2026",
    author: "Investment Team",
    tag: "Founder Insights",
    title: "What We Look for in Early-Stage Founders",
    excerpt:
      "Backing early-stage founders goes beyond capital. It's about identifying vision, resilience, and execution capability in rapidly changing environments.",
  },
  {
    id: 3,
    date: "January 2026",
    author: "Research Team",
    tag: "Fintech",
    title: "Fintech in South Asia: The Next Growth Frontier",
    excerpt:
      "Fintech continues to redefine financial access across South Asia, creating opportunities for both consumers and investors through scalable digital infrastructure.",
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

const MarketInsights = () => {
  return (
    <section
      id="market-insights"
      className="w-full bg-white flex flex-col px-8 md:px-16 py-10 md:py-24"
    >
      {/* ── Section Header ── */}
      <div className="flex items-start justify-between border-b border-gray-200 pb-4 md:pb-6">
        <span className="text-xs uppercase tracking-widest text-gray-500 font-poppins">
          Market Insights
        </span>
        <a
          href="/perspective/insights"
          className="text-xs uppercase tracking-widest text-genesis-red font-poppins border-b border-genesis-red pb-0.5 hover:opacity-70 transition-opacity"
        >
          View All →
        </a>
      </div>

      {/* ── Section Title ── */}
      <div className="pt-6 md:pt-10 mb-10 md:mb-14">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-genesis-navy leading-snug font-[PPFONT] max-w-2xl">
          Thoughts on technology, markets, and the future of innovation.
        </h2>
      </div>

      {/* ── Articles Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
        {articles.map((article) => (
          <article
            key={article.id}
            className="bg-white flex flex-col gap-4 p-6 md:p-8 group hover:bg-gray-50 transition-colors duration-200"
          >
            {/* Top: tag + date */}
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-genesis-red font-poppins">
                {article.tag}
              </span>
              <span className="text-xs text-gray-400 font-poppins tracking-wide">
                {article.date}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-base md:text-lg font-[PPFONT] text-genesis-navy leading-snug group-hover:text-genesis-red transition-colors duration-200">
              {article.title}
            </h3>

            {/* Excerpt */}
            <p className="text-xs text-gray-500 font-poppins leading-relaxed flex-1">
              {article.excerpt}
            </p>

            {/* Divider */}
            <div className="border-t border-gray-100" />

            {/* Author + Read More */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400 font-poppins tracking-wide">
                {article.author}
              </span>
              <button className="flex items-center gap-1.5 text-xs uppercase tracking-widest font-poppins text-genesis-navy hover:text-genesis-red transition-colors duration-150 group/btn">
                <span className="border-b border-gray-300 group-hover/btn:border-genesis-red pb-0.5 transition-colors duration-150">
                  Read
                </span>
                <span className="group-hover/btn:translate-x-0.5 transition-transform duration-150">
                  <ArrowIcon />
                </span>
              </button>
            </div>
          </article>
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

export default MarketInsights;
