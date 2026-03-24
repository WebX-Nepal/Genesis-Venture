"use client"
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function News() {
    const dummyNews = [
        {
            image: "/news1.png",
            type: "contractors",
            date: "02.11",
            title: "Outsource Consultants Expands Services with New Construction Management Division"
        },
        {
            image: "/news2.png",
            type: "projects",
            date: "02.20",
            title: "Outsource Consultants Secures Permits for Landmark Building Renovation"
        },
        {
            image: "/news3.png",
            type: "code",
            date: "02.12",
            title: "Outsource Consultants Launches Code Compliance Training Program for Architects and Engineers"
        },
        {
            image: "/news4.png",
            date: "02.08",
            type: "insights",
            title: "Outsource Consultants Shares Insights on Navigating DOB Regulations in New York City"
        }
    ]
    const [currNews, setCurrNews] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [blurAmount, setBlurAmount] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isImageHovering, setIsImageHovering] = useState(false);
    const imageRef = useRef<HTMLDivElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<gsap.core.Tween | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const lastMousePos = useRef({ x: 0, y: 0 });
    const blurTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const getGridPosition = (index: number) => {
        const col = index % 2;
        const row = Math.floor(index / 2);
        return {
            left: `${col * 50}%`,
            top: `${row * 50}%`
        };
    };

    const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = imageContainerRef.current?.getBoundingClientRect();
        if (rect) {
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }

        const dx = e.clientX - lastMousePos.current.x;
        const dy = e.clientY - lastMousePos.current.y;
        const speed = Math.sqrt(dx * dx + dy * dy);

        // Calculate blur based on mouse speed
        const newBlur = Math.min(speed * 0.8, 20); // Max blur of 20px
        setBlurAmount(newBlur);

        lastMousePos.current = { x: e.clientX, y: e.clientY };

        // Clear existing timeout
        if (blurTimeoutRef.current) {
            clearTimeout(blurTimeoutRef.current);
        }

        // Reset blur after mouse stops
        blurTimeoutRef.current = setTimeout(() => {
            setBlurAmount(0);
        }, 100);
    };

    const handleImageMouseEnter = () => {
        setIsImageHovering(true);
    };

    const handleImageMouseLeave = () => {
        setIsImageHovering(false);
        setBlurAmount(0);
        if (blurTimeoutRef.current) {
            clearTimeout(blurTimeoutRef.current);
        }
    };

    useEffect(() => {
        // Cancel any existing animation and timeout
        if (animationRef.current) {
            animationRef.current.kill();
        }
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // Set opacity to lower value immediately
        if (imageRef.current) {
            gsap.set(imageRef.current, { opacity: 0 });
        }

        // Wait a few seconds before starting the animation
        timeoutRef.current = setTimeout(() => {
            if (imageRef.current) {
                animationRef.current = gsap.to(imageRef.current, {
                    opacity: 1,
                    duration: 0.5,
                    ease: "easeOut"
                });
            }
        }); // 300ms delay before animation starts

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            if (animationRef.current) {
                animationRef.current.kill();
            }
        };
    }, [currNews]);

    return (
        <div className="w-full min-h-screen pt-15 pb-40 px-5">
            <div className="border-t border-primary">
                <div className="flex justify-between font-[GT50] text-primary py-5 px-2 uppercase ">
                    <p>Latest News</p>
                    <button className="flex items-center uppercase  gap-2">
                        [ View All news <ArrowRight size={20} strokeWidth={1} /> ]
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
                <div
                    ref={imageContainerRef}
                    className="w-full h-[500px] lg:h-full overflow-hidden relative"
                    onMouseMove={handleImageMouseMove}
                    onMouseEnter={handleImageMouseEnter}
                    onMouseLeave={handleImageMouseLeave}
                >
                    {
                        dummyNews[currNews] && (
                            <div ref={imageRef} className="w-full h-full relative">
                                <div className="w-full cursor-pointer h-full group-hover:opacity-0 transition-opacity duration-300 absolute z-10 bg-primary/60" />
                                <Image src={dummyNews[currNews].image} alt={dummyNews[currNews].title} fill className="" />
                            </div>
                        )
                    }
                    {/* Localized blur effect that follows cursor */}
                    {isImageHovering && blurAmount > 0 && (
                        <div
                            className="pointer-events-none absolute rounded-full"
                            style={{
                                left: mousePos.x - 75,
                                top: mousePos.y - 75,
                                width: 150,
                                height: 150,
                                backdropFilter: `blur(${blurAmount}px)`,
                                WebkitBackdropFilter: `blur(${blurAmount}px)`,
                                transition: 'backdrop-filter 0.1s ease-out',
                                zIndex: 20,
                            }}
                        />
                    )}
                </div>
                <div
                    className="grid w-full grid-cols-2 relative "
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >

                    <div
                        className="absolute w-1/2 h-1/2 bg-primary pointer-events-none transition-all duration-300 ease-out z-0"
                        style={{
                            left: getGridPosition(currNews).left,
                            top: getGridPosition(currNews).top,
                        }}
                    >
                        <div className={`p-10 ${isHovering ? 'scale-100' : 'scale-0'} transition-transform duration-300 origin-top-right top-0 right-0 absolute text-primary bg-white`}>
                            <ArrowRight size={45} className="-rotate-45" strokeWidth={1} />
                        </div>
                    </div>
                    {
                        dummyNews.map((news, index) => (
                            <div
                                key={index}
                                className={`group border-b border-primary relative ${currNews === index ? 'text-neutral-base' : 'text-primary'} transition-all flex flex-col justify-between py-5 z-10`}
                                onMouseEnter={() => { setCurrNews(index); }}
                            >
                                <div className={`${index % 2 === 0 ? "" : "border-l pl-2 border-primary"} h-full flex flex-col justify-between gap-5 p-5`}>
                                    <h1 className=" text-md md:text-2xl font-[PPFONT] uppercase">
                                        {news.date}
                                    </h1>
                                    <div className="flex flex-col  gap-3">
                                        <p className="font-[GT50]">
                                            {news.type.toUpperCase()}
                                        </p>
                                        <h1 className="text-md md:text-2xl font-[PPFONT]">
                                            {news.title}
                                        </h1>
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}