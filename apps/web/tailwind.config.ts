import type { Config } from 'tailwindcss';

const primaryColor = {
  'primary-hover': '#1890ff',
  primary: '#096dd9',
  'primary-active': '#0050b3',
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
      colors: { ...primaryColor },
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
