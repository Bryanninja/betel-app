'use client';
import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import Image from 'next/image';

import { gsap } from '../../lib/gsapConfig';

const services = [
  {
    id: 'domingo',
    emoji: '🔔',
    title: 'Culto de Domingo',
    day: 'Domingos',
    time: '18h',
    description:
      'Culto principal da igreja com louvor, pregação e a presença poderosa do Espírito Santo.',
    image: '/photos/culto.webp',
    className: 'col-span-1 sm:col-span-2 lg:col-span-2 border border-white/10',
    glowClass: 'bg-betel-red/30',
    emojiClass: 'text-5xl md:text-6xl mb-6',
    titleClass: 'text-2xl md:text-3xl',
  },
  {
    id: 'quarta',
    emoji: '✨',
    title: 'Culto de Quarta',
    day: 'Quartas',
    time: '19h30',
    description: 'Momento de oração e estudo da Palavra no meio da semana.',
    className: 'col-span-1 bg-white/[0.03] border border-white/5',
    glowClass: 'bg-white/5',
    emojiClass: 'text-3xl md:text-4xl mb-4',
    titleClass: 'text-xl',
  },
  {
    id: 'jovens',
    emoji: '⚡',
    title: 'Geração Betel',
    day: 'Sábados',
    time: '18h30',
    description: 'Uma geração apaixonada por Jesus. Culto jovem cheio de vida.',
    instagram: '@geracaobetel.pl',
    className:
      'col-span-1 bg-white/[0.03] border border-white/5 hover:border-white/20',
    glowClass: 'bg-white/5',
    emojiClass: 'text-3xl md:text-4xl mb-4',
    titleClass: 'text-xl',
  },
  {
    id: 'teens',
    emoji: '🧡',
    title: 'Betel Teens',
    day: 'Domingos',
    time: '17h',
    description: 'Encontro focado nos adolescentes antes do culto da noite.',
    className: 'col-span-1 bg-white/[0.03] border border-white/5',
    glowClass: 'bg-orange-500/10',
    emojiClass: 'text-3xl md:text-4xl mb-4',
    titleClass: 'text-xl',
  },
  {
    id: 'kids',
    emoji: '💛',
    title: 'Betel Kids',
    day: 'Domingos',
    time: '18h',
    description: 'Ensino bíblico lúdico e amoroso para as crianças.',
    instagram: '@betelkidspl',
    className: 'col-span-1 bg-white/[0.03] border border-white/5',
    glowClass: 'bg-amber-400/10',
    emojiClass: 'text-3xl md:text-4xl mb-4',
    titleClass: 'text-xl',
  },
];

export default function ServiceCards() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const cards = sectionRef.current.querySelectorAll('.service-card');

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        stagger: 0.15,
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
      id="cultos"
      ref={sectionRef}
      className="bg-betel-black px-6 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-betel-red">
            Programação
          </span>
          <h2 className="font-title text-3xl font-bold text-white md:text-5xl">
            Nossos Cultos
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className={`service-card group relative translate-y-12 overflow-hidden rounded-3xl p-8 opacity-0 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 ${service.className}`}
            >
              {/* Optional Background Image */}
              {service.image && (
                <div className="absolute inset-0 z-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-betel-black/90 via-betel-black/70 to-betel-red/40" />
                </div>
              )}

              {/* Subtle glow on hover */}
              <div
                className={`absolute -right-12 -top-12 z-0 h-40 w-40 rounded-full blur-3xl transition-all duration-700 group-hover:scale-150 ${service.glowClass} opacity-0 group-hover:opacity-100`}
              />

              <div className="relative z-10 flex h-full flex-col">
                <span
                  className={`block drop-shadow-xl transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-110 ${service.emojiClass}`}
                >
                  {service.emoji}
                </span>

                <div className="mt-auto flex flex-col items-start pt-4">
                  <h3
                    className={`mb-4 font-title font-bold text-white ${service.titleClass}`}
                  >
                    {service.title}
                  </h3>

                  {/* Prominent Time Badge */}
                  <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-1.5 backdrop-blur-md">
                    <svg
                      className="h-4 w-4 text-white/80"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm font-bold tracking-wide text-white">
                      {service.day} •{' '}
                      <span className="font-bold">{service.time}</span>
                    </span>
                  </div>

                  <p className="max-w-md text-sm leading-relaxed text-white/60">
                    {service.description}
                  </p>

                  {service.instagram && (
                    <div className="mt-6 flex w-full items-center gap-2">
                      <div className="h-[1px] flex-1 bg-white/10" />
                      <span className="text-xs font-semibold text-white/30 transition-colors group-hover:text-white/60">
                        {service.instagram}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
