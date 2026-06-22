import Link from 'next/link';

export const metadata = {
  title: 'Termos de Uso | Igreja Batista Betel',
};

export default function Termos() {
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
          Termos de Uso
        </h1>
        <div className="space-y-6 text-white/70">
          <p>
            Bem-vindo ao site e aplicativo da Igreja Batista Betel. Ao acessar ou usar nossos
            serviços, você concorda com estes termos.
          </p>
          <h2 className="font-title text-xl font-bold text-white mt-8">1. Uso do Conteúdo</h2>
          <p>
            Todo o conteúdo presente neste site, incluindo o Plano de Leitura, devocionais e imagens,
            é propriedade da Igreja Batista Betel ou de seus licenciadores. O uso é estritamente
            pessoal e para edificação espiritual, não sendo permitido o uso comercial sem
            autorização prévia.
          </p>
          <h2 className="font-title text-xl font-bold text-white mt-8">2. Aplicativo de Leitura</h2>
          <p>
            O aplicativo de leitura bíblica é fornecido "no estado em que se encontra", como uma
            ferramenta de auxílio. Não garantimos a disponibilidade contínua sem interrupções e não
            nos responsabilizamos por eventual perda de dados de progresso (que são salvos localmente
            no seu dispositivo).
          </p>
          <h2 className="font-title text-xl font-bold text-white mt-8">3. Alterações</h2>
          <p>
            Reservamo-nos o direito de modificar estes termos a qualquer momento. Recomendamos a
            leitura periódica desta página.
          </p>
          <p className="mt-8 text-sm italic text-white/50">
            Última atualização: 22 de Junho de 2026
          </p>
        </div>
      </div>
    </main>
  );
}
