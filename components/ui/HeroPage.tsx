interface HeroPageProps {
  title: string;
  titleClassName?: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
}


export default function HeroPage({
  title,
  titleClassName = "text-[clamp(1.5rem,4.8vw,3.2rem)]",
  backgroundImage,
  backgroundImageAlt = "",
}: HeroPageProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a1634] text-white">
      {backgroundImage ? (
        <>
          <img
            src={backgroundImage}
            alt={backgroundImageAlt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
        </>
      ) : null}
      <div className="layout-7xl relative flex h-full flex-col">
        <div className="flex flex-1 items-center justify-center">
          <h1 className={`font-[PPFONT] font-normal leading-none tracking-wider text-white/95 ${titleClassName}`}>
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
