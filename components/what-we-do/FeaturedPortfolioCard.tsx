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
      <article className="group relative grid overflow-hidden border border-[#d8e0ea] bg-white font-montserrat transition-all duration-300 hover:border-[#8D1E39]/65 hover:shadow-[0_24px_56px_rgba(26,46,74,0.14)] lg:grid-cols-[300px_1fr]">
        <div className="relative overflow-hidden bg-white p-8">
          <Image
            src="/portfolio/Others/sopan.png"
            alt={item.name}
            fill
            className="object-contain object-top p-4 transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 300px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />
          <div className="absolute -right-10 -top-10 h-44 w-44 bg-[#C4785A]/10" />
          <div className="absolute -bottom-10 -left-10 h-36 w-36 bg-[#8AAFD4]/10" />
          <div className="relative z-10 h-full" />
        </div>

        <div className="p-7 sm:p-8 lg:p-10">
          <h4 className="mb-3 font-agatho text-[1.55rem] leading-[1.2] text-[#1A2E4A] sm:text-[1.8rem]">
            {item.name}
          </h4>
          <p className="mb-8 max-w-3xl text-[13px] font-normal leading-[1.75] text-[#566a83]">
            {item.description}
          </p>

          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {item.subs?.map((sub) => (
              <div key={sub.name} className="border border-[#e6ebf2] bg-[#f4f8fd] p-4">
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
                className={`px-2.5 py-1 text-[10.5px] font-medium ${
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
