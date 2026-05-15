import { investorTabs } from "./reportsData";

type ReportsSidebarProps = {
  activeTab: number;
  onTabClick: (index: number) => void;
};

export default function ReportsSidebar({ activeTab, onTabClick }: ReportsSidebarProps) {
  return (
    <div className="h-fit self-start sticky top-20">
      <aside className="ir-left-panel max-h-[calc(100vh-6rem)] overflow-y-auto border border-[#d8d0c1] bg-white">
        {investorTabs.map((item, idx) => (
          <button
            key={item}
            type="button"
            onClick={() => onTabClick(idx)}
            className={`w-full px-5 py-4 text-left text-[0.92rem] sm:text-[0.96rem] ${
              idx === activeTab ? "bg-[#173053] font-semibold text-white" : "text-[#173053]/80"
            }`}
          >
            {item}
          </button>
        ))}
      </aside>
    </div>
  );
}
