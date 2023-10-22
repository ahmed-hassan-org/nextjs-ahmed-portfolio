import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,,json}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,,json}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,,json}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  mode: "jit",
  theme: {
    container: {
      center: true,
      padding: "16px",
      screens: {
        default: "1328px",
        // xs: "320px",
      },
    },
    extend: {
      boxShadow: {
        sticky: "0px -5px 15px rgba(0, 0, 0, 0.2)",
      },
      screens: {
        desktop: "1440px",
        sm: "340px",
      },
      colors: {
        black: "#101828",
        lightGray: "#EAECF0",
        "primary-green": "#10b981",
        gray: {
          DEFAULT: "#ffffff",
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712",
        },
      },
      backgroundColor: { "primary-green": "#10b981" },
      borderWidth: {
        1: "2px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tw-elements/dist/plugin.cjs"),
  ],
};
export default config;
