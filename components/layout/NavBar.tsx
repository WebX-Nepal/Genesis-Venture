"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef, type MouseEvent } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useHeroVideoLoad } from "@/context/HeroVideoLoadContext";

// ------------------ NAV LINKS ------------------
const navLinks = [
  {
    label: "Who We Are",
    dropdown: [
      { label: "Firm", href: "/firm" },
      { label: "Our Story", href: "/our-stories" },
      { label: "Leadership", href: "/our-stories#leadership" },
    ],
  },
  {
    label: "What We Do",
    dropdown: [
      { label: "Portfolio", href: "/what-we-do/portfolio" },
      {
        label: "Investment Philosophy",
        href: "/what-we-do/investment-phylosophy",
      },
    ],
  },
  { label: "Investor Relations", href: "/investment-relation", dropdown: null },
  { label: "Get in Touch", href: "/Contacts", dropdown: null },
];

export default function NavBar() {
  const { isHeroVideoReady } = useHeroVideoLoad();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isTransparentNavbarPage =
    pathname === "/what-we-do/investment-phylosophy";

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

  const blockIfVideoNotReady = (event: MouseEvent<HTMLElement>) => {
    if (!isHeroVideoReady) {
      event.preventDefault();
    }
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
          <Link href="/" onClick={blockIfVideoNotReady} className="flex leading-none select-none shrink-0">
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
                    onClick={blockIfVideoNotReady}
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
                              onClick={blockIfVideoNotReady}
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
        } bg-white border-b border-gray-100`}
      >
        <div className="layout-7xl flex flex-col py-4 gap-1">
          {navLinks.map(({ label, href, dropdown }) => {
            const parentActive = isParentActive(href, dropdown);

            return (
              <div key={label}>
                {dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileOpen((prev) => (prev === label ? null : label))
                      }
                      className={`w-full flex items-center justify-between text-sm uppercase tracking-widest font-poppins py-3 border-b border-gray-100 ${
                        parentActive ? "text-genesis-red" : "text-genesis-navy"
                      }`}
                    >
                      {label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          mobileOpen === label
                            ? "rotate-180 text-genesis-red"
                            : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        mobileOpen === label
                          ? "max-h-60 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {dropdown.map(({ label: dLabel, href: dHref }) => (
                        <Link
                          key={dHref}
                          href={dHref}
                          onClick={blockIfVideoNotReady}
                          className={`block pl-4 py-2.5 text-xs font-poppins uppercase tracking-wider border-b border-gray-50 last:border-0 transition-colors ${
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
                    onClick={blockIfVideoNotReady}
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
        </div>
      </div>
    </div>
  );
}
