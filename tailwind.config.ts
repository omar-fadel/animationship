import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "background-1": "url('/backgrounds/backgroundOne.webp')",
      },
      screens: {
        sm: "599px",
        md: "904px",
        lg: "1440px",
      },
      fontFamily: {
        sans: ["Montserrat"],
      },
      colors: {
        "navy-blue": "#01121D",
        simon: "#D22333",
      },
      fontSize: {
        h1: [
          "60px",
          {
            fontWeight: "bolder",
          },
        ],
        h2: [
          "32px",
          {
            fontWeight: "normal",
          },
        ],
        h3: [
          "24px",
          {
            fontWeight: "bold",
          },
        ],
        body: [
          "24px",
          {
            fontWeight: "normal",
          },
        ],
        bodySmall: [
          "16px",
          {
            fontWeight: "normal",
          },
        ],
        button: [
          "14px",
          {
            fontWeight: "bold",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
