"use client";
import { useRef } from "react";
import { gsap } from "../../lib/gsapConfig";
import { useGSAP } from "@gsap/react";

export default function KidsSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from(".kids-content", {
      opacity: 0,
      x: -40,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      },
    });

    gsap.from(".kids-image", {
      opacity: 0,
      x: 40,
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
      ref={sectionRef}
      className="relative overflow-hidden bg-betel-graphite px-4 py-20 md:px-8 md:py-28"
    >
      {/* Subtle warm accent */}
      <div className="absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-amber-500/[0.03] blur-3xl" />

      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center gap-8 md:flex-row md:gap-16">
        {/* Text Content */}
        <div className="kids-content flex-1 text-center md:text-left">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-amber-400/80">
            Ministério Infantil
          </span>
          <h2 className="mb-4 font-title text-3xl font-bold text-white md:text-4xl">
            Betel Kids 💛
          </h2>
          <p className="mb-4 text-base leading-relaxed text-white/60 md:text-lg">
            Um espaço especial onde as crianças aprendem sobre Jesus na linguagem
            delas. Com professoras dedicadas, a salinha é dividida por faixas
            etárias para que cada criança tenha a melhor experiência.
          </p>
          <p className="mb-6 text-sm text-white/40">
            Aos Domingos, 18h • Durante o culto principal
          </p>
          <a
            href="https://instagram.com/betelkidspl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-amber-400/20 px-5 py-2.5 text-sm font-semibold text-amber-400/80 transition-all duration-300 hover:border-amber-400/40 hover:bg-amber-400/5"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            @betelkidspl
          </a>
        </div>

        {/* Photo */}
        <div className="kids-image w-full max-w-sm flex-shrink-0 md:max-w-md">
          <div className="relative overflow-hidden rounded-3xl border border-white/5">
            <img
              src="/photos/betel-kids.jpg"
              alt="Ministério Betel Kids"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-betel-black/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
