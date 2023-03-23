import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import renderPlugin from './render-plugin';

export default defineConfig({
  plugins: [renderPlugin(), tsconfigPaths()],
});
