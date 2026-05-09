"use client";


export default function IntroCommitment() {
  return (
    <section className="relative overflow-hidden bg-[#f6f9fd] py-14 sm:py-16 lg:py-20">
      <div className="layout-7xl">
        <div className="grid grid-cols-1 items-end gap-4 border-b border-[#d8e2ee] pb-4 lg:grid-cols-2">
          <span className="inline-flex items-center gap-3 font-montserrat text-[11px] font-semibold uppercase tracking-[0.24em] text-[#173053]">
            Investment Philosophy
          </span>
          <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#4f6583] lg:text-right">
            Our Commitment
          </p>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="rounded-sm border border-[#d8e2ee] bg-white p-6 sm:p-8">
            <h1 className="font-agatho text-[clamp(1.45rem,3.2vw,2.45rem)] leading-[1.2] text-[#173053]">
              Integrity before
              <span className="block italic text-[#8D1E39]">returns. Always.</span>
            </h1>

            <p className="mt-5 max-w-[62ch] text-sm sm:text-base leading-relaxed text-[#385273] font-montserrat">
              Genesis Venture Ltd. is an independent investment firm that places
              your interests above all else, including our own. In a world where
              performance is routinely promised and seldom earned, we have chosen
              a different measure of success: trust.
            </p>

          </div>

          <div className="rounded-sm border border-[#d8e2ee] bg-white p-6 sm:p-8">
            <span className="font-montserrat text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4f6583]">
              Statement
            </span>
            <blockquote className="mt-4 font-montserrat text-[clamp(1rem,2vw,1.35rem)] italic leading-relaxed text-[#173053]">
              &quot;We will never recommend what is profitable for us over what is
              <span className="not-italic text-[#173053]"> right for you.</span> That is not a
              policy, it is the reason we exist.&quot;
              </blockquote>
          </div>
        </div>

      </div>
    </section>
  );
}
