'use client';
import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import Link from 'next/link';

import { gsap } from '../../lib/gsapConfig';

export default function ReadingPlanCTA() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.to('.cta-card', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      });

      // Shimmer animation on the gold border
      gsap.to('.shimmer-border', {
        backgroundPosition: '200% center',
        duration: 3,
        repeat: -1,
        ease: 'none',
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="bg-betel-black px-6 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <div className="cta-card relative translate-y-10 overflow-hidden rounded-3xl p-[1px] opacity-0">
          {/* Animated gold shimmer border */}
          <div
            className="shimmer-border absolute inset-0 rounded-3xl"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, #C5A059 25%, #E8D5A8 50%, #C5A059 75%, transparent 100%)',
              backgroundSize: '200% 100%',
              opacity: 0.4,
            }}
          />

          {/* Card content */}
          <div className="relative rounded-3xl bg-betel-graphite p-8 md:p-12">
            <div className="flex flex-col items-start text-center md:gap-8 md:text-left">
              {/* Text + Button */}
              <div className="flex-1">
                <h2 className="mb-3 font-title text-2xl font-bold text-white md:text-3xl">
                  Acompanhe nosso Plano de <br /> Leitura Bíblica
                </h2>

                <h2 className="mb-3 rounded-2xl border border-betel-ice/10 bg-betel-ice/10 p-4 font-title text-6xl font-bold md:text-8xl">
                  2026
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-white/50 md:text-base">
                  Organize sua leitura diária, marque seus capítulos concluídos
                  e cresça na Palavra junto com toda a igreja.
                </p>

                <Link
                  href="/leitura"
                  className="inline-flex items-center gap-2 rounded-xl bg-betel-red px-6 py-3 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-betel-red/90"
                >
                  Acompanhar
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
