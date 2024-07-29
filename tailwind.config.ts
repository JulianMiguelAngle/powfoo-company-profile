import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      lineHeight: {
        "display-large": "93.6px",
        "display-medium": "76.8px",
        "display-small": "57.6px",

        "h1-xlarge": "74.4px",
        "h1-large": "69.6px",
        "h1-medium": "57.6px",
        "h1-small": "52.8px",
        
        "h2-xlarge": "48px",
        "h2-large": "43.2px",
        "h2-medium": "38.4px",
        "h2-small": "33.6px",

        "h3-xlarge": "33.6px",
        "h3-large": "28.8px",
        "h3-medium": "24px",
        "h3-small": "21.6px",

        "label-large": "25.5px",
        "label-medium": "22.5px",
        "label-small": "19.7px",

        "body-large": "26.4px",
        "body-medium": "23.5px",
        "body-small": "20.5px"
      }
    },

    colors: {
      primary: {
        0: "#CCCCFF",
        100: "#9999FF",
        200: "#6666FF",
        300: "#3333FF",
        400: "#0000FF",
        500: "#0000CC",
        600: "#000099",
        700: "#000066",
        800: "#000033",
        white: {
          0: "#F5F5FF",
          100: "#EBEBFF",
          200: "#E0E0FF"
        }
      },

      secondary: {
        0: "#FFFFCC",
        100: "#FFFF99",
        200: "#FFFF66",
        300: "#FFFF33",
        400: "#FFFF00",
        500: "#CCCC00",
        600: "#999900",
        700: "#666600",
        800: "#333300",
        white: {
          0: "#FFFFF5",
          100: "#FFFFEB",
          200: "#FFFFE0"
        }
      },

      neutral: {
        0: "#FFFFFF",
        100: "#EBEBEB",
        200: "#D1D1D1",
        300: "#C7C7C7",
        400: "#6B6B6B",
        500: "#525252",
        600: "#383838",
        700: "#1F1F1F",
        white: {
          0: "#FAFAFA",
          100: "#F5F5F5",
          200: "#F0F0F0"
        }
      },
    },

    fontSize: {
      "display-large": "78px",
      "display-medium": "64px",
      "display-small": "48px",

      "h1-xlarge": "62px",
      "h1-large": "58px",
      "h1-medium": "48px",
      "h1-small": "44px",
      
      "h2-xlarge": "40px",
      "h2-large": "36px",
      "h2-medium": "32px",
      "h2-small": "28px",

      "h3-xlarge": "28px",
      "h3-large": "24px",
      "h3-medium": "20px",
      "h3-small": "18px",

      "body-large": "18px",
      "body-medium": "16px",
      "body-small": "14px",
    },

    letterSpacing: {
      "display-large": "-1.56px",
      "display-medium": "-1.28px",
      "display-small": "-0.96px",

      "h1-xlarge": "-1.24px",
      "h1-large": "-1.16px",
      "h1-medium": "-0.96px",
      "h1-small": "-0.88px",
      
      "h2-xlarge": "-0.8px",
      "h2-large": "-0.72px",
      "h2-medium": "-0.64px",
      "h2-small": "-0.56px",

      "h3-xlarge": "-0.56px",
      "h3-large": "-0.48px",
      "h3-medium": "-0.4px",
      "h3-small": "-0.36px",

      "label-large": "0.36px",
      "label-medium": "0.32px",
      "label-small": "0.28px",

      "body-large": "0.18px",
      "body-medium": "0.16px",
      "body-small": "0.14px",
    }
  },
  plugins: [],
};
export default config;
