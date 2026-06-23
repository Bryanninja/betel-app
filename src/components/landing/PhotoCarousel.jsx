'use client';
import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import Image from 'next/image';

import { gsap } from '../../lib/gsapConfig';

const photos = [
  {
    src: '/photos/louvor.webp',
    alt: 'Igreja Batista Betel',
    caption: 'Louvor e Adoração',
  },
  {
    src: '/photos/batismo.webp',
    alt: 'Batismo',
    caption: 'Nova Vida',
  },

  {
    src: '/photos/kids-all.webp',
    alt: 'Ministério Infantil',
    caption: 'Betel Kids',
  },
  {
    src: '/photos/oracao.webp',
    alt: 'Momento de Oração',
    caption: 'Comunhão',
  },
  {
    src: '/photos/cauan-louvando.webp',
    alt: 'Louvor',
    caption: 'Propósito',
  },
  {
    src: '/photos/batismo-all.webp',
    alt: 'Batismos na Igreja Batista Betel',
    caption: 'Celebração',
  },
  {
    src: '/photos/adoracao-igreja.webp',
    alt: 'Igreja Adorando',
    caption: 'Unidade',
  },
  {
    src: '/photos/oracao-nara-henrique.webp',
    alt: 'Oração',
    caption: 'Família',
  },
  {
    src: '/photos/adoracao-danie-mara.webp',
    alt: 'Comunhão e Adoração',
    caption: 'Nossa Vida',
  },
  {
    src: '/photos/culto-adoracao.webp',
    alt: 'Culto Betel',
    caption: 'Alegria',
  },
];

export default function PhotoCarousel() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="galeria"
      ref={sectionRef}
      className="translate-y-10 overflow-hidden bg-betel-graphite py-20 opacity-0 md:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-betel-red">
            Momentos
          </span>
          <h2 className="font-title text-3xl font-bold text-white md:text-5xl">
            Nossa Galeria
          </h2>
        </div>
      </div>

      {/* Native Scroll Snapping Carousel */}
      <div className="relative w-full">
        <div
          ref={scrollContainerRef}
          className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto px-[7.5vw] pb-8 pt-4 md:gap-6 md:px-[15vw]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative w-[85vw] max-w-4xl flex-shrink-0 snap-center md:w-[70vw]"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 85vw, 70vw"
                  priority={i === 0}
                  className="pointer-events-none object-cover object-[25%_32%]"
                  draggable="false"
                />
                {/* Caption overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 md:p-8">
                  <span className="text-base font-semibold text-white/90 md:text-lg">
                    {photo.caption}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows (desktop) */}
        <button
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-betel-red/40 p-4 backdrop-blur-md transition-all duration-300 hover:bg-betel-red md:flex 2xl:left-12"
          aria-label="Rolar para esquerda"
        >
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-betel-red/40 p-4 backdrop-blur-md transition-all duration-300 hover:bg-betel-red md:flex 2xl:right-12"
          aria-label="Rolar para direita"
        >
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Swipe hint for mobile */}
      <div className="mt-4 flex items-center justify-center gap-2 text-white/40 md:hidden">
        <svg
          className="h-4 w-4 animate-pulse"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
        <span className="text-xs">Arraste para o lado</span>
      </div>
    </section>
  );
}
