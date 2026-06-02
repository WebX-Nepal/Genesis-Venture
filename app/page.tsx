"use client";
import { useEffect, useState } from "react";
import Hero from "@/components/Home/Hero";
import Stats from "@/components/Home/stats";
import InvestmentRiskModal from "@/components/InvestmentRiskFlyer";
import UnlistedMarket from "@/components/Home/unlist";
import About from "@/components/Home/newabout";
import Devider from "@/components/Home/devider";




export default function Home() {
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 4000)
  }, [])
  return (
    <main className="w-full font-[PPFONT]">
      {showModal && <InvestmentRiskModal onClose={() => setShowModal(false)} />}
      <Hero />
      <Stats />
      <About />
      <Devider />
      <UnlistedMarket />
    </main>
  );
}
