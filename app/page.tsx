"use client";
import { useState } from "react";
import Hero from "@/components/Home/Hero";
import Stats from "@/components/Home/stats";
import InvestmentRiskModal from "@/components/InvestmentRiskFlyer";
import Firm from "@/components/Home/firm";
import UnlistedMarket from "@/components/Home/unlistedmarket";
import ScrollingHeadline from "@/components/Home/ScrollingHeadline";
import Devider from "@/components/Home/devider";



export default function Home() {
  const [showModal, setShowModal] = useState(true);

  return (
    <main className="w-full font-[PPFONT]">
      {showModal && <InvestmentRiskModal onClose={() => setShowModal(false)} />}
      <Hero />
      <Stats />
      <div className="mt-8 flex flex-col  pb-20">
        <Firm />
        <div className="mt-8 sm:mt-10 md:mt-12">
          <Devider />
          <UnlistedMarket />
        </div>
      </div>
      <ScrollingHeadline />
    </main>
  );
}
