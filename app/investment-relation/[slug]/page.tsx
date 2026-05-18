import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import ScrollingHeadline from "@/components/Home/ScrollingHeadline";
import QuarterlyResultsDetail from "@/components/InvestorRelations/QuarterlyResultsDetail";
import { allInvestorReportCards } from "@/components/InvestorRelations/reportsData";

type InvestorRelationDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function InvestorRelationDetailPage({ params }: InvestorRelationDetailPageProps) {
  const { slug } = await params;
  const report = allInvestorReportCards.find((item) => item.slug === slug);
  if (!report) notFound();

  return (
    <main className="w-full bg-white">
      <section className="layout-7xl pb-24 pt-16 sm:pb-28 sm:pt-20">
        <div className="flex flex-wrap items-center gap-2 text-sm text-[#162e54]/80">
          <Link href="/" className="transition-colors hover:text-[#8D1E39]">
            Home
          </Link>
          <ChevronRight size={14} className="text-[#162e54]/45" />
          <Link
            href="/investment-relation"
            className="transition-colors hover:text-[#8D1E39]"
          >
            Investor Relations
          </Link>
          <ChevronRight size={14} className="text-[#162e54]/45" />
          <span className="text-[#8D1E39]">{report.title}</span>
        </div>
        <h1 className="mt-5 font-agatho text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.1] text-[#162e54]">{report.title}</h1>
        <p className="mt-5 max-w-[74ch] text-[1.05rem] leading-relaxed text-[#162e54]/80">{report.summary}</p>

        {report.slug === "quarterly-results" ? (
          <QuarterlyResultsDetail reportFile={report.file} />
        ) : (
          <div className="mt-10 border border-[#162e54]/20 bg-[#f8f9fb] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.04em] text-[#8D1E39]">Report File</p>
            <p className="mt-2 break-all font-montserrat text-[#162e54]">{report.file}</p>
            <a
              href={`/reports/${report.file}`}
              download
              className="mt-6 inline-flex items-center bg-[#162e54] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#8D1E39]"
            >
              Download Report
            </a>
          </div>
        )}
      </section>
      <ScrollingHeadline />
    </main>
  );
}
