"use client";

import ProjectsHero from "@/components/Projects/portfolio";

type HeroStat = {
  value: string;
  desc: string;
};

interface PortfolioHeroSectionProps {
  heroStats: HeroStat[];
}
export default function PortfolioHeroSection({
  heroStats: _heroStats,
}: PortfolioHeroSectionProps) {
  return <ProjectsHero />;
}
