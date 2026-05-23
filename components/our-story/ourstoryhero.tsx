"use client";

import Pagehero from "@/components/ui/heropages";

export default function OurStoryHero() {
  return (
    <Pagehero
      title={["Greatness Is Not Born", "It Is Built"]}
      description="We do not just read balance sheets. We understand what it takes to build a business and weather a cycle."
      backgroundVideo="/videos/newstory.mp4"
      backgroundImageClassName="object-contain opacity-16"
      heightClassName="h-screen"
      overlayClassName="bg-[#001D3F]/50"
      baseClassName="bg-transparent"
      showVideoFallback={false}
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Our Stories" },
      ]}
    />
  );
}
