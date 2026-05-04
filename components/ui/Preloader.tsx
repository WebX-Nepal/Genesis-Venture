"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const lines = [
    "Creating Long Term",
    "Sustainable Wealth",
];

export default function Loader() {
    const loaderRef = useRef<HTMLDivElement | null>(null);
    const bgRef = useRef<HTMLDivElement | null>(null);
    const textRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const textWrapperRef = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        document.body.style.position = "fixed";
        document.body.style.width = "100%";

        const tl = gsap.timeline({
            onComplete: () => {
                document.body.style.overflow = "auto";
                document.body.style.position = "static";
                if (loaderRef.current) {
                    loaderRef.current.style.display = "none";
                }
            },
        });
        tl.set(textWrapperRef.current, { y: 20 });
        tl.set(textRefs.current, {
            x: -50,
            opacity: 0,
            filter: "blur(8px)",
        });

        tl.to(textRefs.current, {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.07,
        });
        tl.to(
            bgRef.current,
            {
                opacity: 0,
                duration: 1,
                ease: "power2.inOut",
            },
            "-=0.3"
        );
        tl.to(
            textWrapperRef.current,
            {
                y: "-20px",
                opacity:0.8,
                color: "#ffffff",
                duration: 1,
                ease: "power2.inOut",
            },
            "<"
        );

        tl.set(loaderRef.current, { pointerEvents: "none" });

        return () => {
            tl.kill();
        };
    }, []);
    let wordIndex = 0;
    return (
        <div
            ref={loaderRef}
            className="fixed z-[9999] inset-0 flex items-center justify-center"
        >
            <div ref={bgRef} className="absolute inset-0 bg-background" />

            <h1
                ref={textWrapperRef}
                className="relative z-10 mt-[68.35px] text-[clamp(1.75rem,7vw,4.5rem)] font-[PPFONT] text-center text-[#1B335A] leading-tight tracking-[0.015em]"
            >
                {lines.map((line, li) => (
                    <span
                        key={li}
                        className="flex flex-wrap gap-x-[0.25em] justify-center"
                    >
                        {line.split(" ").map((word) => {
                            const currentIndex = wordIndex++;

                            return (
                                <span
                                    key={currentIndex}
                                    ref={(el) => {
                                        textRefs.current[currentIndex] = el;
                                    }}
                                    className="opacity-0 inline-block"
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