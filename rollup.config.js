import resolve from 'rollup-plugin-node-resolve';
import rimraf from 'rimraf';

rimraf.sync('dist');
export default {
   input: 'src/index.js',
   output: {
      dir: 'dist',
      format: 'esm',
      sourcemap: true,
   },
   preserveSymlinks: true,
   context: 'window',
   plugins: [
      resolve()
   ]
};
