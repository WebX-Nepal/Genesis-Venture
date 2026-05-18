"use client";

import Pagehero from "@/components/ui/heropages";

export default function OurStoryHero() {
  return (
    <Pagehero
      title={["Greatness Is Not Born", "It Is Built"]}
      description="We do not just read balance sheets. We understand what it takes to build a business and weather a cycle."
      backgroundImage="/gif/gifanimated.gif"
      backgroundImageClassName="object-contain opacity-20"
      heightClassName="h-[80vh]"
      overlayClassName="bg-transparent"
      contentOffsetClassName="mt-6 md:mt-10"
      baseClassName="bg-transparent"
      showVideoFallback={false}
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Our Stories" },
      ]}
    />
  );
}
