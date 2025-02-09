import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        'xs': ['x-small', '1rem'], 
        '2xl': ['1.3rem', { lineHeight: '1.5' }],
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },
      fontWeight: {
        regular: "400",
      },
      screens: {
        '3xl': '1900px',
        'lg-custom': { min: '1280px', max: '1399px' }, 
        'xl-custom': { min: '1400px', max: '1535px' },
        '2xl-custom1': { min: '1536px', max: '1699px' }, 
        '2xl-custom2': { min: '1700px', max: '1899px' }, 
        'mobile-ui' : { min: '250px', max: '999px' },
        'desktop-ui' : { min: '1000px'},
        'image-banner': {max: '700px'},
        'iphone-se': {max: '400px'},

      },
      scale: {
        200: '1.6', 
        300: '3', 
      },
      boxShadow: {
        'custom-orange': '0 0 20px 10px rgba(236, 102, 41, 0.5)', // Thêm shadow mới
      },
      
    },
  },
  plugins: [],
} satisfies Config;
