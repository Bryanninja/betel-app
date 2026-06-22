'use client';
import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import Image from 'next/image';

import { gsap } from '../../lib/gsapConfig';

const pastors = [
  {
    name: 'Pr. Márcio & Pra. Anette',
    role: 'Pastor Titular · Ministério de Mulheres · Betel Kids',
    verse: '"Mas como ouvirão, se não há quem pregue?" — Romanos 10:14',
    description:
      'Com amor, obediência e dedicação, o Pr. Márcio guia a igreja com firmeza e sabedoria. Ao seu lado, a Pra. Anette serve com excelência no ministério de mulheres e lidera o Betel Kids.',
    image: '/photos/pastor-marcio.webp',
    featured: true,
  },
  {
    name: 'Pr. Jeiel & Pra. Lúcia',
    role: 'Ensinamentos · Ministério de Casais · Encontro de Mulheres',
    verse:
      '"A sabedoria do prudente é entender o seu caminho." — Provérbios 14:8',
    description:
      'O Pr. Jeiel edifica com profundidade e sabedoria. Ao lado da Pra. Lúcia, tem restaurado famílias e lançado bases firmes no Evangelho.',
    image: '/photos/pastor-jeiel-lucia.webp', // placeholder
    featured: false,
  },
  {
    name: 'Pr. Jorge & Pra. Márcia',
    role: 'Filial Sete Lagoas',
    verse:
      '"Quão formosos são os pés dos que anunciam as boas novas!" — Romanos 10:15',
    description:
      'Com amor e fidelidade, têm sido parte essencial da história da igreja desde o início, servindo na filial de Sete Lagoas.',
    image: '/photos/pastor-jorge-marcia.webp', // placeholder
    featured: false,
  },
];

export default function PastorsSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const cards = sectionRef.current.querySelectorAll('.pastor-card');
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
      id="pastores"
      ref={sectionRef}
      className="bg-betel-black px-6 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-betel-red">
            Liderança
          </span>
          <h2 className="font-title text-3xl font-bold text-white md:text-5xl">
            Nossos Pastores
          </h2>
        </div>

        {/* Pastors Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pastors.map((pastor) => (
            <div
              key={pastor.name}
              className="pastor-card flex translate-y-12 flex-col overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] opacity-0 transition-all duration-500 hover:border-white/10 hover:bg-white/[0.04]"
            >
              {/* Photo Header */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={pastor.image}
                  alt={pastor.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-betel-black/90 via-betel-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 -mt-10 flex flex-1 flex-col p-6 md:p-8">
                <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-betel-red drop-shadow-md">
                  {pastor.role}
                </span>
                <h3 className="mb-4 font-title text-2xl font-bold text-white">
                  {pastor.name}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-white/50">
                  {pastor.description}
                </p>
                <blockquote className="border-l-2 border-betel-gold/30 pl-4 text-xs italic text-betel-gold/60">
                  {pastor.verse}
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
