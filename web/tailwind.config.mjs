/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border)/<alpha-value>)",
        background: "hsl(var(--background)/<alpha-value>)",
        text: {
          active: "hsl(var(--text)/<alpha-value>)",
          off: "hsl(var(--text-light)/<alpha-value>)",
          accent :"hsl(var(--accent)/<alpha-value>)"
        }
      }
    },
  },
  plugins: [],
}
