import type { Config } from 'tailwindcss';

const brandColor = {
  'brand-100': '#f0f5ff',
  'brand-200': '#d6e4ff',
  'brand-300': '#adc6ff',
  'brand-400': '#85a5ff',
  'brand-500': '#597ef7',
  'brand-600': '#2f54eb',
  'brand-700': '#1d39c4',
  'brand-800': '#10239e',
  'brand-900': '#061178',
  'brand-1000': '#030852',
};

export const space = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '3rem',
  '2xl': '4rem',
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: { ...brandColor },
      padding: { ...space },
      margin: { ...space },
      gap: { ...space },
      animation: {
        'fade-in': 'fadeIn 0.25s ease-in-out',
        slide: 'slide 6s linear infinite',
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        slide: {
          '0%': { transform: 'translateX(120%)' },
          '100%': { transform: 'translateX(-120%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
