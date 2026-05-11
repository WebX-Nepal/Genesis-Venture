"use client";

import { useStaggeredCharacterRise } from "@/hooks/useStaggeredCharacterRise";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function MostRecent() {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const mostRecent = [
    {
      title: "Dolce & Gabbana Boutique",
      type: "Retail",
      image: "/image4.png",
    },
    {
      title: "Tiffany Flagship",
      type: "Retail",
      image: "/image5.png",
    },
    {
      title: "Dream Hotel",
      type: "Hotel",
      image: "/image6.png",
    },
  ];
  useStaggeredCharacterRise(headerRef);
  return (
    <div className="w-full min-h-screen px-5 py-5 border-t border-primary flex flex-col lg:gap-50 md:gap-20 pt-20">
      <h1
        ref={headerRef}
        className="lg:text-[12vw] text-[50px] md:text-[100px] text-center font-[PPFONT] font-bold leading-none text-primary"
      >
        Most Recent <br /> Projects
      </h1>
      <div className="md:grid md:grid-cols-3  flex flex-col relative min-h-200">
        {mostRecent.map((item, index) => (
          <div
            key={index}
            className="w-full flex flex-col md:gap-30 lg:gap-2 md:border-l p-2 md:border-primary"
          >
            <div className="flex justify-between font-[PPFONT] text-primary text-sm lg:text-base lg:text-lg pr-2 lg:pr-10 lg:pr-50">
              <p>0{index + 1}.</p>
              <p>{item.type}</p>
            </div>
            <div
              className={`lg:mt-4 ml-5  bg-neutral-dark relative md:-left-10 md:pt-1 md:pl-2 lg:top-1/2 lg:px-10 lg:py-5 transform lg:-translate-y-1/2 lg:${index === 1 ? "mb-50" : ""}`}
            >
              <h1 className="font-[PPFONT] text-primary text-lg lg:text-5xl pr-5 mb-3">
                {item.title}
              </h1>
              <div className="w-50 group h-50 md:w-60 md:h-60 lg:w-100 lg:h-100 relative overflow-hidden ">
                <div className="w-full cursor-pointer h-full group-hover:opacity-0 transition-opacity duration-300 absolute z-10 bg-primary/70" />
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover absolute"
                />
                <div className="scale-0 group-hover:scale-100 p-5 origin-bottom-right absolute z-11 bg-neutral-base bottom-0 border border-primary right-0 transition-transform duration-300">
                  <ArrowUp
                    size={40}
                    strokeWidth={1}
                    className="text-primary rotate-45"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="md:absolute md:bottom-6 md:left-[70%] lg:left-[45%] md:-translate-x-1/2 bg-neutral-dark w-full py-2 text-center">
          <button className="uppercase font-poppins px-10 py-5 bg-primary md:ml-25 w-full md:w-80">
            View ALL Products
          </button>
        </div>
      </div>
    </div>
  );
}
