"use client";
import { useEffect, useState } from "react";
import Hero from "@/components/Home/Hero";
import Stats from "@/components/Home/stats";
import InvestmentRiskModal from "@/components/InvestmentRiskFlyer";
import Firm from "@/components/Home/firm";
import UnlistedMarket from "@/components/Home/unlistedmarket";
import ScrollingHeadline from "@/components/Home/ScrollingHeadline";
import Devider from "@/components/Home/devider";



export default function Home() {
  const [showModal, setShowModal] = useState(false);
  //delay of 2 second for loader animation to finish
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 2000)
  }, [])

  return (
    <main className="w-full font-[PPFONT]">
      {showModal && <InvestmentRiskModal onClose={() => setShowModal(false)} />}
      <Hero />
      <Stats />
      <Firm /> 
      <Devider />
      <UnlistedMarket />
      <ScrollingHeadline />
    </main>
  );
}
