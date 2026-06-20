import { Archivo, Inter, Montserrat } from 'next/font/google';

import '../index.css';
// Global styles
import { Providers } from './providers';

// Context providers wrapper

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
  title: 'Plano de Leitura Bíblica 2026 - Igreja Batista Betel',
  description: 'Acompanhe o plano anual de leitura bíblica de 2026 da Igreja Batista Betel. Organize sua leitura diária, marque seus capítulos concluídos e cresça na Palavra.',
  icons: {
    icon: '/betel-favicon.svg',
    shortcut: '/betel-favicon.svg',
    apple: '/betel-favicon.svg',
  },
  openGraph: {
    title: 'Plano de Leitura Bíblica 2026 - Igreja Batista Betel',
    description: 'Acompanhe o plano anual de leitura bíblica de 2026 da Igreja Batista Betel. Organize sua leitura diária, marque seus capítulos concluídos e cresça na Palavra.',
    url: '/',
    siteName: 'Igreja Batista Betel',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Plano de Leitura Bíblica 2026 - Igreja Batista Betel',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plano de Leitura Bíblica 2026 - Igreja Batista Betel',
    description: 'Acompanhe o plano anual de leitura bíblica de 2026 da Igreja Batista Betel. Organize sua leitura diária, marque seus capítulos concluídos e cresça na Palavra.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${arquivo.variable} ${montserrat.variable}`}
    >
      <body className="min-h-screen bg-betel-black font-sans text-betel-ice antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
