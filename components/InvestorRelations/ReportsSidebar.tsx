import { Building2, Files, Headset } from "lucide-react";
import { investorTabs } from "./reportsData";

type ReportsSidebarProps = {
  activeTab: number;
  onTabClick: (index: number) => void;
};

export default function ReportsSidebar({ activeTab, onTabClick }: ReportsSidebarProps) {
  const tabIcons = [Files, Building2, Headset] as const;

  return (
    <div className="ir-left-panel sticky top-[calc(var(--navbar-offset)-8px)] z-30 border-b border-[#162e54]/20 bg-zinc-100/95 backdrop-blur-sm">
      <aside className="mx-auto flex w-full max-w-6xl flex-wrap items-end justify-center gap-6 py-5 sm:gap-9">
        {investorTabs.map((item, idx) => {
          const Icon = tabIcons[idx];
          return (
            <button
              key={item}
              type="button"
              onClick={() => onTabClick(idx)}
              className={`group flex flex-col items-center gap-3 pb-4 text-center transition-colors ${
                idx === activeTab ? "text-[#8D1E39]" : "text-[#162e54] hover:text-[#8D1E39]"
              }`}
            >
              <Icon size={21} strokeWidth={2} />
              <span className="font-montserrat text-[1.06rem] font-semibold uppercase leading-tight tracking-[-0.01em]">
                {item}
              </span>
              <span className={`h-[4px] w-full rounded-full ${idx === activeTab ? "bg-[#8D1E39]" : "bg-transparent"}`} />
            </button>
          );
        })}
      </aside>
    </div>
  );
}
