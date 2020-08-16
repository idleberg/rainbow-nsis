import { terser } from "rollup-plugin-terser";

export default [
  {
    input: 'src/nsis.js',
    output: {
      dir: 'dist',
      format: 'umd'
    },
  },
  {
    input: 'src/nsis.js',
    output: {
      file: 'dist/nsis.min.js',
      format: 'umd'
    },
    plugins: [
      terser()
    ]
  }
];
