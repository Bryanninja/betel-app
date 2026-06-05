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

export const metadata = {
  title: 'Igreja Batista Betel',
  description: 'Aplicativo oficial da Igreja Batista Betel',
  icons: {
    icon: '/betel-favicon.svg', // Temp fallback to the current one
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
