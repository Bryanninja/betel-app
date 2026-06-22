/** @type {import('tailwindcss').Config} */
export default {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        betel: {
          red: '#9D192E',
          black: '#141011',
          graphite: '#1F1A1B',
          ice: '#F5F5F5',
          gold: '#C5A059',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        title: ['var(--font-montserrat)', 'sans-serif'],
        subtitle: ['var(--font-archivo)', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(to bottom, #141011, #1F1A1B, #9D192E)',
      },
    },
  },
  plugins: [],
};
