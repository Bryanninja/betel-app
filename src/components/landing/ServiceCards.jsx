"use client";
import { useRef } from "react";
import { gsap } from "../../lib/gsapConfig";
import { useGSAP } from "@gsap/react";

const services = [
  {
    emoji: "🔔",
    title: "Culto de Domingo",
    day: "Domingos",
    time: "18:00h",
    description: "Culto principal da igreja com louvor, pregação e comunhão.",
  },
  {
    emoji: "✨",
    title: "Culto de Quarta",
    day: "Quartas",
    time: "19:30h",
    description: "Momento de oração e estudo da Palavra no meio da semana.",
  },
  {
    emoji: "⚡",
    title: "Geração Betel",
    day: "Sábados",
    time: "18:30h",
    description: "Uma geração apaixonada por Jesus. Jovens conectados com Deus.",
    instagram: "@geracaobetel.pl",
  },
  {
    emoji: "🧡",
    title: "Betel Teens",
    day: "Domingos",
    time: "17:00h",
    description: "Encontro para adolescentes antes do culto de domingo.",
  },
  {
    emoji: "💛",
    title: "Betel Kids",
    day: "Domingos",
    time: "18:00h",
    description: "Ministério infantil — as crianças aprendem sobre Jesus na linguagem delas.",
    instagram: "@betelkidspl",
  },
];

export default function ServiceCards() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const cards = sectionRef.current.querySelectorAll(".service-card");

    gsap.from(cards, {
      opacity: 0,
      y: 60,
      stagger: 0.12,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      id="cultos"
      ref={sectionRef}
      className="bg-betel-black px-4 py-20 md:px-8 md:py-28"
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-500 hover:border-betel-red/30 hover:bg-white/[0.06] md:p-8"
            >
              {/* Subtle glow on hover */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-betel-red/0 transition-all duration-700 group-hover:bg-betel-red/5" />

              <div className="relative">
                <span className="mb-4 block text-3xl">{service.emoji}</span>
                <h3 className="mb-1 font-title text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="mb-3 text-sm font-semibold text-betel-red">
                  {service.day} • {service.time}
                </p>
                <p className="text-sm leading-relaxed text-white/50">
                  {service.description}
                </p>
                {service.instagram && (
                  <p className="mt-3 text-xs font-medium text-white/30">
                    {service.instagram}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
