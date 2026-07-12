import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#eef9ff",
          100: "#d8f1ff",
          200: "#b0e4ff",
          300: "#78cfff",
          400: "#38b0ff",
          500: "#0e90f5",
          600: "#0070d2",
          700: "#0059aa",
          800: "#004b8c",
          900: "#003f74",
        },
        accent: {
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
        },
        surface: {
          dark:  "#0d1117",
          card:  "#161b22",
          border:"#21262d",
        },
      },
    },
  },
  plugins: [],
};

export default config;
