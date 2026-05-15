import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
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

export default function FooterFixed() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-[#8D1E39]/35 bg-white text-[#173053]">
      <Image
        src="/footer/image.png"
        alt=""
        fill
        className="pointer-events-none absolute inset-0 object-contain object-bottom"
      />
      <div className="pointer-events-none absolute inset-0 bg-white/75" />

      <div className="relative z-10 flex min-h-[60vh] flex-col justify-between">
        <div className="layout-7xl flex flex-col gap-8 pb-8 pt-16 sm:gap-9 sm:pb-10 sm:pt-18 lg:gap-10 lg:pb-10 lg:pt-20">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:gap-10">
            <div className="flex max-w-xl flex-col gap-3 text-center md:text-left">
              <Image
                src="/images/final/png/Asset 3.png"
                alt="Genesis Ventures"
                width={150}
                height={42}
                className="mx-auto h-auto w-[120px] md:mx-0 md:w-[150px]"
              />

              <p className="mx-auto font-montserrat max-w-sm text-sm leading-relaxed text-[#173053]/75 sm:text-[15px] md:mx-0">
                Genesis Ventures partners with investors and founders through transparent
                communication and disciplined execution. Share your details, and our team
                will guide your next step.
              </p>

              <div className="pt-2">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#8D1E39] font-montserrat">
                  Let&apos;s Connect
                </p>
                <div className="mt-3 flex items-center justify-center gap-3 md:justify-start">
                  <a href="#" aria-label="LinkedIn" className="text-[#173053] transition-colors hover:text-[#8D1E39]">
                    <Linkedin size={16} />
                  </a>
                  <a href="#" aria-label="Instagram" className="text-[#173053] transition-colors hover:text-[#8D1E39]">
                    <Instagram size={16} />
                  </a>
                  <a href="#" aria-label="Facebook" className="text-[#173053] transition-colors hover:text-[#8D1E39]">
                    <Facebook size={16} />
                  </a>
                  <a href="mailto:info@genesisventures.com.np" aria-label="Email" className="text-[#173053] transition-colors hover:text-[#8D1E39]">
                    <Mail size={16} />
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-7 text-center sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-12 xl:gap-16 md:text-left">
              <div className="flex flex-col items-center gap-3 md:items-start">
                <span className="mb-1 text-[13px] uppercase tracking-widest text-[#8D1E39] font-montserrat">Navigation</span>
                {nav.map(({ label, href }) => (
                  <Link key={href} href={href} className="text-[13px] uppercase tracking-wider text-[#173053]/90 transition-colors hover:text-[#0f2745] font-montserrat">
                    {label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col items-center gap-3 md:items-start">
                <span className="mb-1 text-[13px] uppercase tracking-widest text-[#8D1E39] font-montserrat">Contact</span>
                <span className="text-[14px] leading-relaxed sm:text-[15px] text-[#173053]/90 font-montserrat">info@genesisventures.com.np</span>
                <span className="text-[14px] leading-relaxed sm:text-[15px] text-[#173053]/90 font-montserrat">+977 9851418843</span>
                <span className="text-[14px] leading-relaxed sm:text-[15px] text-[#173053]/90 font-montserrat">Dharan Road, Biratnagar</span>
              </div>
              <div className="flex flex-col items-center gap-3 md:items-start">
                <span className="mb-1 text-[13px] uppercase tracking-widest text-[#8D1E39] font-montserrat">Resources</span>
                {resources.map(({ label, href }) => (
                  <Link key={label} href={href} className="text-[13px] uppercase tracking-wider text-[#173053]/90 transition-colors hover:text-[#0f2745] font-montserrat">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="layout-7xl grid grid-cols-1 items-start gap-3 border-t border-[#173053]/2 pb-6 pt-4 text-center sm:pb-7 md:grid-cols-2 md:items-center md:gap-2 md:border-t-0 md:pb-5 md:pt-3 md:text-left">
          <span className="text-[13px] font-montserrat text-[#173053]/85 md:justify-self-start">
            Copyright © {new Date().getFullYear()} Genesis Ventures, Inc. All Rights Reserved.
          </span>
          <a href="https://www.webxnepal.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 text-[13px] text-[#173053]/75 transition-colors hover:text-[#0f2745] md:justify-self-end">
            <span className="font-montserrat">Designed &amp; Developed by</span>
            <img src="/icons/black-logo-png.png" alt="WebX Nepal" className="h-4 w-auto" loading="lazy" />
          </a>
        </div>
      </div>
    </footer>
  );
}
