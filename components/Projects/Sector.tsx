"use client";
import { useState } from "react";

const sectors = [
  { label: "Technology & AI", id: "technology" },
  { label: "Healthcare & Life Sciences", id: "healthcare" },
  { label: "Financial Services", id: "fintech" },
  { label: "Real Estate & Infrastructure", id: "realestate" },
  { label: "Consumer & Retail", id: "consumer" },
];

export default function SectorStrip() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setActiveId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="w-full border-y border-gray-100 px-8 md:px-16 flex items-center justify-between overflow-x-auto"
      style={{ scrollbarWidth: "none" }}
    >
      {/* Label */}
      <span className="text-xs text-gray-400 font-poppins uppercase tracking-widest pr-6 border-r border-gray-200 py-4 shrink-0">
        Sectors
      </span>

      {/* Buttons */}
      <div className="flex items-center">
        {sectors.map(({ label, id }) => {
          const isActive = activeId === id;
          const isHovered = hoveredId === id;

          return (
            <button
              key={id}
              onClick={() => handleClick(id)}
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative group px-5 md:px-6 py-4 text-xs md:text-sm font-poppins uppercase tracking-wider whitespace-nowrap transition-colors duration-200 ${
                isActive
                  ? "text-genesis-navy"
                  : "text-gray-400 hover:text-genesis-navy"
              }`}
            >
              {label}

              {/* Animated underline */}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-genesis-red transition-all duration-300 ease-out ${
                  isActive
                    ? "w-full opacity-100"
                    : isHovered
                      ? "w-full opacity-60"
                      : "w-0 opacity-0"
                }`}
              />

              {/* Subtle background fill on hover */}
              <span
                className={`absolute inset-0 bg-genesis-navy transition-opacity duration-200 ${
                  isHovered && !isActive ? "opacity-[0.03]" : "opacity-0"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
