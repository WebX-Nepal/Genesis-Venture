"use client";

import { PortfolioItem } from "@/app/what-we-do/portfolio/data";
import { FC } from "react";

interface PortfolioCardProps {
  item: PortfolioItem;
}

const PortfolioCard: FC<PortfolioCardProps> = ({ item }) => {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-none border border-[#cfd9e6] bg-white p-8 font-montserrat transition-all duration-300 hover:bg-genesis-navy/10">
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-genesis-red scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />

      {/* Top Metadata Row */}
      <div className="flex justify-between items-start mb-12">
        <div />

        <span className="text-[11px] font-medium bg-[#8D1E39] tracking-[0.12em] text-white uppercase border border-[#cfd9e6] px-2 py-0.5 transition-colors duration-300">
          {item.badge}
        </span>
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-4">
        <h4 className="font-agatho text-[1.25rem] sm:text-[1.45rem] tracking-tight leading-[1.25] text-[#0f2745] transition-colors duration-300">
          {item.name}
        </h4>
        <div className="h-[2px] w-10 bg-[#8D1E39]" />

        <p className="max-w-[90%] text-[16px] leading-[1.55] text-[#173053] transition-colors duration-300">
          {item.description}
        </p>
      </div>

      {/* Bottom Functional Area */}
      <div className="mt-8">
        {/* Tags */}
        <div className="flex flex-wrap items-center gap-y-2 border-t border-[#d8e0ea] pt-6">
          {item.tags.map((tag: string, index: number) => (
            <div key={tag} className="flex items-center">
              <span className="text-[11px] text-[#173053] font-medium tracking-[0.12em] uppercase transition-colors duration-300">
                {tag}
              </span>
              {index < item.tags.length - 1 && (
                <span className="mx-3 h-3 w-px bg-[#d8e0ea]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default PortfolioCard;
