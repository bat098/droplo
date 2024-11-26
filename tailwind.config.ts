import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // foreground
        foreground: {
          500: "#667085",
        },
        // background
        bg: {
          primary: "#FFFFFF",
          secondary: "#F9FAFB",
        },
        // border
        border: {
          primary: "#D0D5DD",
          secondary: "#EAECF0",
        },
        // text
        text: {
          primary: {
            900: "#101828",
          },
          secondary: {
            700: "#344054",
          },
          tertiary: {
            600: "#475467",
          },
          placeholder: "#667085",
        },
        // button
        button: {
          primary: {
            bg: "#7F56D9",
            fg: "#FFFFFF",
            border: "#7F56D9",
            tertiary: "#475467",
          },
          secondary: {
            bg: "#FFFFFF",
            border: "#D0D5DD",
            fg: "#344054",
            colorBg: "#FFFFFF",
            colorBorder: "#D6BBFB",
            colorFg: "#6941C6",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
