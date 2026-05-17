"use client";

import ReportsAndUpdates from "@/components/InvestorRelations/ReportsAndUpdates";
import ScrollingHeadline from "@/components/Home/ScrollingHeadline";
import HeroPage from "@/components/ui/HeroPage";

export default function InvestorRelationsPage() {
  return (
    <main className="w-full">
      <HeroPage
        title={
          <>
            Clear Insight Into Capital,
            <br />
            Performance, And Strategy.
          </>
        }
        titleClassName="font-agatho text-[clamp(1.5rem,5.8vw,3.8rem)] font-medium leading-tight tracking-wide text-center text-[#173053]"
        backgroundVideo="/videos/texture.mp4"
        heightClassName="h-[60vh] md:h-screen pt-20 xs:pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 md:pb-12"
      />
      <ReportsAndUpdates />
      <ScrollingHeadline />
    </main>
  );
}
