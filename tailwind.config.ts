import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      gridPattern: 'url(/grid.svg)',
    },
    extend: {
      colors: {
        rafaPurple: '#B2A4FF',
        rafaRed: '#FFB4B4',
        rafaOrange: '#FFDEB4',
        rafaYellow: '#FDF7C3'
      },
      fontFamily: {
        display: 'var(--font-fraunces)',
        body: 'var(--font-inter)',
      },
      fontSize: {
        displayMobile: ['2.250rem', '1.2'],
        h1Mobile: ['2.000rem', '1.2'],
        h2Mobile: ['1.812rem', '1.2'],
        h3Mobile: ['1.625rem', '1.2'],
        bodyMobile: ['1.000rem', '1.5'],
        buttonMobile: ['0.875rem', '1.5'],
        labelMobile: ['0.750rem', '1.5'],
        displayDesktop: ['5.000rem', '1.2'],
        h1Desktop: ['3.812rem', '1.2'],
        h2Desktop: ['2.938rem', '1.2'],
        h3Desktop: ['2.250rem', '1.2'],
        h4Desktop: ['1.688rem', '1.2'],
        bodyDesktop: ['1.000rem', '1.5'],
        labelDesktop: ['0.750rem', '1.5'],
      },
      lineHeight: {
        header: '1.2',
        body: '1.5',
      },
      fontWeight: {
        base: '400',
        semi: '600',
        heading: '700',
      },
      dropShadow: {
        base: '2px 2px 0 #000000',
      },
      borderRadius: {
        base: '5px'
      }
    },
  },
  plugins: [],
};
export default config;
