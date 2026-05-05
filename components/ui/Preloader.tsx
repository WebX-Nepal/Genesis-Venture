"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePreLoader } from "@/context/PreLoaderContext";
const lines = ["Creating Long Term", "Sustainable Wealth"];

export default function Loader() {
    const loaderRef = useRef<HTMLDivElement | null>(null);
    const bgRef = useRef<HTMLDivElement | null>(null);
    const textWrapperRef = useRef<HTMLHeadingElement | null>(null);
    const textRefs = useRef<HTMLSpanElement[]>([]);
    const { setHasLoaded } = usePreLoader()
    useEffect(() => {
        document.body.style.overflowY = "scroll";
        document.body.style.position = "fixed";  
        document.body.style.width = "100%";
        const tl = gsap.timeline({
            onComplete: () => {
                document.body.style.overflow = "auto";
                 document.body.style.position = "static";
                setHasLoaded(true);
            },
        });

        tl.set(textWrapperRef.current, { y: 20 });

        tl.set(textRefs.current, {
            x: -40,
            opacity: 0,
            filter: "blur(12px)",

        });

        tl.to(textRefs.current, {
            x: 0,
            delay: 0.1,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.6,
            stagger: 0.04,
            ease: "power2.out",
        });

        tl.to({}, { duration: 0.25 });

        tl.to(bgRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.inOut",
        });

        tl.to(textWrapperRef.current, {
            opacity: 0,
        }, "<");
        tl.set(loaderRef.current, {
            pointerEvents: "none",
        });

        return () => {
            tl.kill();
        };
    }, []);;

    let wordIndex = 0;

    return (
        <div
            ref={loaderRef}
            className="fixed z-[9999] inset-0 flex items-center justify-center"
        >
            <div ref={bgRef} className="absolute inset-0 bg-background" />

            <h1
                ref={textWrapperRef}
                className="relative z-10 mt-[20px] text-[clamp(1.75rem,7vw,4.5rem)] font-[PPFONT] text-center text-[#1B335A] leading-tight tracking-[0.015em]"
            >
                {lines.map((line, li) => (
                    <span
                        key={li}
                        className="flex flex-wrap gap-x-[0.25em] justify-center"
                    >
                        {line.split(" ").map((word) => {
                            const index = wordIndex++;

                            return (
                                <span
                                    key={index}
                                    ref={(el) => {
                                        if (el) textRefs.current[index] = el;
                                    }}
                                    className="inline-block opacity-0"
                                >
                                    {word}
                                </span>
                            );
                        })}
                    </span>
                ))}
            </h1>
        </div>
    );
}