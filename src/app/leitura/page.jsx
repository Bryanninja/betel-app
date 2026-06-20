"use client";
import { useState, useEffect } from 'react';
import ModalName from '../../components/ModalName';
import DailyReading from '../../components/sections/DailyReading';
import Header from '../../components/sections/Header';
import WelcomeCard from '../../components/sections/WelcomeCard';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedName = localStorage.getItem('user-name');
    if (!savedName) {
      setShowModal(true);
    } else {
      setUserName(savedName);
    }
  }, []);

  const handleUserEntered = () => {
    const savedName = localStorage.getItem('user-name');
    setUserName(savedName || '');
    setShowModal(false);
  };

  if (!mounted) return null;

  return (
    <main className="relative">
      <ModalName isOpen={showModal} onEnter={handleUserEntered} />
      {!showModal && userName && (
        <>
          <Header />
          <WelcomeCard name={userName} />
          <DailyReading />
        </>
      )}
    </main>
  );
}
