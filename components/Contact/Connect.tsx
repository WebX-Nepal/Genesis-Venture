"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
import Image from "next/image";
import Button from "../ui/Button2";

gsap.registerPlugin(SplitText, ScrollTrigger);

type Tab = "general" | "pitch";

const inputClass =
  "w-full bg-transparent border-b border-genesis-navy/20 py-3 text-sm text-genesis-navy font-poppins placeholder:text-genesis-navy/40 focus:outline-none focus:border-genesis-navy/60 transition-colors";

const labelClass =
  "text-[11px] uppercase tracking-widest text-genesis-navy/80 font-poppins";

export default function Connect() {
  const [tab, setTab] = useState<Tab>("general");

  useGSAP(() => {
    const splitTitle = new SplitText(".contact-heading", { type: "words" });

    gsap.from(splitTitle.words, {
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 90%",
        end: "bottom 80%",
        scrub: true,
      },
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
      stagger: 0.05,
      duration: 1,
      ease: "power3.out",
    });

    return () => {
      splitTitle.revert();
    };
  });

  return (
    <section className="contact-section relative w-full min-h-screen bg-white px-4 xs:px-6 sm:px-8 md:px-16 py-20 sm:py-24 md:py-28">
      <div className="mx-auto flex w-full max-w-9xl flex-col gap-10 sm:gap-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-2xl flex-col gap-3">
            <span className="contact-heading text-xs uppercase tracking-[0.28em] text-genesis-blue font-[GT50]">
              Get in touch
            </span>
            <h1 className="contact-heading text-[clamp(1.75rem,5vw,3.4rem)] text-genesis-navy font-[PPFONT] leading-[1.05]">
              Let&apos;s start a conversation.
            </h1>
          </div>

          <div className="flex w-full overflow-hidden border border-genesis-navy/35 sm:w-fit sm:min-w-[18rem]">
            <button
              onClick={() => setTab("general")}
              className={`flex-1 px-4 py-3 text-[11px] uppercase tracking-[0.22em] font-poppins transition-colors duration-200 sm:px-6 ${tab === "general"
                ? "bg-genesis-navy text-white"
                : "bg-transparent text-genesis-navy/40 hover:text-genesis-navy"
                }`}
            >
              General
            </button>
            <button
              onClick={() => setTab("pitch")}
              className={`flex-1 px-4 py-3 text-[11px] uppercase tracking-[0.22em] font-poppins transition-colors duration-200 sm:px-6 ${tab === "pitch"
                ? "bg-genesis-navy text-white"
                : "bg-transparent text-genesis-navy/80 hover:text-genesis-navy"
                }`}
            >
              Pitch Us
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(280px,0.95fr)_minmax(0,1.35fr)] lg:gap-14">
          <div className="relative min-h-60 overflow-hidden sm:min-h-75 lg:min-h-135">
            <Image
              src="/contact/cons.png"
              alt="Contact Genesis Ventures"
              fill
              className="object-cover object-[50%_70%]"
            />
          </div>

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
                  className="mt-12 bg-genesis-navy w-46 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white hover:bg-genesis-navy/80 transition-colors"
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
