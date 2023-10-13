import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a4b8ea",

          secondary: "#ed0982",

          accent: "#1e387f",

          neutral: "#1d1c31",

          "base-100": "#e9e6ef",

          info: "#95bbf4",

          success: "#36ce91",

          warning: "#a0800d",

          error: "#f33c2b",
          body: {
            "background-color": "#e3e6e6",
          },
        },
      },
    ],
  },
};
export default config;
