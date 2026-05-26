"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import gsap from "gsap";
import { usePreLoader } from "@/context/PreLoaderContext";
import { useHeroVideoLoad } from "@/context/HeroVideoLoadContext";

export default function Loader() {
  const SESSION_KEY = "gv_preloader_seen";
  const MAX_WAIT_MS = 4000;
  const REVEAL_DURATION_SEC = 1.6;
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const logoRevealRef = useRef<HTMLDivElement | null>(null);
  const logoCoverRef = useRef<HTMLDivElement | null>(null);
  const hasExitedRef = useRef(false);
  const [hasReachedMaxWait, setHasReachedMaxWait] = useState(false);
  const pathname = usePathname();
  const { isHeroVideoReady } = useHeroVideoLoad();
  const { setHasLoaded } = usePreLoader();

  useEffect(() => {
    if (!loaderRef.current) return;

    if (pathname === "/") {
      const hasSeenPreloader =
        typeof window !== "undefined" &&
        window.sessionStorage.getItem(SESSION_KEY) === "true";

      if (hasSeenPreloader) {
        gsap.set(loaderRef.current, { pointerEvents: "none", display: "none" });
        document.body.style.overflow = "auto";
        document.body.style.position = "static";
        document.body.style.width = "";
        setHasLoaded(true);
        return;
      }

      setHasReachedMaxWait(false);
      hasExitedRef.current = false;
      gsap.set(loaderRef.current, {
        display: "flex",
        pointerEvents: "auto",
        opacity: 1,
      });
      if (bgRef.current) {
        gsap.set(bgRef.current, { opacity: 1 });
      }
      if (logoCoverRef.current) {
        gsap.set(logoCoverRef.current, { yPercent: 0 });
      }
      setHasLoaded(false);
      return;
    }

    gsap.set(loaderRef.current, { pointerEvents: "none", display: "none" });
    document.body.style.overflow = "auto";
    document.body.style.position = "static";
    document.body.style.width = "";
    setHasLoaded(true);
  }, [pathname, setHasLoaded]);

  useEffect(() => {
    if (pathname !== "/") return;
    const timer = window.setTimeout(() => {
      setHasReachedMaxWait(true);
    }, MAX_WAIT_MS);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const isHomePage = pathname === "/";
    if (!loaderRef.current) return;

    if (!isHomePage) {
      return;
    }

    if (!isHeroVideoReady && !hasReachedMaxWait) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      return;
    }

    if (hasExitedRef.current) return;
    hasExitedRef.current = true;

    const tl = gsap.timeline({
      onComplete: () => {
        if (typeof window !== "undefined") {
          window.sessionStorage.setItem(SESSION_KEY, "true");
        }
        document.body.style.overflow = "auto";
        document.body.style.position = "static";
        document.body.style.width = "";
        setHasLoaded(true);
      },
    });

    tl.to(logoCoverRef.current, {
      yPercent: -120,
      duration: REVEAL_DURATION_SEC,
      ease: "power3.out",
    });
    tl.to(bgRef.current, {
      opacity: 0,
      duration: 0.25,
      ease: "sine.inOut",
    });
    tl.to(loaderRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: "sine.out",
    }, "-=0.1");
    tl.set(loaderRef.current, {
      pointerEvents: "none",
      display: "none",
    });

    return () => {
      tl.kill();
    };
  }, [hasReachedMaxWait, isHeroVideoReady, pathname, setHasLoaded]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
    >
      <div ref={bgRef} className="absolute inset-0 bg-[#0a1634]" />
      <div ref={logoRevealRef} className="relative z-10 overflow-hidden">
        <Image
          src="/images/final/png/Asset 2.png"
          alt="Genesis Ventures"
          width={190}
          height={76}
          priority
        />
        <div
          ref={logoCoverRef}
          className="absolute inset-0 bg-[#0a1634]"
        />
      </div>
    </div>
  );
}
