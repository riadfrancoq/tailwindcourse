import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    screens: {
      sm: '640px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      margin: {
        1: '14px',
        2: '16px',
        3: '18px',
        4: '20px'
      },
      colors: {
        vuejs: {
          100: "#49e659",
          932: "#434252"
        } 
      },
      fontSize: {
        base: '18px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

  },
  plugins: [],
};
export default config;
