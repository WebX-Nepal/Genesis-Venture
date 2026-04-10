import Image from 'next/image'

const MarketOverlook = () => {
  return (
    <div
      className="relative h-screen min-h-screen w-screen overflow-hidden left-1/2 -translate-x-1/2"
    >
      <Image
        src="/images/grow.png"
        alt="Growth visual divider"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#08112a]/68" />
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center sm:px-10 md:px-16 lg:px-20">
        <div className="max-w-5xl -translate-y-8 sm:-translate-y-10 md:-translate-y-12">
          <h2 className="devider-title font-[PPFONT] text-[clamp(1.8rem,4.6vw,4.4rem)] leading-[1.18] text-white">
            Guiding investment decisions through market insight
          </h2>
        </div>
      </div>
    </div>
  )
}

export default MarketOverlook