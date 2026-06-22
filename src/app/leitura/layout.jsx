import { Providers } from '../providers';

export const metadata = {
  title: 'Plano de Leitura Bíblica 2026 - Igreja Batista Betel',
  description: 'Acompanhe o plano anual de leitura bíblica de 2026 da Igreja Batista Betel.',
  openGraph: {
    title: 'Plano de Leitura Bíblica 2026',
    description: 'Acompanhe o plano anual de leitura bíblica de 2026 da Igreja Batista Betel.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plano de Leitura Bíblica 2026',
    images: ['/og-image.png'],
  },
};

export default function LeituraLayout({ children }) {
  return <Providers>{children}</Providers>;
}
