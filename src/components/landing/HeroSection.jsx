'use client';
import { useRef } from 'react';

import { useGSAP } from '@gsap/react';

import { gsap } from '../../lib/gsapConfig';

export default function HeroSection() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(
    () => {
      // Parallax effect on background image
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Fade out content on scroll
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '40% top',
          scrub: true,
        },
      });

      // Entrance animations
      const tl = gsap.timeline({ delay: 0.3 });
      tl.from('.hero-logo', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: 'power3.out',
      })
        .from(
          '.hero-tagline',
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.4',
        )
        .from(
          '.hero-subtitle',
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.3',
        )
        .from(
          '.hero-arrow',
          {
            opacity: 0,
            y: -10,
            duration: 0.5,
            ease: 'power3.out',
          },
          '-=0.2',
        );
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      className="relative flex h-screen items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with parallax */}
      <div
        ref={imageRef}
        className="absolute inset-0 -top-[10%] h-[120%] w-full"
      >
        <img
          src="/photos/adoracao.webp"
          alt="Culto na Igreja Batista Betel"
          className="h-full w-full object-cover object-[25%_32%]"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-betel-black/70 via-betel-black/50 to-betel-black" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center gap-4 px-6 text-center md:gap-8"
      >
        <img
          src="/logo-betel.svg"
          alt="Igreja Batista Betel"
          className="hero-logo h-12 w-auto md:h-20"
        />

        <h1 className="hero-tagline font-subtitle text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
          Casa de Deus.
          <br />
          Sua casa.
        </h1>

        <p className="hero-subtitle font-subtitle max-w-md text-base text-white/60 md:text-lg">
          Pedro Leopoldo, MG
        </p>
      </div>

      {/* Animated scroll arrow */}
      <div className="hero-arrow absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-widest text-white/40">
            Conheça
          </span>
          <svg
            className="h-6 w-6 animate-bounce text-white/40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
