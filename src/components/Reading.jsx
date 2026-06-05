'use client';
import { useState } from 'react';

import { UseReading } from '../context/ReadingContext';
import ChapterReading from './ChapterReading';
import Checkbox from './Checkbox';

const Reading = ({ isToday, id, data, chapters }) => {
  const { completedDays, toggleDay } = UseReading();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const isChecked = completedDays.includes(id);

  return (
    <div className="relative w-full">
      <div
        id={isToday ? 'today-reading' : undefined}
        className="flex w-full flex-col gap-3"
      >
        {isToday && (
          <h3 className="mb-2 font-title text-[15px] font-bold uppercase tracking-wide text-white">
            Leitura de Hoje
          </h3>
        )}
        <div
          className={`flex w-full items-center justify-between rounded-2xl border bg-betel-graphite p-4 shadow-sm transition-colors md:p-5 ${
            isToday ? 'border-betel-gold' : 'border-transparent'
          }`}
        >
          <div className="flex items-center gap-4">
            <Checkbox isChecked={isChecked} onClick={() => toggleDay(id)} />
            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-white md:text-xl">
                {data}
              </h3>
              <p className="mt-0.5 text-sm text-white/80 md:text-base">
                <strong className="font-bold text-white">Leitura - </strong>
                {chapters}
              </p>
            </div>
          </div>

          <button
            type="button"
            className="flex shrink-0 items-center justify-center rounded-xl border border-betel-red bg-[#141011] p-3 transition-colors hover:bg-betel-red/20"
            onClick={() => setIsModalOpen(true)}
          >
            <img
              src="/bible.svg"
              alt="Abrir Bíblia"
              className="h-6 w-6 brightness-0 invert"
            />
          </button>
        </div>
      </div>

      <ChapterReading
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        fullReadingString={chapters}
        isCompleted={isChecked}
        onComplete={() => {
          toggleDay(id);
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};

export default Reading;
