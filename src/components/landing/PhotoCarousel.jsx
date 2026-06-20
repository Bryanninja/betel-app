"use client";
import { useRef, useState } from "react";
import { gsap } from "../../lib/gsapConfig";
import { useGSAP } from "@gsap/react";

const photos = [
  {
    src: "/photos/louvor.jpg",
    alt: "Louvor na Igreja Batista Betel",
    caption: "Louvor & Adoração",
  },
  {
    src: "/photos/adoracao-jovem.jpg",
    alt: "Jovem adorando na Igreja Batista Betel",
    caption: "Adoração",
  },
  {
    src: "/photos/pastor-marcio.jpg",
    alt: "Pastor Márcio em oração",
    caption: "Oração",
  },
  {
    src: "/photos/betel-kids.jpg",
    alt: "Betel Kids - Ministério Infantil",
    caption: "Betel Kids",
  },
  // Placeholders for additional photos
  {
    src: null,
    alt: "FOTO-GALERIA-1",
    caption: "Momento especial",
    placeholder: "Batismo, oração ou pregação",
  },
  {
    src: null,
    alt: "FOTO-GALERIA-2",
    caption: "Geração Betel",
    placeholder: "Jovens no sábado",
  },
];

export default function PhotoCarousel() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Only use photos that exist (have src)
  const availablePhotos = photos.filter((p) => p.src !== null);

  useGSAP(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
      },
    });
  }, { scope: sectionRef });

  const goTo = (index) => {
    if (index < 0 || index >= availablePhotos.length) return;
    setCurrentIndex(index);
    if (trackRef.current) {
      gsap.to(trackRef.current, {
        x: `-${index * 100}%`,
        duration: 0.6,
        ease: "power3.out",
      });
    }
  };

  const handleDragStart = useRef(null);

  const onTouchStart = (e) => {
    handleDragStart.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (handleDragStart.current === null) return;
    const diff = handleDragStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < availablePhotos.length - 1) {
        goTo(currentIndex + 1);
      } else if (diff < 0 && currentIndex > 0) {
        goTo(currentIndex - 1);
      }
    }
    handleDragStart.current = null;
  };

  return (
    <section
      id="galeria"
      ref={sectionRef}
      className="overflow-hidden bg-betel-graphite py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
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

      {/* Carousel */}
      <div
        className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={trackRef}
          className="flex transition-none"
          style={{ width: `${availablePhotos.length * 100}%` }}
        >
          {availablePhotos.map((photo, i) => (
            <div
              key={i}
              className="relative w-full flex-shrink-0 px-2"
              style={{ width: `${100 / availablePhotos.length}%` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                />
                {/* Caption overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <span className="text-sm font-semibold text-white/80">
                    {photo.caption}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows (desktop) */}
        <button
          onClick={() => goTo(currentIndex - 1)}
          className={`absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/10 p-3 backdrop-blur-md transition-all duration-300 hover:bg-white/20 md:flex ${
            currentIndex === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          aria-label="Foto anterior"
        >
          <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => goTo(currentIndex + 1)}
          className={`absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/10 p-3 backdrop-blur-md transition-all duration-300 hover:bg-white/20 md:flex ${
            currentIndex === availablePhotos.length - 1 ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          aria-label="Próxima foto"
        >
          <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots indicator */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {availablePhotos.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentIndex
                ? "w-8 bg-betel-red"
                : "w-2 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Ir para foto ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
