import { Archivo, Inter, Montserrat } from 'next/font/google';

import '../index.css';

const arquivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const baseUrl = 'https://www.ibbetelpl.com.br';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Igreja Batista Betel | Pedro Leopoldo - Casa de Deus. Sua casa.',
  description:
    'Igreja Batista Betel em Pedro Leopoldo, MG. Cultos aos Domingos 18h e Quartas 19h30. Geração Betel, Betel Kids, Betel Teens e Plano de Leitura Bíblica 2026.',
  icons: {
    icon: '/betel-favicon.svg',
    shortcut: '/betel-favicon.svg',
    apple: '/betel-favicon.svg',
  },
  openGraph: {
    title: 'Igreja Batista Betel | Pedro Leopoldo',
    description:
      'Casa de Deus. Sua casa. Cultos aos Domingos 18h e Quartas 19h30. Venha nos visitar!',
    url: '/',
    siteName: 'Igreja Batista Betel',
    images: [
      {
        url: '/photos/adoracao.webp',
        width: 1200,
        height: 630,
        alt: 'Igreja Batista Betel - Pedro Leopoldo',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Igreja Batista Betel | Pedro Leopoldo',
    description:
      'Casa de Deus. Sua casa. Cultos aos Domingos 18h e Quartas 19h30.',
    images: ['/photos/adoracao.webp'],
  },
};

import SmoothScrollWrapper from '../components/SmoothScrollWrapper';

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${arquivo.variable} ${montserrat.variable}`}
    >
      <body className="min-h-screen bg-betel-black font-sans text-betel-ice antialiased">
        <SmoothScrollWrapper>
          {children}
        </SmoothScrollWrapper>
      </body>
    </html>
  );
}
