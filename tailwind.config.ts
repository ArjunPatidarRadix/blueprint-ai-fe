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
        background: "var(--background)",
        foreground: "var(--foreground)",
        accentColor: "var(--accentColor)",
        lightColor: "var(--lightColor)",
        greyColor: "var(--greyColor)",
        lightGreen: "var(--lightGreen)",
        silverColor: "var(--silverColor)",
        pinkColor: "var(--pinkColor)",
        pinkColorDark: "var(--pinkColorDark)",
        goldColor: "var(--goldColor)",
        goldColorDark: "var(--goldColorDark)",
        blueColor: "var(--blueColor)",
        blueColorDark: "var(--blueColorDark)",
        greenColor: "var(--greenColor)",
        greenColorDark: "var(--greenColorDark)",
      },
    },
  },
  plugins: [],
};
export default config;