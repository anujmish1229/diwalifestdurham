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
      },
      fontFamily: {
        display: ["'Poppins'", "system-ui", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "diya-radial":
          "radial-gradient(circle at 30% 20%, rgba(255,194,51,0.25), transparent 45%), radial-gradient(circle at 80% 0%, rgba(255,127,13,0.2), transparent 40%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(255,194,51,0.35)",
      },
    },
  },
  plugins: [],
} satisfies Config;
