/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'f4': '#F4F4F4',
        's7': '#159688',
        's72': '#10786D',
      },
      screens: {
        'ss': '1150px',
        'ms': '951px',
        'ds': '1280px',
      }
    },
  },
  plugins: [],
}