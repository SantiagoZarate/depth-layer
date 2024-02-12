import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import rollupTs from 'rollup-plugin-typescript2'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
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
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss"
        },
      },
    },
  },
  plugins: [
    react(),
    dts({ rollupTypes: true }),
    {
      ...rollupTs({
        check: true,
        tsconfig: './tsconfig.json',
        tsconfigOverride: {
          noEmits: true,
        },
      }),
      // run before build
      enforce: 'pre',
    },
  ],
});
