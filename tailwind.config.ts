import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0b3b3c',
          nav: '#082f30',
          accent: '#00b5d8',
          footer: '#2d2d2d',
        },
      },
    },
  },
  plugins: [],
};

export default config;
