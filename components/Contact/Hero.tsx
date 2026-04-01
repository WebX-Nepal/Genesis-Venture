export default function Hero() {
  return (
    <section className="h-screen w-full bg-genesis-navy flex flex-col justify-between px-8 md:px-16 pt-32 pb-12">
      <div className="flex items-start justify-between border-b border-white/10 pb-6">
        <span className="text-xs uppercase tracking-widest text-white/50 font-poppins">
          Contact Us
        </span>
        <span className="text-xs uppercase tracking-widest text-white/50 font-poppins">
          01
        </span>
      </div>

      <div className="flex flex-col gap-6 max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-[PPFONT] leading-tight">
          Let&apos;s build something
          <br />
          <span className="text-genesis-red">significant.</span>
        </h1>
        <p className="text-sm text-white/60 font-poppins leading-relaxed max-w-md">
          Whether you&apos;re a founder seeking a first check or a portfolio
          company looking for follow-on support, we want to hear from you. We
          respond within 5 business days.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 border-t border-white/10 pt-8">
        <div className="flex flex-col gap-1 border-l border-white/20 pl-5">
          <span className="text-xs text-white/40 uppercase tracking-widest font-poppins">
            General
          </span>
          <span className="text-sm text-white font-poppins">
            contact@genesisventures.com
          </span>
        </div>
        <div className="flex flex-col gap-1 border-l border-white/20 pl-5">
          <span className="text-xs text-white/40 uppercase tracking-widest font-poppins">
            Pitch
          </span>
          <span className="text-sm text-white font-poppins">
            founders@genesisventures.com
          </span>
        </div>
        <div className="flex flex-col gap-1 border-l border-white/20 pl-5">
          <span className="text-xs text-white/40 uppercase tracking-widest font-poppins">
            Office
          </span>
          <span className="text-sm text-white font-poppins">
            350 Fifth Ave, New York, NY 10118
          </span>
        </div>
        <div className="flex flex-col gap-1 border-l border-white/20 pl-5">
          <span className="text-xs text-white/40 uppercase tracking-widest font-poppins">
            Phone
          </span>
          <span className="text-sm text-white font-poppins">
            +1 (212) 555-0100
          </span>
        </div>
      </div>
    </section>
  );
}
