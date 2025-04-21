import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        changa: ['Changa', 'sans-serif'],
        impact: ['Impact', 'Charcoal', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
