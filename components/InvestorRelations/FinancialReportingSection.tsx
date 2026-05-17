"use client";

import { useMemo, useState } from "react";
import { financialReports } from "./reportsData";

const reportTabs = [
  { label: "Quarterly", value: "quarterly" },
  { label: "Annual", value: "annual" },
  { label: "Others", value: "others" },
] as const;

export default function FinancialReportingSection() {
  const [activeReportTab, setActiveReportTab] = useState<(typeof reportTabs)[number]["value"]>("quarterly");
  const filteredReports = useMemo(
    () => financialReports.filter((report) => report.type === activeReportTab),
    [activeReportTab]
  );

  return (
    <div className="ir-copy mt-12">
      <h3 className="mb-3 font-agatho text-[clamp(1.3rem,3.2vw,2rem)] leading-[1.15] text-[#173053]">
        Financial Reporting
      </h3>
      <p className="mx-auto mb-6 max-w-[66ch] text-center text-[0.9rem] leading-[1.6] text-[#173053]/80 sm:text-[0.96rem]">
        Structured disclosures to help investors track performance with clarity.
      </p>

      <div className="mb-6 flex flex-wrap gap-2">
        {reportTabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => setActiveReportTab(tab.value)}
            className={`px-4 py-2 text-sm ${
              activeReportTab === tab.value
                ? "bg-[#173053] text-white"
                : "border border-[#173053]/25 text-[#173053]/80"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredReports.map((report) => (
          <article
            key={`${report.year}-${report.month}-${report.title}`}
            className="group bg-gradient-to-br from-[#f5f8ff] via-[#edf4ff] to-[#e5eefb] p-5"
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <p className="font-agatho text-[1.5rem] leading-none text-[#173053]">{report.year}</p>
              <p className="text-[0.86rem] text-[#173053]/70">{report.month}</p>
            </div>
            <p className="text-[1rem] font-semibold text-[#173053]">{report.title}</p>
            <p className="mt-3 text-[0.85rem] text-[#173053]/65">PDF · {report.file}</p>
            <a
              href={`/reports/${report.file}`}
              download
              className="mt-4 inline-flex items-center justify-center border border-[#173053]/30 bg-white px-4 py-2 text-[0.82rem] font-semibold text-[#173053] transition-colors hover:bg-[#173053] hover:text-white"
            >
              Download
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
