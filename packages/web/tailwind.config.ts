import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        embratur: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#00A859',
          600: '#008F4B',
          700: '#007A3F',
          800: '#006133',
          900: '#004D29',
          950: '#002E19',
        },
        neutral: {
          25: '#FCFCFD',
          50: '#F9FAFB',
          100: '#F2F4F7',
          200: '#EAECF0',
          300: '#D0D5DD',
          400: '#98A2B3',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          800: '#1D2939',
          900: '#101828',
          950: '#0C111D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['3rem', { lineHeight: '3.75rem', fontWeight: '700' }],
        'display-md': ['2.25rem', { lineHeight: '2.75rem', fontWeight: '700' }],
        'display-sm': ['1.875rem', { lineHeight: '2.375rem', fontWeight: '600' }],
        'display-xs': ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }],
        'text-lg': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '400' }],
        'text-md': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],
        'text-sm': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }],
        'text-xs': ['0.75rem', { lineHeight: '1rem', fontWeight: '400' }],
      },
      spacing: {
        'space-1': '0.25rem',
        'space-2': '0.5rem',
        'space-3': '0.75rem',
        'space-4': '1rem',
        'space-5': '1.25rem',
        'space-6': '1.5rem',
        'space-8': '2rem',
        'space-10': '2.5rem',
        'space-12': '3rem',
        'space-16': '4rem',
        'space-20': '5rem',
      },
      borderRadius: {
        'radius-sm': '0.25rem',
        'radius-md': '0.5rem',
        'radius-lg': '0.75rem',
        'radius-xl': '1rem',
        'radius-2xl': '1.5rem',
        'radius-full': '9999px',
      },
      boxShadow: {
        'shadow-xs': '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        'shadow-sm':
          '0px 1px 3px 0px rgba(16, 24, 40, 0.1), 0px 1px 2px -1px rgba(16, 24, 40, 0.1)',
        'shadow-md':
          '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
        'shadow-lg':
          '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
        'shadow-xl':
          '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
      },
    },
  },
  plugins: [],
};
export default config;
