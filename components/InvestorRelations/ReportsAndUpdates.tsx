"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BadgeDollarSign, ExternalLink, Factory, FileText, Sprout, TrendingUp } from "lucide-react";
import ReportsSidebar from "./ReportsSidebar";
import FinancialReportingSection from "./FinancialReportingSection";
import { shareholderCards, type ReportCardItem } from "./reportsData";

gsap.registerPlugin(ScrollTrigger);

export default function ReportsAndUpdates() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const shareholderAnnouncements = [
    {
      date: "May 16, 2026",
      title: "Genesis Secretarial Compliance Report - 2026",
      file: "Genesis-Secretarial-Compliance-Report-2026.pdf",
    },
    {
      date: "May 12, 2026",
      title: "Publication of Notice Re: Transfer of Unclaimed Dividend and Ordinary Shares to IEPF",
      file: "Transfer-of-Unclaimed-Dividend-and-Shares-Notice-2026.pdf",
    },
    {
      date: "May 07, 2026",
      title: "Notice of Board Meeting",
      file: "Notice-of-Board-Meeting-May-2026.pdf",
    },
    {
      date: "May 07, 2026",
      title: "Amalgamation of Sresta Natural Bioproducts Private Limited and Wimco Limited with the Company",
      file: "Amalgamation-Update-Sresta-Wimco-2026.pdf",
    },
  ] as const;

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
          defaults: { ease: "power2.out", duration: 0.5 },
        })
        .from(".ir-left-panel", { autoAlpha: 0 }, "-=0.2")
        .from(".ir-copy", { y: 10, autoAlpha: 0 }, "-=0.2");
    },
    { scope: sectionRef }
  );

  const renderBlueCards = (cards: readonly ReportCardItem[]) => (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.slug}
          className="flex min-h-[180px] items-center justify-center bg-[#162e54] p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:bg-[#8D1E39] hover:shadow-[0_16px_32px_rgba(22,46,84,0.35)]"
        >
          <p className="max-w-[13ch] text-[1.2rem] font-semibold leading-[1.2] text-white sm:text-[1.35rem]">
            {card.title}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <section ref={sectionRef} className="w-full bg-white py-10 sm:py-12">
      <div className="layout-7xl">
        <h2 className="mb-7 text-center font-agatho text-[clamp(1.7rem,3.1vw,2.6rem)] font-semibold text-[#162e54]">
          Investor Relations
        </h2>
        <ReportsSidebar activeTab={activeTab} onTabClick={setActiveTab} />

        <div className="ir-copy pb-14 pt-8 text-center font-montserrat sm:pb-16">
          {activeTab === 0 ? <FinancialReportingSection /> : null}

          {activeTab === 1 ? (
            <section>
              {renderBlueCards(shareholderCards)}
              {/* <div className="mt-10 rounded-none bg-zinc-100 p-5 text-left sm:p-6">
                <h4 className="font-montserrat text-[clamp(1.45rem,2.5vw,2rem)] font-semibold text-[#162e54]">
                  Stock Exchange Announcements
                </h4>
                <p className="mt-2 text-[1.02rem] text-[#162e54]/80">
                  Get all the latest Genesis stock market news and updates in one place.
                </p>
                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {shareholderAnnouncements.map((item) => (
                    <a
                      key={`${item.date}-${item.title}`}
                      href={`/reports/${item.file}`}
                      download
                      className="border border-[#d5dbe5] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(22,46,84,0.12)]"
                    >
                      <p className="font-montserrat text-[1.9rem] font-semibold uppercase tracking-[0.01em] text-[#162e54]">
                        {item.date}
                      </p>
                      <div className="mt-3 flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <FileText size={19} className="mt-1 text-[#8D1E39]" />
                          <p className="font-montserrat text-[1.04rem] leading-relaxed text-[#162e54]">
                            {item.title}
                          </p>
                        </div>
                        <ExternalLink size={21} className="shrink-0 text-[#8D1E39]" />
                      </div>
                    </a>
                  ))}
                </div>
              </div> */}
            </section>
          ) : null}

          {activeTab === 2 ? (
            <section>
              <h3 className="mb-5 font-montserrat text-[1.7rem] font-medium text-[#162e54]">Investor Service Centre</h3>
              <div className="mx-auto mt-8 max-w-6xl space-y-5 text-left">
                <p className="text-[1.05rem] leading-relaxed text-[#162e54]/85">
                  Genesis Investor Service Centre (ISC), managed by Genesis Ventures Ltd., supports shareholders
                  and investors through dedicated assistance for account updates, communication requests, and
                  investor documentation services. Our team is committed to timely resolution backed by robust
                  operational processes and transparent communication standards.
                </p>
                <p className="text-[1.05rem] leading-relaxed text-[#162e54]/85">
                  The Investor Service Centre continually improves service quality through trained personnel,
                  process discipline, and compliance-oriented controls aligned with applicable regulatory
                  expectations.
                </p>

                <div className="grid grid-cols-1 gap-4 pt-2 md:grid-cols-2">
                  <article className="border border-[#d9e0ea] bg-zinc-100 p-5 sm:p-6">
                    <h4 className="font-montserrat text-[1.15rem] font-semibold text-[#162e54]">
                      Address for correspondence with ISC
                    </h4>
                    <div className="mt-4 space-y-1 text-[1.02rem] leading-relaxed text-[#162e54]/90">
                      <p>Investor Service Centre</p>
                      <p>Genesis Ventures Ltd.</p>
                      <p>Dharan Road, Biratnagar</p>
                      <p>Koshi Province, Nepal</p>
                    </div>
                  </article>

                  <article className="border border-[#d9e0ea] bg-zinc-100 p-5 sm:p-6">
                    <h4 className="font-montserrat text-[1.15rem] font-semibold text-[#162e54]">
                      Email for assistance and grievance redressal
                    </h4>
                    <div className="mt-4 grid grid-cols-1 gap-4 text-[1.02rem] text-[#162e54]/90 md:grid-cols-2">
                      <p>Service Hours: 9:30 a.m. to 1:00 p.m. and 2:00 p.m. to 5:30 p.m. (Monday to Friday)</p>
                      <p>Phone: +977 9851418843</p>
                      <p className="md:col-span-2">Email: info@genesisventures.com.np</p>
                    </div>
                  </article>
                </div>
              </div>
            </section>
          ) : null}

          <section className="mt-20 text-center">
            <h3 className="font-montserrat text-[clamp(1.45rem,2.3vw,2rem)] font-semibold leading-tight text-[#162e54]">
              Genesis At A Glance
            </h3>
            <p className="mx-auto mt-6 max-w-[110ch] text-[1.08rem] leading-relaxed text-[#162e54]/80">
              Genesis Ventures Ltd. is a private markets investment company focused on unlisted equity
              opportunities across high-growth sectors. We partner with promising businesses from growth stage
              to pre-IPO, with a disciplined long-term approach designed to create sustainable value for our
              investors.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <article className="flex flex-col items-center border border-[#8D1E39]/35 bg-zinc-100 px-5 py-6 transition-shadow duration-200 hover:shadow-[0_12px_24px_rgba(22,46,84,0.14)]">
                <BadgeDollarSign className="mb-3 text-[#8D1E39]" size={42} strokeWidth={2.1} />
                <p className="font-montserrat text-[1.15rem] font-semibold text-[#8D1E39]">Funds Deployed</p>
                <p className="mt-4 font-montserrat text-[2.2rem] font-semibold leading-none text-[#162e54]">80 +</p>
                <p className="mt-1 font-montserrat text-[1rem] font-semibold text-[#162e54]">Crores</p>
              </article>
              <article className="flex flex-col items-center border border-[#8D1E39]/35 bg-zinc-100 px-5 py-6 transition-shadow duration-200 hover:shadow-[0_12px_24px_rgba(22,46,84,0.14)]">
                <TrendingUp className="mb-3 text-[#8D1E39]" size={42} strokeWidth={2.1} />
                <p className="font-montserrat text-[1.15rem] font-semibold text-[#8D1E39]">Largest Holding</p>
                <p className="mt-4 font-montserrat text-[1.25rem] font-semibold leading-none text-[#162e54]">Maruti Cement Ltd.</p>

                <p className="mt-4 font-montserrat text-[2.2rem] font-semibold leading-none text-[#162e54]">14.14</p>
                <p className="mt-1 font-montserrat text-[1rem] font-semibold text-[#162e54]">Crores</p>
              </article>
              <article className="flex flex-col items-center border border-[#8D1E39]/35 bg-zinc-100 px-5 py-6 transition-shadow duration-200 hover:shadow-[0_12px_24px_rgba(22,46,84,0.14)]">
                <Factory className="mb-3 text-[#8D1E39]" size={42} strokeWidth={2.1} />
                <p className="font-montserrat text-[1.15rem] font-semibold text-[#8D1E39]">Number of Investments Made Last Quarter</p>
                <p className="mt-4 font-montserrat text-[2.2rem] font-semibold leading-none text-[#162e54]">5</p>
                <p className="mt-1 font-montserrat text-[1rem] font-semibold text-[#162e54]">Businesses</p>
              </article>
              <article className="flex flex-col items-center border border-[#8D1E39]/35 bg-zinc-100 px-5 py-6 transition-shadow duration-200 hover:shadow-[0_12px_24px_rgba(22,46,84,0.14)]">
                <Sprout className="mb-3 text-[#8D1E39]" size={42} strokeWidth={2.1} />
                <p className="font-montserrat text-[1.15rem] font-semibold text-[#8D1E39]">Funds Deployed Last Quarter</p>
                <p className="mt-4 font-montserrat text-[2.2rem] font-semibold leading-none text-[#162e54]">8</p>
                <p className="mt-1 font-montserrat text-[1rem] font-semibold text-[#162e54]">Crores</p>
              </article>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
