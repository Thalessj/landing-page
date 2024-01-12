import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0b79f7",
        secundary: "#0bb2f7",
        terciary: "#69d6ea",
        blackLight: "#161D30",
        dark: "#101010",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'saving': "url('/image/saving.png')",
      },
    },
    screens: { 
      'xsm': '320px',
      // => @media (min-width: 640px) { ... }
      
      '2sm': '375px',
      // => @media (min-width: 640px) { ... }

      '3sm': '425px',
      // => @media (min-width: 640px) { ... }
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1736px',
      // => @media (min-width: 1536px) { ... }
    }
  },
 }

export default config
