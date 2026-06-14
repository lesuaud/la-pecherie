/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cyan: { DEFAULT: '#10A0D0', light: '#90D0F0' },
        navy: { DEFAULT: '#0B3C5D', dark: '#07294A' },
        sand: '#F6EEE0',
        coral: '#E2603F',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
