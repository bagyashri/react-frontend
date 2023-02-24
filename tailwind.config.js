/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    "colors": {
      "white": "#FFFFFF",  //customizing colors .can use with bg- or text- classes
      "black": "#000000",
      "primary": {          //When your palette includes multiple shades of the same color, 
                            //it can be convenient to group them together using our nested color object syntax
                            //then it forms classNames like bg-primary-400
        "100": "#f4fafa",
        "150": "#e0f2f2",
        "200": "#cde9ea",
        "250": "#b9e0e2",
        "300": "#a5d8d9",
        "350": "#91cfd1",
        "400": "#7ec6c9",
        "450": "#6abec1",
        "500": "#56B4B8",
        "550": "#47a7aa",
        "600": "#3f9396",
        "650": "#367f82",
        "700": "#2e6c6e",
        "750": "#26585a",
        "800": "#1d4445",
        "850": "#153031",
        "900": "#0c1d1d",
        "DEFAULT": "#56B4B8"    //the special DEFAULT key can be used when you want to define a value with no suffix:
                                //This will create classes like bg-primary, bg-primary-100, and bg-primary-200 so on
      },
      /* Tailwind uses literal color names (like red, green, etc.) and a numeric scale (where 50 is light and 900 is dark) by default. 
      We think this is the best choice for most projects, and have found it easier to maintain than using abstract names like primary or danger
      and if you’re working on a project that needs to support multiple themes , it might make sense to use more abstract names like primary or danger*/
      "secondary": {
        "100": "#f6faf2",
        "150": "#e7f4df",
        "200": "#d9edcc",
        "250": "#cae6b9",
        "300": "#bcdfa6",
        "350": "#aed893",
        "400": "#9fd180",
        "450": "#91ca6d",
        "500": "#82c45a",
        "550": "#71bb44",
        "600": "#64a53b",
        "650": "#568e33",
        "700": "#48772b",
        "750": "#3a6123",
        "800": "#2d4a1b",
        "850": "#1f3312",
        "900": "#111d0a",
        "DEFAULT": "#82c45a"
      },
      "info": {
        "100": "#f0f8fe",
        "150": "#d0e9fc",
        "200": "#afd9fa",
        "250": "#8ecaf8",
        "300": "#6dbaf6",
        "350": "#4cabf4",
        "400": "#2b9bf1",
        "450": "#0f8bea",
        "500": "#0d78c9",
        "550": "#0c6cb6",
        "600": "#0a61a2",
        "650": "#09558f",
        "700": "#08497b",
        "750": "#073e68",
        "800": "#053254",
        "850": "#042741",
        "900": "#031b2e",
        "DEFAULT": "#0d78c9"
      },
      "warning": {
        "100": "#fef9ee",
        "150": "#fcedd0",
        "200": "#fae2b2",
        "250": "#f8d794",
        "300": "#f6cb75",
        "350": "#f4c057",
        "400": "#f2b439",
        "450": "#f0a91a",
        "500": "#dd980e",
        "550": "#c5880d",
        "600": "#ae780b",
        "650": "#97680a",
        "700": "#805808",
        "750": "#684807",
        "800": "#513805",
        "850": "#3a2804",
        "900": "#231802",
        "DEFAULT": "#dd980e"
      },
      "danger": {
        "100": "#fdf1f2",
        "150": "#f9d2d3",
        "200": "#f5b2b4",
        "250": "#f19396",
        "300": "#ed7377",
        "350": "#e95358",
        "400": "#e5343a",
        "450": "#d91c22",
        "500": "#b9181d",
        "550": "#a9161b",
        "600": "#991418",
        "650": "#881216",
        "700": "#781013",
        "750": "#680e11",
        "800": "#580b0e",
        "850": "#48090b",
        "900": "#380709",
        "DEFAULT": "#b9181d"
      },
      "success": {
        "100": "#edfef2",
        "150": "#c9fbda",
        "200": "#a6f8c1",
        "250": "#82f5a8",
        "300": "#5ff290",
        "350": "#3bef77",
        "400": "#18ec5f",
        "450": "#11cd50",
        "500": "#0eaa42",
        "550": "#0c983b",
        "600": "#0b8734",
        "650": "#0a762e",
        "700": "#086427",
        "750": "#075320",
        "800": "#054119",
        "850": "#043013",
        "900": "#021e0c",
        "DEFAULT": "#0eaa42"
      },
      "neutral":{
        "200":"#F3F4F6FF",
        "300":"#DEE1E6FF",
        "350":"#CFD2DAFF",
        "400":"#BDC1CAFF",
        "500":"#9095A1FF",
        "600":"#565D6DFF",
        "700":"#323743FF",
        "900":"#171A1FFF"
      },
      "brands":{
        "100":"#C71610FF",
        "150":"#FEF1F1FF",
        "200":"#FBD2D0FF",
        "250":"#F9B2B0FF",
        "300":"#335CA6FF",
        "350":"#F3F6FBFF",
        "400":"#D9E2F3FF",
        "450":"#BFCEEBFF"
      }
    },
    "extend": {
      //to extend the options which are not present in default theme, you can use extend
      "fontSize": {
        "t1": [
          "0.6875rem",
          "1.125rem"
        ],
        "t2": [
          "0.75rem",
          "1.25rem"
        ],
        "t3": [
          "0.875rem",
          "1.375rem"
        ],
        "t4": [
          "1rem",
          "1.625rem"
        ],
        "t5": [
          "1.125rem",
          "1.75rem"
        ],
        "t6": [
          "1.25rem",
          "1.875rem"
        ],
        "t7": [
          "1.5rem",
          "2.25rem"
        ],
        "t8": [
          "2rem",
          "3rem"
        ],
        "t9": [
          "2.5rem",
          "3.5rem"
        ],
        "t10": [
          "3rem",
          "4.25rem"
        ],
        "t11": [
          "3.5rem",
          "4.87rem"
        ]
      },
      "textDecorationThickness": {
        3: '3px',
      },
      "spacing": {
        "s0": "0.25rem",
        "s1": "0.375rem",
        "s2": "0.5rem",
        "s3": "0.625rem",
        "s4": "0.875rem",
        "s5": "1.125rem",
        "s6": "1.5rem",
        "s7": "1.75rem",
        "s8": "2rem",
        "s9": "2.25rem",
        "s10": "2.5rem",
        "s11": "2.875rem",
        "s12": "3.25rem",
        "s13": "3.5rem",
        "s14": "4rem",
        "s15": "4.75rem",
        "s16": "7rem",
        "s17": "9.25rem",
        "s18": "14rem",
        "s19": "18rem",
        "s20": "27.5rem"
      },
      "fontFamily": {
        "heading": "Inter",
        "body": "Josefin Sans"
      },
      "width": {
        "Sz_NONE": "0rem",
        "Sz0": "0.125rem",
        "Sz1": "0.25rem",
        "Sz2": "0.375rem",
        "Sz3": "0.5rem",
        "Sz4": "0.75rem",
        "Sz5": "1rem",
        "Sz6": "1.25rem",
        "Sz7": "1.5rem",
        "Sz8": "1.75rem",
        "Sz9": "2rem",
        "Sz10": "2.25rem",
        "Sz11": "2.5rem",
        "Sz12": "2.75rem",
        "Sz13": "3rem",
        "Sz14": "3.25rem",
        "Sz15": "3.5rem",
        "Sz16": "3.75rem",
        "Sz17": "4rem",
        "Sz18": "6rem",
        "Sz19": "8rem",
        "Sz20": "12rem",
        "Sz21": "16rem",
        "Sz22": "24rem",
        "Sz23": "32rem",
        "Sz24": "40rem",
        "Sz25": "48rem",
        "Sz26": "56rem",
        "Sz27": "64rem",
        "Sz28":"30rem",
        "Sz29":"32.5rem"
      },
      "height": {
        "Sz_NONE": "0rem",
        "Sz0": "0.125rem",
        "Sz1": "0.25rem",
        "Sz2": "0.375rem",
        "Sz3": "0.5rem",
        "Sz4": "0.75rem",
        "Sz5": "1rem",
        "Sz6": "1.25rem",
        "Sz7": "1.5rem",
        "Sz8": "1.75rem",
        "Sz9": "2rem",
        "Sz10": "2.25rem",
        "Sz11": "2.5rem",
        "Sz12": "2.75rem",
        "Sz13": "3rem",
        "Sz14": "3.25rem",
        "Sz15": "3.5rem",
        "Sz16": "3.75rem",
        "Sz17": "4rem",
        "Sz18": "6rem",
        "Sz19": "8rem",
        "Sz20": "12rem",
        "Sz21": "16rem",
        "Sz22": "24rem",
        "Sz23": "32rem",
        "Sz24": "40rem",
        "Sz25": "48rem",
        "Sz26": "56rem",
        "Sz27": "64rem",
        "Sz28":"25rem",
        "Sz29":"11.4rem"
      },
      /* If you’d like to preserve the default values for a theme option but also add new values, 
      add your extensions under the extend key in the theme section of your configuration file.*/
      "borderRadius": {
        "xs": "0.1875rem",
        "s": "0.25rem",
        "m": "0.375rem",
        "xl": "0.75rem",
        "2xl":"1.125rem", 
        "tl":"1.5rem",
        "tr":"1.5rem",
        "100-percent": "100%"
      },
      "boxShadow": {
        "xs": "0px 0px 1px rgba(23, 26, 31, 0.11), 0px 0px 2px rgba(23, 26, 31, 0.16)",
        "s": "0px 2px 5px rgba(23, 26, 31, 0.13), 0px 0px 2px rgba(23, 26, 31, 0.16)",
        "m": "0px 4px 9px rgba(23, 26, 31, 0.15), 0px 0px 2px rgba(23, 26, 31, 0.16)",
        "l": "0px 8px 17px rgba(23, 26, 31, 0.19), 0px 0px 2px rgba(23, 26, 31, 0.16)",
        "xl": "0px 17px 35px rgba(23, 26, 31, 0.28), 0px 0px 2px rgba(23, 26, 31, 0.16)"
      }
    }
  
  },
  
  plugins: [],
}
