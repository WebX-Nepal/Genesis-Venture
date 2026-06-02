"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useRef, type MouseEvent } from "react";
import { Menu, X, ChevronDown, Linkedin, Instagram, Facebook, Mail } from "lucide-react";
import Image from "next/image";

// ------------------ NAV LINKS ------------------
const navLinks = [
  {
    label: "Who We Are",
    href: "/firm",
    dropdown: [
      { label: "Firm", href: "/firm" },
      { label: "Our Story", href: "/our-stories" },
      { label: "Leadership", href: "/our-stories#leadership" },
    ],
  },
  {
    label: "What We Do",
    href: "/what-we-do/portfolio",
    dropdown: [
      { label: "Portfolio", href: "/what-we-do/portfolio" },
      {
        label: "Investment Philosophy",
        href: "/what-we-do/investment-phylosophy",
      },
    ],
  },
  { label: "Investor Relations", href: "/investment-relation", dropdown: null },
  { label: "Lets Connect", href: "/Contacts", dropdown: null },
];

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isTransparentNavbarPage = false;

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setMobileOpen(null);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY <= 8);

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
        setMenuOpen(false);
        setOpenDropdown(null);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--navbar-offset",
      showNavbar ? "64px" : "0px",
    );
  }, [showNavbar]);

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const navbarSurface = isTransparentNavbarPage
    ? isAtTop
      ? "bg-transparent border-transparent"
      : "bg-white border-gray-100"
    : "bg-white border-gray-100";
  const navbarTextColor = "text-genesis-navy";

  const isActivePath = (target?: string) => {
    if (!target) return false;
    return pathname === target || pathname.startsWith(`${target}/`);
  };

  const isParentActive = (
    href?: string,
    dropdown?: Array<{ label: string; href: string }> | null,
  ) => {
    if (isActivePath(href)) return true;
    if (!dropdown) return false;
    return dropdown.some((item) => isActivePath(item.href));
  };

  const smoothScrollToHash = (hash: string) => {
    const target = document.querySelector(hash);
    if (!target) return false;
    const offsetRaw = getComputedStyle(document.documentElement).getPropertyValue("--navbar-offset");
    const navbarOffset = Number.parseInt(offsetRaw, 10) || 64;
    const top = target.getBoundingClientRect().top + window.scrollY - navbarOffset - 12;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
    return true;
  };

  const handleHashLinkClick = (event: MouseEvent<HTMLAnchorElement>, href?: string) => {
    if (!href || !href.includes("#")) return;
    event.preventDefault();

    const [targetPath, hashPart] = href.split("#");
    const hash = `#${hashPart}`;
    const nextUrl = `${targetPath}${hash}`;

    if (pathname === targetPath) {
      window.history.replaceState(null, "", nextUrl);
      smoothScrollToHash(hash);
      return;
    }

    router.push(nextUrl, { scroll: false });
    let tries = 0;
    const maxTries = 30;
    const timer = window.setInterval(() => {
      tries += 1;
      const scrolled = smoothScrollToHash(hash);
      if (scrolled || tries >= maxTries) {
        window.clearInterval(timer);
      }
    }, 50);
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 z-999 flex flex-col transition-transform duration-300 ease-in-out"
      style={{ transform: showNavbar ? "translateY(0)" : "translateY(-100%)" }}
    >
      <nav
        className={`border-b transition-all duration-300 ${navbarSurface} ${navbarTextColor}`}
      >
        <div className="layout-7xl flex items-center justify-between py-3">
          <Link href="/" className="flex leading-none select-none shrink-0">
            <Image
              src="/images/final/png/Asset 3.png"
              alt="Genesis Ventures"
              width={100}
              height={40}
            />
          </Link>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map(({ label, href, dropdown }) => {
              const parentActive = isParentActive(href, dropdown);

              return (
                <li
                  key={label}
                  className="relative"
                  onMouseEnter={() => dropdown && handleMouseEnter(label)}
                  onMouseLeave={() => dropdown && handleMouseLeave()}
                >
                  <Link
                    href={href ?? "#"}
                    className={`flex items-center gap-1 text-xs uppercase tracking-widest font-poppins transition-colors duration-200 ${
                      parentActive
                        ? "text-genesis-red"
                        : "text-genesis-navy hover:text-genesis-red"
                    }`}
                  >
                    {label}
                    {dropdown && (
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-200 mt-px ${
                          openDropdown === label
                            ? "rotate-180 text-genesis-red"
                            : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown panel */}
                  {dropdown && (
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-white border border-gray-100 shadow-lg transition-all duration-200 origin-top ${
                        openDropdown === label
                          ? "opacity-100 scale-y-100 pointer-events-auto"
                          : "opacity-0 scale-y-95 pointer-events-none"
                      }`}
                    >
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45" />
                      <ul className="py-4 relative">
                        {dropdown.map(({ label: dLabel, href: dHref }) => (
                          <li key={dHref}>
                            <Link
                              href={dHref}
                              onClick={(event) => handleHashLinkClick(event, dHref)}
                              className={`block px-5 py-2.5 text-xs font-poppins uppercase tracking-wider transition-colors duration-150 hover:bg-gray-50 ${
                                isActivePath(dHref)
                                  ? "text-genesis-red"
                                  : "text-gray-500 hover:text-genesis-navy"
                              }`}
                            >
                              {dLabel}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <button
            className="md:hidden p-1 text-genesis-navy transition-colors duration-200"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-white border-b border-gray-100 border-t-genesis-red`}
      >
        <div className="layout-7xl flex flex-col py-4 gap-1 border-t border-t-genesis-red/30">
          {navLinks.map(({ label, href, dropdown }) => {
            const parentActive = isParentActive(href, dropdown);

            return (
              <div key={label}>
                {dropdown ? (
                  <>
                    <div
                      className={`text-sm uppercase tracking-widest font-poppins py-3 border-b border-gray-100 ${
                        parentActive ? "text-genesis-red" : "text-genesis-navy"
                      }`}
                    >
                      {label}
                    </div>
                    <div>
                      {dropdown.map(({ label: dLabel, href: dHref }) => (
                        <Link
                          key={dHref}
                          href={dHref}
                          onClick={(event) => handleHashLinkClick(event, dHref)}
                          className={`block pl-4 py-2.5 text-sm font-poppins uppercase tracking-wider border-b border-gray-50 last:border-0 transition-colors ${
                            isActivePath(dHref)
                              ? "text-genesis-red"
                              : "text-gray-500 hover:text-genesis-navy"
                          }`}
                        >
                          - {dLabel}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={href ?? "#"}
                    className={`block text-sm uppercase tracking-widest font-poppins py-3 border-b border-gray-100 transition-colors ${
                      isActivePath(href) ? "text-genesis-red" : "text-genesis-navy"
                    }`}
                  >
                    {label}
                  </Link>
                )}
              </div>
            );
          })}

          {/* Social Media & Contact Section */}
          <div className="mt-6 pt-6 border-t border-genesis-red">
            {/* Email */}
            <div className="text-center mb-4">
              <a 
                href="mailto:info@genesisventures.com.np" 
                className="text-base text-genesis-navy hover:text-genesis-red transition-colors"
              >
                info@genesisventures.com.np
              </a>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center justify-center gap-5">
              <a 
                href="#" 
                aria-label="LinkedIn" 
                className="text-genesis-navy transition-colors hover:text-genesis-red"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="#" 
                aria-label="Instagram" 
                className="text-genesis-navy transition-colors hover:text-genesis-red"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="#" 
                aria-label="Facebook" 
                className="text-genesis-navy transition-colors hover:text-genesis-red"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="mailto:info@genesisventures.com.np" 
                aria-label="Email"
                className="text-genesis-navy transition-colors hover:text-genesis-red"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
