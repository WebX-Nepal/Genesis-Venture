import { ReactNode } from "react";

interface HeroPageProps {
  title: ReactNode;
  titleClassName?: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  backgroundVideo?: string;
}
export default function HeroPage({
  title,
  titleClassName = "text-[clamp(1.5rem,4.8vw,3.2rem)]",
  backgroundImage,
  backgroundImageAlt = "",
  backgroundVideo,
}: HeroPageProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a1634] text-white">
      {backgroundVideo ? (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/35" />
        </>
      ) : null}
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
          <h1 className={`text-center font-[PPFONT] font-normal leading-none tracking-wider text-white/95 ${titleClassName}`}>
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
