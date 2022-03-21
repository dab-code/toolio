import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import commonjs from 'rollup-plugin-commonjs';
import babel from "@rollup/plugin-babel";
import css from "rollup-plugin-import-css";
import pkg from './package.json'

const moduleName = pkg.name.replace(/^@.*\//, "");


export default [
  {
    // UMD  
    input: 'src/index.ts',
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
      terser()
    ],
    output: {
      file: `dist/index.js`,
      format: "umd",
      name: "toolio",
      esModule: false,
      exports: "named",
      sourcemap: true,
    },
  },

  {
    input: 'src/index.ts',
    plugins: [
      typescript({
        typescript: require('typescript'),
      }),
      nodeResolve(),
      css({
        output: 'dist/toolio.css',
        minify: true
      }),
      terser()
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
]


// export default [
//   // UMD
//   {    
//     input: 'src/index.ts',

//     output: [
//       {
//         file: 'dist/index.umd.js',
//         format: 'umd',
//         name: 'toolio'
//       },
//       {
//         file: 'dist/index.esm.js',
//         format: 'es'
//       }
//     ],

//     plugins: [
//       typescript({
//         typescript: require('typescript'),
//       }),
//       nodeResolve(),
//       babel({
//         babelHelpers: "bundled",
//       }),
//       css({
//         output: 'dist/toolio.css',
//         minify: true
//       }),
//       commonjs({
//         include: ['index.umd.js'],
//         namedExports: {
//           'umd.js': ['Realtime']
//         }
//       }),
//       terser(),
//     ], 
//   }
// ];