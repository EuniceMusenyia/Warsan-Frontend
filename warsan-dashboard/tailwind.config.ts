import type { Config } from 'tailwindcss'
const GoogleFontsPlugin = require('google-fonts-webpack-plugin');

const customFontSize = {
  '40': '2.5rem'

}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        amaranth: ['Amaranth', 'sans-serif'],
      },
      colors: {
        customBlue: '#044357',
        customPurple: '#AF339B',
      },
      customFontSize:{
        ...customFontSize
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    new GoogleFontsPlugin({
      fonts: [
        { family: 'Poppins', variants: ['400', '500', '600', '700'] },
        { family: 'Amaranth', variants: ['400', '700'] },
      ],
      formats: ['woff2'],
    }),
  ],
}
export default config