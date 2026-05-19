"use client"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { cn } from "@/lib/utils"

gsap.registerPlugin(useGSAP)

interface TitleProps {
  text: string[]
  className?: string
}

export default function Title({ text, className }: TitleProps) {
  const ref = useRef<HTMLHeadingElement>(null)
  const lines = Array.isArray(text) ? text : [text]

  useGSAP(() => {
    const words = ref.current?.querySelectorAll(".word-inner")
    if (!words?.length) return

    gsap.from(words, {
      y: "100%",
      filter:"blur(8px)",
      duration: 0.6,
      ease: "power1.Out",
      stagger: 0.1,
      delay:0.7,
    })
  }, { scope: ref })

  return (
    <h1
      ref={ref}
      className={cn(
        "font-montserrat text-[clamp(1.7rem,6.2vw,3.8rem)] font-medium leading-[1.12] md:leading-[1.1] text-center text-white ",
        className
      )}
    >
      {lines.map((line, li) => (
        <span key={li} className="flex flex-wrap gap-x-[0.25em] justify-center">  
          {line.split(" ").map((word, indx) => (
            <span key={indx} className="overflow-hidden inline-block">  
              <span className="word-inner inline-block">              
                {word}
              </span>
            </span>
          ))}
        </span>
      ))}
    </h1>
  )
}
