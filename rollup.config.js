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
    plugins: [
      typescript({
        typescript: require('typescript'),
      }),
      nodeResolve(),
      babel({
        babelHelpers: "bundled",
      }),
      css(),
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
  }
];