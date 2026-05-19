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
      <aside className="mx-auto flex w-full max-w-6xl flex-nowrap items-end justify-start gap-4 overflow-x-auto px-3 pb-3 pt-5 sm:justify-center sm:gap-6 sm:px-0">
        {investorTabs.map((item, idx) => {
          const Icon = tabIcons[idx];
          return (
            <button
              key={item}
              type="button"
              onClick={() => onTabClick(idx)}
              className={`group flex min-w-max shrink-0 cursor-pointer flex-col items-center gap-1.5 pb-2.5 text-center transition-all duration-200 ${
                idx === activeTab ? "text-[#8D1E39]" : "text-[#162e54] hover:text-[#8D1E39]"
              }`}
            >
              <Icon size={16} strokeWidth={1.9} />
              <span className="font-montserrat text-[0.84rem] font-semibold uppercase leading-tight">
                {item}
              </span>
              <span className={`h-[2px] w-full rounded-full ${idx === activeTab ? "bg-[#8D1E39]" : "bg-transparent"}`} />
            </button>
          );
        })}
      </aside>
    </div>
  );
}
