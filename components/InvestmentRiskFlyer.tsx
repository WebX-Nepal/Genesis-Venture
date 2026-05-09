"use client";

import { useEffect, useRef, useState } from "react";

const risks = [
  {
    num: "01",
    title: "Market Risk",
    accent: "#0A6ED3",
    body: "Financial markets are volatile. Economic downturns, geopolitical events, or shifts in investor sentiment can cause rapid, significant losses in short periods.",
  },
  {
    num: "02",
    title: "Liquidity Risk",
    accent: "#0B8E83",
    body: "Some assets may be difficult to sell quickly at a fair price. You may be unable to access your funds when you need them most, particularly in illiquid markets.",
  },
  {
    num: "03",
    title: "Currency Risk",
    accent: "#8A4FFF",
    body: "Investments denominated in foreign currencies expose you to exchange rate fluctuations that can erode returns - even when the underlying asset performs well.",
  },
  {
    num: "04",
    title: "Inflation Risk",
    accent: "#B06A12",
    body: "If your investment returns do not outpace inflation over time, your real purchasing power will decline - even if the nominal value appears to increase.",
  },
  {
    num: "05",
    title: "Concentration Risk",
    accent: "#C0192B",
    body: "Placing a large portion of your capital in a single asset, sector, or geography increases exposure to any single adverse event. Diversification does not eliminate risk.",
  },
  {
    num: "06",
    title: "Regulatory & Tax Risk",
    accent: "#1E3A6E",
    body: "Laws, tax regimes, and regulations governing investments can change. Such changes may adversely affect the value of your holdings or reduce net returns.",
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
  const [activeRisk, setActiveRisk] = useState<string | null>(null);

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
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-[#0a1830]/72 backdrop-blur-sm px-4 sm:px-6 overscroll-none"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onWheel={(e) => e.preventDefault()}
      onTouchMove={(e) => e.preventDefault()}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-[920px] h-[90vh] border border-[#d8e1ee] bg-white shadow-[0_24px_64px_rgba(8,20,40,0.22)] flex flex-col overflow-hidden overscroll-none"
        onMouseDown={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        <div className="shrink-0 border-b border-[#e2e8f2] bg-white">
          <div className="flex items-start justify-between px-6 sm:px-10 pt-7 pb-5">
            <div className="flex flex-col gap-3.5 pr-4">
              <div className="inline-flex items-center gap-2 border border-[#d6deea] bg-white px-3 py-1.5 w-fit">
              
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#173053] font-montserrat font-semibold">
                  Investment Disclosure
                </span>
              </div>
              <h1 className="font-agatho font-semibold text-[clamp(1.35rem,3.1vw,2.2rem)] text-[#162e54] leading-[1.14] tracking-[-0.01em]">
                Before You Invest, Understand the Risks
              </h1>
              {/* <p className="text-xs sm:text-sm text-[#5a6880] font-poppins leading-relaxed max-w-2xl">
                Every investment carries uncertainty. This summary highlights key
                risks to help investors make informed decisions with a long-term
                perspective.
              </p> */}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="shrink-0 ml-3 mt-0.5 h-9 w-9 flex items-center justify-center border border-[#d6deea] bg-[#173053] text-white transition-all duration-200 hover:border-[#8c1d3c] hover:bg-[#8c1d3c] hover:text-white cursor-pointer"
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

          <div className="px-6 sm:px-10 pb-6">
            <div className="border-l-[3px] border-l-[#8d1e39] border border-[#e2e8f2] bg-white px-4 py-3.5">
              <p className="text-sm text-[#4f5f78] font-montserrat leading-relaxed">
                <span className="text-[#102347] font-semibold">
                  Capital at risk.
                </span>{" "}
                You may get back less than you invest, including the potential
                loss of your full capital. Only invest amounts you can afford to
                keep at risk.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-scroll overscroll-auto scroll-smooth px-6 sm:px-10 py-7 space-y-7">
          <div className="space-y-4">
            <SectionLabel>Key Risk Factors</SectionLabel>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {risks.map((risk) => (
                <article
                  key={risk.num}
                  onMouseEnter={() => setActiveRisk(risk.num)}
                  onMouseLeave={() => setActiveRisk(null)}
                  onFocus={() => setActiveRisk(risk.num)}
                  onBlur={() => setActiveRisk(null)}
                  tabIndex={0}
                  className={`group relative border px-4 py-4 transition-all duration-200 outline-none cursor-pointer ${
                    activeRisk === risk.num
                      ? "border-[#204474] bg-[#162e54] shadow-[0_8px_20px_rgba(12,34,66,0.22)]"
                      : "border-[#204474] bg-[#162e54] hover:border-[#3a5d8c]"
                  }`}
                  style={
                    activeRisk === risk.num
                      ? {
                          boxShadow: "0 8px 20px rgba(12,34,66,0.12)",
                        }
                      : undefined
                  }
                >
                  <div className="mb-2.5 flex items-center justify-between">
                    <span
                      className="text-[10px] uppercase tracking-[0.2em] font-montserrat font-semibold"
                      style={{ color: "#ffffff" }}
                    >
                      {risk.title}
                    </span>
                    <span className="font-montserrat text-xl text-white leading-none">
                      {risk.num}
                    </span>
                  </div>
                  <p className="text-sm text-white font-montserrat leading-relaxed">
                    {risk.body}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <SectionLabel>Principles For Responsible Investing</SectionLabel>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map((p, index) => (
                <article
                  key={p.title}
                  className="group border border-[#3388db] bg-[#0A6ED3]/75 px-4 py-4 transition-colors duration-200 hover:border-[#5fa4e5]"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <span className="font-montserrat text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                      0{index + 1}
                    </span>
                    <h4 className="text-[11px] uppercase tracking-[0.18em] text-white font-montserrat font-semibold">
                      {p.title}
                    </h4>
                  </div>
                  <p className="text-sm text-white font-montserrat leading-relaxed">
                    {p.body}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="px-0 py-1">
            <div className="mb-2 flex items-center gap-2">
              {/* <span className="h-[2px] w-6 bg-[#8c1d3c]" /> */}
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#8c1d3c] font-montserrat font-semibold">
                Important Notice - Please Read Carefully
              </span>
            </div>
            <p className="text-sm text-[#5b6980] font-montserrat leading-relaxed">
              This material is for informational purposes only and does not
              constitute financial, legal, or tax advice. Investment products
              are not bank deposits and may lose value. Past performance is not
              a reliable indicator of future results.
            </p>
          </div>
        </div>

        <div className="shrink-0 border-t border-[#e2e8f2] bg-white px-6 py-4 sm:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="text-xs sm:text-sm tracking-[0.08em] text-[#6b778d] font-montserrat uppercase">
            Investment risk disclosure for investor use only
          </span>
          <button
            type="button"
            onClick={onClose}
            className="text-[10px] uppercase tracking-[0.18em] text-white font-montserrat border border-[#0f2745] bg-[#173053] px-5 py-2.5 transition-all duration-200 hover:border-[#8c1d3c] hover:bg-[#8c1d3c] cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#173053] font-montserrat font-semibold mb-4">
      {children}
    </p>
  );
}
