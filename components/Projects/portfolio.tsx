"use client";
import { useEffect } from "react";
import { useHeroVideoLoad } from "@/context/HeroVideoLoadContext";
import Pagegoer from "../ui/heropages";

const PortfolioHeroSection = () => {
  const { setHeroVideoReady } = useHeroVideoLoad();

  useEffect(() => {
    setHeroVideoReady(true);
    return () => setHeroVideoReady(true);
  }, [setHeroVideoReady]);
  return (
    <Pagegoer
      title={["A Disciplined Portfolio Built On Conviction, Not Consensus."]}
      description="Genesis Ventures deploys long-term capital into unlisted businesses across six sectors. Every position is the result of independent research, direct engagement with management, and a clear view on intrinsic value."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "What We Do", href: "/what-we-do/portfolio" },
        { label: "Portfolio" },
      ]}
      backgroundImage="/gif/download.gif"
      backgroundImageAlt="Portfolio hero background"
      heightClassName="h-screen"
      overlayClassName="bg-[#001D3F]/60"
      baseClassName="bg-white"
      crumbsContainerClassName="text-white/90"
      crumbLinkClassName="text-white hover:text-white/80"
      crumbCurrentClassName="text-[#8D1E39]"
      crumbSeparatorClassName="text-white/90"
      lastCrumbSeparatorClassName="text-[#8D1E39]"
    />
  );
};

export default PortfolioHeroSection;
