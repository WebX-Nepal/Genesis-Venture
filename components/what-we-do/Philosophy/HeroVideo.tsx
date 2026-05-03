"use client";

export default function HeroVideo() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-0 scale-x-[-1]"
      >
        <source src="/videos/projects.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-genesis-navy/40 z-10" />

      <div className="relative z-20 flex min-h-screen items-center justify-center px-4 xs:px-6 sm:px-8 md:px-16 text-center">
        <h1 className="hero-heading project-heading font-[PPFONT] text-[clamp(1.75rem,7vw,4.5rem)] leading-tight tracking-[0.015em] text-white">
          Conviction-led investing,<br/> built for long-term value.
        </h1>
      </div>
    </section>
  );
}
