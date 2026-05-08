"use client";
import { useState } from "react";
import Button from "../ui/Button2";

type Tab = "general" | "pitch";

const inputClass =
  "w-full bg-transparent border-b border-genesis-navy/20 py-3 text-sm text-genesis-navy font-montserrat placeholder:text-genesis-navy/40 focus:outline-none focus:border-genesis-navy/60 transition-colors";

const labelClass =
  "text-[11px] uppercase tracking-widest text-genesis-navy/80 font-montserrat";

export default function Connect() {
  const [tab, setTab] = useState<Tab>("general");

  return (
    <section className="contact-section relative w-full min-h-screen lg:min-h-0 bg-white px-4 xs:px-6 sm:px-8 md:px-16 mt-24">
      <div className="layout-7xl flex flex-col gap-10 sm:gap-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-2xl flex-col gap-3">
            <span className="contact-heading text-xs uppercase tracking-[0.28em] text-genesis-blue font-montserrat">
              Get in touch
            </span>
            <h1 className="contact-heading text-[clamp(1.75rem,5vw,3.4rem)] text-genesis-navy font-montserrat leading-[1.05]">
              Let&apos;s start a conversation.
            </h1>
          </div>

          <div className="flex w-full overflow-hidden border border-genesis-navy/35 sm:w-fit sm:min-w-[18rem]">
            <button
              onClick={() => setTab("general")}
              className={`flex-1 px-4 py-3 text-[11px] uppercase tracking-[0.22em] font-montserrat transition-colors duration-200 sm:px-6 ${tab === "general"
                ? "bg-genesis-navy text-white"
                : "bg-transparent text-genesis-navy/40 hover:text-genesis-navy"
                }`}
            >
              General
            </button>
            <button
              onClick={() => setTab("pitch")}
              className={`flex-1 px-4 py-3 text-[11px] uppercase tracking-[0.22em] font-montserrat transition-colors duration-200 sm:px-6 ${tab === "pitch"
                ? "bg-genesis-navy text-white"
                : "bg-transparent text-genesis-navy/80 hover:text-genesis-navy"
                }`}
            >
              Pitch Us
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="min-w-0">
            {tab === "general" ? (
              <form
                className="flex flex-col gap-6 sm:gap-8"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
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
                    rows={5}
                    placeholder="How can we help?"
                    className={`${inputClass} resize-none`}
                  />
                </div>
                {/* <Button text="Send Message" /> */}
                <Button
                  variant="primary"
                  size="md"
                  className="mt-12 ml-auto bg-genesis-navy w-46 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white hover:bg-genesis-navy/80 transition-colors"
                >
                  <span className="inline-flex items-center gap-3">
                    Send Message
                  </span>
                </Button>
              </form>
            ) : (
              <form
                className="flex flex-col gap-6 sm:gap-8"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
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
                <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
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
                    rows={5}
                    placeholder="What are you building and what stage are you at?"
                    className={`${inputClass} resize-none`}
                  />
                </div>
                {/* <Button text="Submit Pitch" /> */}
                <Button
                  variant="primary"
                  size="md"
                  className="mt-12 bg-genesis-navy w-45 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white hover:bg-genesis-navy/80 transition-colors"
                >
                  <span className="inline-flex  items-center gap-3">
                    Submit Pitch
                  </span>
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
