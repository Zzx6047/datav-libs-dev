const path = require('path')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const json = require('rollup-plugin-json')
const {terser} = require('rollup-plugin-terser')
const vue = require('rollup-plugin-vue')
const postcss = require('rollup-plugin-postcss')

const inputPath = path.resolve(__dirname, './src/index.js')
const ouputUmdPath = path.resolve(__dirname, './dist/datav.min.js')
const ouputEsPath = path.resolve(__dirname, './dist/datav.es.min.js')

module.exports =  {
  input: inputPath,
  output: [{
    file: ouputUmdPath,
    format: 'umd',
    name: 'datav',
    globals: {
      vue: 'vue'
    }
  }, {
    file: ouputEsPath,
    format: 'es',
    globals: {
      vue: 'vue'
    }
  }],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    json(),
    vue(),
    postcss({
      plugins: []
    }),
    terser()
  ],
  
  external: [
    'vue'
  ]
}