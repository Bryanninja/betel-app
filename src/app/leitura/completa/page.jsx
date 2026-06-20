"use client";
import { useEffect, useState } from 'react';
import ArrowBack from '../../../components/ArrowBack';
import Header from '../../../components/sections/Header';
import MonthToggle from '../../../components/sections/MonthToggle';

export default function Plan() {
  const [activeMonth, setActiveMonth] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const getInitialMonth = () => {
      const now = new Date();
      const monthIndex = now.getMonth();
      const monthNamesPT = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
      ];
      if (monthIndex < 6) {
        return 'Julho';
      }
      return monthNamesPT[monthIndex];
    };

    setActiveMonth(getInitialMonth());
    setMounted(true);

    const timer = setTimeout(() => {
      const element = document.getElementById('today-reading');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 350);

    return () => clearTimeout(timer);
  }, []);

  const months = [
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen bg-betel-black">
      <ArrowBack to="/leitura" />
      <Header />
      <div className="mx-auto -mt-36 grid max-w-[1440px] grid-cols-1 gap-4 px-3 pb-20 md:px-6">
        {months.map((month) => (
          <MonthToggle
            key={month}
            month={month}
            isOpen={activeMonth === month}
            onClick={() => setActiveMonth(activeMonth === month ? null : month)}
          />
        ))}
      </div>
    </main>
  );
}
