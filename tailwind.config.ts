import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Poppins', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'light-bg': '#ffffff',
        'light-surface': '#f8fafc',
        'light-card': '#f1f5f9',
        'light-border': '#e2e8f0',
        'black': '#000000',
        'black-light': '#1a1a1a',
        'black-dark': '#000000',
        'text-primary': '#1e293b',
        'text-secondary': '#64748b',
        'text-muted': '#94a3b8',
        'accent': '#000000',
      },
    },
  },
  plugins: [],
}

export default config
