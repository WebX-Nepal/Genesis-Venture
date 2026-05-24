"use client";

import { financialReportingCards } from "./reportsData";

export default function FinancialReportingSection() {
  return (
    <div className="ir-copy mt-10">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {financialReportingCards.map((card) => (
          <div
            key={card.slug}
            className="group flex min-h-[180px] items-center justify-center bg-[#162e54] p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:bg-[#8D1E39] hover:shadow-[0_16px_32px_rgba(22,46,84,0.35)]"
          >
            <p className="max-w-[12ch] font-montserrat text-[1.2rem] font-semibold leading-[1.2] text-white sm:text-[1.35rem]">
              {card.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
