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
        ppsycamore: "#738f3d",
        ppblumine: "#1b5b7b",
        ppbrightTurquoise: "#1bc2f1",
        ppchelseaCucumber: "#91ae54",
        ppracingGreen: "#0f1a15",
        ppconifer: "#abd34b",
        ppwoodland: "#4a5927",
        ppblueChill: "#1484a6",
        ppsushi: "#8cb444",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
export default config;
