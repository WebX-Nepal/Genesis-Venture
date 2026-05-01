"use client";

import { PortfolioItem } from "@/app/what-we-do/portfolio/data";
import { FC } from "react";

interface PortfolioCardProps {
  item: PortfolioItem;
}

const PortfolioCard: FC<PortfolioCardProps> = ({ item }) => {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-none border border-[#cfd9e6] bg-white p-8 transition-all duration-300 hover:bg-genesis-navy/10">
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-genesis-red scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />

      {/* Top Metadata Row */}
      <div className="flex justify-between items-start mb-12">
        <div className="space-y-1">
          <p className="text-[10px] font-bold tracking-[0.2em] text-[#173053] uppercase transition-colors duration-300">
            {item.sector}
          </p>
          <div className="h-px w-4 bg-[#8D1E39] transition-all duration-500" />
        </div>

        <span className="text-[8px] font-medium bg-[#8D1E39] tracking-widest text-white uppercase border border-[#cfd9e6] px-2 py-0.5 transition-colors duration-300">
          {item.badge}
        </span>
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-4">
        <h4 className="font-[PPFONT] text-[1.2rem] tracking-tight leading-[1.2] text-[#152F53] transition-colors duration-300">
          {item.name}
        </h4>

        <p className="max-w-[90%] text-[14px] leading-7 text-[#173053] transition-colors duration-300">
          {item.description}
        </p>
      </div>

      {/* Bottom Functional Area */}
      <div className="mt-8">
        {item.progress !== undefined && (
          <div className="mb-8">
            <div className="flex justify-between items-end mb-2">
              <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#173053] transition-colors duration-300">
                Phase Progress
              </span>
              <span className="text-[10px] tabular-nums font-medium text-[#173053] transition-colors duration-300">
                {item.progress}%
              </span>
            </div>
            <div className="h-px w-full bg-[#cfd9e6]">
              <div
                className="h-px bg-[#173053] transition-all duration-1000 ease-out"
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-y-2 border-t border-[#d8e0ea] pt-6">
          {item.tags.map((tag: string, index: number) => (
            <div key={tag} className="flex items-center">
              <span className="text-[10px] text-[#173053] font-medium tracking-wider uppercase transition-colors duration-300">
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
