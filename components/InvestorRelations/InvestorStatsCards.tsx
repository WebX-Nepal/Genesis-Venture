import { investorStats } from "./reportsData";

export default function InvestorStatsCards() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {investorStats.map((stat) => (
        <article key={stat.label} className={`ir-stat p-6 ${stat.bg}`}>
          <p className="text-[0.95rem] text-[#173053]/80">{stat.label}</p>
          <div className="mt-6 flex items-end gap-1">
            <p className="font-montserrat text-[2.35rem] leading-none text-[#173053]">{stat.value}</p>
            {"extra" in stat && stat.extra ? (
              <span className="pb-1 text-[1.1rem] text-[#173053]/80">{stat.extra}</span>
            ) : null}
          </div>
          <p className="mt-8 text-[1rem] text-[#173053]/65">{stat.sub}</p>
        </article>
      ))}
    </div>
  );
}



