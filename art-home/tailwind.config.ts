import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        'noto-arabic': ['var(--font-noto-arabic)', 'sans-serif'],
      },
      colors: {
        brand: {
          gold: {
            DEFAULT: '#b49b6a',
            darker: '#a38a5a',
            lighter: '#f3eee4',
          },
          dark: '#212529',
          light: '#f8f9fa',
          gray: '#6c757d',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
