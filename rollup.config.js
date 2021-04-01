import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: 'main.ts',
  output: {
    dir: '.',
    format: 'cjs', 
    exports: "auto"
    
  },
  external: ['obsidian'],
  plugins: [typescript({target: "es5"}), nodeResolve({ browser: true }), commonjs(), json()],
};
