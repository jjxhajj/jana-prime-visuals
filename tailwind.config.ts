import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: "#BFE344",
        "lime-dark": "#677D26",
        bg: "#101406",
        bg2: "#141808",
        bg3: "#1b2209",
        muted: "#5a6632",
        muted2: "#8a9a50",
        skin: "#e8ead8",
        border: "#1e2a0a",
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
