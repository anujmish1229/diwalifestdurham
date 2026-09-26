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
        display: ["'Baloo 2'", "system-ui", "sans-serif"],
        marquee: ["'Bungee'", "'Baloo 2'", "system-ui", "sans-serif"],
        body: ["'Mukta'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "diya-radial":
          "radial-gradient(circle at 30% 20%, rgba(255,194,51,0.25), transparent 45%), radial-gradient(circle at 80% 0%, rgba(255,127,13,0.2), transparent 40%)",
        "night-sky":
          "radial-gradient(circle at 18% 8%, rgba(255,194,51,0.16), transparent 38%), radial-gradient(circle at 82% 0%, rgba(255,127,13,0.14), transparent 42%), radial-gradient(circle at 50% 100%, rgba(162,56,232,0.18), transparent 55%)",
        "stars":
          "radial-gradient(1.5px 1.5px at 10% 20%, rgba(255,255,255,0.5), transparent), radial-gradient(1px 1px at 30% 65%, rgba(255,255,255,0.35), transparent), radial-gradient(1.5px 1.5px at 55% 15%, rgba(255,255,255,0.4), transparent), radial-gradient(1px 1px at 72% 45%, rgba(255,255,255,0.3), transparent), radial-gradient(1.5px 1.5px at 88% 70%, rgba(255,255,255,0.4), transparent), radial-gradient(1px 1px at 95% 25%, rgba(255,255,255,0.3), transparent), radial-gradient(1px 1px at 20% 85%, rgba(255,255,255,0.3), transparent), radial-gradient(1.5px 1.5px at 42% 92%, rgba(255,255,255,0.35), transparent)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(255,194,51,0.35)",
        bulb: "0 0 0 3px rgba(255,194,51,0.28), 0 8px 24px -4px rgba(255,127,13,0.45)",
        lantern: "0 0 32px 6px rgba(255,194,51,0.35), 0 0 64px 16px rgba(162,56,232,0.2)",
        stall: "0 20px 45px -20px rgba(8,2,16,0.6)",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.55", transform: "scale(0.92)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-1.2deg)" },
          "50%": { transform: "rotate(1.2deg)" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        twinkle: "twinkle 2.6s ease-in-out infinite",
        sway: "sway 6s ease-in-out infinite",
        drift: "drift 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
