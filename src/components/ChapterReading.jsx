'use client';
import { useCallback, useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
// 1. Importe o motion
import { Loader2, X } from 'lucide-react';

import api from '../services/api';
import { getReadingDetails } from '../utils/bible.parser';
import { ModalTransition } from './Animations';
// 2. Usaremos nosso wrapper para o Card
import Button from './Button';

const ChapterReading = ({
  isOpen,
  onClose,
  fullReadingString,
  isCompleted,
  onComplete,
}) => {
  const [readingContent, setReadingContent] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadBibleText = useCallback(async () => {
    setLoading(true);
    setReadingContent([]); // Limpa o estado anterior
    try {
      const details = getReadingDetails(fullReadingString);
      const organizedData = [];

      // Fetch sequencial para evitar bloqueio da API
      for (const bookInfo of details) {
        for (const ch of bookInfo.chapters) {
          try {
            const res = await api.get(`/verses/nvi/${bookInfo.abbrev}/${ch}`);
            organizedData.push({
              chapterName: `${res.data.book.name} ${res.data.chapter.number}`,
              verses: res.data.verses,
            });
          } catch (err) {
            console.error(`Erro ao buscar ${bookInfo.abbrev} ${ch}:`, err);
          }
        }
      }

      setReadingContent(organizedData);
    } catch (error) {
      console.error('Erro geral ao buscar capítulos:', error);
    } finally {
      setLoading(false);
    }
  }, [fullReadingString]);

  useEffect(() => {
    // Melhorado: Trava scroll do body E do html para mobile
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && fullReadingString) {
      loadBibleText();
    }
  }, [isOpen, fullReadingString, loadBibleText]);

  // IMPORTANTE: Removemos o "if (!isOpen) return null" daqui!

  return (
    <AnimatePresence>
      {isOpen && (
        // 3. Fundo Escuro com Fade (motion.div)
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex justify-center bg-black/60 backdrop-blur-xl md:py-10"
        >
          {/* Botão de Fechar com Micro-interação */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="fixed right-6 top-6 z-[120] rounded-xl bg-white/10 p-1 text-white/60 backdrop-blur-md transition-colors hover:text-betel-red md:p-2 lg:right-8 lg:top-8"
          >
            <X size={32} />
          </motion.button>

          {/* 4. Usamos o ModalTransition para o conteúdo do leitor */}
          <ModalTransition data-lenis-prevent className="overscroll-contain relative h-dvh w-full max-w-3xl overflow-y-auto bg-betel-graphite px-6 py-20 shadow-2xl transition-colors md:rounded-3xl md:px-10 md:py-12 [&::-webkit-scrollbar-button:single-button:vertical:decrement]:h-4 [&::-webkit-scrollbar-button:single-button:vertical:increment]:h-4 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-[3px] [&::-webkit-scrollbar-thumb]:border-solid [&::-webkit-scrollbar-thumb]:border-betel-graphite [&::-webkit-scrollbar-thumb]:bg-betel-red [&::-webkit-scrollbar-thumb]:bg-clip-padding [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-3">
            {loading ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 py-20">
                <Loader2 className="animate-spin text-betel-red" size={40} />
                <p className="font-medium text-betel-ice/60">
                  Buscando as Escrituras...
                </p>
              </div>
            ) : (
              <div className="space-y-12 pb-20">
                <header className="space-y-2 text-center">
                  <h1 className="font-title text-4xl font-bold text-betel-ice">
                    {fullReadingString}
                  </h1>
                  <div className="mx-auto h-1 w-20 rounded-full bg-betel-red/20" />
                </header>

                {readingContent.map((section, idx) => (
                  <div key={idx} className="space-y-6">
                    <h2 className="border-l-4 border-betel-gold bg-betel-gold/5 py-1 pl-4 text-xl font-bold text-betel-gold">
                      {section.chapterName}
                    </h2>

                    <div className="flex flex-col gap-6">
                      {section.verses.map((v) => (
                        <p
                          key={v.number}
                          className="group text-xl leading-relaxed text-white/90"
                        >
                          <span className="mr-3 text-xs font-bold text-betel-red/40 transition-colors group-hover:text-betel-red">
                            {v.number}
                          </span>
                          {v.text}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="mt-12 flex flex-col items-center justify-center gap-6 border-t border-betel-red/20 pt-10">
                  <h1 className="text-center font-title text-2xl font-bold text-betel-ice">
                    {isCompleted
                      ? 'Leitura de hoje já concluída! 🎉'
                      : 'Aqui finalizamos a Leitura de Hoje! Parabéns.'}
                  </h1>

                  <Button
                    color={isCompleted ? 'ghost' : 'outline'}
                    onClick={onComplete}
                  >
                    {isCompleted
                      ? 'Desmarcar leitura'
                      : 'Marcar como concluído!'}
                  </Button>
                </div>
              </div>
            )}
          </ModalTransition>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChapterReading;
