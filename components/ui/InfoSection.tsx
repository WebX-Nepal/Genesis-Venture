import Image from "next/image"
import Button from "../ui/Button2"
import Link from "next/link"
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface InfoSectionProp {
  title: string;
  description: string;
  button: string;
  link: string;
  image: string;
  variant?: "default" | "reversed"
}

gsap.registerPlugin(SplitText, ScrollTrigger);
const InfoSection = ({ title, description, button, link, image, variant = "default" }: InfoSectionProp) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  useGSAP(() => {
    if (!titleRef.current) return;
    const splitTitle = new SplitText(titleRef.current, { type: "words" });
    gsap.from(splitTitle.words, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "top top",
        scrub: true,
      },
      opacity: 0,
      y: 40,
      filter: "blur(10px)",
      stagger: 0.05,
      duration: 1.1,
      ease: "power3.out",
    });
    return () => {
      splitTitle.revert();
    };
  }, { scope: containerRef });
  return (
    <div ref={containerRef} className={`flex flex-col md:flex-${variant === "reversed" ? "row-reverse" : "row"} gap-3 sm:gap-8 md:gap-24 flex-1 py-10 sm:py-15 overflow-hidden`}>
      <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6 md:justify-center">
        <h3 ref={titleRef} className="text-[clamp(1.5rem,4.6vw,3rem)] text-genesis-navy leading-[1.12] font-[PPFONT]">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 font-poppins leading-8 max-w-2xl">{description}</p>
        <Link href={link}>
          <Button
            variant="primary"
            size="md"
            className="mt-12 bg-genesis-navy px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white hover:bg-genesis-navy/80 transition-colors"
          >
            <span className="inline-flex items-center gap-3">{button}</span>
          </Button>
        </Link>
      </div>
      <div className="relative w-full md:w-1/2 h-[40vh] xs:h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}
export default InfoSection