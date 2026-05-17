"use client";

import { PortfolioItem } from "@/app/what-we-do/portfolio/data";
import { FC } from "react";
import Image from "next/image";

interface FeaturedPortfolioCardProps {
  item: PortfolioItem;
}

const FeaturedPortfolioCard: FC<FeaturedPortfolioCardProps> = ({ item }) => {
  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4">
      <article className="group relative grid overflow-hidden border border-[#d8e0ea] bg-white font-montserrat transition-all duration-300 hover:border-[#2E4D73] hover:shadow-[0_20px_50px_rgba(26,46,74,0.12)] lg:grid-cols-[280px_1fr]">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#1A0A3A] via-[#2E1060] to-[#1A1A4A] p-8">
          <Image
            src="/portfolio/Others/sopan multiple.png"
            alt={item.name}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 280px"
          />
          <div className="absolute -right-10 -top-10 h-44 w-44 bg-[#C4785A]/10" />
          <div className="absolute -bottom-10 -left-10 h-36 w-36 bg-[#8AAFD4]/10" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
            <div className="mb-3 border border-white/15 bg-white/10 px-5 py-4">
              <p className="font-agatho text-[15px] leading-[1.35] tracking-[0.04em] text-white">
                {item.shortName}
              </p>
            </div>
            <span className="border border-[#C4785A]/30 bg-[#C4785A]/20 px-3 py-1 text-[10px] tracking-[0.05em] text-[#C4785A]">
              {item.badge}
            </span>
          </div>
        </div>

        <div className="p-8 lg:p-10">
          <h4 className="mb-3 font-agatho text-[1.55rem] leading-[1.2] text-[#1A2E4A] sm:text-[1.8rem]">
            {item.name}
          </h4>
          <p className="mb-8 max-w-3xl text-[13px] font-light leading-[1.75] text-[#5C6370]">
            {item.description}
          </p>

          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {item.subs?.map((sub) => (
              <div key={sub.name} className="border border-[#e6ebf2] bg-[#f0f4f8] p-4">
                <p className="mb-1 text-[9.5px] uppercase tracking-[0.1em] text-[#8B1C1C]">
                  {sub.label}
                </p>
                <p className="text-[12.5px] font-medium leading-[1.35] text-[#1A2E4A]">
                  {sub.name}
                </p>
                {sub.note ? (
                  <p className="mt-1 text-[11px] text-[#5C6370]">{sub.note}</p>
                ) : null}
              </div>
            ))}
          </div>

          <div className="mb-8 grid grid-cols-2 gap-0 overflow-hidden border border-[#d8e0ea] sm:grid-cols-4">
            {item.stats?.map((stat) => (
              <div key={stat.label} className="border-r border-[#d8e0ea] bg-white px-4 py-3 last:border-r-0">
                <p className="font-agatho text-[1.15rem] leading-none text-[#1A2E4A]">
                  {stat.value}
                </p>
                <p className="mt-1 text-[9.5px] uppercase tracking-[0.08em] text-[#5C6370]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 border-t border-[#e6ebf2] pt-5">
            {item.tags.map((tag: string, idx: number) => (
              <span
                key={tag}
                className={`px-2 py-1 text-[10.5px] font-medium ${
                  idx % 3 === 0
                    ? "bg-[#f0eaf8] text-[#4A1A8A]"
                    : idx % 3 === 1
                    ? "bg-[#fbf5e6] text-[#8B6914]"
                    : "bg-[#f7eeed] text-[#8B1C1C]"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default FeaturedPortfolioCard;
