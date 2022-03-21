import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";
import css from "rollup-plugin-import-css";
import pkg from './package.json'

const moduleName = pkg.name.replace(/^@.*\//, "");


export default [
  // UMD
  {    
    input: 'src/index.ts',

    output: [
      {
        file: 'dist/index.cjs.js',
        format: 'cjs'
      },
      {
        file: 'dist/index.esm.js',
        format: 'es'
      }
    ],

    plugins: [
      typescript({
        typescript: require('typescript'),
      }),
      nodeResolve(),
      babel({
        babelHelpers: "bundled",
      }),
      css({
        output: 'dist/toolio.css',
        minify: true
      }),
      terser(),
    ], 
  }
];