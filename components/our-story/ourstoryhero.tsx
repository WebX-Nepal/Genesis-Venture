"use client";

import Pagehero from "@/components/ui/heropages";

export default function OurStoryHero() {
  return (
    <Pagehero
      title={["Greatness Is Not Born", "It Is Built"]}
      description="Our story is built through patient execution, principled decisions, and long-term partnerships that compound trust over time."
      backgroundVideo="/videos/texture.mp4"
      heightClassName="h-[80vh]"
      overlayClassName="bg-transparent"
      contentOffsetClassName="mt-6 md:mt-10"
      baseClassName="bg-transparent"
      showVideoFallback={false}
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Our Story" },
      ]}
    />
  );
}
