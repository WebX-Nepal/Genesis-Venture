"use client";
import Button from "@/ui/Button";
import { useState } from "react";

type Tab = "general" | "pitch";

const inputClass =
  "w-full bg-transparent border-b border-white/20 py-3 text-sm text-white font-poppins placeholder:text-white/30 focus:outline-none focus:border-white/60 transition-colors";

const labelClass =
  "text-[15px] uppercase tracking-widest text-white/80 font-poppins";

const contactDetails = [
  { label: "General", value: "contact@genesisventures.com" },
  { label: "Pitch", value: "founders@genesisventures.com" },
  { label: "Phone", value: "+1 (212) 555-0100" },
  { label: "Office", value: "Kathmandu, Nepal" },
];

export default function Connect() {
  const [tab, setTab] = useState<Tab>("general");

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/night-sky.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 px-8 md:px-16 py-10 md:py-24">
        {/* Top bar */}
        <div className="flex items-start justify-between border-b border-white/10 pb-4 md:pb-6">
          <span className="text-xs uppercase tracking-widest text-white/40 font-poppins">
            Contact Us
          </span>
          <span className="text-xs uppercase tracking-widest text-white/40 font-poppins">
            05
          </span>
        </div>

        {/* Heading row + tab switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-8 md:pt-12 mb-12 md:mb-16">
          <div>
            <h1 className="text-3xl md:text-5xl text-white font-[PPFONT] leading-tight max-w-xl">
              Let&apos;s start a
              conversation.
            </h1>
          </div>

          {/* Tab switcher */}
          <div className="flex gap-px border border-white/10 w-fit shrink-0 mr-50">
            <button
              onClick={() => setTab("general")}
              className={`px-6 py-2.5 text-xs uppercase tracking-widest font-poppins transition-colors duration-200 ${
                tab === "general"
                  ? "bg-white text-genesis-navy"
                  : "text-white/50 hover:text-white bg-transparent"
              }`}
            >
              General
            </button>
            <button
              onClick={() => setTab("pitch")}
              className={`px-6 py-2.5 text-xs uppercase tracking-widest font-poppins transition-colors duration-200 ${
                tab === "pitch"
                  ? "bg-genesis-navy text-white"
                  : "text-white/50 hover:text-white bg-transparent"
              }`}
            >
              Pitch Us
            </button>
          </div>
        </div>

        {/* Form + sidebar */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 flex-1">
          {/* Form */}
          <div className="md:w-2/3">
            {tab === "general" ? (
              <form
                className="flex flex-col gap-8"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>First Name</label>
                    <input
                      type="text"
                      placeholder="Jane"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Last Name</label>
                    <input
                      type="text"
                      placeholder="Smith"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Email</label>
                  <input
                    type="email"
                    placeholder="jane@company.com"
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Message</label>
                  <textarea
                    rows={4}
                    placeholder="How can we help?"
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <Button text="Send Message" />
              </form>
            ) : (
              <form
                className="flex flex-col gap-8"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>First Name</label>
                    <input
                      type="text"
                      placeholder="Jane"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Last Name</label>
                    <input
                      type="text"
                      placeholder="Smith"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Email</label>
                    <input
                      type="email"
                      placeholder="jane@startup.com"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Phone</label>
                    <input
                      type="tel"
                      placeholder="+1 (212) 000-0000"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Company / Startup Name</label>
                  <input
                    type="text"
                    placeholder="Acme Inc."
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Brief Description</label>
                  <textarea
                    rows={4}
                    placeholder="What are you building and what stage are you at?"
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <Button text="Submit Pitch" />
                
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:w-1/3 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
            <div className="flex flex-col gap-8">
              {contactDetails.map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1.5">
                  <span className="text-[15px] uppercase tracking-widest text-white/80 font-poppins">
                    {label}
                  </span>
                  <span className="text-sm text-white/80 font-poppins">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
