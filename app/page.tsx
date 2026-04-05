"use client";

import { useState } from "react";
import About from "@/components/Home/About";
import FAQ from "@/components/Home/FAQ";
import Hero from "@/components/Home/Hero";
import Sectors from "@/components/Home/Sectors";
import InvestmentRiskModal from "@/components/InvestmentRiskFlyer";

export default function Home() {
  const [showModal, setShowModal] = useState(true);

  return (
    <main className="w-full font-[PPFONT]">
      {showModal && <InvestmentRiskModal onClose={() => setShowModal(false)} />}
      <Hero />
      <About />
      <Sectors />
      <FAQ />
    </main>
  );
}