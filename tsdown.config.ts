import { defineConfig } from 'tsdown';
import pkg from './package.json' with { type: 'json' };

export default defineConfig({
  entry: ['src/index.ts'],
  platform: 'neutral',
  clean: true,
  dts: true,
  deps: {
    neverBundle: ['eslint/config', ...Object.keys(pkg.dependencies), ...Object.keys(pkg.devDependencies)]
  },
  sourcemap: false,
  minify: false
});
