import { FadeDown } from '../Animations';

const Header = () => {
  return (
    <FadeDown>
      {/* 
  
        1. pt-[env(safe-area-inset-top)] -> Faz o padding começar exatamente onde o notch termina.
        2. valor extra (ex: 20px) para o conteúdo não colar no notch.
      */}
      <header className="flex flex-col items-center justify-center gap-10 bg-gradient-to-b from-betel-black to-betel-graphite pb-64 pt-[calc(env(safe-area-inset-top)+40px)] md:pt-16">
        <img src="/logo-betel.svg" alt="Logo Igreja Batista Betel"></img>

        <h2 className="text-center font-title text-5xl font-bold text-white md:text-6xl">
          Plano de
          <br />
          Leitura 2026
        </h2>
      </header>
    </FadeDown>
  );
};

export default Header;
