import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        diya: {
          50: "#fdf5ff",
          100: "#f6e6ff",
          200: "#e9c8ff",
          300: "#d69bff",
          400: "#bd63fb",
          500: "#a238e8",
          600: "#8a1fc9",
          700: "#6d17a0",
          800: "#4c1170",
          900: "#33094e",
          950: "#210536",
        },
        saffron: {
          50: "#fff8ed",
          100: "#ffefd3",
          200: "#ffdba5",
          300: "#ffc06d",
          400: "#ff9d32",
          500: "#ff7f0d",
          600: "#f96204",
          700: "#ce4805",
          800: "#a3390d",
          900: "#84300e",
          950: "#471604",
        },
        marigold: {
          400: "#ffd166",
          500: "#ffc233",
          600: "#f2a900",
        },
        ink: "#1a1023",
        /* Festival night: the deep purple ground of the logo, for dark bands */
        night: { DEFAULT: "#1d0b2e", mid: "#2b1140", light: "#3d1a59" },
        /* Lit paper: the light ground for reading sections */
        cream: { DEFAULT: "#fff8ed", dark: "#f7ead6" },
        /* Rani pink: the festival's own accent, from the logo's lotus and fireworks */
        rani: { DEFAULT: "#e8337f", light: "#ff6aa6", dark: "#b81d5f" },
      },
      fontFamily: {
        display: ["'Bricolage Grotesque'", "system-ui", "sans-serif"],
        body: ["'Mukta'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 24px 50px -24px rgba(0,0,0,0.6)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
