// tailwind.config.mjs
export default {
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        noto: ['var(--font-noto-serif)'],
        // edu: ['var(--font-Edu)'],
      },
    },
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // adjust paths as needed
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  // plugins: [require('tailwind-scrollbar-hide')],
};
