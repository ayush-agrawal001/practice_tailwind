import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors : {
    //   blue : "#1fb6ff"
    // },
    extend: {
      colors : {
        customColor : {
          100 : "#206a6c"
        }
      }
    },
  },
  plugins: [],
};
export default config;
