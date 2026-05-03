"use client";

const redBandItems = [
  "Conflict-Free and Fiduciary",
  "Client Interests - First, Last and Always",
  "Long-Horizon. No Short-Term Pressure.",
];

export default function RedBand() {
  return (
    <section className="bg-[#173053] py-6 sm:py-8">
      <div className="layout-7xl flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {redBandItems.map((item, idx) => (
          <div
            key={item}
            className="flex items-center gap-3 lg:flex-1 lg:justify-center"
          >
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p className="font-poppins text-[11px] font-medium uppercase tracking-[0.12em] text-white">
              {item}
            </p>
            {idx !== redBandItems.length - 1 && (
              <span className="ml-5 hidden h-7  bg-white/20 lg:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
