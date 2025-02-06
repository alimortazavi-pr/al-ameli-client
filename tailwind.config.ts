import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              "50": "#f4f9f9",
              "100": "#daedeb",
              "200": "#b4dbd7",
              "300": "#87c1be",
              "400": "#67a9a8",
              "500": "#448788",
              "600": "#346c6d",
              "700": "#2d5658",
              "800": "#274648",
              "900": "#243c3d",
              DEFAULT: "#67a9a8",
            },
            secondary: {
              "50": "#fbf9f1",
              "100": "#f5f0df",
              "200": "#ebdebe",
              "300": "#dec693",
              "400": "#cfa868",
              "500": "#c5924a",
              "600": "#b77d3f",
              "700": "#986336",
              "800": "#7b5131",
              "900": "#64432a",
              DEFAULT: "#ebdebe",
            },
          },
        },
      },
    }),
  ],
};
export default config;
