/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary, #1DA1F2)', // Default primary color
        secondary: 'var(--color-secondary, #6C757D)', // Default secondary color
        dark: 'var(--color-dark, #121212)', // Default dark color
        'input-dark': 'var(--input-dark, #242424)',
        'dark-hover': 'var(--color-dark-hover, #404040)'
      }
    }
  },
  plugins: []
}

export default tailwindConfig
