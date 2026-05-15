import Image from "next/image";
import Link from "next/link";

const nav = [
  { label: "Who We Are", href: "/About" },
  { label: "What We Do", href: "/what-we-do/portfolio" },
  { label: "Investor Relations", href: "/investment-relation" },
  { label: "Contact", href: "/Contacts" },
];

const resources = [
  { label: "Firm", href: "/who-we-are/firm" },
  { label: "Our Story", href: "/our-stories" },
  { label: "Leadership", href: "/our-stories#leadership" },
  { label: "Investment Philosophy", href: "/what-we-do/investment-phylosophy" },
];

export default function Footer() {
  return (
    <footer className="relative h-[80vh] w-full overflow-hidden bg-genesis-navy text-[#173053] font-poppins">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/footer/image.png"
          alt=""
          fill
          className="object-contain object-center"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-white/75" />

      <div className="relative z-10 flex h-full min-h-[420px] flex-col justify-between">
        <div className="layout-7xl flex flex-col gap-6 pb-6 pt-10 md:pb-6 md:pt-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row">
            <div className="flex max-w-xl flex-col gap-3 text-center md:text-left">
              <h2 className="font-agatho text-[1.45rem] leading-[1.45] text-[#173053] sm:text-[1.85rem] md:text-[2rem]">
                Let&apos;s Connect.
              </h2>
              <p className="mx-auto max-w-sm font-poppins text-sm leading-relaxed text-[#173053]/75 sm:text-[15px] md:mx-0">
                We review every submission and respond within 5 business days.
                If there&apos;s a fit, we move quickly.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-7 text-center sm:grid-cols-2 lg:grid-cols-3 lg:gap-16 md:text-left">
              <div className="flex flex-col items-center gap-3 md:items-start">
                <span className="mb-1 text-[13px] uppercase tracking-widest text-[#173053]/65 font-montserrat">
                  Navigation
                </span>
                {nav.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-[13px] uppercase tracking-wider text-[#173053]/90 transition-colors hover:text-[#0f2745] font-montserrat"
                  >
                    {label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col items-center gap-3 md:items-start">
                <span className="mb-1 text-[13px] uppercase tracking-widest text-[#173053]/65 font-montserrat">
                  Contact
                </span>
                <span className="text-[13px] text-[#173053]/90 font-poppins">
                  info@genesisventures.com.np
                </span>
                <span className="text-[13px] text-[#173053]/90 font-poppins">+977 9851418843</span>
                <span className="text-[13px] text-[#173053]/90 font-poppins">
                  Dharan Road, Biratnagar
                </span>
              </div>

              <div className="flex flex-col items-center gap-3 md:items-start">
                <span className="mb-1 text-[13px] uppercase tracking-widest text-[#173053]/65 font-montserrat">
                  Resources
                </span>
                {resources.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-[13px] uppercase tracking-wider text-[#173053]/90 transition-colors hover:text-[#0f2745] font-montserrat"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="layout-7xl grid grid-cols-1 items-start gap-3 border-t border-[#173053]/15 pb-5 pt-4 text-center md:grid-cols-2 md:items-center md:gap-2 md:border-t-0 md:pb-5 md:pt-3 md:text-left">
          <span className="text-[13px] text-[#173053]/85 md:justify-self-start">
            Copyright � {new Date().getFullYear()} Genesis Ventures, Inc. All
            Rights Reserved.
          </span>
          <a
            href="https://www.webxnepal.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 text-[13px] text-[#173053]/75 transition-colors hover:text-[#0f2745] md:justify-self-end"
          >
            <span>Designed &amp; Developed by</span>
            <img
              src="/icons/black-logo-png.png"
              alt="WebX Nepal"
              className="h-4 w-auto"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
