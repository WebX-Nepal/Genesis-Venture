import { useEffect } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const useStaggeredCharacterRise = (
  ref: React.RefObject<HTMLElement | null>,
  options?: {
    stagger?: number;
    duration?: number;
    y?: number;
    start?: string;
  }
) => {
  useEffect(() => {
    if (!ref.current) return;

    const split = SplitText.create(ref.current, { type: "chars" });

    const anim = gsap.fromTo(
      split.chars,
      { y: options?.y ?? 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: options?.duration ?? 0.4,
        stagger: options?.stagger ?? 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: options?.start ?? "top bottom-=100px",
          once: true
        }
      }
    );

    return () => {
      split.revert();
      anim.kill();
    };
  }, [options?.duration, options?.stagger, options?.start, options?.y, , ref]);
};