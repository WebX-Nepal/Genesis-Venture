export default function Contact() {
  return (
    <section className=" w-full bg-genesis-navy flex flex-col px-8 md:px-16 py-10 md:py-24">
      <div className="flex items-start justify-between border-b border-white/10 pb-4 md:pb-6">
        <span className="text-xs uppercase tracking-widest text-white/50 font-poppins">
          Contact Us
        </span>
        <span className="text-xs uppercase tracking-widest text-white/50 font-poppins">
          05
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-24 flex-1 pt-6 md:pt-10 overflow-hidden">
        <div className="md:w-1/2 flex flex-col gap-4 md:gap-6 md:justify-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-[PPFONT] leading-snug">
            Ready to build something
            <br />
            <span className="text-genesis-red">significant?</span>
          </h2>
          <p className="text-sm text-white/60 font-poppins leading-relaxed max-w-sm hidden sm:block">
            We review every submission and respond within 5 business days. If
            there's a fit, we move quickly.
          </p>
        </div>

        <div className="md:w-1/2 flex flex-col gap-3 md:gap-4 md:justify-center">
          <div className="flex flex-col gap-0.5 border-l border-white/20 pl-4">
            <span className="text-xs text-white/50 uppercase tracking-widest font-poppins">
              General
            </span>
            <span className="text-sm text-white font-poppins">
              contact@genesisventures.com
            </span>
          </div>
          <div className="flex flex-col gap-0.5 border-l border-white/20 pl-4">
            <span className="text-xs text-white/50 uppercase tracking-widest font-poppins">
              Pitch
            </span>
            <span className="text-sm text-white font-poppins">
              founders@genesisventures.com
            </span>
          </div>
          <div className="flex flex-col gap-0.5 border-l border-white/20 pl-4">
            <span className="text-xs text-white/50 uppercase tracking-widest font-poppins">
              Office
            </span>
            <span className="text-sm text-white font-poppins">
              Kathmandu, Nepal
            </span>
          </div>
          <a
            href="/Contacts"
            className="mt-2 text-xs uppercase tracking-widest text-white bg-genesis-red px-5 py-2.5 w-fit hover:bg-genesis-red-dark transition-colors font-poppins"
          >
            Send a message →
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 pt-3 mt-4 md:mt-0 flex justify-between">
        <p className="text-xs text-white/30 font-poppins uppercase tracking-widest">
          © 2024 Genesis Ventures, Inc.
        </p>
        <p className="text-xs text-white/30 font-poppins uppercase tracking-widest">
          All rights reserved
        </p>
      </div>
    </section>
  );
}
