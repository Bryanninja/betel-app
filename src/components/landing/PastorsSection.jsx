"use client";
import { useRef } from "react";
import { gsap } from "../../lib/gsapConfig";
import { useGSAP } from "@gsap/react";

const pastors = [
  {
    name: "Pr. Márcio & Pra. Anette",
    role: "Pastor Titular · Ministério de Mulheres · Betel Kids",
    verse: '"Mas como ouvirão, se não há quem pregue?" — Romanos 10:14',
    description:
      "Com amor, obediência e dedicação, o Pr. Márcio guia a igreja com firmeza e sabedoria. Ao seu lado, a Pra. Anette serve com excelência no ministério de mulheres e lidera o Betel Kids.",
    image: "/photos/pastor-marcio.jpg",
    featured: true,
  },
  {
    name: "Pr. Jeiel & Pra. Lúcia",
    role: "Ensinamentos · Ministério de Casais · Encontro de Mulheres",
    verse: '"A sabedoria do prudente é entender o seu caminho." — Provérbios 14:8',
    description:
      "O Pr. Jeiel edifica com profundidade e sabedoria. Ao lado da Pra. Lúcia, tem restaurado famílias e lançado bases firmes no Evangelho.",
    image: null,
    placeholder: "Foto do Pr. Jeiel e Pra. Lúcia",
    featured: false,
  },
  {
    name: "Pr. Jorge & Pra. Márcia",
    role: "Filial Sete Lagoas",
    verse: '"Quão formosos são os pés dos que anunciam as boas novas!" — Romanos 10:15',
    description:
      "Com amor e fidelidade, têm sido parte essencial da história da igreja desde o início, servindo na filial de Sete Lagoas.",
    image: null,
    placeholder: "Foto do Pr. Jorge e Pra. Márcia",
    featured: false,
  },
];

export default function PastorsSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const cards = sectionRef.current.querySelectorAll(".pastor-card");
    gsap.from(cards, {
      opacity: 0,
      y: 50,
      stagger: 0.15,
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
      id="pastores"
      ref={sectionRef}
      className="bg-betel-black px-4 py-20 md:px-8 md:py-28"
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

        {/* Featured Pastor (Pr. Márcio & Pra. Anette) */}
        {pastors
          .filter((p) => p.featured)
          .map((pastor) => (
            <div
              key={pastor.name}
              className="pastor-card mb-8 overflow-hidden rounded-3xl border border-white/5 bg-white/[0.03] md:flex"
            >
              {/* Photo */}
              <div className="relative h-72 overflow-hidden md:h-auto md:w-2/5">
                {pastor.image ? (
                  <img
                    src={pastor.image}
                    alt={pastor.name}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-betel-graphite">
                    <span className="text-sm text-white/30">{pastor.placeholder}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-betel-black/50 md:bg-gradient-to-r" />
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col justify-center p-6 md:p-10">
                <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-betel-red">
                  {pastor.role}
                </span>
                <h3 className="mb-3 font-title text-2xl font-bold text-white md:text-3xl">
                  {pastor.name}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-white/60 md:text-base">
                  {pastor.description}
                </p>
                <blockquote className="border-l-2 border-betel-gold/40 pl-4 text-sm italic text-betel-gold/70">
                  {pastor.verse}
                </blockquote>
              </div>
            </div>
          ))}

        {/* Other Pastors Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {pastors
            .filter((p) => !p.featured)
            .map((pastor) => (
              <div
                key={pastor.name}
                className="pastor-card overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  {/* Small avatar */}
                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-betel-graphite">
                    {pastor.image ? (
                      <img
                        src={pastor.image}
                        alt={pastor.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <span className="text-lg font-bold text-white/20">
                          {pastor.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-betel-red">
                      {pastor.role}
                    </span>
                    <h3 className="mb-2 font-title text-lg font-bold text-white">
                      {pastor.name}
                    </h3>
                    <p className="mb-3 text-sm leading-relaxed text-white/50">
                      {pastor.description}
                    </p>
                    <blockquote className="border-l-2 border-betel-gold/30 pl-3 text-xs italic text-betel-gold/60">
                      {pastor.verse}
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
