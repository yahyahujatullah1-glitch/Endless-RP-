import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-dark": "#061B2D",      // Deep Ocean Blue
        "neon-cyan": "#00F0FF",    // Main Accent
        "neon-teal": "#00B3A4",    // Secondary Accent
        "palm-green": "#2AFF5A",   // Palm Accent
        "soft-blue": "#D1EFFF",    // Text Color
        "card-dark": "rgba(6, 27, 45, 0.6)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-bebas)"],
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at center, rgba(0, 240, 255, 0.15) 0%, rgba(6, 27, 45, 0) 70%)",
      },
      boxShadow: {
        "neon": "0 0 10px rgba(0, 240, 255, 0.5), 0 0 20px rgba(0, 240, 255, 0.3)",
      }
    },
  },
  plugins: [],
};
export default config;
