import Link from 'next/link';

export const metadata = {
  title: 'Política de Privacidade | Igreja Batista Betel',
};

export default function Privacidade() {
  return (
    <main className="min-h-screen bg-betel-black py-20 px-6 md:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl bg-betel-graphite p-8 shadow-2xl md:p-12">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-betel-red transition-colors hover:text-white"
        >
          &larr; Voltar
        </Link>
        <h1 className="mb-8 font-title text-3xl font-bold text-white md:text-5xl">
          Política de Privacidade
        </h1>
        <div className="space-y-6 text-white/70">
          <p>
            Na Igreja Batista Betel, levamos a sua privacidade a sério. Esta política descreve como
            coletamos, usamos e protegemos as suas informações ao utilizar o nosso site e aplicativo
            de leitura bíblica.
          </p>
          <h2 className="font-title text-xl font-bold text-white mt-8">1. Coleta de Informações</h2>
          <p>
            No momento, nosso aplicativo de leitura armazena o seu nome e progresso de leitura localmente
            no seu navegador (localStorage). Não enviamos esses dados para nossos servidores nem
            compartilhamos com terceiros.
          </p>
          <h2 className="font-title text-xl font-bold text-white mt-8">2. Uso das Informações</h2>
          <p>
            As informações salvas no seu dispositivo são usadas unicamente para personalizar a sua
            experiência e acompanhar o seu plano de leitura diário.
          </p>
          <h2 className="font-title text-xl font-bold text-white mt-8">3. Contato</h2>
          <p>
            Se você tiver dúvidas sobre esta política, sinta-se à vontade para nos contatar nas nossas
            redes sociais ou nos visitar pessoalmente.
          </p>
          <p className="mt-8 text-sm italic text-white/50">
            Última atualização: 22 de Junho de 2026
          </p>
        </div>
      </div>
    </main>
  );
}
