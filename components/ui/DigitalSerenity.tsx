"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type Ripple = { id: number; x: number; y: number };

type DigitalSerenityProps = {
  className?: string;
  minHeightClassName?: string;
};

const DIGITAL_SERENITY_STYLES = `
  #mouse-gradient-react {
    position: fixed;
    pointer-events: none;
    border-radius: 9999px;
    background-image: radial-gradient(circle, rgba(156, 163, 175, 0.05), rgba(107, 114, 128, 0.05), transparent 70%);
    transform: translate(-50%, -50%);
    will-change: transform, opacity;
    transition: opacity 300ms ease-out;
    z-index: 40;
  }
  @keyframes word-appear {
    0% { opacity: 0; transform: translateY(24px) scale(0.96); filter: blur(8px); }
    70% { opacity: 0.92; transform: translateY(4px) scale(0.99); filter: blur(1.5px); }
    100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
  }
  @keyframes grid-draw {
    0% { stroke-dashoffset: 1000; opacity: 0; }
    50% { opacity: 0.3; }
    100% { stroke-dashoffset: 0; opacity: 0.15; }
  }
  @keyframes pulse-glow {
    0%, 100% { opacity: 0.12; transform: scale(1); }
    50% { opacity: 0.3; transform: scale(1.08); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
    25% { transform: translateY(-10px) translateX(5px); opacity: 0.6; }
    50% { transform: translateY(-5px) translateX(-3px); opacity: 0.4; }
    75% { transform: translateY(-15px) translateX(7px); opacity: 0.78; }
  }
  @keyframes underline-grow {
    to { width: 100%; }
  }
  .word-animate {
    display: inline-block;
    opacity: 0;
    margin: 0 0.1em;
    transition: color 0.3s ease, transform 0.3s ease, text-shadow 0.28s ease;
  }
  .word-animate:hover {
    color: #cbd5e1;
    transform: translateY(-2px);
  }
  .grid-line {
    stroke: #94a3b8;
    stroke-width: 0.5;
    opacity: 0;
    stroke-dasharray: 5 5;
    stroke-dashoffset: 1000;
    animation: grid-draw 2s ease-out forwards;
  }
  .detail-dot {
    fill: #cbd5e1;
    opacity: 0;
    animation: pulse-glow 3s ease-in-out infinite;
  }
  .corner-element-animate {
    position: absolute;
    width: 40px;
    height: 40px;
    border: 1px solid rgba(203, 213, 225, 0.2);
    opacity: 0;
    animation: word-appear 1s ease-out forwards;
  }
  .text-decoration-animate {
    position: relative;
  }
  .text-decoration-animate::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #cbd5e1, transparent);
    animation: underline-grow 2s ease-out forwards;
    animation-delay: 2s;
  }
  .floating-element-animate {
    position: absolute;
    width: 2px;
    height: 2px;
    background: #cbd5e1;
    border-radius: 50%;
    opacity: 0;
    animation: float 4s ease-in-out infinite;
    animation-play-state: paused;
  }
  .ripple-effect {
    position: fixed;
    width: 4px;
    height: 4px;
    background: rgba(203, 213, 225, 0.6);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    animation: pulse-glow 1s ease-out forwards;
    z-index: 9999;
  }
`;

const words = [
  { text: "Stillness", delay: 0 },
  { text: "speaks.", delay: 300 },
  { text: "Find", delay: 700 },
  { text: "your", delay: 850 },
  { text: "center,", delay: 1000 },
  { text: "where", delay: 1400 },
  { text: "peace", delay: 1550 },
  { text: "resides", delay: 1700 },
  { text: "and", delay: 1850 },
  { text: "clarity", delay: 2000 },
  { text: "awakens", delay: 2150 },
  { text: "within", delay: 2300 },
  { text: "the", delay: 2450 },
  { text: "soul.", delay: 2600 },
  { text: "Observe,", delay: 3000 },
  { text: "accept,", delay: 3200 },
  { text: "let", delay: 3400 },
  { text: "go.", delay: 3550 },
];

const DigitalSerenity = ({
  className = "",
  minHeightClassName = "min-h-screen",
}: DigitalSerenityProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [scrolled, setScrolled] = useState(false);
  const rafRef = useRef<number | null>(null);
  const mousePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const animateWords = () => {
      const wordElements = containerRef.current?.querySelectorAll<HTMLElement>(".word-animate");
      if (!wordElements) return;
      wordElements.forEach((word) => {
        const delay = Number.parseInt(word.getAttribute("data-delay") || "0", 10);
        window.setTimeout(() => {
          word.style.animation = "word-appear 0.8s ease-out forwards";
        }, delay);
      });
    };

    const timeoutId = window.setTimeout(animateWords, 280);
    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const updateGradientPosition = () => {
      if (mouseRef.current) {
        mouseRef.current.style.left = `${mousePosRef.current.x}px`;
        mouseRef.current.style.top = `${mousePosRef.current.y}px`;
      }
      rafRef.current = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      if (mouseRef.current) mouseRef.current.style.opacity = "1";
      if (rafRef.current === null) rafRef.current = window.requestAnimationFrame(updateGradientPosition);
    };

    const handleMouseLeave = () => {
      if (mouseRef.current) mouseRef.current.style.opacity = "0";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples((prev) => [...prev, newRipple]);
      window.setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 1000);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    const wordElements = containerRef.current?.querySelectorAll<HTMLElement>(".word-animate");
    if (!wordElements) return;

    const handleMouseEnter = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      target.style.textShadow = "0 0 20px rgba(203, 213, 225, 0.5)";
    };
    const handleMouseLeave = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      target.style.textShadow = "none";
    };

    wordElements.forEach((word) => {
      word.addEventListener("mouseenter", handleMouseEnter);
      word.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      wordElements.forEach((word) => {
        word.removeEventListener("mouseenter", handleMouseEnter);
        word.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrolled) return;
      setScrolled(true);
      const elements = containerRef.current?.querySelectorAll<HTMLElement>(".floating-element-animate");
      if (!elements) return;
      elements.forEach((el, index) => {
        const baseDelay = Number.parseFloat(el.style.animationDelay || "0") * 1000;
        window.setTimeout(() => {
          el.style.animationPlayState = "running";
          el.style.opacity = "";
        }, baseDelay + index * 90);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const rootClassName = useMemo(
    () =>
      `${minHeightClassName} bg-gradient-to-br from-slate-900 via-black to-slate-800 text-slate-100 font-primary overflow-hidden relative ${className}`.trim(),
    [className, minHeightClassName],
  );

  return (
    <>
      <style>{DIGITAL_SERENITY_STYLES}</style>
      <div ref={containerRef} className={rootClassName}>
        <svg className="absolute inset-0 h-full w-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="gridReactDarkResponsive" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(100, 116, 139, 0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridReactDarkResponsive)" />
          <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line" style={{ animationDelay: "0.5s" }} />
          <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line" style={{ animationDelay: "1s" }} />
          <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line" style={{ animationDelay: "1.5s" }} />
          <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line" style={{ animationDelay: "2s" }} />
          <line x1="50%" y1="0" x2="50%" y2="100%" className="grid-line" style={{ animationDelay: "2.5s", opacity: "0.05" }} />
          <line x1="0" y1="50%" x2="100%" y2="50%" className="grid-line" style={{ animationDelay: "3s", opacity: "0.05" }} />
          <circle cx="20%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: "3s" }} />
          <circle cx="80%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: "3.2s" }} />
          <circle cx="20%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: "3.4s" }} />
          <circle cx="80%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: "3.6s" }} />
          <circle cx="50%" cy="50%" r="1.5" className="detail-dot" style={{ animationDelay: "4s" }} />
        </svg>

        <div className="corner-element-animate top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8" style={{ animationDelay: "4s" }}>
          <div className="absolute top-0 left-0 h-2 w-2 rounded-full bg-slate-300 opacity-30" />
        </div>
        <div className="corner-element-animate top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8" style={{ animationDelay: "4.2s" }}>
          <div className="absolute top-0 right-0 h-2 w-2 rounded-full bg-slate-300 opacity-30" />
        </div>
        <div className="corner-element-animate bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8" style={{ animationDelay: "4.4s" }}>
          <div className="absolute bottom-0 left-0 h-2 w-2 rounded-full bg-slate-300 opacity-30" />
        </div>
        <div className="corner-element-animate right-4 bottom-4 sm:right-6 sm:bottom-6 md:right-8 md:bottom-8" style={{ animationDelay: "4.6s" }}>
          <div className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-slate-300 opacity-30" />
        </div>

        <div className="floating-element-animate" style={{ top: "25%", left: "15%", animationDelay: "0.5s" }} />
        <div className="floating-element-animate" style={{ top: "60%", left: "85%", animationDelay: "1s" }} />
        <div className="floating-element-animate" style={{ top: "40%", left: "10%", animationDelay: "1.5s" }} />
        <div className="floating-element-animate" style={{ top: "75%", left: "90%", animationDelay: "2s" }} />

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-between px-6 py-10 sm:px-8 sm:py-12 md:px-16 md:py-20">
          <div className="text-center">
            <h2 className="text-xs font-mono font-light uppercase tracking-[0.2em] text-slate-300 opacity-80 sm:text-sm">
              <span className="word-animate" data-delay={words[0].delay}>{words[0].text}</span>
              <span className="word-animate" data-delay={words[1].delay}>{words[1].text}</span>
            </h2>
            <div className="mx-auto mt-4 h-px w-12 bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-30 sm:w-16" />
          </div>

          <div className="relative mx-auto max-w-5xl text-center">
            <h1 className="text-decoration-animate text-3xl font-extralight leading-tight tracking-tight text-slate-50 sm:text-4xl md:text-5xl lg:text-6xl">
              <div className="mb-4 md:mb-6">
                <span className="word-animate" data-delay={words[2].delay}>{words[2].text}</span>
                <span className="word-animate" data-delay={words[3].delay}>{words[3].text}</span>
                <span className="word-animate" data-delay={words[4].delay}>{words[4].text}</span>
              </div>
              <div className="text-xl font-thin leading-relaxed tracking-wide text-slate-300 sm:text-2xl md:text-3xl lg:text-4xl">
                <span className="word-animate" data-delay={words[5].delay}>{words[5].text}</span>
                <span className="word-animate" data-delay={words[6].delay}>{words[6].text}</span>
                <span className="word-animate" data-delay={words[7].delay}>{words[7].text}</span>
                <span className="word-animate" data-delay={words[8].delay}>{words[8].text}</span>
                <span className="word-animate" data-delay={words[9].delay}>{words[9].text}</span>
                <span className="word-animate" data-delay={words[10].delay}>{words[10].text}</span>
                <span className="word-animate" data-delay={words[11].delay}>{words[11].text}</span>
                <span className="word-animate" data-delay={words[12].delay}>{words[12].text}</span>
                <span className="word-animate" data-delay={words[13].delay}>{words[13].text}</span>
              </div>
            </h1>

            <div className="absolute top-1/2 -left-6 h-px w-3 -translate-y-1/2 transform bg-slate-300 opacity-0 sm:-left-8 sm:w-4" style={{ animation: "word-appear 1s ease-out forwards", animationDelay: "3.2s" }} />
            <div className="absolute top-1/2 -right-6 h-px w-3 -translate-y-1/2 transform bg-slate-300 opacity-0 sm:-right-8 sm:w-4" style={{ animation: "word-appear 1s ease-out forwards", animationDelay: "3.4s" }} />
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 h-px w-12 bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-30 sm:w-16" />
            <h2 className="text-xs font-mono font-light uppercase tracking-[0.2em] text-slate-300 opacity-80 sm:text-sm">
              <span className="word-animate" data-delay={words[14].delay}>{words[14].text}</span>
              <span className="word-animate" data-delay={words[15].delay}>{words[15].text}</span>
              <span className="word-animate" data-delay={words[16].delay}>{words[16].text}</span>
              <span className="word-animate" data-delay={words[17].delay}>{words[17].text}</span>
            </h2>
            <div className="mt-6 flex justify-center space-x-4 opacity-0" style={{ animation: "word-appear 1s ease-out forwards", animationDelay: "4.2s" }}>
              <div className="h-1 w-1 rounded-full bg-slate-300 opacity-40" />
              <div className="h-1 w-1 rounded-full bg-slate-300 opacity-60" />
              <div className="h-1 w-1 rounded-full bg-slate-300 opacity-40" />
            </div>
          </div>
        </div>

        <div
          ref={mouseRef}
          id="mouse-gradient-react"
          className="h-60 w-60 blur-xl sm:h-80 sm:w-80 sm:blur-2xl md:h-96 md:w-96 md:blur-3xl"
          style={{ left: "0px", top: "0px", opacity: 0 }}
        />

        {ripples.map((ripple) => (
          <div key={ripple.id} className="ripple-effect" style={{ left: `${ripple.x}px`, top: `${ripple.y}px` }} />
        ))}
      </div>
    </>
  );
};

export default DigitalSerenity;

