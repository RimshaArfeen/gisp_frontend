

// tailwind.config.js
import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          light: "#F8F8F8",
          footer: "#E0E0E0",
          navbar: "#008080",
          navbarDark: "#006666",
        },
        text: {
          dark: "#333333",
          light: "#F8F8F8",
        },
        primary: {
          DEFAULT: "#008080",
          light: "#4DB6AC",
        },
        secondary: {
          DEFAULT: "#FFA500",
          dark: "#E08E00",
        },
        border: "#666666",
      },
    },
  },
  plugins: [],
})
