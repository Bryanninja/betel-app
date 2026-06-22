'use client';
import { useEffect, useRef, useState } from 'react';

import { useGSAP } from '@gsap/react';
import Link from 'next/link';

import { ScrollTrigger, gsap } from '../../lib/gsapConfig';

const navLinks = [
  { label: 'Cultos', href: '#cultos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Pastores', href: '#pastores' },
  { label: 'Localização', href: '#localizacao' },
];

export default function Navbar() {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: document.body,
        start: 'top -80px',
        onEnter: () => setIsScrolled(true),
        onLeaveBack: () => setIsScrolled(false),
      });
    },
    { scope: navRef },
  );

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [menuOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'border-b border-white/5 bg-betel-black/80 shadow-lg backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-3 md:px-8 md:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo-betel.svg"
              alt="Igreja Batista Betel"
              className={`transition-all duration-500 ${
                isScrolled ? 'h-10 w-auto' : 'h-0 w-0 opacity-0'
              }`}
            />
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
            <div className="flex items-center gap-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Igreja+Batista+Betel+Pedro+Leopoldo"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-white/10"
              >
                Como Chegar
              </a>
              <Link
                href="/leitura"
                className="rounded-md bg-betel-red px-4 py-2 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-betel-red/90"
              >
                Plano de Leitura
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Menu"
          >
            <span
              className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
                menuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
                menuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Sibbling to prevent being constrained by nav's backdrop-filter */}
      <div
        data-lenis-prevent="true"
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-betel-black/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          menuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
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
        <div className="mt-4 flex flex-col gap-4 text-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Igreja+Batista+Betel+Pedro+Leopoldo"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/20 bg-white/5 px-8 py-3 text-lg font-bold text-white transition-all duration-300 hover:bg-white/10"
          >
            🗺️ Como Chegar
          </a>
          <Link
            href="/leitura"
            onClick={() => setMenuOpen(false)}
            className="rounded-xl bg-betel-red px-8 py-3 text-lg font-bold text-white transition-all duration-300 hover:bg-betel-red/90"
          >
            📖 Plano de Leitura
          </Link>
        </div>
      </div>
    </>
  );
}
