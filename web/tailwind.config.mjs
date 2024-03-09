/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border)/<alpha-value>)",
        background: "hsl(var(--background)/<alpha-value>)",
        widget: "hsl(var(--widget)/<alpha-value>)",
        text: {
          active: "hsl(var(--text)/<alpha-value>)",
          off: "hsl(var(--text-light)/<alpha-value>)",
          accent: "hsl(var(--accent)/<alpha-value>)",
        },
      },
      animation: {
        levitate: "levitate 3s ease-in-out infinite",
        "levitate-slow": "levitate 6s ease-in-out infinite",
        "levitate-medium": "levitate 4s ease-in-out infinite",
      },
      keyframes: {
        levitate: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
