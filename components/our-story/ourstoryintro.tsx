// "use client";

// const heroStats = [
//   { value: "20+", label: "Years of cross-sector experience" },
//   { value: "2", label: "Sectors of deep expertise" },
//   { value: "Global", label: "Investment perspective and reach" },
//   { value: "All", label: "Investor types served" },
// ];

// const storyParagraphs = [
//   "Genesis Ventures Ltd was founded on a simple belief: the best investment decisions come from understanding both financial markets and the industries that drive them. Too often, capital is managed without a true understanding of the businesses behind it.",
//   "Built at the intersection of manufacturing and finance, we combine operational insight with market expertise to identify opportunities, manage risk thoughtfully, and create enduring value for our investors, partners, and the businesses we support.",
// ];

// export default function OurStoryIntro() {
//   return (
//     <section className="bg-white pt-16 pb-10 sm:pt-20 sm:pb-12 lg:pt-24 lg:pb-14">
//       <div className="layout-7xl">
//         <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
//           <span className="inline-flex items-center gap-3 font-montserrat text-[11px] font-medium tracking-[0.28em] uppercase text-[#8D1E39]">
//             Our Story
//           </span>
//           <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#8D1E39] font-montserrat lg:pl-14 lg:text-left">
//             Where We Come From
//           </p>
//         </div>

//         <div className="mt-6 grid grid-cols-1 lg:grid-cols-2">
//           <div className="order-2 flex flex-col justify-start lg:order-2 lg:pl-14">
//             <p className="max-w-[560px] text-[16px] sm:text-[17px] leading-[1.55] text-[#173053]">
//               {storyParagraphs[0]}
//             </p>

//             <p className="mt-5 max-w-[560px] text-[16px] sm:text-[17px] leading-[1.55] text-[#173053]">
//               {storyParagraphs[1]}
//             </p>
//           </div>

//           <div className="order-1 flex flex-col justify-start lg:order-1 lg:justify-center lg:-mt-3">
//             <div className="mb-10 pb-10 lg:mb-0 lg:pb-0">
//               <blockquote className="font-[PPFONT] text-[1.7rem] sm:text-[2rem] italic leading-[1.45] text-[#173053]">
//                 We do not just read balance sheets. We understand what it takes
//                 to build a business and weather a cycle.
//               </blockquote>
//             </div>
//           </div>
//         </div>

//         <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 md:grid-cols-4">
//           {heroStats.map((stat, index) => (
//             <article
//               key={stat.label}
//               className="group relative min-h-[148px] overflow-hidden border border-[#0a3f73] bg-gradient-to-br from-[#001D3F] to-[#04356A] px-4 py-5 sm:min-h-[162px] sm:px-5 sm:py-6"
//             >
//               <div className="flex items-center gap-2.5">
//                 <span className="font-montserrat text-[9px] uppercase tracking-[0.24em] text-[#f3dce3]">
//                   {String(index + 1).padStart(2, "0")}
//                 </span>
//                 <span className="h-px w-6 bg-[#f3dce3]/55" />
//                 <span className="font-montserrat text-[9px] uppercase tracking-[0.2em] text-[#f3dce3]">
//                   Profile
//                 </span>
//               </div>

//               <div className="mt-6">
//                 <p className="font-[PPFONT] text-[1.9rem] leading-none text-white sm:text-[2.1rem]">
//                   {stat.value}
//                 </p>
//                 <p className="mt-2 font-montserrat text-[11px] uppercase leading-tight tracking-[0.08em] text-white/85">
//                   {stat.label}
//                 </p>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";

const heroStats = [
  {
    value: "20+",
    label: "Years of cross-sector experience",
    image: "/images/about/meeting.jpg",
  },
  {
    value: "2",
    label: "Sectors of deep expertise",
    image: "/images/about/electric.png",
  },
  {
    value: "Global",
    label: "Investment perspective and reach",
    image: "/images/milestones/global.jpg",
  },
  {
    value: "All",
    label: "Investor types served",
    image: "/images/about/values.jpg",
  },
];

const storyParagraphs = [
  "Genesis Ventures Ltd was founded on a simple belief: the best investment decisions come from understanding both financial markets and the industries that drive them. Too often, capital is managed without a true understanding of the businesses behind it.",
  "Built at the intersection of manufacturing and finance, we combine operational insight with market expertise to identify opportunities, manage risk thoughtfully, and create enduring value for our investors, partners, and the businesses we support.",
];

export default function OurStoryIntro() {
  return (
    <section className="bg-white pt-16 pb-10 sm:pt-20 sm:pb-12 lg:pt-24 lg:pb-14">
      <div className="layout-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
          <span className="inline-flex items-center gap-3 font-montserrat text-[11px] font-medium tracking-[0.28em] uppercase text-[#8D1E39]">
            Our Story
          </span>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#8D1E39] font-montserrat lg:pl-14 lg:text-left">
            Where We Come From
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2">
          <div className="order-2 flex flex-col justify-start lg:order-2 lg:pl-14">
            <p className="max-w-[560px] text-[16px] sm:text-[17px] leading-[1.55] text-[#173053]">
              {storyParagraphs[0]}
            </p>

            <p className="mt-5 max-w-[560px] text-[16px] sm:text-[17px] leading-[1.55] text-[#173053]">
              {storyParagraphs[1]}
            </p>
          </div>

          <div className="order-1 flex flex-col justify-start lg:order-1 lg:justify-center lg:-mt-3">
            <div className="mb-10 pb-10 lg:mb-0 lg:pb-0">
              <blockquote className="font-[PPFONT] text-[1.7rem] sm:text-[2rem] italic leading-[1.45] text-[#173053]">
                We do not just read balance sheets. We understand what it takes
                to build a business and weather a cycle.
              </blockquote>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 md:hidden overflow-x-auto snap-x snap-mandatory">
          <div className="flex min-w-max gap-4 pr-2">
            {heroStats.map((stat, index) => (
              <article
                key={stat.label}
                className="group relative h-[60vh] w-[82vw] shrink-0 snap-center overflow-hidden border border-[#0a3f73] bg-gradient-to-br from-[#001D3F] to-[#04356A] p-5 sm:w-[64vw]"
              >
                <div className="absolute inset-0 opacity-100">
                  <Image
                    src={stat.image}
                    alt={stat.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 82vw, 64vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/50 to-black/30" />
                </div>

                <div className="relative z-20 flex items-center gap-2.5">
                  <span className="font-montserrat text-[9px] uppercase tracking-[0.24em] text-[#f3dce3]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-6 bg-[#f3dce3]/55" />
                  <span className="font-montserrat text-[9px] uppercase tracking-[0.2em] text-[#f3dce3]">
                    Profile
                  </span>
                </div>

                <div className="absolute inset-x-5 top-1/2 z-20 -translate-y-1/2 text-center">
                  <p className="font-[PPFONT] text-[2.05rem] leading-none text-white">
                    {stat.value}
                  </p>
                  <p className="mx-auto mt-2 max-w-[240px] font-montserrat text-[11px] uppercase leading-tight tracking-[0.08em] text-white/90">
                    {stat.label}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 hidden gap-4 md:mt-12 md:grid md:grid-cols-4">
          {heroStats.map((stat, index) => (
            <article
              key={stat.label}
              className="group relative min-h-[148px] overflow-hidden border border-[#0a3f73] bg-gradient-to-br from-[#001D3F] to-[#04356A] px-4 py-5 sm:min-h-[162px] sm:px-5 sm:py-6 md:aspect-[4/5] md:min-h-0"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100">
                <Image
                  src={stat.image}
                  alt={stat.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/52 to-black/30" />
              </div>

              <div className="relative z-20 flex items-center gap-2.5">
                <span className="font-montserrat text-[9px] uppercase tracking-[0.24em] text-[#f3dce3]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-6 bg-[#f3dce3]/55" />
                <span className="font-montserrat text-[9px] uppercase tracking-[0.2em] text-[#f3dce3]">
                  Profile
                </span>
              </div>

              <div className="absolute inset-x-5 top-1/2 z-20 -translate-y-1/2 text-center">
                <p className="font-[PPFONT] text-[1.9rem] leading-none text-white sm:text-[2.1rem]">
                  {stat.value}
                </p>
                <p className="mx-auto mt-2 max-w-[240px] font-montserrat text-[11px] uppercase leading-tight tracking-[0.08em] text-white/85">
                  {stat.label}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
