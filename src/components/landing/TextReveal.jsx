'use client';
import { useRef } from 'react';

import { useGSAP } from '@gsap/react';

import { gsap } from '../../lib/gsapConfig';

export default function TextReveal({
  text = 'Somos uma família que vive para adorar a Deus e transformar vidas em Pedro Leopoldo.',
}) {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const words = sectionRef.current.querySelectorAll('.reveal-word');

      gsap.fromTo(
        words,
        { opacity: 0.15 },
        {
          opacity: 1,
          stagger: 0.05,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  const words = text.split(' ');

  return (
    <section
      ref={sectionRef}
      className="flex min-h-[40vh] items-center justify-center bg-betel-black px-6 py-16 md:min-h-[50vh] md:px-8"
    >
      <p className="mx-auto max-w-4xl text-center font-title text-3xl font-bold leading-relaxed text-white md:text-5xl md:leading-relaxed lg:text-6xl lg:leading-relaxed">
        {words.map((word, i) => (
          <span key={i} className="reveal-word mr-[0.3em] inline-block">
            {word}
          </span>
        ))}
      </p>
    </section>
  );
}
