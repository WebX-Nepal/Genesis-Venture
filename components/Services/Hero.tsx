import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full h-dvh relative px-4 ">
      <Image
        src="/background.png"
        alt="Background"
        fill
        className="object-cover z-0 opacity-90 [filter:sepia(0.3)_saturate(1.2)_hue-rotate(180deg)_brightness(0.9)]"
        priority
      />

      {/* Blue overlay */}
      <div className="absolute inset-0 bg-primary/70 z-1"></div>
      <div className="relative text-[12vw] lg:text-[11vw]
        font-[PPFONT] text-neutral-base leading-none lg:leading-[10vw] z-5 h-full flex flex-col justify-center gap-20
      ">
        <h1 className="top-0 right-0 text-end z-5 pt-32">
          Answering <br /> All of
        </h1>
        <h1 className="bottom-0 left-0 z-5">
          Your Building <br /> Needs
        </h1>
      </div>
    </div>
  );
}
