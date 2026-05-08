"use client";

export default function BeliefBridgeSection() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="layout-7xl">
        <div className="border border-[#d9e2ee] bg-[#f6f9fd] p-6 sm:p-8 lg:p-10">
          <p className="inline-flex items-center font-montserrat text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8D1E39]">
            What We Believe
          </p>
          <h2 className="mt-4 font-montserrat text-[clamp(1.4rem,3.1vw,2.3rem)] leading-[1.2] text-[#173053]">
            We are not in the business of
            <span className="block italic text-[#8D1E39]">selling confidence.</span>
          </h2>

          <div className="mt-6 space-y-4">
            <p className="text-sm sm:text-base leading-relaxed text-[#385273] font-montserrat">
              We measure success by something harder to fake: whether our clients
              can look back a decade from now and say that Genesis Ventures was
              the most honest partner they ever had in financial life.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#385273] font-montserrat">
              Performance follows integrity - not the other way around. When
              advice is given free of conflicts, when fees are transparent, and
              when we have the discipline to say &quot;we do not know&quot;
              rather than bluff,
              <strong className="font-semibold text-[#173053]">
                {" "}better decisions get made
              </strong>
              . That is the foundation of everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
