"use client";

import Pagehero from "@/components/ui/heropages";

export default function OurStoryHero() {
  return (
    <Pagehero
      title={["Greatness Is Not Born", "It Is Built"]}
      description="We do not just read balance sheets. We understand what it takes to build a business and weather a cycle."
      // backgroundVideo="/videos/newstory.mp4"
      backgroundImageClassName="object-cover"
      heightClassName="h-screen"
      overlayClassName="bg-[#001D3F]/50"
      backgroundImage="/pageimage/story.png"
      baseClassName="bg-genesis-navy"
      showVideoFallback={false}
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Our Stories" },
      ]}
    />
  );
}
