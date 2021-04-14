import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";
import pkg from './package.json'

const moduleName = pkg.name.replace(/^@.*\//, "");


export default [
  // UMD
  {    
    input: 'src/index.ts',
    plugins: [
      typescript({
        typescript: require('typescript'),
      }),
      nodeResolve(),
      babel({
        babelHelpers: "bundled",
      }),
      terser(),
    ], 
    output: {
      file: `dist/${moduleName}.min.js`,
      format: "umd",
      name: "toolio",
      esModule: false,
      exports: "named",
      sourcemap: true,
    },
  },  
  // ESM and CJS
  {
    input: 'src/index.ts',
    plugins: [
      typescript({
        typescript: require('typescript'),
      }),
      nodeResolve(),
    ],
    output: [
      {
        dir: "dist/esm",
        format: "esm",
        exports: "named",
        sourcemap: true,
      },
      {
        dir: "dist/cjs",
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
    ],
  },
];