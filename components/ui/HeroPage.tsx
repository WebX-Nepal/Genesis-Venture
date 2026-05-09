import { ReactNode } from "react";
import Title from "./Title";

interface HeroPageProps {
  title?: ReactNode;
  titleClassName?: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  backgroundVideo?: string;
  heightClassName?: string;
}
export default function HeroPage({
  title,
  titleClassName = "text-[clamp(1.5rem,4.8vw,3.2rem)]",
  backgroundImage,
  backgroundImageAlt = "",
  backgroundVideo,
  heightClassName = "h-screen",
}: HeroPageProps) {
  return (
    <section className={`relative w-full overflow-hidden bg-[#0a1634] text-white ${heightClassName}`}>
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
        <div className="flex flex-1 items-center text-center justify-center">
          {title ? (
            <h1 className={titleClassName}>{title}</h1>
          ) : (
            <Title
              text={[" Independent Capital.", "Enduring Partnerships."]}
              className={titleClassName}
            />
          )}
        </div>
      </div>
    </section>
  );
}
