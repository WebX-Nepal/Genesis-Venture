"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Title from "./Title";
import { useHeroVideoLoad } from "@/context/HeroVideoLoadContext";

interface Crumb {
  label: string;
  href?: string;
}

interface PageheroProps {
  title: string[];
  description?: string;
  crumbs?: Crumb[];
  backgroundImage?: string;
  backgroundVideo?: string;
  backgroundImageAlt?: string;
  heightClassName?: string;
  overlayClassName?: string;
  contentOffsetClassName?: string;
  baseClassName?: string;
  showVideoFallback?: boolean;
  backgroundImageClassName?: string;
}

export default function Pagehero({
  title,
  description,
  crumbs = [],
  backgroundImage,
  backgroundVideo,
  backgroundImageAlt = "",
  heightClassName = "h-[80vh]",
  overlayClassName = "bg-white/60",
  contentOffsetClassName = "",
  baseClassName = "bg-white",
  showVideoFallback = true,
  backgroundImageClassName = "object-cover",
}: PageheroProps) {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const { setHeroVideoReady } = useHeroVideoLoad();

  useEffect(() => {
    if (!backgroundVideo) {
      setHeroVideoReady(true);
      return;
    }

    setHeroVideoReady(false);
    const fallbackTimer = window.setTimeout(() => {
      setIsVideoReady(true);
      setHeroVideoReady(true);
    }, 2500);

    return () => {
      window.clearTimeout(fallbackTimer);
      setHeroVideoReady(true);
    };
  }, [backgroundVideo, setHeroVideoReady]);

  return (
    <section
      className={`relative w-full overflow-hidden ${baseClassName} px-4 xs:px-6 sm:px-8 md:px-16 pt-20 xs:pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 md:pb-12 text-center ${heightClassName}`}
    >
      {backgroundVideo ? (
        <>
          {!isVideoReady && showVideoFallback ? (
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0a1634] via-[#13356f] to-[#102852]" />
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
            onLoadedData={() => {
              setIsVideoReady(true);
              setHeroVideoReady(true);
            }}
            onCanPlay={() => {
              setIsVideoReady(true);
              setHeroVideoReady(true);
            }}
            onError={() => {
              setIsVideoReady(true);
              setHeroVideoReady(true);
            }}
            className={`absolute inset-0 h-full w-full object-cover z-0 transition-opacity duration-500 ${isVideoReady ? "opacity-100" : "opacity-0"}`}
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </>
      ) : backgroundImage ? (
        <Image
          src={backgroundImage}
          alt={backgroundImageAlt}
          fill
          priority
          className={`absolute inset-0 h-full w-full z-0 opacity-20 ${backgroundImageClassName}`}
        />
      ) : null}
      <div className={`absolute inset-0 z-10 ${overlayClassName}`} />

      <div className={`relative z-20 mx-auto flex w-full max-w-2xl flex-col gap-3 px-2 sm:gap-4 ${contentOffsetClassName}`}>
        {crumbs.length ? (
          <div className="mx-auto mb-2 flex items-center gap-2 font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#8D1E39]">
            {crumbs.map((crumb, index) => (
              <span key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-[#173053]">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#8D1E39]">{crumb.label}</span>
                )}
                {index < crumbs.length - 1 ? <span>/</span> : null}
              </span>
            ))}
          </div>
        ) : null}

        <Title text={title} className="font-agatho text-[#173053]" />

        {description ? (
          <p className="text-sm sm:text-base text-[#173053] font-poppins leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
