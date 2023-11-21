import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['var(--font-logo)'],
      },
      colors: {
        'default': '#4BA5B4',
        'secondary': '#6FB7C3'
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@kamona/tailwindcss-perspective'),
  ],
}
export default config
