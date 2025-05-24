/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        white: 'rgb(var(--color-white) / <alpha-value>)',
        black: 'rgb(var(--color-black) / <alpha-value>)',
        grey6: 'rgb(var(--color-grey6) / <alpha-value>)',
        grey5: 'rgb(var(--color-grey5) / <alpha-value>)',
        grey4: 'rgb(var(--color-grey4) / <alpha-value>)',
        grey3: 'rgb(var(--color-grey3) / <alpha-value>)',
        grey2: 'rgb(var(--color-grey2) / <alpha-value>)',
        grey: 'rgb(var(--color-grey) / <alpha-value>)',
        background: 'rgb(var(--color-background) / <alpha-value>)',
        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        root: 'rgb(var(--color-root) / <alpha-value>)',
        card: 'rgb(var(--color-card) / <alpha-value>)',
        destructive: 'rgb(var(--color-destructive) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
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
