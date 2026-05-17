import Image from "next/image";

export default function Info() {
  return (
    <section className="w-full bg-white py-12 sm:py-14 lg:py-16">
      <div className="layout-7xl">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="relative mx-auto w-full max-w-[420px] overflow-hidden bg-[#f6f9fd]">
            <Image
              src="/gif/gifanimated.gif"
              alt="Genesis Ventures visual"
              width={900}
              height={900}
              className="h-full w-full object-cover"
              unoptimized
            />
          </div>

          <div>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.28em] text-[#8D1E39] font-montserrat">
              Our Story
            </p>
            <h2 className="font-agatho text-[clamp(1.6rem,3.5vw,2.4rem)] leading-[1.2] text-[#173053]">
              Where We Come From
            </h2>
            <p className="max-w-4xl font-montserrat text-[15px] leading-[1.8] text-[#4e617d] sm:text-[16px]">
              Genesis Ventures Ltd was founded on a simple belief: the best investment decisions come from understanding both financial markets and the industries that drive them. Too often, capital is managed without a true understanding of the businesses behind it.
            </p>
            <p className="mt-4 max-w-4xl font-montserrat text-[15px] leading-[1.8] text-[#4e617d] sm:text-[16px]">
              Built at the intersection of manufacturing and finance, we combine operational insight with market expertise to identify opportunities, manage risk thoughtfully, and create enduring value for our investors, partners, and the businesses we support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
