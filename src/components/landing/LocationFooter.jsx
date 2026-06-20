"use client";
import { useRef } from "react";
import { gsap } from "../../lib/gsapConfig";
import { useGSAP } from "@gsap/react";

const socialLinks = [
  {
    label: "@ibbetelpl",
    href: "https://instagram.com/ibbetelpl",
    description: "Igreja Batista Betel",
  },
  {
    label: "@geracaobetel.pl",
    href: "https://instagram.com/geracaobetel.pl",
    description: "Geração de Betel",
  },
  {
    label: "@betelkidspl",
    href: "https://instagram.com/betelkidspl",
    description: "Betel Kids",
  },
];

export default function LocationFooter() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from(".location-content", {
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

    gsap.from(".social-link", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".social-links-container",
        start: "top 85%",
        once: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      id="localizacao"
      ref={sectionRef}
      className="bg-betel-graphite px-4 pt-20 md:px-8 md:pt-28"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-betel-red">
            Localização
          </span>
          <h2 className="font-title text-3xl font-bold text-white md:text-5xl">
            Venha nos visitar
          </h2>
        </div>

        <div className="location-content flex flex-col gap-8 md:flex-row md:gap-12">
          {/* Map */}
          <div className="flex-1 overflow-hidden rounded-2xl border border-white/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747.5!2d-44.0434!3d-19.6186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa697c1b5e4a8ed%3A0x1234567890!2sRua+Comendador+Ant%C3%B4nio+Alves%2C+1403+-+Centro%2C+Pedro+Leopoldo+-+MG%2C+33250-033!5e0!3m2!1spt-BR!2sbr"
              width="100%"
              height="350"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Igreja Batista Betel"
            />
          </div>

          {/* Address + Social */}
          <div className="flex flex-col justify-center md:w-96">
            {/* Address */}
            <div className="mb-8">
              <div className="mb-3 flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-betel-red"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm font-semibold text-white">
                  Endereço
                </span>
              </div>
              <p className="text-sm leading-relaxed text-white/50">
                Rua Comendador Antônio Alves, 1403
                <br />
                Centro, Pedro Leopoldo - MG
                <br />
                CEP: 33250-033
              </p>
            </div>

            {/* Social Links */}
            <div className="social-links-container">
              <h3 className="mb-4 text-sm font-semibold text-white">
                Nossas Redes
              </h3>
              <div className="flex flex-col gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 transition-all duration-300 hover:border-betel-red/20 hover:bg-white/[0.05]"
                  >
                    <svg
                      className="h-5 w-5 text-white/40 transition-colors duration-300 group-hover:text-betel-red"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    <div>
                      <span className="block text-sm font-semibold text-white/70 transition-colors duration-300 group-hover:text-white">
                        {link.label}
                      </span>
                      <span className="text-xs text-white/30">
                        {link.description}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-white/5 py-8">
        <div className="mx-auto max-w-[1440px] flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <img src="/betel-favicon.svg" alt="Betel" className="h-5 w-5 brightness-0 invert opacity-30" />
            <span className="text-xs text-white/30">
              © 2026 Igreja Batista Betel — Pedro Leopoldo, MG
            </span>
          </div>
          <span className="text-xs text-white/20">
            Casa de Deus. Sua casa.
          </span>
        </div>
      </footer>
    </section>
  );
}
