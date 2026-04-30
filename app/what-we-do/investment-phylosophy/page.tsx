"use client";
import Link from "next/link";
import Button from "@/components/ui/Button2";
import HeroPage from "@/components/ui/HeroPage";
import InvestmentPhilosophy from "@/components/About/InvestmentPhilosophy";

const heroStats = [
  { value: "NPR 1B+", desc: "Assets Under Management" },
  { value: "25+", desc: "Years of Experience" },
  { value: "20+", desc: "Portfolio Companies" },
  { value: "3", desc: "IPO" },
];

const redBandItems = [
  "Conflict-Free and Fiduciary",
  "Client Interests - First, Last and Always",
  "Long-Horizon. No Short-Term Pressure.",
];

const beliefCards = [
  {
    no: "01",
    title: "Your interests are the only interests",
    body: "We earn no commissions, hold no proprietary positions that compete with your portfolio, and accept no payments from third parties for directing your capital. Our only revenue is the fee you pay us. Full stop.",
  },
  {
    no: "02",
    title: "Honesty in difficult moments",
    body: "We will tell you when a market is overvalued even if it means watching the index rally without you. We will flag risk before it materialises, not after. We will never dress up a bad outcome with reassuring language. You deserve the truth - especially when it is uncomfortable.",
  },
  {
    no: "03",
    title: "Discipline over narrative",
    body: "We do not chase themes, trends, or the comfort of consensus. Investment decisions at Genesis Ventures are made through documented, stress-tested process - not conviction built from a compelling story. If the numbers do not support it, neither do we.",
  },
];

export default function InvestmentPhylosophyPage() {
  return (
    <main className="bg-white text-[#2c2c34] font-poppins">
      <HeroPage title="Investment Philosophy" />
      <section className="relative overflow-hidden bg-[#f2f3f5]">
        <div className="layout-7xl relative py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
            <span className="inline-flex items-center gap-3 font-poppins text-[11px] font-medium tracking-[0.28em] uppercase text-[#8D1E39]">
              Investment Philosophy
            </span>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#8D1E39] font-poppins lg:pl-14 lg:text-left">
              Our Commitment
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-start">
              <h1 className="mt-0 sm:mt-1 font-[PPFONT] text-[1.7rem] sm:text-[2rem] leading-[1.55] tracking-[-0.01em] text-[#08112a] font-medium">
                <span className="block">Integrity before</span>
                <span className="block italic text-[#8D1E39] font-medium">
                  returns. Always.
                </span>
              </h1>

              <p className="mt-6 sm:mt-9 max-w-[560px] text-[16px] sm:text-[17px] leading-[1.55] text-[#08112a]">
                Genesis Ventree Ltd. is an independent investment firm that
                places your interests above all else - including our own. In a
                world where performance is routinely promised and seldom earned,
                we have chosen a different measure of success: trust.
              </p>

              <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5">
                <Link href="#beliefs">
                  <Button
                    variant="primary"
                    size="md"
                    className="inline-flex items-center justify-center gap-2 bg-[#8D1E39] px-4 py-2.5 font-poppins text-[11px] font-medium uppercase tracking-[0.12em] text-white transition-all duration-350 hover:bg-[#a52344] sm:px-6 sm:py-3"
                  >
                    What We Believe
                  </Button>
                </Link>
                <Link href="/Contacts">
                  <Button
                    variant="primary"
                    size="md"
                    className="inline-flex items-center justify-center gap-2 border border-[#173053] bg-[#173053] px-4 py-2.5 font-poppins text-[11px] font-medium uppercase tracking-[0.12em] text-white transition-all duration-350 hover:bg-[#173053] sm:px-6 sm:py-3"
                  >
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-start lg:pl-14">
              <div className="border-b border-[#1a2e4a]/15 pb-8 sm:pb-10">
                <blockquote className="font-[PPFONT] text-[1.7rem] sm:text-[2rem] italic leading-[1.55] text-[#102347]">
                  &quot;We will never recommend what is profitable for us over
                  what is
                  <span className="not-italic">
                    {" "}
                    right for you.
                  </span>{" "}
                  That is not a policy - it is the reason we exist.&quot;
                </blockquote>
              </div>
            </div>
          </div>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {heroStats.map((stat) => (
              <div
                key={stat.desc}
                className="bg-[#173053] px-5 py-7 transition hover:bg-[#173053]"
              >
                <p className="font-[PPFONT] text-[1.9rem] sm:text-[2.1rem] leading-none text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.08em] text-white/85 font-poppins leading-tight">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4 bg-[#8D1E39] px-6 py-6 text-white sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        {redBandItems.map((item, idx) => (
          <div
            key={item}
            className="flex items-center gap-3 lg:flex-1 lg:justify-center"
          >
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p className="text-xs font-medium uppercase tracking-[0.08em] text-white/90">
              {item}
            </p>
            {idx !== redBandItems.length - 1 && (
              <span className="ml-5 hidden h-7 w-px bg-white/30 lg:block" />
            )}
          </div>
        ))}
      </section>
      <section
        id="beliefs"
        className="bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
      >
        <div className="layout-7xl">
          <div className="mb-12 grid grid-cols-1 gap-8 border-b border-[#8D1E39] pb-10 lg:grid-cols-[420px_1fr] lg:gap-20">
            <div>
              <p className="mb-4 inline-flex items-center text-[11px] font-medium uppercase tracking-[0.28em] text-[#8D1E39] font-poppins">
                What We Believe
              </p>
              <h2 className="font-[PPFONT] text-[1.7rem] sm:text-[2rem] leading-[1.45] tracking-[-0.01em] text-[#08112a]">
                We are not in
                <br />
                the business of
                <br />
                <em className="text-[#8D1E39]">selling confidence.</em>
              </h2>
            </div>

            <div className="pt-1 text-[#616877] font-poppins">
              <p className="mb-4 text-[14px] sm:text-[15px] leading-7">
                Most firms measure themselves by the returns they generate. We
                measure ourselves by something harder to fake: whether our
                clients can look back a decade from now and say that Genesis
                Ventree was the most honest partner they ever had in financial
                life.
              </p>
              <p className="text-[14px] sm:text-[15px] leading-7">
                Performance follows integrity - not the other way around. When
                advice is given free of conflicts, when fees are transparent, and
                when a firm has the discipline to say &quot;we do not know&quot;
                rather than bluff,
                <strong className="font-semibold text-[#08112a]">
                  {" "}
                  better decisions get made
                </strong>
                . That is the foundation of everything we do.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px bg-[#8D1E39] md:grid-cols-2 xl:grid-cols-3">
            {beliefCards.map((card) => (
              <article
                key={card.no}
                className="group cursor-pointer bg-white px-8 py-12 transition-colors duration-300 hover:bg-[#162F54]"
              >
                <p className="mb-6 font-poppins text-5xl font-light leading-none text-[#e8edf5] transition-colors duration-300 group-hover:text-[#8D1E39]">
                  {card.no}
                </p>
                <h3 className="mb-3 font-[PPFONT] text-[1.2rem] sm:text-[1.35rem] leading-[1.2] text-[#08112a] transition-colors duration-300 group-hover:text-white">
                  {card.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] leading-7 text-[#616877] font-poppins transition-colors duration-300 group-hover:text-white/85">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

        <InvestmentPhilosophy />

      <style jsx global>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </main>
  );
}
