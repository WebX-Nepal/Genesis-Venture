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
    duration = 1.5,
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
                start: "top 85%",
                once: true,
                onEnter: () => {
                    gsap.to(obj, {
                        val: finalNumber,
                        duration,
                        ease: "power2.out",
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
        <div className="flex items-center gap-2">
            <span
                ref={ref}
                className={`whitespace-nowrap w-14 lg:w-17  text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-[PPFONT] text-white ${className}`}
            >
                <h1 >{display}</h1>
            </span>
            <h1 className="whitespace-nowrap text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-[PPFONT] text-white">{suffix}</h1>
        </div>

    );
}