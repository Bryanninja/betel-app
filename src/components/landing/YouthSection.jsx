'use client';
import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import Image from 'next/image';

import { gsap } from '../../lib/gsapConfig';

export default function YouthSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.to('.youth-content', {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      });

      gsap.to('.youth-image', {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-betel-black px-6 py-20 md:px-8 md:py-28"
    >
      {/* Subtle red accent */}
      <div className="absolute -right-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-betel-red/[0.03] blur-3xl" />

      <div className="relative mx-auto flex max-w-[1440px] flex-col-reverse items-center gap-8 md:flex-row md:justify-between md:gap-16 lg:gap-24">
        {/* Bento Grid Photos & Video */}
        <div className="youth-image w-full flex-1 flex-shrink-0 -translate-x-10 opacity-0">
          <div className="grid h-[400px] grid-cols-2 grid-rows-2 gap-3 md:h-[550px] lg:h-[650px] lg:gap-4">
            {/* Large vertical image */}
            <div className="relative row-span-2 overflow-hidden rounded-3xl border border-white/5 shadow-2xl">
              <Image
                src="/photos/adoracao-jovem.webp"
                alt="Geração Betel - Jovens"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale-[20%] transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-betel-black/50 to-transparent" />
            </div>

            {/* Video Placeholder (Top Right) */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-betel-graphite shadow-2xl">
              <video
                src="/videos/maranata-jovens.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Small horizontal image (Bottom Right) */}
            <div className="relative overflow-hidden rounded-3xl border border-white/5 shadow-2xl">
              <Image
                src="/photos/jovens-pregacao.webp"
                alt="Momentos Jovens"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale-[20%] transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="youth-content w-full max-w-lg translate-x-10 text-center opacity-0 md:text-left">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-betel-red/80">
            Culto de Jovens
          </span>
          <h2 className="mb-4 font-title text-3xl font-bold text-white md:text-4xl">
            Geração Betel ⚡
          </h2>
          <p className="mb-4 text-base leading-relaxed text-white/60 md:text-lg">
            Uma geração apaixonada por Jesus. Nossos encontros são marcados por
            muita presença de Deus, louvor intenso, comunhão genuína e uma
            palavra que transforma realidades.
          </p>
          <p className="mb-6 text-sm text-white/40">Aos Sábados, 18h30</p>
          <a
            href="https://instagram.com/geracaobetel.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-betel-red/20 px-5 py-2.5 text-sm font-semibold text-betel-red/80 transition-all duration-300 hover:border-betel-red/40 hover:bg-betel-red/5"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            @geracaobetel.pl
          </a>
        </div>
      </div>
    </section>
  );
}
