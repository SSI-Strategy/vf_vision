/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ssi': {
          'midnight': '#003C71',      // Midnight Sky Blue - Primary
          'ocean': '#009CCF',         // Ocean Blue - Interactive/highlights
          'turquoise': '#6EBCB0',     // Northern Lights Turquoise - Accents
          'sunrise': '#F2A900',       // Sunrise Sky Yellow - Energy/emphasis
          'stone': '#717B87',         // Stone Grey - Text/secondary
          'sand': '#D6D2C4',          // Sand Beige - Backgrounds
          'black': '#000000',         // Pitch Black - Deep sections
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
