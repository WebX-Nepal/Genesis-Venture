"use client";

export default function ScrollingHeadline() {
  const headline = "Create wealth with Genesis.";
  return (
    <section className="relative w-full overflow-hidden bg-white pb-48">
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
          margin-right: -0.08em;
          padding-right: 0;
          font-family: var(--font-playfair), Georgia, serif;
          font-size: clamp(3rem, 12vw, 10rem);
          line-height: 0.95;
          color: #0d3a66;
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
