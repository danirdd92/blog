/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    logs: false,
    themes: ['night'],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
