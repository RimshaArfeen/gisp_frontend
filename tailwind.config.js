

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
          light: "#F0F4F8",    // A soft, light gray-blue for a clean background
          footer: "#1E2A40",   // A deep, professional navy blue for the footer
          navbar: "#2A4B8F",   // A classic, trustworthy medium blue for the navbar
          navbarDark: "#1A3264", // A darker shade of blue for contrast
        },
        text: {
          dark: "#0F1626",    // An almost-black dark blue for high-contrast text
          light: "#E0E5EC",   // A light, off-white for text on dark backgrounds
        },
        primary: {
          DEFAULT: "#2A4B8F",  // The medium blue as the main brand color
          light: "#6688BB",    // A lighter blue for secondary emphasis
        },
        secondary: {
          DEFAULT: "#38A169",  // A vibrant, inspiring green for accents and calls to action
          dark: "#2A7D4C",     // A darker green for hover states
        },
        border: "#C8D0D8",     // A cool, light gray for borders
      },
    },
  },
  plugins: [],
})
