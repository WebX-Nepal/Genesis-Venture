import { ReactNode } from "react"
import { cn } from "@/lib/utils"

type HeadingTag = "h1" | "h2" 

interface TitleProps {
  text: ReactNode
  as: HeadingTag
  className?: string
}

const variants: Record<HeadingTag, string> = {
  h1: "hero-heading devider-title text-[clamp(1.75rem,7vw,4.5rem)] font-[PPFONT] text-white leading-tight tracking-[0.015em]",
  h2: "whitespace-nowrap text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-[PPFONT] text-white",
}

export default function Title({
  text,
  as: Tag,
  className
}: TitleProps) {
  return (
    <Tag className={cn(variants[Tag], className)}>
      {text}
    </Tag>
  )
}

