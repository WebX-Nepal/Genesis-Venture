import SCROLLING_HEADLINE from "@/components/Home/ScrollingHeadline";
import OurStoryIntro from "@/components/our-story/ourstoryintro";
import Leadership from "@/components/our-story/leadership";
import OurStoryHero from "@/components/our-story/ourstoryhero";
import StoryStats from "@/components/our-story/ourstorystats";
import Info from "@/components/our-story/info";


export default function OurStoriesPage() {
  return (
    <main className="bg-white text-[#1a1714] font-montserrat">
      <OurStoryHero />
  
     <Info />
      
      <StoryStats />
      <Leadership />
    
  
    </main>
  );
}
