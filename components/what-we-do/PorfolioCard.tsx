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
    "premier-distillery": "/portfolio/Manufacturing/distillery.png",
    "premier-steel": "/portfolio/Manufacturing/premier steel .png",
    "sopan-multiple": "/portfolio/Others/sopan.png",
    "annapurna-maccha": "/portfolio/Manufacturing/annapurnamaccha.png",
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
    <article className="group relative flex h-full flex-col overflow-hidden border border-[#d8e0ea] bg-white font-montserrat transition-all duration-300 hover:-translate-y-1.5 hover:border-[#8D1E39]/65 hover:shadow-[0_24px_56px_rgba(26,46,74,0.16)]">
      <div className="relative h-[170px] overflow-hidden border-b border-[#8D1E39] bg-white p-4">
        {headerImage ? (
          <Image
            src={headerImage}
            alt={item.name}
            fill
            className="object-contain object-top p-3 transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0">
            <img
              src="/placeholder/place.png"
              alt={`${item.name} placeholder`}
              className="h-full w-full object-cover object-center"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />
        <span
          className={`absolute right-3 top-3 border px-3 py-1 text-[10px] font-semibold tracking-[0.06em] uppercase backdrop-blur-sm ${badgeTypeClasses[item.badgeType]}`}
        >
          {item.badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h4 className="font-agatho text-[1.18rem] leading-[1.2] text-[#163154] sm:text-[1.32rem]">
          {item.name}
        </h4>
        <p className="mt-2.5 flex-1 text-[12.5px] font-normal leading-[1.72] text-[#556983]">
          {item.description}
        </p>

        {typeof item.progress === "number" ? (
          <div className="mt-4">
            <div className="mb-1.5 flex items-center justify-between text-[10px] uppercase tracking-[0.08em] text-[#5C6370]">
              <span>Progress</span>
              <span className="font-semibold text-[#1A2E4A]">{item.progress}%</span>
            </div>
            <div className="h-[6px] overflow-hidden bg-[#dde2eb]">
              <div
                className={`h-full ${progressColorByType[item.badgeType]}`}
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-2 border-t border-[#e8edf3] pt-4">
          {item.tags.map((tag: string, index: number) => (
            <span
              key={tag}
              className={`${tagColorClasses[index % tagColorClasses.length]} px-2.5 py-1 text-[10.5px] font-medium`}
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
