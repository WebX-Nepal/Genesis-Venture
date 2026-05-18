import Image from "next/image";

const posts = [
  {
    title: "Barometer: Sticking with Stocks",
    tag: "Macroeconomic",
    date: "06 Jan 2025",
    image: "/images/Projects/insight.webp",
  },
  {
    title: "Antoine Roland-Billecart Ripe for Success",
    tag: "Family Business",
    date: "06 Jan 2025",
    image: "/images/grow.png",
  },
  {
    title: "Weekly house view Central Bank Divergence",
    tag: "Macroeconomic",
    date: "23 Dec 2024",
    image: "/contact/contact.png",
  },
] as const;

export default function Blog() {
  return (
    <section className="w-full bg-[#f6f7f9] py-14 sm:py-16 md:py-20">
      <div className="layout-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-montserrat text-[11px] uppercase tracking-[0.22em] text-[#8D1E39]">Insights</p>
          <h2 className="mt-2 font-montserrat text-[clamp(2rem,4.2vw,3.5rem)] font-medium leading-[1.06] text-[#162e54]">
            Stay Informed with the Latest Financial Insights
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:items-start">
          {posts.map((post, index) => (
            <article key={post.title} className={`${index === 1 ? "md:mt-9" : ""}`}>
              <div className="relative h-[250px] w-full overflow-hidden sm:h-[285px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="mt-3 font-montserrat text-[11px] text-[#162e54]/70">
                {post.tag} · {post.date}
              </p>
              <h3 className="mt-1 font-montserrat text-[clamp(1.35rem,2.7vw,2rem)] leading-[1.12] text-[#162e54]">
                {post.title}
              </h3>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            type="button"
            className="border border-[#162e54]/25 bg-white px-7 py-3 font-montserrat text-sm text-[#162e54] transition-colors hover:border-[#8D1E39]/40 hover:text-[#8D1E39]"
          >
            More insights +
          </button>
        </div>
      </div>
    </section>
  );
}
