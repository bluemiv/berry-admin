export const toTailwindColor = (colorKey, colorPalette) =>
  colorPalette.reduce(
    (acc, color, idx) => ({ ...acc, [`${colorKey}-${(idx + 1) * 100}`]: color }),
    {},
  );

const space = {
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '3rem',
};

const width = {
  sidebar: '260px',
};

const height = {
  header: '60px',
  footer: '60px',
  contents: 'calc(100vh - 120px)',
};

const colors = {
  background: {
    DEFAULT: '#FFFFFF',
    dark: '#1E1E1E',
  },
  primary: {
    DEFAULT: '#1E40AF',
    100: '#5899ED',
    200: '#4D8FE1',
    300: '#4173D4',
    400: '#3568C8',
    500: '#2A4DBB',
    600: '#1B3A9C',
    700: '#17348A',
    800: '#142E78',
    900: '#102866',
    1000: '#0D2254',
    dark: {
      DEFAULT: '#4C9AFF',
      100: '#A1EEFF',
      200: '#90DDFF',
      300: '#7FCCFF',
      400: '#6EBBFF',
      500: '#5DAAFF',
      600: '#4288E0',
      700: '#3A78C1',
      800: '#3167A2',
      900: '#295683',
      1000: '#204464',
    },
  },
  secondary: {
    DEFAULT: '#FF7F11',
    100: '#FFC2BB',
    200: '#FFB499',
    300: '#FFA777',
    400: '#FF9955',
    500: '#FF8C33',
    600: '#E6730F',
    700: '#CC660D',
    800: '#B3590B',
    900: '#994C09',
    1000: '#803F07',
    dark: {
      DEFAULT: '#FFAB4C',
      100: '#FFFFA1',
      200: '#FFEF90',
      300: '#FFDE7F',
      400: '#FFCD6E',
      500: '#FFBC5D',
      600: '#E69943',
      700: '#CC883A',
      800: '#B37732',
      900: '#99662A',
      1000: '#805522',
    },
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      padding: { ...space },
      margin: { ...space },
      gap: { ...space },
      height,
      minHeight: { ...height },
      maxHeight: { ...height },
      width,
      minWidth: { ...width },
      maxWidth: { ...width },
      colors,
    },
  },
  plugins: [],
};
