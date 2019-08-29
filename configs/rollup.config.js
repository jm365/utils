import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
// import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript';
import { uglify } from "rollup-plugin-uglify";
// rollup-plugin-typescript

export default {
  input: 'src/index.ts', // 入口文件
  output: {
    file: 'dist/utils.js', // 输出的文件名与路径
    name: 'utils',
    // format: 'cjs', // nodejs环境下运行的commonjs格式
    // format: 'iife', // 浏览器环境下运行的iife格式
    format: 'umd', // 兼容commonjs、iife、amd的模块
  },
  plugins: [
    json(), // 可以直接使用json
    resolve(), // 可以识别node_modules里的包
    /*babel({
      exclude: 'node_modules/!**' // 只编译我们的源代码
    }),*/
    commonjs({
      namedExports: {
        // left-hand side can be an absolute path, a path
        // relative to the current directory, or the name
        // of a module in node_modules
        'node_modules/my-lib/index.js': [ 'named' ]
      }
    }),
    typescript()/*,
    uglify() // 压缩代码*/
  ],
  // external: ['lodash'], // 将对应木块作为外部依赖，不进行打包
};
