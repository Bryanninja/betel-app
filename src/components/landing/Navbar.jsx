"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { gsap, ScrollTrigger } from "../../lib/gsapConfig";
import { useGSAP } from "@gsap/react";

const navLinks = [
  { label: "Cultos", href: "#cultos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Pastores", href: "#pastores" },
  { label: "Localização", href: "#localizacao" },
];

export default function Navbar() {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: document.body,
      start: "top -80px",
      onEnter: () => setIsScrolled(true),
      onLeaveBack: () => setIsScrolled(false),
    });
  }, { scope: navRef });

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-betel-black/80 backdrop-blur-xl shadow-lg border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3 md:px-8 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/betel-favicon.svg"
            alt="Betel"
            className={`transition-all duration-500 ${
              isScrolled ? "h-8 w-8" : "h-0 w-0 opacity-0"
            }`}
          />
          <span
            className={`font-title text-sm font-bold text-white transition-all duration-500 ${
              isScrolled ? "opacity-100" : "opacity-0"
            }`}
          >
            Igreja Batista Betel
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-white/60 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/leitura"
            className="rounded-xl bg-betel-red px-4 py-2 text-sm font-bold text-white transition-all duration-300 hover:bg-betel-red/90 hover:scale-105"
          >
            Plano de Leitura
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Menu"
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-betel-black/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            className="font-title text-2xl font-bold text-white/80 transition-colors duration-300 hover:text-white"
          >
            {link.label}
          </a>
        ))}
        <Link
          href="/leitura"
          onClick={() => setMenuOpen(false)}
          className="mt-4 rounded-xl bg-betel-red px-8 py-3 text-lg font-bold text-white transition-all duration-300 hover:bg-betel-red/90"
        >
          Plano de Leitura
        </Link>
      </div>
    </nav>
  );
}
