import { require } from 'tsx/cjs/api';

/** @type {{ defineConfig: import('./src/index.ts').defineConfig }} */
const { defineConfig } = require('./src/index.ts', import.meta.url);

export default defineConfig();
