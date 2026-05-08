"use client";

import Title from "@/components/ui/Title";

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
        <source src="/videos/skyport.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-genesis-navy/40 z-10" />

      <div className="relative z-20 capitalize flex min-h-screen items-center justify-center px-4 xs:px-6 sm:px-8 md:px-16 text-center">
        <Title
        text={["Conviction-led investing,","built for long-term value."]}
        />
      </div>
    </section>
  );
}
