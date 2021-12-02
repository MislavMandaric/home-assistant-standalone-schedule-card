import nodeResolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import replace from 'rollup-plugin-replace';
import css from "rollup-plugin-import-css";
import serve from 'rollup-plugin-serve';

const dev = process.env.ROLLUP_WATCH;

const serveopts = {
  contentBase: ['./dist'],
  host: '0.0.0.0',
  port: 5000,
  allowCrossOrigin: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
};

const plugins = [
  nodeResolve(),
  commonjs(),
  typescript(),
  json(),
  babel({
    exclude: 'node_modules/**',
  }),
  replace({
    'process.env.NODE_ENV': dev ? JSON.stringify('dev') : JSON.stringify('production'),
  }),
  css(),
  dev && serve(serveopts),
  !dev && terser(),
];

export default [
  {
    input: 'src/scheduler-card.ts',
    output: {
      file: 'dist/home-assistant-standalone-schedule-card.js',
      format: 'es',
    },
    plugins: [...plugins],
  },
];