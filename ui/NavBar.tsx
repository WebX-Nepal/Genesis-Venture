"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/", dropdown: null },
  {
    label: "Who We Are",
    href: "/About",
    dropdown: [
      { label: "Firm", href: "/About#firm" },
      { label: "Our Values", href: "/About#our-values" },
      { label: "Our History", href: "/About#our-history" },
      { label: "Leadership", href: "/About#leadership" },
    ],
  },
  {
    label: "What We Do",
    href: "/Projects",
    dropdown: [
      { label: "Portfolio", href: "/Projects#portfolio" },
      {
        label: "Investment Philosophy",
        href: "/Projects#investment-philosophy",
      },
    ],
  },
  { label: "Investor Relations", href: "/relation", dropdown: null },
  {
    label: "Perspective",
    href: "/perspective",
    dropdown: [
      { label: "Market Insights", href: "/perspective#market-insights" },
      { label: "Media", href: "/perspective#media" },
    ],
  },
  { label: "Contact Us", href: "/Contacts", dropdown: null },
];

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setMobileOpen(null);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
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

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex flex-col transition-transform duration-300 ease-in-out"
      style={{ transform: showNavbar ? "translateY(0)" : "translateY(-100%)" }}
    >
      <nav
        className={`flex items-center justify-between px-6 md:px-16 py-4 border-b border-gray-100 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent border-transparent"
        }`}
      >
        <Link href="/" className="flex leading-none select-none shrink-0">
          {scrolled ? (
            <Image
              src="/images/final/png/Asset 3.png"
              alt="Genesis Ventures"
              width={100}
              height={40}
            />
          ) : (
            <Image
              src="/images/final/png/Asset 2.png"
              alt="Genesis Ventures"
              width={100}
              height={40}
            />
          )}
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map(({ label, href, dropdown }) => (
            <li
              key={label}
              className="relative"
              onMouseEnter={() => dropdown && handleMouseEnter(label)}
              onMouseLeave={() => dropdown && handleMouseLeave()}
            >
              <Link
                href={href ?? "#"}
                className={`flex items-center gap-1 text-xs uppercase tracking-widest font-poppins transition-colors duration-200 ${
                  pathname === href
                    ? "text-genesis-red"
                    : "text-genesis-navy hover:text-genesis-red"
                }
                ${scrolled ? "text-genesis-navy" : "text-white hover:text-genesis-red"}
                `}
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
                          className="block px-5 py-2.5 text-xs font-poppins uppercase tracking-wider text-gray-500 hover:text-genesis-navy hover:bg-gray-50 transition-colors duration-150"
                        >
                          {dLabel}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-genesis-navy p-1"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } ${scrolled ? "bg-white/90 backdrop-blur-md" : "bg-white"} border-b border-gray-100`}
      >
        <div className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map(({ label, href, dropdown }) => (
            <div key={label}>
              {dropdown ? (
                <>
                  <button
                    onClick={() =>
                      setMobileOpen((prev) => (prev === label ? null : label))
                    }
                    className="w-full flex items-center justify-between text-sm uppercase tracking-widest font-poppins py-3 border-b border-gray-100 text-genesis-navy"
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
                        className="block pl-4 py-2.5 text-xs font-poppins uppercase tracking-wider text-gray-500 hover:text-genesis-navy border-b border-gray-50 last:border-0 transition-colors"
                      >
                        — {dLabel}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={href ?? "#"}
                  className={`block text-sm uppercase tracking-widest font-poppins py-3 border-b border-gray-100 transition-colors ${
                    pathname === href ? "text-genesis-red" : "text-genesis-navy"
                  }`}
                >
                  {label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
