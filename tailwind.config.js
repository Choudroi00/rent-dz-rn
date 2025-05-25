/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        grey6: '#FAFCFF',
        grey5: '#F3F7FB',
        grey4: '#ECF2F8',
        grey3: '#E9EFF7',
        grey2: '#E5EDF5',
        grey: '#E2EAF3',
        background: '#FAFCFF',
        foreground: '#1B1C1D',
        root: '#FAFCFF',
        card: '#FAFCFF',
        destructive: '#BA1A1A',
        primary: '#0070E9',
      },
    },
  },
  plugins: [
    ({ addBase }) => {
      addBase({
        ':root': {
          '--color-white': '255 255 255',
          '--color-black': '0 0 0',
          '--color-grey6': '250 252 255',
          '--color-grey5': '243 247 251',
          '--color-grey4': '236 242 248',
          '--color-grey3': '233 239 247',
          '--color-grey2': '229 237 245',
          '--color-grey': '226 234 243',
          '--color-background': '250 252 255',
          '--color-foreground': '27 28 29',
          '--color-root': '250 252 255',
          '--color-card': '250 252 255',
          '--color-destructive': '186 26 26',
          '--color-primary': '0 112 233',
        },
      });
    },
  ],
};
