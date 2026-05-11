"use client";

import Title from "@/components/ui/Title";
import { useEffect, useState } from "react";
import { useHeroVideoLoad } from "@/context/HeroVideoLoadContext";

export default function HeroVideo() {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const { setHeroVideoReady } = useHeroVideoLoad();

  useEffect(() => {
    setHeroVideoReady(false);
    return () => setHeroVideoReady(true);
  }, [setHeroVideoReady]);

  return (
    <section className="relative min-h-[60vh] w-full overflow-hidden md:min-h-screen">
      {!isVideoReady ? (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-[#0a1634] via-[#13356f] to-[#102852]" />
      ) : null}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedData={() => {
          setIsVideoReady(true);
          setHeroVideoReady(true);
        }}
        className={`absolute inset-0 h-full w-full object-cover z-0 scale-x-[-1] transition-opacity duration-500 ${isVideoReady ? "opacity-100" : "opacity-0"}`}
      >
        <source src="/videos/sky.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-genesis-navy/40 z-10" />

      <div className="relative z-20 capitalize flex min-h-[60vh] items-center justify-center px-4 xs:px-6 sm:px-8 md:min-h-screen md:px-16 text-center">
        <Title
        text={["Conviction-led investing,","built for long-term value."]}
        className="font-agatho"
        />
      </div>
    </section>
  );
}
