"use client";

import { PortfolioItem } from "@/app/what-we-do/portfolio/data";
import { FC } from "react";

interface FeaturedPortfolioCardProps {
  item: PortfolioItem;
}

const FeaturedPortfolioCard: FC<FeaturedPortfolioCardProps> = ({ item }) => {
  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4">
      <article className="group relative flex flex-col overflow-hidden rounded-none border border-[#cfd9e6] bg-white p-8 font-montserrat transition-all duration-300 hover:bg-genesis-navy/10 lg:p-14">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-genesis-red scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />

        {/* Top Meta: Badge & Sector */}
        <div className="flex justify-between items-start mb-16">
          <div />

          <span className="text-[11px] font-black tracking-[0.2em] text-[#173053]/80 uppercase border border-[#cfd9e6] px-3 py-1 transition-colors duration-300">
            {item.badge}
          </span>
        </div>

        {/* Main Title & Description */}
        <div className="max-w-4xl mb-12">
          <h4 className="mb-4 font-agatho text-[1.85rem] sm:text-[2.2rem] leading-[1.35] tracking-[-0.01em] text-[#0f2745] transition-colors duration-300">
            {item.name}
          </h4>
          <div className="mb-6 h-[2px] w-14 bg-[#8D1E39]" />
          <p className="max-w-2xl text-[16px] leading-[1.55] text-[#4f6783] transition-colors duration-300">
            {item.description}
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-12 mb-16">
          {/* Subs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {item.subs?.map((sub) => (
              <div key={sub.name} className="border-l border-[#d8e0ea] pl-5">
                <p className="mb-1.5 text-[11px] uppercase font-bold tracking-[0.2em] text-[#4f6783] transition-colors duration-300">
                  {sub.label}
                </p>
                <p className="text-[16px] font-medium leading-[1.55] text-[#173053] transition-colors duration-300">
                  {sub.name}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:flex sm:gap-12 lg:justify-end gap-y-8">
            {item.stats?.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-light text-[#152F53] tracking-tighter transition-colors duration-300">
                  {stat.value}
                </span>
                <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#4f6783] transition-colors duration-300">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="mt-auto flex flex-wrap items-center gap-y-3 border-t border-[#d8e0ea] pt-8">
          {item.tags.map((tag: string) => (
            <div key={tag} className="flex items-center">
              <span className="text-[11px] text-[#4f6783] font-medium tracking-[0.2em] uppercase transition-colors duration-300">
                {tag}
              </span>
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-linear-to-bl from-[#d8e0ea]/40 to-transparent" />
      </article>
    </div>
  );
};

export default FeaturedPortfolioCard;
