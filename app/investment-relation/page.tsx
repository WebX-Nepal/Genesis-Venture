"use client";

import InvestorIntro from "@/components/InvestorRelations/InvestorIntro";
import ReportsAndUpdates from "@/components/InvestorRelations/ReportsAndUpdates";
import ScrollingHeadline from "@/components/Home/ScrollingHeadline";

export default function InvestorRelationsPage() {
  return (
    <main className="w-full">
      <InvestorIntro />
      <ReportsAndUpdates />
      <ScrollingHeadline />
    </main>
  );
}
