/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        prata: ["var(--font-prata)", "serif"],
        // satisfy: ["var(--font-satisfy)", "cursive"],
        manrope: ["var(--font-manrope)", "sans-serif"],
        kaushan: ["var(--font-kaushan)", "cursive"],
      },
  },
  },
  plugins: [],
};
