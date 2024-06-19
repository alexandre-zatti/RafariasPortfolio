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
    colors: {
      rafaPurple: '#B2A4FF',
      rafaRed: '#FFB4B4',
      rafaOrange: '#FFDEB4',
      rafaYellow: '#FDF7C3'
    },
    extend: {
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
      boxShadow: {
        base: '2px 2px 0 #000000',
        // 'desktop': '3px 3px 0 #000000',
      },
      translate: {
        boxShadowX: '2px',
        boxShadowY: '2px',
        reverseBoxShadowX: '-2px',
        reverseBoxShadowY: '-2px',
      },
      borderRadius: {
        base: '5px'
      },
      backgroundImage: {}, // Put here later the grid as background image
    },
  },
  plugins: [],
};
export default config;
