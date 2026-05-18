 "use client";

import { useEffect } from "react";
import SCROLLING_HEADLINE from "@/components/Home/ScrollingHeadline";
import OurStoryIntro from "@/components/our-story/ourstoryintro";
import Leadership from "@/components/our-story/leadership";
import OurStoryHero from "@/components/our-story/ourstoryhero";
import StoryStats from "@/components/our-story/ourstorystats";
import Info from "@/components/our-story/info";


export default function OurStoriesPage() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const target = document.querySelector(hash);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <main className="bg-white text-[#1a1714] font-montserrat">
      <OurStoryHero />
  
     <Info />
      
      <StoryStats />
      <Leadership />
    
  
    </main>
  );
}
