"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ChevronDown, ChevronRight, Download, FileSpreadsheet, FileText } from "lucide-react";

type QuarterlyResultsDetailProps = {
  reportFile: string;
};

const yearlyData = [
  {
    year: "FY 2025-2026",
    quarterLabel: "Financial Results for the Quarter ended December, 2025",
    blocks: [
      {
        title: "Quarterly FAQs",
        docs: [{ icon: "pdf", label: "Genesis Results Update & FAQ - Q3 FY2026" }],
      },
      {
        title: "Consolidated",
        docs: [
          { icon: "pdf", label: "Genesis Financial Result - Q3 FY2026 - CFS [PDF]" },
          { icon: "xls", label: "Genesis Financial Result - Q3 FY2026 - CFS [XLSX]" },
        ],
      },
      {
        title: "Media Statement",
        docs: [{ icon: "pdf", label: "Genesis Press Release - Q3 FY2026" }],
      },
      {
        title: "Standalone",
        docs: [
          { icon: "pdf", label: "Genesis Financial Result - Q3 FY2026 - SFS [PDF]" },
          { icon: "xls", label: "Genesis Financial Result - Q3 FY2026 - SFS [XLSX]" },
        ],
      },
    ],
  },
  {
    year: "FY 2024-2025",
    quarterLabel: "Financial Results for the Quarter ended December, 2024",
    blocks: [
      {
        title: "Quarterly FAQs",
        docs: [{ icon: "pdf", label: "Genesis Results Update & FAQ - Q3 FY2025" }],
      },
      {
        title: "Consolidated",
        docs: [
          { icon: "pdf", label: "Genesis Financial Result - Q3 FY2025 - CFS [PDF]" },
          { icon: "xls", label: "Genesis Financial Result - Q3 FY2025 - CFS [XLSX]" },
        ],
      },
      {
        title: "Media Statement",
        docs: [{ icon: "pdf", label: "Genesis Press Release - Q3 FY2025" }],
      },
      {
        title: "Standalone",
        docs: [
          { icon: "pdf", label: "Genesis Financial Result - Q3 FY2025 - SFS [PDF]" },
          { icon: "xls", label: "Genesis Financial Result - Q3 FY2025 - SFS [XLSX]" },
        ],
      },
    ],
  },
] as const;

export default function QuarterlyResultsDetail({ reportFile }: QuarterlyResultsDetailProps) {
  const [selectedYear, setSelectedYear] = useState(yearlyData[0].year);
  const [expanded, setExpanded] = useState(true);

  const current = useMemo(
    () => yearlyData.find((item) => item.year === selectedYear) ?? yearlyData[0],
    [selectedYear]
  );

  return (
    <main className="w-full bg-[#f4f5f7]">
      <section className="bg-[#162e54] pt-20 pb-14 sm:pt-24 sm:pb-16">
        <div className="layout-7xl text-white">
          <div className="mb-3 mt-3 flex flex-wrap items-center gap-2 text-sm text-white/85 sm:mt-4">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight size={14} className="text-white/60" />
            <Link href="/investment-relation" className="transition-colors hover:text-white">
              Investor Relations
            </Link>
            <ChevronRight size={14} className="text-white/60" />
            <span className="text-[#8D1E39]">Quarterly Results</span>
          </div>
          <h1 className="font-agatho text-[clamp(2.2rem,5vw,4rem)] leading-[1.08]">Genesis Quarterly Results</h1>
          <p className="mt-2 text-lg text-white/90">Get all the latest financial updates quarter on quarter.</p>
        </div>
      </section>

      <section className="layout-7xl py-12">
        <p className="text-[1.05rem] text-[#162e54]">Select the year for the Financial Results and Highlights</p>
        <div className="relative mt-2">
          <select
            value={selectedYear}
            onChange={(event) => setSelectedYear(event.target.value)}
            className="w-full appearance-none border border-[#162e54]/20 bg-white px-7 py-4 pr-16 text-left text-[1.35rem] font-semibold text-[#162e54] outline-none"
          >
            {yearlyData.map((item) => (
              <option key={item.year} value={item.year}>
                {item.year}
              </option>
            ))}
          </select>
          <ChevronDown size={24} className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-[#162e54]" />
        </div>

        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-10 flex w-full items-center justify-between text-[#162e54]"
        >
          <p className="text-[1.05rem]">{current.quarterLabel}</p>
          <ChevronDown size={24} className={expanded ? "rotate-180" : ""} />
        </button>

        {expanded ? (
          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            {current.blocks.map((block) => (
              <article
                key={block.title}
                className="overflow-hidden border border-[#162e54]/15 bg-white shadow-[0_10px_30px_rgba(22,46,84,0.06)]"
              >
                <div className="border-b border-[#162e54]/10 bg-[#f8f9fc] px-6 py-4 sm:px-7">
                  <h2 className="text-[1.1rem] font-semibold text-[#162e54]">{block.title}</h2>
                </div>
                <div className="space-y-2 px-6 py-5 sm:px-7">
                  {block.docs.map((doc) => (
                    <div
                      key={doc.label}
                      className="flex items-center justify-between gap-4 border border-transparent px-3 py-3 transition-colors hover:border-[#162e54]/12 hover:bg-[#f9fbff]"
                    >
                      <div className="flex items-start gap-3 text-[#162e54]">
                        <span className="mt-0.5 text-[#8D1E39]">
                          {doc.icon === "pdf" ? <FileText size={18} /> : <FileSpreadsheet size={18} />}
                        </span>
                        <p className="text-[0.98rem] leading-relaxed">{doc.label}</p>
                      </div>
                      <a
                        href={`/reports/${reportFile}`}
                        download
                        className="inline-flex h-9 w-9 items-center justify-center border border-[#8D1E39]/35 text-[#8D1E39] transition-colors hover:bg-[#8D1E39] hover:text-white"
                        aria-label={`Download ${doc.label}`}
                      >
                        <Download size={20} />
                      </a>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        ) : null}
      </section>
    </main>
  );
}
