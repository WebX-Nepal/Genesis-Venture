"use client";

import { Playfair_Display } from "next/font/google";
import { useEffect, useRef } from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
});

const risks = [
  {
    num: "01",
    title: "Market Risk",
    body: "Financial markets are volatile. Economic downturns, geopolitical events, or shifts in investor sentiment can cause rapid, significant losses in short periods.",
  },
  {
    num: "02",
    title: "Liquidity Risk",
    body: "Some assets may be difficult to sell quickly at a fair price. You may be unable to access your funds when you need them most, particularly in illiquid markets.",
  },
  {
    num: "03",
    title: "Currency Risk",
    body: "Investments denominated in foreign currencies expose you to exchange rate fluctuations that can erode returns — even when the underlying asset performs well.",
  },
  {
    num: "04",
    title: "Inflation Risk",
    body: "If your investment returns do not outpace inflation over time, your real purchasing power will decline — even if the nominal value appears to increase.",
  },
  {
    num: "05",
    title: "Concentration Risk",
    body: "Placing a large portion of your capital in a single asset, sector, or geography increases exposure to any single adverse event. Diversification does not eliminate risk.",
  },
  {
    num: "06",
    title: "Regulatory & Tax Risk",
    body: "Laws, tax regimes, and regulations governing investments can change. Such changes may adversely affect the value of your holdings or reduce net returns.",
  },
];

const stats = [
  { number: "90%", label: "of day traders lose money within their first year" },
  {
    number: "−57%",
    label: "S&P 500 peak-to-trough decline during the 2008 financial crisis",
  },
  {
    number: "50%+",
    label: "of startup investments result in total or near-total capital loss",
  },
];

const principles = [
  {
    title: "Know Your Risk",
    body: "Assess your own appetite for loss honestly before committing any capital.",
  },
  {
    title: "Diversify",
    body: "Spread risk across asset classes, sectors, and geographies where possible.",
  },
  {
    title: "Think Long-Term",
    body: "Short-term speculation amplifies risk. Patience historically improves outcomes.",
  },
  {
    title: "Seek Advice",
    body: "Consult a licensed financial advisor before making significant investment decisions.",
  },
];

interface Props {
  onClose: () => void;
}

export default function InvestmentRiskModal({ onClose }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    // Backdrop — clicking directly on this div (not the modal) closes it
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-genesis-navy/60 backdrop-blur-sm px-4 sm:px-6 overscroll-none"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Modal panel — stop propagation so clicks inside don't bubble to backdrop */}
      <div
        ref={modalRef}
        className={`${playfair.variable} relative w-full max-w-3xl h-[90vh] bg-white flex flex-col overflow-hidden overscroll-none`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Top accent bar */}
        <div className="h-1 w-full bg-genesis-navy shrink-0" />

        {/* Header */}
        <div className="flex items-start justify-between px-6 sm:px-10 pt-7 pb-5 border-b border-gray-100 shrink-0">
          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 border border-genesis-navy/20 px-3 py-1.5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-genesis-navy shrink-0" />
              <span className="text-[9px] uppercase tracking-[3px] text-genesis-navy font-poppins font-semibold">
                Important Notice — Please Read Carefully
              </span>
            </div>
            <h1 className="font-[PPFONT] text-[clamp(1.5rem,4vw,2.5rem)] text-genesis-navy leading-tight">
              Before You{" "}
              <em className="not-italic text-genesis-blue">Invest,</em>
              <br />
              Understand the Risks.
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 font-poppins leading-relaxed max-w-lg">
              All investments carry inherent risk. Past performance does not
              guarantee future results. This document outlines key risks every
              investor must consider.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="shrink-0 ml-4 mt-0.5 w-8 h-8 flex items-center justify-center border border-gray-200 hover:border-genesis-navy hover:bg-genesis-navy hover:text-white text-gray-400 transition-all duration-200 cursor-pointer"
            aria-label="Close"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M1 1L11 11M11 1L1 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-scroll overscroll-contain px-6 sm:px-10 py-6 space-y-8">
          <div className="border-l-2 border-genesis-navy bg-gray-50 px-4 py-4">
            <p className="text-xs sm:text-sm text-gray-600 font-poppins leading-relaxed">
              <span className="text-genesis-navy font-semibold">
                Capital at risk.{" "}
              </span>
              Investing involves the risk that you may get back less than you
              originally invested — including the possible loss of your entire
              capital. You should never invest money you cannot afford to lose.
            </p>
          </div>

          <div>
            <SectionLabel>Key Risk Factors</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100">
              {risks.map((risk) => (
                <div
                  key={risk.num}
                  className="relative bg-white px-5 py-5 overflow-hidden"
                >
                  <span
                    aria-hidden
                    className="absolute top-1 right-3 font-[PPFONT] text-4xl text-gray-50 select-none leading-none"
                  >
                    {risk.num}
                  </span>
                  <h3 className="text-[10px] uppercase tracking-widest text-genesis-navy font-poppins font-semibold mb-2">
                    {risk.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-poppins leading-relaxed">
                    {risk.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionLabel>
              Sobering Figures Every Investor Should Know
            </SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-100">
              {stats.map((stat) => (
                <div
                  key={stat.number}
                  className="bg-white px-5 py-5 flex flex-col items-center text-center gap-2"
                >
                  <span className="font-[PPFONT] text-2xl sm:text-3xl text-genesis-navy leading-none">
                    {stat.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 font-poppins leading-relaxed">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionLabel>Principles for Responsible Investing</SectionLabel>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {principles.map((p) => (
                <div key={p.title} className="border-t-2 border-gray-200 pt-4">
                  <h4 className="text-[10px] uppercase tracking-widest text-genesis-navy font-poppins font-semibold mb-2">
                    {p.title}
                  </h4>
                  <p className="text-xs text-gray-500 font-poppins leading-relaxed">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-100 px-5 py-5">
            <p className="text-[10px] sm:text-xs text-gray-400 font-poppins leading-relaxed">
              <span className="text-gray-500 font-semibold">
                Regulatory Disclaimer:{" "}
              </span>
              This document is for informational purposes only and does not
              constitute financial, investment, legal, or tax advice. Investment
              products are not bank deposits and are not insured by any
              government or regulatory body. Returns are not guaranteed. Past
              performance is not a reliable indicator of future results.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="shrink-0 px-6 sm:px-10 py-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-[9px] uppercase tracking-widest text-gray-300 font-poppins">
            Investment Risk Disclosure — For Investor Use Only
          </span>
          <button
            type="button"
            onClick={onClose}
            className="text-[10px] uppercase tracking-widest text-genesis-navy font-poppins border border-genesis-navy px-4 py-2 hover:bg-genesis-navy hover:text-white transition-all duration-200 cursor-pointer"
          >
            I Understand
          </button>
        </div>

        {/* Bottom accent bar */}
        <div className="h-1 w-full bg-genesis-navy shrink-0" />
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[9px] uppercase tracking-[3px] text-genesis-navy font-poppins font-semibold mb-4">
      {children}
    </p>
  );
}
