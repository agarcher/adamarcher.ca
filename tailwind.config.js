/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background))',
        'background-card': 'rgb(var(--background-card))',
        foreground: 'rgb(var(--foreground))',
        'muted-foreground': 'rgb(var(--muted-foreground))',
        primary: 'rgb(var(--primary))',
        accent: {
          DEFAULT: 'rgb(var(--accent))',
          foreground: 'rgb(var(--accent-foreground))',
          subtle: 'rgb(var(--accent-subtle))',
        },
        destructive: 'rgb(var(--destructive))',
      },
      boxShadow: {
        'highlight': '0px 0px 20px 10px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
