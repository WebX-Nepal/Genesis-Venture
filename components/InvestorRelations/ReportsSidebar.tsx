import { investorTabs } from "./reportsData";

type ReportsSidebarProps = {
  activeTab: number;
  onTabClick: (index: number) => void;
};

export default function ReportsSidebar({ activeTab, onTabClick }: ReportsSidebarProps) {
  return (
    <div className="ir-left-panel">
      <aside className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-center gap-2 py-3 sm:gap-3 sm:py-4">
        {investorTabs.map((item, idx) => (
          <button
            key={item}
            type="button"
            onClick={() => onTabClick(idx)}
            className={`px-4 py-2 text-center text-[0.78rem] uppercase tracking-[0.08em] sm:px-5 sm:text-[0.84rem] ${
              idx === activeTab
                ? "bg-[#173053] font-semibold text-white"
                : "border border-[#173053]/20 text-[#173053]/80 hover:bg-[#173053]/5"
            }`}
          >
            {item}
          </button>
        ))}
      </aside>
    </div>
  );
}
