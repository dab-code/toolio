import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

const moduleName = pkg.name.replace(/^@.*\//, "");

export default {
  input: 'src/index.ts',
  output: [
    {
      name: moduleName,
      file: pkg.main,
      format: 'cjs',
    },
    {
      name: moduleName,
      file: pkg.module,
      format: 'es',
    },
    {
      name: moduleName,
      file: pkg.browser,
      format: "iife",
    }
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
  ]
}