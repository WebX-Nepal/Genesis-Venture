import Button from "@/components/ui/Button2";
import Link from "next/link";

const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/About" },
  { label: "Invested Sectors", href: "/Projects" },
  { label: "Contact Us", href: "/Contacts" },
];

const social = [
  { label: "LinkedIn", href: "#" },
  { label: "X (Twitter)", href: "#" },
  { label: "Facebook", href: "#" },
];

const legal = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-genesis-navy text-white font-poppins">
      {/* Top */}
      <div className="px-8 md:px-16 pt-14 pb-10 flex flex-col md:flex-row justify-between gap-12 border-b border-white/20">
        {/* Brand */}
        <div className="flex flex-col gap-3 max-w-xl">
          {/* <div className="flex flex-col leading-none">
            <span className="text-xl font-bold font-[PPFONT] tracking-tight text-white">
              genes<span className="text-genesis-red">i</span>s
            </span>
            <span className="text-sm tracking-widest text-genesis-red">
              ventures
            </span>
          </div> */}
          {/* <p className="text-sm text-white/70 leading-relaxed mt-2">
            Early-stage venture capital firm partnering with founders who are
            building the next generation of transformative companies.
          </p> */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-[PPFONT] leading-snug">
            Ready to build something
            <br />
            significant?
          </h2>
          <p className="text-sm text-white/60 font-poppins leading-relaxed max-w-sm hidden sm:block">
            We review every submission and respond within 5 business days. If
            there's a fit, we move quickly.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-8 md:gap-24">
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-white/50 mb-1">
              Navigation
            </span>
            {nav.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-white/80 hover:text-white transition-colors uppercase tracking-wider"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-white/50 mb-1">
              Follow
            </span>
            {social.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-sm text-white/80 hover:text-white transition-colors uppercase tracking-wider"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-white/50 mb-1">
              Contact
            </span>
            <span className="text-sm text-white/80">
              contact@genesisventures.com
            </span>
            <span className="text-sm text-white/80">+1 (212) 555-0100</span>
            <span className="text-sm text-white/80">
              350 Fifth Ave, New York, NY
            </span>
            {/* <Button
              text="Send a message"
              href="/Contacts"
              className="relative z-50"
            /> */}
            <Link href="/Contacts">
              <Button
                variant="secondary"
                size="md"
                className="mt-12 bg-white px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em]  hover:bg-genesis-white/80 transition-colors"
              >
                <span className="inline-flex items-center gap-3">
                  Send a message
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="px-8 md:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="text-xs text-white/50 uppercase tracking-widest">
          © {new Date().getFullYear()} Genesis Ventures, Inc. All rights
          reserved.
        </span>
        <div className="flex gap-6">
          {legal.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-xs text-white/50 hover:text-white transition-colors uppercase tracking-wider"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
