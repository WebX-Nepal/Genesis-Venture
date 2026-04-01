import localFont from "next/font/local";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-source",
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
  {
    number: "90%",
    label: "of day traders lose money within their first year",
  },
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

export default function InvestmentRiskFlyer() {
  return (
    <div
      className={`${playfair.variable} ${sourceSans.variable}`}
      style={{
        fontFamily: "var(--font-source), sans-serif",
        background: "#0a0a0a",
        color: "#f0ece3",
        width: "210mm",
        minHeight: "297mm",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          height: "6px",
          background:
            "linear-gradient(90deg, #c8a96e 0%, #e8c87a 40%, #a07840 100%)",
          width: "100%",
          flexShrink: 0,
        }}
      />

      {/* Header */}
      <div
        style={{
          padding: "36px 48px 24px",
          borderBottom: "0.5px solid #2a2a2a",
        }}
      >
        {/* Warning badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "#1a0a00",
            border: "1px solid #c8a96e",
            color: "#c8a96e",
            fontFamily: "var(--font-source), sans-serif",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "3px",
            textTransform: "uppercase",
            padding: "6px 14px",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "6px",
              height: "6px",
              background: "#c8a96e",
              borderRadius: "50%",
              flexShrink: 0,
            }}
          />
          Important Notice — Please Read Carefully
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "52px",
            fontWeight: 900,
            lineHeight: 1.0,
            color: "#f0ece3",
            marginBottom: "8px",
          }}
        >
          Before You
          <br />
          <em style={{ fontStyle: "italic", color: "#c8a96e" }}>Invest,</em>
          <br />
          Understand
          <br />
          the Risks.
        </h1>

        <p
          style={{
            fontSize: "14px",
            fontWeight: 300,
            color: "#888",
            letterSpacing: "0.5px",
            maxWidth: "480px",
            lineHeight: 1.6,
          }}
        >
          All investments carry inherent risk. Past performance does not
          guarantee future results. This document outlines key risks every
          investor must consider.
        </p>
      </div>

      {/* Content */}
      <div style={{ padding: "28px 48px", flex: 1 }}>
        {/* Intro block */}
        <div
          style={{
            background: "#111",
            borderLeft: "3px solid #c8a96e",
            padding: "18px 20px",
            marginBottom: "28px",
          }}
        >
          <p
            style={{
              fontSize: "13.5px",
              lineHeight: 1.7,
              color: "#ccc",
              fontWeight: 300,
            }}
          >
            <strong style={{ color: "#f0ece3", fontWeight: 600 }}>
              Capital at risk.
            </strong>{" "}
            Investing involves the risk that you may get back less than you
            originally invested — including the possible loss of your entire
            capital. The value of investments can fall as well as rise. You
            should never invest money you cannot afford to lose, and you should
            ensure that any investment aligns with your financial goals, time
            horizon, and risk tolerance.
          </p>
        </div>

        {/* Section label */}
        <SectionLabel>Key Risk Factors</SectionLabel>

        {/* Risks grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
            marginBottom: "28px",
          }}
        >
          {risks.map((risk) => (
            <div
              key={risk.num}
              style={{
                background: "#111",
                border: "0.5px solid #222",
                padding: "16px 18px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Ghost number */}
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  top: "-1px",
                  right: "14px",
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "40px",
                  fontWeight: 900,
                  color: "#1a1a1a",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {risk.num}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-source), sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#c8a96e",
                  marginBottom: "6px",
                }}
              >
                {risk.title}
              </h3>
              <p
                style={{
                  fontSize: "12px",
                  lineHeight: 1.6,
                  color: "#999",
                  fontWeight: 300,
                }}
              >
                {risk.body}
              </p>
            </div>
          ))}
        </div>

        {/* Section label */}
        <SectionLabel>Sobering Figures Every Investor Should Know</SectionLabel>

        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "12px",
            marginBottom: "28px",
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.number}
              style={{
                background: "#111",
                border: "0.5px solid #222",
                padding: "16px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "30px",
                  fontWeight: 700,
                  color: "#c8a96e",
                  display: "block",
                  lineHeight: 1,
                  marginBottom: "4px",
                }}
              >
                {stat.number}
              </span>
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 400,
                  color: "#666",
                  lineHeight: 1.4,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Section label */}
        <SectionLabel>Principles for Responsible Investing</SectionLabel>

        {/* Principles row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
            marginBottom: "28px",
          }}
        >
          {principles.map((p) => (
            <div
              key={p.title}
              style={{
                borderTop: "2px solid #2a2a2a",
                paddingTop: "12px",
              }}
            >
              <h4
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#f0ece3",
                  marginBottom: "5px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                {p.title}
              </h4>
              <p
                style={{
                  fontSize: "11px",
                  lineHeight: 1.5,
                  color: "#666",
                  fontWeight: 300,
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div
          style={{
            background: "#0e0e0e",
            border: "0.5px solid #1e1e1e",
            padding: "16px 20px",
            marginBottom: "20px",
          }}
        >
          <p
            style={{
              fontSize: "10.5px",
              lineHeight: 1.65,
              color: "#666",
              fontWeight: 300,
            }}
          >
            <strong style={{ color: "#999", fontWeight: 600 }}>
              Regulatory Disclaimer:
            </strong>{" "}
            This document is for informational purposes only and does not
            constitute financial, investment, legal, or tax advice. It should
            not be relied upon as the basis for any investment decision.
            Investment products are not bank deposits and are not insured by any
            government or regulatory body. Returns are not guaranteed. You
            should carefully read all offering documents, prospectuses, and
            terms and conditions before investing. If you are uncertain about
            any investment, seek independent professional advice from a
            qualified and authorised financial adviser regulated in your
            jurisdiction. Past performance is not a reliable indicator of future
            results. The value of investments and any income from them can go
            down as well as up.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          padding: "16px 48px",
          borderTop: "0.5px solid #1e1e1e",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontSize: "9px",
            color: "#444",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          Investment Risk Disclosure — For Investor Use Only
        </span>
        <span
          style={{
            fontSize: "9px",
            color: "#444",
            letterSpacing: "1px",
          }}
        >
          This is not an offer or solicitation to buy or sell any security
        </span>
      </div>

      {/* Bottom accent bar */}
      <div
        style={{
          height: "4px",
          background:
            "linear-gradient(90deg, #2a1800 0%, #c8a96e 50%, #2a1800 100%)",
          width: "100%",
          flexShrink: 0,
        }}
      />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: "9px",
        fontWeight: 600,
        letterSpacing: "3px",
        textTransform: "uppercase",
        color: "#c8a96e",
        marginBottom: "14px",
        fontFamily: "var(--font-source), sans-serif",
      }}
    >
      {children}
    </p>
  );
}
