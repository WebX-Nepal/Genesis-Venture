"use client";

import Title from "@/components/ui/Title";
import { useEffect, useState } from "react";
import { useHeroVideoLoad } from "@/context/HeroVideoLoadContext";

export default function OurStoryHero() {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const { setHeroVideoReady } = useHeroVideoLoad();

  useEffect(() => {
    setHeroVideoReady(false);
    return () => setHeroVideoReady(true);
  }, [setHeroVideoReady]);

  return (
    <section className="relative min-h-[60vh] w-full flex flex-col justify-center items-center overflow-hidden bg-[#0a1634] px-4 xs:px-6 sm:px-8 md:min-h-screen md:px-16 pt-20 xs:pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 md:pb-12 text-white">
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
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${isVideoReady ? "opacity-100" : "opacity-0"}`}
      >
        <source src="/videos/newstory.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative z-20 flex w-full max-w-5xl flex-col items-center gap-3 px-2 text-center sm:gap-4">
        <Title
          text={["Greatness Is Not Born", "It Is Built"]}
          className="font-agatho"
        />
      </div>
    </section>
  );
}
