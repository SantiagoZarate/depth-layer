import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import css from 'rollup-plugin-import-css'

//NEW
import terser from '@rollup/plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'postcss'
import tailwindcss from 'tailwindcss'
import tailwindConfig from './tailwind.config.js'

const packageJson = require('./package.json')

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      // NEW
      typescript({
        exclude: ["src/stories/"]
      }),
      peerDepsExternal(),

      resolve(),
      commonjs(),
      css(),
      // NEW
      terser(),
      postcss({
        config: {
          path: './postcss.config.js'
        },
        extension: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top'
        },
        plugins: [tailwindcss(tailwindConfig)]
      })
    ],
  },
  {
    input: 'dist/types/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts.default()],
    external: [/\.css$/],
  },
]