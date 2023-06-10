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
          primary: '#e21bd2',
          secondary: '#17b9d6',
          accent: '#98fc62',
          neutral: '#1a191f',
          'base-100': '#302f37',
          info: '#7eb8e2',
          success: '#157f58',
          warning: '#edc25e',
          error: '#e6565e',
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
      gridTemplateColumns: {
        3: '1fr 2fr 1fr',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
} satisfies Config;
