"use client";

import Pagehero from "@/components/ui/heropages";

export default function OurStoryHero() {
  return (
    <Pagehero
      title={["Greatness Is Not Born", "It Is Built"]}
      description="We do not just read balance sheets. We understand what it takes to build a business and weather a cycle."
      backgroundImage="/gif/gifanimated.gif"
      backgroundImageClassName="object-contain opacity-16"
      heightClassName="h-[80vh]"
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
