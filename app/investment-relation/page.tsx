"use client";

import InvestorIntro from "@/components/InvestorRelations/InvestorIntro";
import ReportsAndUpdates from "@/components/InvestorRelations/ReportsAndUpdates";
import ScrollingHeadline from "@/components/Home/ScrollingHeadline";

export default function InvestorRelationsPage() {
  return (
    <main className="w-full overflow-x-hidden bg-[#f5f7fb] text-[#2c2c34] font-montserrat">
      <InvestorIntro />
      <ReportsAndUpdates />
      <ScrollingHeadline />
    </main>
  );
}
