"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePreLoader } from "@/context/PreLoaderContext";

export default function Loader() {
    const loaderRef = useRef<HTMLDivElement | null>(null);
    const bgRef = useRef<HTMLDivElement | null>(null);
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

        tl.to({}, { duration: 0.25 });

        tl.to(bgRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.inOut",
        });

        tl.set(loaderRef.current, {
            pointerEvents: "none",
        });

        return () => {
            tl.kill();
        };
    }, []);;

    return (
        <div
            ref={loaderRef}
            className="fixed z-[9999] inset-0 flex items-center justify-center"
        >
            <div ref={bgRef} className="absolute inset-0 bg-background" />
        </div>
    );
}
