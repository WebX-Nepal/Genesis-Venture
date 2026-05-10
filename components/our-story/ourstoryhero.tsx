"use client";

import Title from "@/components/ui/Title";

export default function OurStoryHero() {
  return (
    <section className="relative min-h-[60vh] w-full flex flex-col justify-center items-center overflow-hidden bg-[#0a1634] px-4 xs:px-6 sm:px-8 md:min-h-screen md:px-16 pt-20 xs:pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 md:pb-12 text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/newstory.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative z-20 flex w-full max-w-5xl flex-col items-center gap-3 px-2 text-center sm:gap-4">
        <Title
          text={["Capital Guided By Principles,", "Not Just Opportunity"]}
          className="font-agatho"
        />
      </div>
    </section>
  );
}
