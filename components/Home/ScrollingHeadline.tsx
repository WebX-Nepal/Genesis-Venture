"use client";

export default function ScrollingHeadline() {
  const headline = "Create Wealth With Genesis.";
  return (
    <section className="relative w-full overflow-hidden bg-white pb-24 pt-24 sm:pt-20">
      <div className="marquee-track">
        <p className="marquee-text">{headline}</p>
        <p aria-hidden className="marquee-text">
          {headline}
        </p>
      </div>
      <div className="layout-7xl mt-12">
      
      </div>
      <style jsx>{`
        .marquee-track {
          display: flex;
          width: max-content;
          white-space: nowrap;
          animation: marquee 24s linear infinite;
        }

        .marquee-text {
          margin: 0;
          padding-right: 0;
          font-family: "Agatho", serif;
          font-size: clamp(3rem, 12vw, 10rem);
          line-height: 0.95;
          color: #162e54;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

