"use client";
import { useEffect, useState } from 'react';

import { ArrowLeft } from 'lucide-react';

import Button from './Button';

const ArrowBack = ({ to }) => {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Se o scroll for maior que 150px, mostramos a barra
      if (window.scrollY > 150) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
    };

    // monitoramento do scroll
    window.addEventListener('scroll', handleScroll);

    //Limpeza
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-0 top-0 z-50 w-full p-2 pt-[calc(env(safe-area-inset-top)+8px)] transition-colors duration-500 ${showBar ? 'bg-betel-red shadow-md' : 'bg-transparent'}`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center text-white">
        <Button to={to} color="ghost">
          <ArrowLeft size={32} />
        </Button>
        <h2 className={`font-title text-xl font-bold transition-opacity duration-300 ${showBar ? 'opacity-100' : 'opacity-0'}`}>
          Voltar ao Início
        </h2>
      </div>
    </div>
  );
};

export default ArrowBack;
