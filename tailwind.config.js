/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#20687a',
      },
      height: {
        'navbar': '84px',
      },
      backgroundImage: {
        'mount1': 'url("/backgrounds/mountains/mount-1.webp")',
        'mount2': 'url("/backgrounds/mountains/mount-2.webp")',
        'mount3': 'url("/backgrounds/mountains/mount-3.webp")',
        'mount4': 'url("/backgrounds/mountains/mount-4.webp")',
        'spray-lakes': 'url("/backgrounds/mountains/spray-lakes.webp")',
        'kananaskis': 'url("/backgrounds/mountains/kananaskis.avif")',
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  plugins: [],
};
