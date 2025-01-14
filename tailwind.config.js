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
        'primary': {
          DEFAULT: '#f5f8ff',  // light mode default
          dark: '#0a192f',
          light: '#f5f8ff'
        },
        'secondary': {
          DEFAULT: '#0ea5e9',  // light mode default
          dark: '#64ffda',
          light: '#0ea5e9'
        },
        'tertiary': {
          DEFAULT: '#e2e8f0',  // light mode default
          dark: '#112240',
          light: '#e2e8f0'
        },
        'textPrimary': {
          DEFAULT: '#1e293b',  // light mode default
          dark: '#ccd6f6',
          light: '#1e293b'
        },
        'textSecondary': {
          DEFAULT: '#64748b',  // light mode default
          dark: '#8892b0',
          light: '#64748b'
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [],
}
