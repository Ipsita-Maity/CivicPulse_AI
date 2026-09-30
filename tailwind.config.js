/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sovereign: {
          950: "#050914",
          900: "#0A1128", // Core background
          850: "#0D1735",
          800: "#131F42",
          700: "#1E2F5E",
          600: "#2B417F",
        },
        slate: {
          850: "#151F32",
          900: "#0F172A",
          800: "#1E293B",
          700: "#334155",
          600: "#475569",
        },
        civic: {
          emerald: "#10B981",
          mint: "#34D399",
          glow: "rgba(16, 185, 129, 0.15)",
        },
        strategic: {
          gold: "#F59E0B",
          amber: "#D97706",
          glow: "rgba(245, 158, 11, 0.15)",
        },
        deficit: {
          crimson: "#EF4444",
          rose: "#F43F5E",
          glow: "rgba(239, 68, 68, 0.15)",
        },
        brics: {
          cyan: "#06B6D4",
          saffron: "#FF9933",
          amethyst: "#8B5CF6",
          brazil: "#009C3B",
          southAfrica: "#007A3D",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-jakarta)", "Plus Jakarta Sans", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
};
