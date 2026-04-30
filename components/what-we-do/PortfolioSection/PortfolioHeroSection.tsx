"use client";

import ProjectsHero from "@/components/Projects/ProjectsHero";

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
