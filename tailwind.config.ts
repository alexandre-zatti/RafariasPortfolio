import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        grid: "url('/grid.svg')"
      },
      colors: {
        overlay: "rgba(0,0,0,0.8)",
        border: "var(--border-color)",
        rafaPurple: "var(--rafa-purple)",
        rafaRed: "var(--rafa-red)",
        rafaOrange: "var(--rafa-orange)",
        rafaYellow: "var(--rafa-yellow)",
        rafaWhite: "var(--rafa-white)"
      },
      fontFamily: {
        display: "var(--font-fraunces)",
        body: "var(--font-inter)",
      },
      fontSize: {
        displayMobile: ["2.250rem", "1.2"],
        h1Mobile: ["2.000rem", "1.2"],
        h2Mobile: ["1.812rem", "1.2"],
        h3Mobile: ["1.625rem", "1.2"],
        bodyMobile: ["1.000rem", "1.5"],
        buttonMobile: ["0.875rem", "1.5"],
        labelMobile: ["0.750rem", "1.5"],
        displayDesktop: ["5.000rem", "1.2"],
        h1Desktop: ["3.812rem", "1.2"],
        h2Desktop: ["2.938rem", "1.2"],
        h3Desktop: ["2.250rem", "1.2"],
        h4Desktop: ["1.688rem", "1.2"],
        bodyDesktop: ["1.000rem", "1.5"],
        labelDesktop: ["0.750rem", "1.5"],
      },
      lineHeight: {
        header: "1.2",
        body: "1.5",
      },
      fontWeight: {
        base: "400",
        semi: "600",
        heading: "700",
      },
      boxShadow: {
        light: "2px 2px 0px 0px #000000",
      },
      dropShadow: {
        base: "2px 2px 0 #000000",
      },
      borderRadius: {
        base: "5px"
      },
      translate: {
        boxShadowX: "2px",
        boxShadowY: "2px",
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config