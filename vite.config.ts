/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";
// import rollupTs from 'rollup-plugin-typescript2'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: "happy-dom",
    include: ["./src/components/**/*.test.@(js|jsx|ts|tsx)"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "./src/index.tsx"),
      name: "DepthDecorator",
      fileName: "depth-decorator",
      formats: ['es']
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
    },
  },
  plugins: [
    react(),
    dts({ rollupTypes: true }),
    // Fijarse si build funciona sin este plugin -- conflictos al hacer test con vitest
    // {
    //   ...rollupTs({
    //     check: true,
    //     tsconfig: './tsconfig.json',
    //     // tsconfigOverride: {
    //     //   noEmits: true,
    //     // },
    //   }),
    //   // run before build
    //   enforce: 'pre',
    // },
  ],
});
