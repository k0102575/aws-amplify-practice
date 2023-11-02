import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: './src/index.ts',

  output: [
    {
      file: 'dist/index.js',
      format: 'es',
      sourcemap: true,
    },
  ],
  external: [/@babel\/runtime/],
  plugins: [
    url(),
    svgr({
      dimensions: false,
    }),
    peerDepsExternal(),
    resolve({ extensions }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      babelHelpers: 'runtime',
      presets: ['@babel/env', ['@babel/react', { runtime: 'automatic' }], '@babel/typescript'],
      plugins: ['@babel/plugin-transform-runtime'],
      extensions,
    }),
    typescript({ exclude: ['**/*.stories.tsx', 'node_modules'] }),
    json(),
  ],
};
