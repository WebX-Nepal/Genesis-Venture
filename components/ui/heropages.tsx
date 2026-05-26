"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
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
  titleClassName?: string;
  crumbsContainerClassName?: string;
  crumbLinkClassName?: string;
  crumbCurrentClassName?: string;
  crumbSeparatorClassName?: string;
  lastCrumbSeparatorClassName?: string;
}

export default function Pagehero({
  title,
  description,
  crumbs = [],
  backgroundImage,
  backgroundVideo,
  backgroundImageAlt = "",
  heightClassName = "h-screen",
  overlayClassName = "bg-white/60",
  contentOffsetClassName = "",
  baseClassName = "bg-white",
  showVideoFallback = true,
  backgroundImageClassName = "object-cover opacity-20",
  titleClassName = "font-agatho text-white",
  crumbsContainerClassName = "text-[#8D1E39]",
  crumbLinkClassName = "text-white hover:text-[#e2e8f0]",
  crumbCurrentClassName = "text-[#8D1E39]",
  crumbSeparatorClassName = "",
  lastCrumbSeparatorClassName = "",
}: PageheroProps) {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const imageLayerRef = useRef<HTMLDivElement | null>(null);
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

  useEffect(() => {
    if (!backgroundImage || !imageLayerRef.current) return;

    const tween = gsap.fromTo(
      imageLayerRef.current,
      { scale: 1.02 },
      {
        scale: 1.1,
        duration: 7,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      },
    );

    return () => {
      tween.kill();
    };
  }, [backgroundImage]);

  return (
    <section
      className={`relative flex w-full items-center justify-center overflow-hidden ${baseClassName} px-4 xs:px-6 sm:px-8 md:px-16 text-center ${heightClassName}`}
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
        <div ref={imageLayerRef} className="absolute inset-0 z-0 will-change-transform">
          <Image
            src={backgroundImage}
            alt={backgroundImageAlt}
            fill
            priority
            className={`absolute inset-0 h-full w-full ${backgroundImageClassName}`}
          />
        </div>
      ) : null}
      <div className={`absolute inset-0 z-10 ${overlayClassName}`} />

      <div className={`relative z-20 mx-auto flex w-full max-w-3xl flex-col items-center gap-3 px-2 sm:gap-4 ${contentOffsetClassName}`}>
        {crumbs.length ? (
          <div className={`mx-auto mb-2 flex max-w-full items-center justify-center gap-1.5 px-2 text-center font-montserrat text-[10px] font-semibold uppercase tracking-[0.12em] sm:gap-2 sm:text-xs sm:tracking-[0.18em] ${crumbsContainerClassName}`}>
            {crumbs.map((crumb, index) => (
              <span key={`${crumb.label}-${index}`} className="flex min-w-0 items-center gap-1.5 sm:gap-2">
                {crumb.href ? (
                  <Link href={crumb.href} className={`truncate transition-colors ${crumbLinkClassName}`}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={`max-w-[40vw] truncate sm:max-w-none ${crumbCurrentClassName}`}>{crumb.label}</span>
                )}
                {index < crumbs.length - 1 ? (
                  <span
                    className={
                      index === crumbs.length - 2
                        ? lastCrumbSeparatorClassName || crumbSeparatorClassName
                        : crumbSeparatorClassName
                    }
                  >
                    /
                  </span>
                ) : null}
              </span>
            ))}
          </div>
        ) : null}

        <Title text={title} className={titleClassName} />

      </div>
    </section>
  );
}
