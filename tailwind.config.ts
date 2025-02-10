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
        '3xl': { min: '1900px', max: '5000px' },
        'lg-custom': { min: '1280px', max: '1399px' }, 
        'xl-custom': { min: '1400px', max: '1535px' },
        '2xl-custom1': { min: '1536px', max: '1699px' }, 
        '2xl-custom2': { min: '1700px', max: '1899px' }, 
        'mobile-ui' : { min: '250px', max: '999px' },
        'desktop-ui' : { min: '1000px'},
        'image-banner': {max: '700px'},
        'custom-size': { raw: '(max-width: 1025px) and (min-height: 1000px)' },
        'sm+' : { max: '821px'},
        'min-h-1000': { raw: '(min-width: 900px) and (max-width: 1000px) and (min-height: 1000px)' },
        'heightSE': { raw: '(max-height: 700px)' },
        'heightS8': { raw: '(min-height: 701px) and (max-height: 800px)' },
        'Pixel7': { raw: '(min-height: 801px) and (max-height: 950px)' },
        'iPad': { raw: '(min-width: 765px) and (max-width: 950px) and (max-height: 1200px)' },
        'slide5' : { max : '650px'}
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
