"use client";
import Button from "../ui/Button2";

const inputClass =
  "w-full bg-transparent border-b border-genesis-navy/20 py-3 text-sm text-genesis-navy font-montserrat placeholder:text-genesis-navy/40 focus:outline-none focus:border-genesis-navy/60 transition-colors";

const labelClass =
  "text-[11px] uppercase tracking-widest text-genesis-navy/80 font-montserrat";

export default function Connect() {
  return (
    <section className="contact-section relative z-20 -mt-[10vh] w-full bg-transparent pb-24">
      <div className="mx-auto w-full max-w-5xl border border-genesis-navy/15 bg-white px-6 py-8 shadow-[0_20px_55px_rgba(22,46,84,0.14)] sm:px-8 sm:py-10 md:px-10">
        <div className="flex flex-col gap-10 sm:gap-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-2xl flex-col gap-3">
            <span className="contact-heading text-xs text-[#8D1E39] font-montserrat">
              Hi 👋, Nice to meet you.
            </span>
            <h1 className="contact-heading text-[clamp(1.75rem,5vw,3.4rem)] text-genesis-navy font-agatho leading-[1.05]">
              Let&apos;s start a conversation.
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="min-w-0">
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
                    placeholder="jane@genesisventures.com"
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Phone</label>
                  <input
                    type="tel"
                    placeholder="+977 980 000-0000"
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className={labelClass}>Company / Startup Name</label>
                <input
                  type="text"
                  placeholder="Genesis Ventures Ltd."
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
              <Button
                variant="primary"
                size="md"
                className="mt-12 w-45 bg-genesis-navy px-8 py-4 font-montserrat text-[11px] font-semibold uppercase text-white transition-colors hover:bg-[#8D1E39]"
              >
                <span className="inline-flex  items-center gap-3">
                  Submit
                </span>
              </Button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
