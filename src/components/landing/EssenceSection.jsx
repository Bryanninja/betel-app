'use client';
import { useRef } from 'react';

import { useGSAP } from '@gsap/react';

import { gsap } from '../../lib/gsapConfig';

const pillars = [
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    title: 'Firmados na Palavra',
    description:
      'Cremos na Bíblia como nossa única regra de fé e prática. Todo nosso ensino e vida comunitária nascem das Escrituras.',
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: 'Amor Genuíno',
    description:
      'Somos uma família espiritual. Aqui você encontra acolhimento, cuidado pastoral e relacionamentos que curam.',
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
    title: 'Missão e Serviço',
    description:
      'Não existimos apenas para nós mesmos. Fomos chamados para servir nossa cidade e anunciar as boas novas.',
  },
];

export default function EssenceSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // Header animation
      gsap.to('.essence-header', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      });

      // Pillars animation
      gsap.to('.essence-pillar', {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.pillars-container',
          start: 'top 80%',
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-betel-black px-6 py-20 md:px-8 md:py-32"
    >
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-30 grayscale-[30%]"
        >
          <source src="/videos/family.mp4" type="video/mp4" />
        </video>
        {/* Heavy gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-betel-black/90 via-betel-black/70 to-betel-black/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="essence-header mb-16 max-w-2xl translate-y-12 opacity-0 md:mb-24">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-betel-red">
            Nossa Essência
          </span>
          <h2 className="mb-6 font-title text-3xl font-bold text-white md:text-5xl lg:text-6xl">
            Somos <br className="hidden md:block" />
            uma família.
          </h2>
          <p className="text-base leading-relaxed text-white/60 md:text-xl">
            A Igreja Batista Betel é uma comunidade forjada no amor de Cristo.
            Nossa jornada não é sobre religiosidade, mas sobre corações
            transformados que buscam a presença de Deus todos os dias.
          </p>
        </div>

        {/* Pillars */}
        <div className="pillars-container grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-10">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="essence-pillar relative translate-y-12 overflow-hidden rounded-3xl border border-white/5 bg-betel-graphite/40 p-8 opacity-0 transition-all duration-500 hover:border-white/10 hover:bg-white/[0.04] md:bg-betel-graphite/90"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-betel-red p-4 text-betel-ice">
                {pillar.icon}
              </div>
              <h3 className="mb-4 font-title text-2xl font-bold text-white">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/50">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
