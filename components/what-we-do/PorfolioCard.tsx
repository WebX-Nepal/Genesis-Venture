"use client";

import { PortfolioItem } from "@/app/what-we-do/portfolio/data";
import { FC } from "react";
import Image from "next/image";

interface PortfolioCardProps {
  item: PortfolioItem;
}

const PortfolioCard: FC<PortfolioCardProps> = ({ item }) => {
  const imageById: Partial<Record<PortfolioItem["id"], string>> = {
    "divine-healthcare": "/portfolio/Healthcare & Pharma/divine healthcare.jfif",
    "florid-labs": "/portfolio/Healthcare & Pharma/florid.jpg",
    "frontline-hospital": "/portfolio/Healthcare & Pharma/frontline hospital.png",
    "annapurna-cable-car": "/portfolio/Hospitality/annapurna cable car.png",
    "bandipur-cable-car": "/portfolio/Hospitality/bandipur cable car.png",
    "hotel-forest-inn": "/portfolio/Hospitality/forest inn.webp",
    "kbnr-isuwa": "/portfolio/Hydropower/kbnr iswa hydropower.png",
    "ayu-malum": "/portfolio/Hydropower/ayu malun hydro.jpeg",
    "maruti-cements": "/portfolio/Manufacturing/maruti cement.jpg",
    "shubhshree-agni": "/portfolio/Manufacturing/shubhshree agni cement.jpg",
    "mahashakti-cement": "/portfolio/Manufacturing/mahashakti cement.jpg",
    "mero-kisan": "/portfolio/agro/mero kishan.png",
  };
  const headerImage = imageById[item.id];
  const tagColorClasses = [
    "bg-[#E7F0FF] text-[#173053]",
    "bg-[#E7F8EE] text-[#1E5A3A]",
    "bg-[#FDEBEC] text-[#8D1E39]",
    "bg-[#F0EAF8] text-[#4A1A8A]",
    "bg-[#FBF5E6] text-[#8B6914]",
  ];

  const badgeTypeClasses: Record<PortfolioItem["badgeType"], string> = {
    growth: "bg-[#dce8f7] text-[#274a73] border-[#b8cce4]",
    est: "bg-[#f3f4f6] text-[#4b5563] border-[#d1d5db]",
    preipo: "bg-[#f7eeed] text-[#8B1C1C] border-[#e7c3bf]",
    listed: "bg-[#e0f5ea] text-[#0A7A3A] border-[#b8e7c9]",
    ipo: "bg-[#e0f5ea] text-[#0A7A3A] border-[#b8e7c9]",
    operational: "bg-[#e0f5ea] text-[#0A7A3A] border-[#b8e7c9]",
    construction: "bg-[#fbf5e6] text-[#8B6914] border-[#ecd9aa]",
  };

  const progressColorByType: Record<PortfolioItem["badgeType"], string> = {
    growth: "bg-gradient-to-r from-[#2E4D73] to-[#5C7DA6]",
    est: "bg-gradient-to-r from-[#6b7280] to-[#9ca3af]",
    preipo: "bg-gradient-to-r from-[#8B1C1C] to-[#B53737]",
    listed: "bg-gradient-to-r from-[#0A7A3A] to-[#2BAE66]",
    ipo: "bg-gradient-to-r from-[#0A7A3A] to-[#2BAE66]",
    operational: "bg-gradient-to-r from-[#0A7A3A] to-[#2BAE66]",
    construction: "bg-gradient-to-r from-[#8B6914] to-[#B38728]",
  };

  return (
    <article className="group relative flex h-full flex-col overflow-hidden border border-[#d8e0ea] bg-white font-montserrat transition-all duration-300 hover:-translate-y-1 hover:border-[#2E4D73] hover:shadow-[0_20px_50px_rgba(26,46,74,0.14)]">
      <div className="relative h-[130px] overflow-hidden bg-gradient-to-br from-[#1A2E4A] via-[#2E4D73] to-[#1A2E4A] p-5">
        {headerImage ? (
          <Image
            src={headerImage}
            alt={item.name}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        ) : null}
        <span
          className={`absolute right-3 top-3 border px-2.5 py-1 text-[10px] font-medium tracking-[0.04em] ${badgeTypeClasses[item.badgeType]}`}
        >
          {item.badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h4 className="font-agatho text-[1.08rem] leading-[1.25] text-[#1A2E4A] sm:text-[1.2rem]">
          {item.name}
        </h4>
        <p className="mt-2 flex-1 text-[12.5px] font-light leading-[1.7] text-[#5C6370]">
          {item.description}
        </p>

        {typeof item.progress === "number" ? (
          <div className="mt-3">
            <div className="mb-1.5 flex items-center justify-between text-[10px] uppercase tracking-[0.05em] text-[#5C6370]">
              <span>Progress</span>
              <span className="font-semibold text-[#1A2E4A]">{item.progress}%</span>
            </div>
            <div className="h-[5px] overflow-hidden bg-[#dde2eb]">
              <div
                className={`h-full ${progressColorByType[item.badgeType]}`}
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-1.5 border-t border-[#e8edf3] pt-4">
          {item.tags.map((tag: string, index: number) => (
            <span
              key={tag}
              className={`${tagColorClasses[index % tagColorClasses.length]} px-2 py-1 text-[10.5px] font-medium`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default PortfolioCard;
