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
        '2xl': ['1.05rem', { lineHeight: '1.5' }],
        xl: ['1.05rem','1.75rem'],
        '3xl': ['1.05rem',{ lineHeight: '1.5' }]


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
        'Pixel7': { raw: '(min-height: 801px) and (max-height: 950px) and (max-width: 1500px)' },
        'iPad': { raw: '(min-width: 765px) and (max-width: 950px) and (max-height: 1200px)' },
        'slide5' : { max : '650px'},
        'iPhoneSE': { raw: '(max-height: 700px) and (max-width: 400px)' },
        'S8Galaxy': { raw: '(min-height: 701px) and (max-width: 700px) and (max-height: 800px)' },
        'videoDisplay': { min: '1200px'},
        'banner' : { max : '1199px'},
        'footerIpad' : { raw: '(min-width: 700px) and (max-width:1025px) and (min-height:1000px) and (max-height: 1370px)' },
        'IpadMini&IpadAir': { raw: '(min-width: 750px) and (max-width: 900px) and (min-height:1000px) and (max-height:1200px)'},
        'desktop-lg' : { raw: '(min-width: 801px) and (max-width: 1535px)' },
        'desktop-xl' : { min : '1350px' , max: '1535px' },
        'desktop-md' : { min : '1350px' },
        'slide2-gap' : { raw: '(max-height: 600px) and (min-width: 1100px) and (max-width:1500px)' },
        'slide3-gap' : { raw: '(max-width: 1400px)and (min-width: 1000px)' },
        'smallerX-desktop': { max: '1250px' },
        'NestHub' : { raw: '(width: 1024px)and (height: 600px)' }
      },
      scale: {
        200: '1.6', 
        300: '3', 
      },
      boxShadow: {
        'custom-orange': '0 0 20px 10px rgba(255, 255, 240, 0.3)', // Màu mờ hơn
      },

      
    },
  },
  plugins: [],
} satisfies Config;
