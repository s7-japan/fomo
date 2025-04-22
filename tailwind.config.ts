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
        impact: ['Impact', 'Charcoal', 'sans-serif'],
        changa: ['var(--font-changa)', 'sans-serif'],        
      },
    },
  },
  plugins: [],
}

export default config
