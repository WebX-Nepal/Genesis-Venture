"use client"
import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import React from "react"
import Image from "next/image"
import { TransitionRouter } from "next-transition-router"

export function TransitionProvider({ children }: {
    children: React.ReactNode
}) {
    const panelRef = useRef<HTMLDivElement>(null)
    const pathRef = useRef<SVGPathElement>(null)
    const imageRef = useRef<HTMLImageElement>(null)
    const [dim, setDim] = useState({ w: 0, h: 0 })

    useEffect(() => {
        setDim({ w: window.innerWidth, h: window.innerHeight })
        const onResize = () => setDim({ w: window.innerWidth, h: window.innerHeight })
        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
    }, [])

    const { w, h } = dim
    const curve = 600
    const extra = 320

    const initialPath = `M0 0 L${w} 0 L${w} ${h} Q${w / 2} ${h - curve} 0 ${h} L0 0`
    const targetPath  = `M0 0 L${w} 0 L${w} ${h + extra} Q${w / 2} ${h + extra - curve} 0 ${h + extra} L0 0`

    const lockScroll = () => {
        document.body.style.overflow = "hidden"
        document.body.style.position = "fixed"
        document.body.style.width = "100%"
    }

    const unlockScroll = () => {
        document.body.style.overflow = ""
        document.body.style.position = ""
        document.body.style.width = ""
    }

    return (
        <TransitionRouter
            leave={(next) => {
                const el = panelRef.current
                const path = pathRef.current
                const img = imageRef.current
                if (!el || !path || !img || !w) return next()

                lockScroll()

                gsap.set(el, { display: "block", y: "100%" })
                gsap.set(path, { attr: { d: initialPath } })
                gsap.set(img, { y: "110%" })

                const tl = gsap.timeline({ onComplete: next })

                tl.to(el, {
                    y: "0%",
                    duration: 0.9,
                    ease: "power3.inOut",
                })

                tl.to(path, {
                    attr: { d: targetPath },
                    duration: 0.45,
                    ease: "power2.inOut",
                }, "<0.15")

                tl.to(img, {
                    y: "0%",
                    duration: 0.9,
                    ease: "power3.out",
                    delay: 0.5,
                }, "<0.25")
            }}
            enter={(next) => {
                const el = panelRef.current
                const path = pathRef.current
                const img = imageRef.current
                if (!el || !path || !img || !w) return next()

                const tl = gsap.timeline({
                    onComplete: () => {
                        gsap.set(el, { display: "none", y: "100%" })
                        gsap.set(img, { y: "100%" })
                        unlockScroll()
                        next()
                    }
                })

                tl.to(el, {
                    y: "-300%",
                    duration: 0.9,
                    ease: "power3.inOut",
                    delay: 0.1,
                }, "<0.15")
            }}
            auto
        >
            <div
                ref={panelRef}
                style={{
                    display: "none",
                    position: "fixed",
                    inset: 0,
                    zIndex: 9998,
                    willChange: "transform",
                    overflow: "visible",
                }}
            >
                <div style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 99999,
                    overflow: "hidden",
                }}>
                    <div className="h-fit overflow-hidden">
                        <Image
                            ref={imageRef}
                            src="/images/final/png/Asset 2.png"
                            alt="Genesis Ventures"
                            width={200}
                            height={200}
                            style={{ transform: "translateY(100%)" }}
                        />
                    </div>
                </div>

                <svg
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: `calc(100vh + ${extra}px)`,
                        overflow: "visible",
                        pointerEvents: "none",
                    }}
                >
                    <path
                        ref={pathRef}
                        d={initialPath}
                        fill="#111e3d"
                    />
                </svg>
            </div>

            {children}
        </TransitionRouter>
    )
}