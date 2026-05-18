export default function MainSections() {
  return (
    <section className="w-full bg-white py-14 sm:py-16">
      <div className="layout-7xl">
        <p className="text-center font-montserrat text-[11px] uppercase tracking-[0.22em] text-[#8D1E39]">
          Main Sections
        </p>

        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2">
          <article className="border border-[#162e54]/12 bg-white p-6 sm:p-7">
            <h3 className="font-montserrat text-[1.2rem] font-semibold text-[#162e54]">
              Strategic Investment Approach
            </h3>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-[#162e54]/80">
              Built on rigorous research, disciplined due diligence, and a long-term value creation mindset.
            </p>
          </article>

          <article className="border border-[#162e54]/12 bg-white p-6 sm:p-7">
            <h3 className="font-montserrat text-[1.2rem] font-semibold text-[#162e54]">Risk Management</h3>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-[#162e54]/80">Show discipline.</p>
          </article>

          <article className="border border-[#162e54]/12 bg-white p-6 sm:p-7">
            <h3 className="font-montserrat text-[1.2rem] font-semibold text-[#162e54]">Sustainable Growth</h3>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-[#162e54]/80">Show future thinking.</p>
          </article>

          <article className="border border-[#162e54]/12 bg-white p-6 sm:p-7">
            <h3 className="font-montserrat text-[1.2rem] font-semibold text-[#162e54]">Partnership Approach</h3>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-[#162e54]/80">
              We invest beyond capital. We invest in vision, execution, and scalability.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
