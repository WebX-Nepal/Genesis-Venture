import Button from "@/ui/Button";
import React from "react";

const documents = [
  {
    id: 1,
    category: "Fund",
    title: "Fund Overview",
    description:
      "Summary of our fund's objective, investment strategy, key statistics, AUM breakdown, and historical performance highlights across sectors.",
    meta: "PDF · 2.4 MB · Updated Q1 2026",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 2,
    category: "Presentation",
    title: "Investor Presentation",
    description:
      "Slide deck summarizing the firm, portfolio performance, notable exits, investment philosophy, and our market positioning across 12 countries.",
    meta: "PDF · 8.1 MB · Updated Q2 2026",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h20v14H2z" />
        <path d="M8 21l4-4 4 4" />
        <path d="M12 17V7" />
        <path d="M8 11l4-4 4 4" />
      </svg>
    ),
  },
  {
    id: 3,
    category: "ESG",
    title: "ESG Report",
    description:
      "Our environmental, social, and governance commitments — sustainability practices, portfolio impact metrics, and policies on ethical investing.",
    meta: "PDF · 3.7 MB · Updated 2025",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    id: 4,
    category: "Governance",
    title: "Governance Policy",
    description:
      "Internal governance structure, advisory boards, compliance policies, investor rights, and our standards for transparency and decision-making.",
    meta: "PDF · 1.2 MB · Updated 2025",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

const DownloadIcon = () => (
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
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const InvestorDocuments = () => {
  return (
    <section className="min-h-screen w-full bg-white flex flex-col px-8 md:px-16 py-10 md:py-24">
      <div className="flex items-start justify-between border-b border-gray-200 pb-4 md:pb-6">
        <span className="text-xs uppercase tracking-widest text-gray-500 font-poppins">
          Investor Relations
        </span>
      </div>

      <div className="flex flex-col gap-4 pt-6 md:pt-10 mb-8 md:mb-14">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-genesis-navy leading-snug font-[PPFONT] max-w-xl">
          Investor Documents
        </h2>
        <p className="text-lg text-gray-500 font-poppins leading-relaxed max-w-lg">
          Key materials for current and prospective investors — fund strategy,
          performance, ESG commitments, and governance documentation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200 flex-1">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="relative bg-white flex flex-col gap-5 p-6 md:p-10 group hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-genesis-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

            <div className="flex items-center justify-between">
              <div className="text-genesis-navy opacity-40 group-hover:opacity-100 transition-opacity duration-200">
                {doc.icon}
              </div>
              <span className="text-xs uppercase tracking-widest text-genesis-blue group-hover:text-genesis-red font-poppins">
                {doc.category}
              </span>
            </div>

            <h3 className="text-lg md:text-xl font-[PPFONT] text-genesis-navy leading-snug group-hover:text-genesis-red transition-colors duration-200">
              {doc.title}
            </h3>

            <p className="text-xs text-gray-500 font-poppins leading-relaxed flex-1">
              {doc.description}
            </p>

            <span className="text-xs text-gray-400 font-poppins tracking-wide">
              {doc.meta}
            </span>

            <div className="border-t border-gray-100" />

            <Button text="Download PDF">
              {/* <DownloadIcon />
              <span className="border-b border-gray-300 group-hover/btn:border-genesis-red pb-0.5 transition-colors duration-150">
                Download PDF
              </span> */}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InvestorDocuments;
