const PartnerCTA = () => {
  return (
    <section
      id="commitment"
      className="group relative border-t border-[#e4e0db] bg-white py-16"
    >
     
      <div className="layout-7xl relative z-10">
        <div className="max-w-[960px] mx-auto text-center">
          <span className="inline-flex items-center gap-3 font-poppins text-xs font-medium tracking-widest uppercase text-[#8D1E39]">
            The Commitment
          </span>

          <blockquote className="my-8 sm:my-10 font-[PPFONT] text-[clamp(1.05rem,2.4vw,1.75rem)] leading-[1.5] text-genesis-navy/85 italic font-normal">
           &quot;
            We will share our numbers the same way we make our decisions
            carefully, honestly, and only when we can stand behind every line. If
            that costs us a conversation with an impatient investor, it is a
            conversation we were never going to win anyway.
            &quot;
          </blockquote>

          <div className="flex items-center justify-center gap-4 sm:gap-6 font-poppins text-xs sm:text-sm md:text-base">
            <div>
              <span className="text-[#08112a] font-medium tracking-[0.02em]">
                Anuj Rathi
              </span>
              <span className="block text-[#616877] italic text-[10px] xs:text-xs sm:text-sm mt-0.5">
                Founder &amp; Managing Director
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerCTA;
