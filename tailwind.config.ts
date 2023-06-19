import { Config } from 'tailwindcss/types/config';

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: [
      'luxury',
      'cyberpunk',
      'synthwave',
      'garden',
      'dracula',
      'night',
      {
        mytheme: {
          primary: '#63f2a6',
          secondary: '#ea258b',
          accent: '#3baf21',
          neutral: '#1f262e',
          'base-100': '#111827',
          info: '#7ca8d5',
          success: '#31d8b9',
          warning: '#fad242',
          error: '#e02957',
        },
      },
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
} satisfies Config;
