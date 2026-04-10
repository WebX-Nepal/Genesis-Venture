"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import InfoSection from "../ui/InfoSection";
import BannerSection from "../ui/BannerSection";
gsap.registerPlugin(SplitText, ScrollTrigger);

const reports = [
  {
    id: 1,
    type: "Annual Report",
    date: "2025",
    title: "Annual Report 2025",
    description:
      "A comprehensive overview of our investment activities, portfolio performance, and key strategic milestones achieved throughout 2025. This report highlights fund growth, major partnerships, and insights into how our long-term vision continues to drive sustainable value creation across diverse markets.",
    badge: "2025",
    image: "/images/relations/reports.jpeg"
  },
  {
    id: 2,
    type: "Performance Update",
    date: "Q2 2026",
    title: "Q2 2026 Performance Update",
    description:
      "A detailed summary of portfolio performance for the second quarter of 2026, covering key financial metrics, sector-wise trends, and capital allocation strategies. This update provides transparency into short-term progress while aligning with our broader investment objectives and growth outlook.",
    badge: "Q2 2026",
    image: "/images/relations/performance.jpeg"
  },
  {
    id: 3,
    type: "Portfolio Overview",
    date: "2026",
    title: "Portfolio Overview",
    description:
      "An in-depth snapshot of our global portfolio, showcasing companies across various stages, industries, and regions. This overview highlights operational progress, innovation milestones, and the collective impact of our investments across 12 countries.",
    badge: "2026",
    image: "/images/relations/portfolio.png"
  },
  {
    id: 4,
    type: "Market Outlook",
    date: "2026",
    title: "Market Outlook Report",
    description:
      "A forward-looking analysis of emerging market trends, high-growth sectors, and macroeconomic shifts shaping the investment landscape. This report provides strategic insights and forecasts to help identify opportunities and guide decision-making in the year ahead.",
    badge: "2026",
    image: "/images/grow.png"
  },
];

const ReportsAndUpdates = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const splitTitle = new SplitText(".report-heading", { type: "words" });

    gsap.from(splitTitle.words, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "top top",
        scrub: true,
      },
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
      stagger: 0.05,
      duration: 1,
      ease: "power3.out",
    });

    return () => {
      splitTitle.revert();
    };
  });

  return (
    <section
      ref={containerRef}
      className="min-h-screen w-full bg-white flex flex-col px-4 xs:px-6 sm:px-8 md:px-16 py-8 sm:p5-12 md:pt-20 overflow-hidden"
    >
      <div className="flex items-start justify-between border-b border-gray-200 pb-3 sm:pb-4 md:pb-6">
        <span className="report-heading text-xs uppercase tracking-widest text-gray-500 font-poppins">
          Reports & Updates
        </span>
      </div>

      <InfoSection
        title="Annual Report 2025"
        description="A comprehensive overview of our investment activities, portfolio performance, and key strategic milestones achieved throughout 2025. This report highlights fund growth, major partnerships, and insights into how our long-term vision continues to drive sustainable value creation across diverse markets."
        button="DOWNLOAD PDF"
        link="/About"
        image="/images/relations/performance.png"
      />

      <BannerSection bgImage="/images/relations/performance.png" title="Performance you can measure. Strategy you can trust" />

      <InfoSection
        title="Portfolio Overview"
        description="An in-depth snapshot of our global portfolio, showcasing companies across various stages, industries, and regions. This overview highlights operational progress, innovation milestones, and the collective impact of our investments across 12 countries."
        button="DOWNLOAD PDF"
        link="/About"
        image="/images/relations/portfolio.png"
        variant="reversed"
      />

      <BannerSection bgImage="/images/grow.png" title="Guiding investment decisions through market insight" />

    </section >
  );
};

export default ReportsAndUpdates;
