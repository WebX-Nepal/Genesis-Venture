"use client";

import { useMemo, useState } from "react";
import { financialReports } from "./reportsData";

const reportTabs = [
  { label: "Quarterly", value: "quarterly" },
  { label: "Annual", value: "annual" },
  { label: "Others", value: "others" },
] as const;

const quarterlyBars = [
  {
    label: "1M",
    values: [1.93, 2.27, 2.0],
  },
  {
    label: "YTD",
    values: [1.85, 1.57, 1.5],
  },
  {
    label: "1YR",
    values: [0, 0, 0],
  },
  {
    label: "Since Inception",
    values: [3.26, 3.39, 2.98],
  },
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
      <p className="mb-6 max-w-[66ch] text-[0.9rem] leading-[1.6] text-[#173053]/80 sm:text-[0.96rem]">
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

      {activeReportTab === "quarterly" ? (
        <>
          <div className="mb-5 p-4 sm:p-6">
            <div className="relative mt-2">
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
                {["4.00%", "3.50%", "3.00%", "2.50%", "2.00%", "1.50%", "1.00%", "0.50%", "0.00%"].map((tick) => (
                  <div key={tick} className="relative border-t border-[#d8dde4]">
                    <span className="absolute left-5 -top-3 text-[11px] text-[#173053]/65 sm:-left-3">{tick}</span>
                  </div>
                ))}
              </div>

              <div className="relative ml-8 grid h-[280px] grid-cols-4 gap-4 pt-2 sm:ml-14 sm:gap-8">
              {quarterlyBars.map((group) => (
                <div key={group.label} className="flex flex-col items-center">
                  <div className="flex h-[245px] items-end gap-2">
                    {group.values.map((value, idx) => (
                      <div
                        key={`${group.label}-${idx}`}
                        className={`w-4 sm:w-7 ${
                          idx === 0 ? "bg-[#173053]" : idx === 1 ? "bg-[#6f8499]" : "bg-[#aab7c5]"
                        }`}
                        style={{ height: `${Math.max(value * 14, 2)}px` }}
                      />
                    ))}
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-[#173053]/80">{group.label}</p>
                </div>
              ))}
            </div>
          </div>
          </div>

          <div className="mb-8 border border-[#173053]/20 bg-[#f7f7f8] p-4 sm:p-6">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left">
                <thead>
                  <tr className="bg-[#e6e7e9] text-sm text-[#173053]">
                    <th className="px-3 py-2 font-medium"> </th>
                    <th className="px-3 py-2 font-medium">1M</th>
                    <th className="px-3 py-2 font-medium">YTD</th>
                    <th className="px-3 py-2 font-medium">1YR</th>
                    <th className="px-3 py-2 font-medium">Since Inception</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#dde2e8] bg-[#f8f8f9] text-sm text-[#173053]/85">
                    <td className="px-3 py-3">
                      <span className="mr-2 inline-block h-3 w-3 bg-[#173053]" />
                      RCLO NAV
                    </td>
                    <td className="px-3 py-3">1.93%</td>
                    <td className="px-3 py-3">1.85%</td>
                    <td className="px-3 py-3">-</td>
                    <td className="px-3 py-3">3.26%</td>
                  </tr>
                  <tr className="border-b border-[#dde2e8] bg-[#f1f2f4] text-sm text-[#173053]/85">
                    <td className="px-3 py-3">
                      <span className="mr-2 inline-block h-3 w-3 bg-[#6f8499]" />
                      RCLO Market Price
                    </td>
                    <td className="px-3 py-3">2.27%</td>
                    <td className="px-3 py-3">1.57%</td>
                    <td className="px-3 py-3">-</td>
                    <td className="px-3 py-3">3.39%</td>
                  </tr>
                  <tr className="bg-[#f8f8f9] text-sm text-[#173053]/85">
                    <td className="px-3 py-3">
                      <span className="mr-2 inline-block h-3 w-3 bg-[#aab7c5]" />
                      J.P. Morgan CLO High Quality Mezzanine Index
                    </td>
                    <td className="px-3 py-3">2.00%</td>
                    <td className="px-3 py-3">1.50%</td>
                    <td className="px-3 py-3">-</td>
                    <td className="px-3 py-3">2.98%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : null}

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
