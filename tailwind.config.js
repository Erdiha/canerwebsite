/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        signature: ['Dancing Script', 'cursive'], // Font family for signature
        body: ['Arial', 'Helvetica', 'sans-serif'], // Font family for general text
      },
      colors: {
        background: '#243642',
        foreground: '#629584',
      },
    },
  },
  plugins: [],
};
