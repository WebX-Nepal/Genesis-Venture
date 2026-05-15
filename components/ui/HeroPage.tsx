"use client";

import { ReactNode, useEffect, useState } from "react";
import Title from "./Title";
import { useHeroVideoLoad } from "@/context/HeroVideoLoadContext";

interface HeroPageProps {
  title?: ReactNode;
  titleClassName?: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  backgroundVideo?: string;
  heightClassName?: string;
}
export default function HeroPage({
  title,
  titleClassName = "text-[clamp(1.5rem,4.8vw,3.2rem)]",
  backgroundImage,
  backgroundImageAlt = "",
  backgroundVideo,
  heightClassName = "h-screen",
}: HeroPageProps) {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const { setHeroVideoReady } = useHeroVideoLoad();

  useEffect(() => {
    if (!backgroundVideo) {
      setHeroVideoReady(true);
      return;
    }

    setHeroVideoReady(false);
    return () => setHeroVideoReady(true);
  }, [backgroundVideo, setHeroVideoReady]);

  return (
    <section className={`relative w-full overflow-hidden bg-[#0a1634] text-white ${heightClassName}`}>
      {backgroundVideo ? (
        <>
          {!isVideoReady ? (
            <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-[#0a1634] via-[#13356f] to-[#102852]" />
          ) : null}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onLoadedMetadata={() => {
              setIsVideoReady(true);
              setHeroVideoReady(true);
            }}
            onError={() => {
              setIsVideoReady(true);
              setHeroVideoReady(true);
            }}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${isVideoReady ? "opacity-100" : "opacity-0"}`}
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/35" />
        </>
      ) : null}
      {backgroundImage ? (
        <>
          <img
            src={backgroundImage}
            alt={backgroundImageAlt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
        </>
      ) : null}
      <div className="layout-7xl relative flex h-full flex-col">
        <div className="flex flex-1 items-center text-center justify-center">
          {title ? (
            <h1 className={titleClassName}>{title}</h1>
          ) : (
            <Title
              text={[" Independent Capital.", "Enduring Partnerships."]}
              className={titleClassName}
            />
          )}
        </div>
      </div>
    </section>
  );
}
