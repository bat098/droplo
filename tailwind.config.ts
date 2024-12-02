import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      lightGray: "#D0D5DD",
      white: "#FFFFFF",
      darkGray: "#344054",
      lightBlueGray: "#EAECF0",
      mediumGray: "#475467",
      darkNavy: "#101828",
      grayishPurple: "#667085",
      lightestGray: "#F9FAFB",
      purple: "#6941C6",
      lightPurple: "#D6BBFB",
      deepPurple: "#7F56D9",
    },

    extend: {
      screens: {
        "2xl": "1208px",
        xl: "1208px",
      },
      boxShadow: {
        primaryShadow: "0 1px 2px 0px rgba(16, 24, 40, 0.05)",
      },
      fontFamily: {
        mainFont: "Inter",
      },
    },
  },
  plugins: [],
} satisfies Config
