"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

interface CounterProps {
    from?: number;
    to: string;
    duration?: number;
    className?: string;
}

export default function Counter({
    to,
    duration = 0.8,
    from = 0,
    className,
}: CounterProps) {
    const ref = useRef<HTMLSpanElement | null>(null);
    const [display, setDisplay] = useState(from);

    const finalNumber = parseInt(to.replace(/\D/g, ""));
    const suffix = to.replace(/[0-9]/g, "");

    useGSAP(
        () => {
            const obj = { val: from };

            ScrollTrigger.create({
                trigger: ref.current,
                start: "top 95%",
                once: true,
                onEnter: () => {
                    gsap.to(obj, {
                        val: finalNumber,
                        duration,
                        ease: "power1",
                        onUpdate: () => {
                            setDisplay(Math.floor(obj.val));
                        },
                    });
                },
            });
        },
        { scope: ref }
    );

    return (
        <span className="inline-flex items-baseline whitespace-nowrap text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white">
            <span
                ref={ref}
                className={`font-agatho ${className}`}
            >
                {display}
            </span>
            <span className="font-montserrat ml-0.5">{suffix}</span>
        </span>
    );
}
