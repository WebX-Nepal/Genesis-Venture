"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Prevent scroll on body
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      // For touch devices
      // Fixed position to prevent iOS bounce scroll
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.touchAction = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      // Restore scroll position
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.touchAction = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [isMenuOpen]);
  const navigateHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="flex items-center  justify-between fixed top-0 left-0 right-0 z-100 p-3 md:p-5">
        <Link
          href={"/"}
          onClick={() => setIsMenuOpen(false)}
          className="bg-[#1925aa] text-white flex items-center gap-2 md:gap-4 justify-center px-2 md:px-10 py-2"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={30}
            height={30}
            className="md:w-[50px] md:h-[50px]"
          />
          <p className="font-semithin text-xs md:text-xl">
            GENESIS VENTURE INC.
          </p>
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-[#1925aa] text-white p-2 flex items-center cursor-pointer z-110"
        >
          {isMenuOpen ? (
            <X className="w-5 h-5 md:w-6 md:h-6" />
          ) : (
            <Menu className="w-5 h-5 md:w-6 md:h-6" />
          )}
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-90 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible "
        }`}
        onClick={() => setIsMenuOpen(false)}
        onWheel={(e) => e.preventDefault()}
        onTouchMove={(e) => e.preventDefault()}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 w-full md:w-1/2 h-[100vh] px-10 pt-40 overflow-y-auto bg-white z-95 transition-transform duration-500 ease-out overflow-hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        <div className="flex border-b border-[#1925aa] pb-10 px-10 flex-col justify-center   md:px-20 gap-4 md:gap-6">
          <Link
            href="/About"
            onClick={() => setIsMenuOpen(false)}
            className="text-[#1925aa] text-2xl md:text-5xl font-[PPFONT] uppercase hover:opacity-70 transition-opacity"
          >
            About
          </Link>
          <Link
            href="/Services"
            onClick={() => setIsMenuOpen(false)}
            className="text-[#1925aa] text-2xl md:text-5xl font-[PPFONT] uppercase hover:opacity-70  transition-opacity"
          >
            Services
          </Link>
          <Link
            href="/Projects"
            onClick={() => setIsMenuOpen(false)}
            className="text-[#1925aa] text-2xl md:text-5xl font-[PPFONT] uppercase hover:opacity-70 transition-opacity"
          >
            Projects
          </Link>
          <Link
            href="/Contacts"
            onClick={() => setIsMenuOpen(false)}
            className="text-[#1925aa] text-2xl md:text-5xl font-[PPFONT] uppercase hover:opacity-70 transition-opacity"
          >
            Contact
          </Link>
        </div>
        <div className="flex gap-100 items-start pt-5 border-b pb-15 border-[#1925aa]">
          <p className="font-[GT50] text-[#1925aa]">COMPANY</p>
          <div>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#1925aa] text-xl md:text-xl font-[GT50] uppercase hover:opacity-70 transition-opacity block "
            >
              Culture & career
            </Link>
            <Link
              href="/Blog"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#1925aa] text-xl md:text-xl font-[GT50] uppercase hover:opacity-70 transition-opacity block "
            >
              Blogs
            </Link>
            <Link
              href="/careers"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#1925aa] text-xl md:text-xl font-[GT50] uppercase hover:opacity-70 transition-opacity block "
            >
              Contacts
            </Link>
          </div>
        </div>
        <div className="flex gap-100 items-start pt-5 border-b pb-15 border-[#1925aa]">
          <p className="font-[GT50] uppercase text-[#1925aa]">Stay in Touch</p>
          <div>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#1925aa] text-xl md:text-xl font-[GT50] uppercase hover:opacity-70 transition-opacity block border-b border-[#1925aa]"
            >
              1-22-333-4444
            </Link>
            <Link
              href="/team"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#1925aa] text-xl md:text-xl font-[GT50]  hover:opacity-70 transition-opacity block border-b border-[#1925aa]"
            >
              contact@gmail.com
            </Link>
            <Link
              href="/careers"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#1925aa] text-xl md:text-sm font-[GT50] uppercase hover:opacity-70 mt-10 transition-opacity block "
            >
              Location1, City, <br /> Desh
            </Link>
          </div>
        </div>
        <input
          className="bg-transparent border mt-5 w-full border-[#1925aa] text-[#1925aa] py-10 px-10 focus:outline-none focus:border-[#1925aa] placeholder:text-[#1925aa]/50"
          placeholder="Enter your email"
        />
      </div>
    </>
  );
}
