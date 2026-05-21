"use client";

import ReportsAndUpdates from "@/components/InvestorRelations/ReportsAndUpdates";
import ScrollingHeadline from "@/components/Home/ScrollingHeadline";
import Pagegoer from "@/components/ui/heropages";

export default function InvestorRelationsPage() {
  return (
    <main className="w-full bg-white">
      <Pagegoer
        title={["Clear Insight Into Capital Performance, And Strategy."]}
        description="Our investor relations platform delivers timely updates, transparent reporting, and clear access to portfolio disclosures so partners stay aligned with long-term strategy and performance."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Investor Relations" },
        ]}
        backgroundVideo="/videos/texture.mp4"
        heightClassName="min-h-[80vh] h-auto"
        overlayClassName="bg-[#001D3F]/60"
        contentOffsetClassName="mt-6 md:mt-10"
        baseClassName="bg-transparent"
        showVideoFallback={false}
      />
      <ReportsAndUpdates />
      <ScrollingHeadline />
    </main>
  );
}
