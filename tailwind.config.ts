import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F7F7F2",
        "primary-green": "#173B32",
        "primary-green-hover": "#112b25",
        "muted-sage": "#A9B8A5",
        "sage-light": "#DCE3DA",
        "sage-pale": "#EDF1EC",
        "charcoal": "#171917",
        "charcoal-muted": "#5C605A",
        "neutral-stone": "#E8E8DF",
        "neutral-stone-light": "#F0F0EB",
      },
      fontFamily: {
        serif: ["var(--font-instrument-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.02em",
        wider: "0.06em",
        widest: "0.12em",
      },
    },
  },
  plugins: [],
};
export default config;
