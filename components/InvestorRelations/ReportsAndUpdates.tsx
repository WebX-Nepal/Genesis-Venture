"use client";
import Button from "@/ui/Button";
import React, { useState } from "react";

const reports = [
  {
    id: 1,
    type: "Annual Report",
    date: "2025",
    title: "Annual Report 2025",
    description:
      "Comprehensive overview of our investments, performance metrics, and strategic updates from 2025.",
    badge: "2025",
  },
  {
    id: 2,
    type: "Performance Update",
    date: "Q2 2026",
    title: "Q2 2026 Performance Update",
    description:
      "Summary of portfolio performance for Q2 2026 including sector-wise highlights and fund allocation.",
    badge: "Q2 2026",
  },
  {
    id: 3,
    type: "Portfolio Overview",
    date: "2026",
    title: "Portfolio Overview",
    description:
      "Snapshot of all portfolio companies, their stages, and progress updates across 12 countries.",
    badge: "2026",
  },
  {
    id: 4,
    type: "Market Outlook",
    date: "2026",
    title: "Market Outlook Report",
    description:
      "Insights into emerging trends, high-growth sectors, and strategic market forecasts for the year ahead.",
    badge: "2026",
  },
];

const filterTabs = [
  "All",
  "Annual Report",
  "Performance Update",
  "Portfolio Overview",
  "Market Outlook",
];

const ReportsAndUpdates = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? reports
      : reports.filter((r) => r.type === activeFilter);

  return (
    <section className="min-h-screen w-full bg-white flex flex-col px-8 md:px-16 py-10 md:py-24">
      {/* Top label */}
      <div className="flex items-start justify-between border-b border-gray-200 pb-4 md:pb-6">
        <span className="text-xs uppercase tracking-widest text-gray-500 font-poppins">
          Reports & Updates
        </span>
      </div>

      {/* Heading + filters */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pt-6 md:pt-10 mb-8 md:mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-genesis-navy leading-snug font-[PPFONT] max-w-xl">
          Stay informed with our latest performance reports, portfolio
          overviews, and market insights.
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-px flex-1 min-h-0">
        <div className="hidden md:block w-1/3 h-[80vh] relative self-stretch">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/city.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="w-2/3 flex flex-col gap-6 md:gap-8 p-4 md:p-8">
          <div className="flex flex-wrap gap-2 md:gap-3 shrink-0">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`
                text-xs uppercase tracking-widest font-poppins px-3 py-1.5 border transition-all duration-150
                ${
                  activeFilter === tab
                    ? "border-genesis-navy bg-genesis-red text-white"
                    : "border-gray-200 text-gray-500 bg-white hover:border-genesis-navy hover:text-genesis-navy"
                }
              `}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100">
            {filtered.slice(0, 4).map((report) => (
              <div
                key={report.id}
                className="relative bg-white flex flex-col  gap-4 p-6 md:p-8
                group transition-all duration-300 justify-start
                hover:-translate-y-0.5
                "
              >
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-genesis-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-genesis-navy group-hover:text-genesis-red font-poppins">
                    {report.type}
                  </span>
                  <span className="text-xs text-gray-400 font-poppins tracking-wide">
                    {report.badge}
                  </span>
                </div>

                <h3 className="text-base md:text-lg font-[PPFONT] text-genesis-navy leading-snug group-hover:text-genesis-red transition-colors duration-200">
                  {report.title}
                </h3>

                <p className="text-xs text-gray-500 font-poppins leading-relaxed flex-1">
                  {report.description}
                </p>

                <div className="border-t border-gray-100" />

                <Button text="Download PDF" />
              </div>
            ))}

            {/* Empty state when filter returns no results */}
            {filtered.length === 0 && (
              <div className="col-span-2 flex items-center justify-center py-20">
                <p className="text-sm text-gray-400 font-poppins uppercase tracking-widest">
                  No reports available for this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportsAndUpdates;
